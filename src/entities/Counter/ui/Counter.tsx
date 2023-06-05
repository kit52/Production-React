import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { counterActions } from '../model/slice/counterSlice';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}
export const Counter = ({ className }: CounterProps) => {
  const dispatch = useDispatch();
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
      <button data-testid="incr" onClick={incr}>
        incr
      </button>
      <button onClick={decr} data-testid="decr">
        decr
      </button>
    </div>
  );
};
