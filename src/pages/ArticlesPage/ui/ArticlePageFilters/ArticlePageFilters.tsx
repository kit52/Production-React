import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePageFilters.module.scss';
import {
  ArticleSortSelector,
  ArticleTypeTabs,
  ArticleViewSelector,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import { articlePageSliceAction } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ArticleSortField,
  ArticleType,
} from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = memo((props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const view = useSelector(getArticlePageView);
  const sort = useSelector(getArticlePageSort);
  const search = useSelector(getArticlePageSearch);
  const order = useSelector(getArticlePageOrder);
  const type = useSelector(getArticlePageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const onChangeView = useCallback(
    (view) => {
      dispatch(articlePageSliceAction.setView(view));
    },
    [dispatch]
  );
  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlePageSliceAction.setOrder(newOrder));
      dispatch(articlePageSliceAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlePageSliceAction.setSort(sort));
      dispatch(articlePageSliceAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlePageSliceAction.setType(value));
      dispatch(articlePageSliceAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const fetchArticlesSearch = useDebounce(fetchData, 3000);
  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlePageSliceAction.setSearch(value));
      dispatch(articlePageSliceAction.setPage(1));
      fetchArticlesSearch();
    },
    [dispatch, fetchArticlesSearch]
  );
  return (
    <div className={classNames(cls.articlePageFilters, {}, [className])}>
      <div className={cls.top} style={{ display: 'flex' }}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onChangeView={onChangeView} />
      </div>
      <Card className={cls.center}>
        <Input
          placeholder={t('Введите название')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.bottom}
      />
    </div>
  );
});
