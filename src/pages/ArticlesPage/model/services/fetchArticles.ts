import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../selectors/articlePageSelectors';
interface fetchArticlesProps {
  page: number;
}
export const fetchArticles = createAsyncThunk<
  Article[],
  fetchArticlesProps,
  ThunkConfig<string>
>('articlePage/fetchArticles', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = props;
  const limit = getArticlePageLimit(getState());
  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: 'admin',
        _limit: limit,
        _page: page,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
