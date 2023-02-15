import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <div className={s.links}>
        <Link to={'/'} className={s.mainLink}>
          Home
        </Link>
        <Link to={'/about'} className={s.mainLink}>
          About
        </Link>
      </div>
    </div>
  );
};
