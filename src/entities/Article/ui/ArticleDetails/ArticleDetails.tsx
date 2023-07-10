import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getArticleDetailData,
  getArticleDetailError,
  getArticleDetailIsLoading,
} from '../../model/selectors/articleDetails';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
interface ArticleDetailsProps {
  className?: string;
  id: string;
}
const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};
export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();
  let isLoading = useSelector(getArticleDetailIsLoading);
  const error = useSelector(getArticleDetailError);
  const data = useSelector(getArticleDetailData);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);
  const { t } = useTranslation();
  let content;
  isLoading = true;
  if (isLoading) {
    content = (
      <div>
        <Skeleton
          width={200}
          height={200}
          border="50%"
          className={cls.avatar}
        />
        <Skeleton width={300} height={32} className={cls.title} />
        <Skeleton width={600} height={24} className={cls.skeleton} />
        <Skeleton width={'100%'} height={200} className={cls.skeleton} />
        <Skeleton width={'100%'} height={200} className={cls.skeleton} />
      </div>
    );
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={error} />;
  } else {
    content = <div>Det</div>;
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
