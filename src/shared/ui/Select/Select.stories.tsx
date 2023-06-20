import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';
export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
const options = [
  {
    value: '1',
    content: 'content1',
  },
  {
    value: '2',
    content: 'content2',
  },
  {
    value: '3',
    content: 'content3',
  },
];
export const Primary = Template.bind({});
Primary.args = {
  label: 'Select label',
  options: options,
};
// export const Small = Template.bind({});
// Small.args = {
//   label: 'Select label',
// };
