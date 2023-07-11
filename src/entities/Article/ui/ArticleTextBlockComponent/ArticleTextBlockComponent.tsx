import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo((props) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.articleTextBlockComponent, {}, [className])}
        >
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((el) => <Text text={el} className={cls.text} key={el} />)}
        </div>
    );
});
