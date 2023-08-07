import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { NotFoundPage } from 'pages/NotFoundPage';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import s from './ArticleDetailsPage.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentSlice';
import { useSelector } from 'react-redux';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { AddCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage = () => {
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const onSendComment = useCallback(() => {
    dispatch(AddCommentForArticle());
  }, [dispatch]);
  if (!id) {
    return <NotFoundPage />;
  }
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={s.ArticleDetailsPage}>
        {t('Articel detail')}
        <ArticleDetails id={id} />
        <Text className={s.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
