import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import s from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={s.mainLink}>
          Home
        </AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.SECONDARY}
          className={s.mainLink}
        >
          About
        </AppLink>
      </div>
    </div>
  );
};
