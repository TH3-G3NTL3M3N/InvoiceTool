import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextAreaField from './TextAreaField';

const meta: Meta<typeof TextAreaField> = {
  title: 'TextAreaField',
  component: TextAreaField,
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
  render: (args: React.ComponentProps<typeof TextAreaField>) => (
    <div className="w-full p-8">
      <TextAreaField id="text-field" {...args} />
    </div>
  ),
  args: {
    placeholder: 'Company number',
    disabled: false,
    error: '',
    tip: 'This is a tip',
    label: 'Company ID',
    rows: 3,
  },
};
