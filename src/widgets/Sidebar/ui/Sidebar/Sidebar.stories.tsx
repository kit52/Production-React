import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const DARK: Story = {};
export const LIGHT: Story = {};
DARK.decorators = [ThemeDecorator(Theme.DARK)];
