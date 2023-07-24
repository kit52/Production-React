import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment.id}
              className={cls.comment}
              isLoading={isLoading}
            />
          );
        })
      ) : (
        <Text text={t('Комметарии отсутствуют')} />
      )}
    </div>
  );
});
