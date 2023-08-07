import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import {
  ArticleListItem,
  ArticleListItemView,
} from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleListItemView;
}
const renderSkeleton = (view: ArticleListItemView) => {
  return new Array(view === ArticleListItemView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => {
      return <ArticleListItemSkeleton view={view} key={index} />;
    });
};
export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleListItemView.SMALL,
  } = props;
  const { t } = useTranslation();

  const renderArticles = (article: Article) => {
    return <ArticleListItem article={article} view={view} key={article.id} />;
  };

  return (
    <div className={classNames(cls.articleList, {}, [className])}>
      {articles && articles?.map(renderArticles)}
      {isLoading && renderSkeleton(view)}
    </div>
  );
});
