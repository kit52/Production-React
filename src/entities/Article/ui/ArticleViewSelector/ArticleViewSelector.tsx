import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleListItemView } from '../ArticleListItem/ArticleListItem';
import TilesIcon from 'shared/assets/icons/tiles.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleListItemView;
  onChangeView: (view: ArticleListItemView) => void;
}
const viewTypes = [
  {
    view: ArticleListItemView.SMALL,
    icon: TilesIcon,
  },
  {
    view: ArticleListItemView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
  (props) => {
    const { className, onChangeView, view } = props;
    const handleChangeView = (view: ArticleListItemView) => () => {
      console.log('click');
      onChangeView(view);
    };

    return (
      <div className={classNames(cls.articleViewSelector, {}, [className])}>
        {viewTypes.map((type) => {
          return (
            <Button
              theme={ButtonTheme.CLEAR}
              onClick={handleChangeView(type.view)}
              className={classNames(
                '',
                { [cls.current]: view == type.view },
                []
              )}
            >
              <Icon Svg={type.icon} />
            </Button>
          );
        })}
      </div>
    );
  }
);
