import { ArticleList, ArticleViewSelector } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect';
import { fetchArticles } from '../model/services/fetchArticles';
import { useSelector } from 'react-redux';
import {
  articlePageSliceAction,
  articlePageSliceReducer,
  getArticles,
} from '../model/slice/articlePageSlice';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getArticlePageCurrentPage,
  getArticlePageError,
  getArticlePageInited,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../model/selectors/articlePageSelectors';
import { ArticleListItemView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

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
  const onChangeView = useCallback(
    (view) => {
      dispatch(articlePageSliceAction.setView(view));
    },
    [dispatch]
  );
  useInitialEffect(() => {
    if (!inited) {
      dispatch(articlePageSliceAction.initState());
      dispatch(fetchArticles({ page: 1 }));
    }
  });
  const onScrollEnd = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, []);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onScrollEnd}>
        <ArticleViewSelector view={view} onChangeView={onChangeView} />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
