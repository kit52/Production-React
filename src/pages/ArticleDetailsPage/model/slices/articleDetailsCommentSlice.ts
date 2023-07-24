import {
  EntityState,
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);
const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchCommentsByArticleId.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      }
    );
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentSlice;
export const { actions: articleDetailsCommentsAction } =
  articleDetailsCommentSlice;
