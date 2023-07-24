import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

import { getArticleDetailData } from 'entities/Article/model/selectors/articleDetails';
import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/addCommentFormSelectors';
import { addCommentFormActions } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const AddCommentForArticle = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>
>('articleDetails/AddCommentForArticle', async (_, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;
  const userData = getUserAuthData(getState());
  const text = getAddCommentFormText(getState());
  const article = getArticleDetailData(getState());
  if (!userData || !text || !article) {
    return rejectWithValue('error');
  }
  try {
    const response = await extra.api.post<Comment>('/comments', {
      articleId: article.id,
      text,
      userId: userData.id,
    });

    if (!response.data) {
      throw new Error();
    }
    dispatch(addCommentFormActions.setText(''));
    dispatch(fetchCommentsByArticleId(article.id));
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
