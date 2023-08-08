import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { ArticleListItemView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';

export const getArticlePageIsLoading = (state: StateSchema) =>
  state.articlePage?.isLoading;

export const getArticlePageError = (state: StateSchema) =>
  state.articlePage?.error;
export const getArticlePageView = (state: StateSchema) =>
  state.articlePage?.view || ArticleListItemView.SMALL;
export const getArticlePageLimit = (state: StateSchema) =>
  state.articlePage?.limit;
export const getArticlePageHasMore = (state: StateSchema) =>
  state.articlePage?.hasMore;
export const getArticlePageCurrentPage = (state: StateSchema) =>
  state.articlePage?.page || 1;
export const getArticlePageInited = (state: StateSchema) =>
  state.articlePage?._inited;

export const getArticlePageSort = (state: StateSchema) =>
  state.articlePage?.sort ?? ArticleSortField.CREATED;
export const getArticlePageSearch = (state: StateSchema) =>
  state.articlePage?.search ?? '';
export const getArticlePageOrder = (state: StateSchema) =>
  state.articlePage?.order ?? 'asc';
export const getArticlePageType = (state: StateSchema) =>
  state.articlePage?.type ?? ArticleType.ALL;
