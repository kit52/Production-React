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
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../model/selectors/articlePageSelectors';
import { ArticleListItemView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';

const reducers = {
  articlePage: articlePageSliceReducer,
};
const ArticleDetailsPage = () => {
  const articles = useSelector(getArticles.selectAll);
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);
  const onChangeView = useCallback(
    (view) => {
      console.log('click2');
      console.log(view);
      dispatch(articlePageSliceAction.setView(view));
      console.log(view);
    },
    [dispatch]
  );
  useInitialEffect(() => {
    dispatch(fetchArticles());
  });
  return (
    <DynamicModuleLoader reducers={reducers}>
      <ArticleViewSelector view={view} onChangeView={onChangeView} />
      <ArticleList articles={articles} view={view} isLoading={isLoading} />
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
