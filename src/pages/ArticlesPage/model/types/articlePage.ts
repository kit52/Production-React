import { EntityState } from '@reduxjs/toolkit';

import { Article, ArticleSortField, ArticleType } from 'entities/Article';
import { ArticleListItemView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { SortOrder } from 'shared/types';
export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleListItemView;
  hasMore: boolean;
  page: number;
  limit: number;
  _inited: boolean;
  sort: ArticleSortField;
  search: string;
  order: SortOrder;
  type: ArticleType;
}
