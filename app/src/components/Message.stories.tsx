import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Message from './Message';

const meta: Meta<typeof Message> = {
  title: 'Message',
  component: Message,
  argTypes: {
    onClose: { action: 'clicked' },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'light'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    variant: 'solid',
    message: 'This is a message',
  },
};
