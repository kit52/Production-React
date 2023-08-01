import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import {
  Article,
  ArticleBlock,
  ArticleBlockType,
  ArticleTextBlock,
} from '../../model/types/article';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from '../../../../shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
export enum ArticleListItemView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}
interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleListItemView;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const createdAt = <Text className={cls.createdAt} text={article.createdAt} />;
  const img = <img className={cls.img} src={article.img} alt={article.title} />;
  const navigate = useNavigate();
  const types = <p>{article.type.join(' ')}</p>;
  const views = (
    <div className={cls.views}>
      {article.views}
      <Icon Svg={EyeIcon} />
    </div>
  );
  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.articles_detail + article.id);
  }, [article.id, navigate]);
  if (view === ArticleListItemView.BIG) {
    const block = article.blocks.find(
      (item) => item.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;
    return (
      <Card
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        {article.user && (
          <div className={cls.top}>
            <div className={cls.user}>
              <Avatar
                src={article.user.avatar}
                size={30}
                className={cls.avatar}
              />
              <Text text={article.user.username} />
            </div>
            {createdAt}
          </div>
        )}
        <Text title={article.title} className={cls.title}></Text>
        {types}
        {img}
        {block && <ArticleTextBlockComponent block={block} />}
        <div className={cls.footer}>
          <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
            {t('Читать далее...')}
          </Button>
          {views}
        </div>
      </Card>
    );
  }
  return (
    <Card
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      onClick={onOpenArticle}
    >
      <div className={cls.imgWrapper}>
        {img}
        {createdAt}
      </div>
      <div className={cls.wrapper}>
        {types}
        {views}
      </div>
      <div className={cls.title}>{article.title}</div>
    </Card>
  );
});
