import {
  EntityState,
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from '../../../../entities/Article/model/types/article';
import { ArticlePageSchema } from '../types/articlePage';
import { fetchArticles } from '../services/fetchArticles';
import { ArticleListItemView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ARTICLE_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlesAdapter.getInitialState()
);
const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    view: ArticleListItemView.SMALL,
    hasMore: true,
    limit: 9,
    page: 1,
    _inited: false,
  }),
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        ARTICLE_LOCALSTORAGE_KEY
      ) as ArticleListItemView;
      state.view === ArticleListItemView.SMALL
        ? (state.limit = 9)
        : (state.limit = 4);
      state._inited = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchArticles.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      }
    );
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const { reducer: articlePageSliceReducer } = articlePageSlice;
export const { actions: articlePageSliceAction } = articlePageSlice;
