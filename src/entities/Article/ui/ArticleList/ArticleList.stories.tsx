import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { article } from 'shared/mock/articleMock';
import { Article } from '../../model/types/article';

export default {
  title: 'entities/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
);
const arrayArticles = [
  article as Article,
  article as Article,
  article as Article,
  article as Article,
];
export const Normal = Template.bind({});
Normal.args = {
  articles: arrayArticles,
};
export const Empty = Template.bind({});
Empty.args = {};
export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};
