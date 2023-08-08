import {
  EntityState,
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  Article,
  ArticleSortField,
  ArticleType,
} from '../../../../entities/Article/model/types/article';
import { ArticlePageSchema } from '../types/articlePage';
import { fetchArticles } from '../services/fetchArticles';
import { ArticleListItemView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ARTICLE_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { action } from '@storybook/addon-actions';
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
    sort: ArticleSortField.VIEWS,
    search: '',
    order: 'asc',
    type: ArticleType.ALL,
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
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state);
      }
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasMore = action.payload.length > 0;
      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload);
      } else {
        articlesAdapter.addMany(state, action.payload);
      }
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const { reducer: articlePageSliceReducer } = articlePageSlice;
export const { actions: articlePageSliceAction } = articlePageSlice;
