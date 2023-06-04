import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: `   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga magni
  eveniet necessitatibus corporis totam at rerum odio, voluptatum ipsum
  temporibus, velit aliquid quasi architecto hic assumenda ipsa fugit
  laborum consequatur!`,
};
export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: `   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga magni
  eveniet necessitatibus corporis totam at rerum odio, voluptatum ipsum
  temporibus, velit aliquid quasi architecto hic assumenda ipsa fugit
  laborum consequatur!`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
