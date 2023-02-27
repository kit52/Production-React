import { classNames } from 'shared/lib/classNames/classNames';
import s from './Loader.module.scss';

interface LoaderProps {
className?: string;
}
export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(s.spinner, {}, [className])}>
    <div className={s.animation}>
      <div />
      <div />
    </div>
  </div>
);
