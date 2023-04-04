import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const DARK: Story = {};
export const LIGHT: Story = {};
DARK.decorators = [ThemeDecorator(Theme.DARK)];
