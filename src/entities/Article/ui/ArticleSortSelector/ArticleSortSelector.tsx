import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
  (props) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOption[]>(
      () => [
        {
          value: 'asc',
          content: t('возрастанию'),
        },
        {
          value: 'desc',
          content: t('убыванию'),
        },
      ],
      [t]
    );
    const sortFieldOptions = useMemo<SelectOption[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t('дате создания'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('названию'),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('просмотрам'),
        },
      ],
      [t]
    );
    const changeSortHandler = useCallback(
      (newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
      },
      [onChangeSort]
    );

    const changeOrderHandler = useCallback(
      (newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
      },
      [onChangeOrder]
    );
    return (
      <div className={classNames(cls.articleSortSelector, {}, [className])}>
        <Select
          onChange={changeOrderHandler}
          value={order}
          options={orderOptions}
        />
        <Select
          onChange={changeSortHandler}
          value={sort}
          options={sortFieldOptions}
        />
      </div>
    );
  }
);
