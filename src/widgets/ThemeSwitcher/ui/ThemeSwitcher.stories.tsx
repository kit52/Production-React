import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const DARK: Story = {};
export const LIGHT: Story = {};
DARK.decorators = [ThemeDecorator(Theme.DARK)];
