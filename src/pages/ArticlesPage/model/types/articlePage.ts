import { EntityState } from '@reduxjs/toolkit';

import { Article } from 'entities/Article';
import { ArticleListItemView } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleListItemView;
  hasMore: boolean;
  page: number;
  limit: number;
  _inited: boolean;
}
