import { classNames } from 'shared/lib/classNames/classNames';
import s from './Text.module.scss';
export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}
export const Text = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
}: TextProps) => {
  return (
    <div className={classNames(s.Text, { [s[theme]]: true }, [className])}>
      {title && <p className={s.title}></p>}
      {text && <p className={s.text}></p>}
    </div>
  );
};
