import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

interface PageLoaderProps {
className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(s.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
