import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  argTypes: {
    disabled: { control: 'boolean' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'onBlur' },
    endAdornment: { control: 'text' },
    startAdornment: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof TextField>) => (
    <div className="w-full p-8">
      <TextField id="text-field" {...args} />
    </div>
  ),
  args: {
    placeholder: 'Company number',
    disabled: false,
    error: '',
    tip: 'This is a tip',
    label: 'Company ID',
    startAdornment: undefined,
    endAdornment: '%',
  },
};
