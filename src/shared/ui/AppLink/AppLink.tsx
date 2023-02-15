import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import s from './AppLink.module.scss';
interface AppLinkProps {
  className?: string;
}
export const AppLink = ({ className }: AppLinkProps) => {
  return <Link className={classNames(s.AppLink, {}, [className])}></Link>;
};
