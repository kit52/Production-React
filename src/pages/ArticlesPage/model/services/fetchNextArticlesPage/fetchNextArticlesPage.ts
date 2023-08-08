import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import {
  getArticlePageCurrentPage,
  getArticlePageHasMore,
  getArticlePageIsLoading,
} from '../../selectors/articlePageSelectors';
import { fetchArticles } from '../fetchArticles';
import { articlePageSliceAction } from '../../slice/articlePageSlice';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlePage/fetchNextArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const hasMore = getArticlePageHasMore(getState());
  const page = getArticlePageCurrentPage(getState());
  const isLoading = getArticlePageIsLoading(getState());
  if (!isLoading && hasMore) {
    dispatch(articlePageSliceAction.setPage(page + 1));
    dispatch(fetchArticles({ replace: false }));
  }
});
