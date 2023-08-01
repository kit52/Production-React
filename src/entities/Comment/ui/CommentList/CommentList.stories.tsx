import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const empty = Template.bind({});
empty.args = {};
export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'text comment',

      user: {
        id: '2',
        username: 'Test user',
        avatar:
          'https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg',
      },
    },
    {
      id: '2',
      text: 'text comment',

      user: {
        id: '3',
        username: 'Test user',
        avatar:
          'https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg',
      },
    },
  ],
};
