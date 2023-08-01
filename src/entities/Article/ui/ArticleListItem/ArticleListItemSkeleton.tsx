import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Card } from 'shared/ui/Card/Card';
import { ArticleListItemView } from './ArticleListItem';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleListItemView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
  (props) => {
    const { className, view } = props;
    const { t } = useTranslation();
    const createdAt = (
      <Skeleton width={100} height={16} className={cls.createdAt} />
    );
    const types = <Skeleton width={80} height={16} />;
    const views = <Skeleton width={80} height={16} className={cls.views} />;

    if (view === ArticleListItemView.BIG) {
      return (
        <Card
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <div className={cls.top}>
            <div className={cls.user}>
              <Skeleton
                width={30}
                height={30}
                border="50%"
                className={cls.avatar}
              />
              <Skeleton width={40} height={16} />
            </div>
            {createdAt}
          </div>
          <Skeleton width={200} height={16} />
          {types}
          <Skeleton width="100%" height={250} className={cls.img} />
          <Skeleton width="100%" height={80} />
          <div className={cls.footer}>
            <Skeleton width={100} height={40} />
            <Skeleton width={40} height={16} />
          </div>
        </Card>
      );
    }
    return (
      <Card
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <div className={cls.imgWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
          {createdAt}
        </div>
        <div className={cls.wrapper}>
          {types}
          {views}
        </div>
        <Skeleton width={200} height={16} className={cls.title} />
      </Card>
    );
  }
);
