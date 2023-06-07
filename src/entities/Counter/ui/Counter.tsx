import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}
export const Counter = ({ className }: CounterProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const counterValue = useSelector(getCounterValue);
  const incr = () => {
    dispatch(counterActions.increment());
  };
  const decr = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <button type="button" data-testid="incr" onClick={incr}>{t('Войти')}</button>
      <button type="button" onClick={decr} data-testid="decr">{t('Войти')}</button>
    </div>
  );
};
