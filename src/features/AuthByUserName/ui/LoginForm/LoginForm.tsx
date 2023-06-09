import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
interface LoginFormProps {
  className?: string;
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);
  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);
  return (
    <div className={classNames(s.LoginForm, {}, [className])}>
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        placeholder={t('Введите username')}
        autofocus
        type="text"
        className={s.input}
        onChange={onChangeUserName}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль')}
        type="text"
        className={s.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        className={s.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
