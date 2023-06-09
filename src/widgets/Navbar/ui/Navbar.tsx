import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import s from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('about');
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);
  if (authData) {
    return (
      <div className={classNames(s.Navbar, {}, [className])}>
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          className={s.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={s.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
