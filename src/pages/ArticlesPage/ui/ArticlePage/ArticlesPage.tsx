import {
  ArticleList,
  ArticleSortField,
  ArticleViewSelector,
} from 'entities/Article';
import { memo, useCallback } from 'react';
import cls from './ArticlePage.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect';
import { fetchArticles } from '../../model/services/fetchArticles';
import { useSelector } from 'react-redux';
import {
  articlePageSliceAction,
  articlePageSliceReducer,
  getArticles,
} from '../../model/slice/articlePageSlice';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getArticlePageCurrentPage,
  getArticlePageError,
  getArticlePageInited,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import { ArticleListItemView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { useSearchParams } from 'react-router-dom';
import { SortOrder } from 'shared/types';

const reducers = {
  articlePage: articlePageSliceReducer,
};
const ArticleDetailsPage = () => {
  const articles = useSelector(getArticles.selectAll);
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);
  const page = useSelector(getArticlePageCurrentPage);
  const inited = useSelector(getArticlePageInited);
  const [searchParams] = useSearchParams();
  useInitialEffect(() => {
    if (!inited) {
      searchParams.forEach((value, key) => {
        switch (key) {
          case 'order':
            dispatch(articlePageSliceAction.setOrder(value));
            break;
          case 'sort':
            console.log(key);
            console.log(value);
            dispatch(articlePageSliceAction.setSort(value));
            break;
          case 'search':
            console.log(key);
            console.log(value);
            dispatch(articlePageSliceAction.setSearch(value));
            break;
          case 'type':
            console.log(key);
            console.log(value);
            dispatch(articlePageSliceAction.setType(value));
            break;

          default:
            break;
        }
      });
      dispatch(articlePageSliceAction.initState());
      dispatch(fetchArticles({ replace: true }));
    }
  });
  const onScrollEnd = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, []);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onScrollEnd}>
        <ArticlePageFilters />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
