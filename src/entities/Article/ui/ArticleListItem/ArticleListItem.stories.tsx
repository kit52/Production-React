import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleListItem, ArticleListItemView } from './ArticleListItem';
import { article } from 'shared/mock/articleMock';
import { Article } from '../../model/types/article';

export default {
  title: 'entities/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
);

export const Big = Template.bind({});
Big.args = {
  article: article as Article,
  view: ArticleListItemView.BIG,
};
export const Small = Template.bind({});
Small.args = {
  article: article as Article,
  view: ArticleListItemView.SMALL,
};
