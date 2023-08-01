import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';

export const getSidebarItems = createSelector(getUserAuthData, (user) => {
  const sidebarItems: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'Главная',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'О сайте',
    },
  ];
  console.log('ssssssssssssssssssssssssssssss');
  console.log(user);
  if (user) {
    sidebarItems.push(
      {
        path: `${RoutePath.profile}/${user.id}`,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
      }
    );
  }
  return sidebarItems;
});
