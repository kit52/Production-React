import { classNames } from 'shared/lib/classNames/classNames';
import s from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { SidebarItemType } from '../../model/items';
import { memo } from 'react';
interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(s.item, { [s.collapsed]: collapsed })}
    >
      <item.icon className={s.icon} />
      <span className={s.link}>{t(item.text)}</span>
    </AppLink>
  );
});
