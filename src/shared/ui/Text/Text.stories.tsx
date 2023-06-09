import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Text title',
  text: 'lorem  text',
};
export const Error = Template.bind({});
Error.args = {
  title: 'Text title',
  text: 'lorem  text',
  theme: TextTheme.ERROR,
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Text title',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'lorem  text',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Text title',
  text: 'lorem  text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Text title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'lorem  text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
