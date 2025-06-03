import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from 'react-hot-toast';
import Toast, { type ToastArgs } from './Toast';
import Button from './Button';

const ToastComponent = (_args: ToastArgs) => <h1>hello</h1>;

const meta: Meta<typeof ToastComponent> = {
  title: 'Toast',
  component: ToastComponent,
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
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
    color: 'secondary',
    message: 'Toast message',
  },
};
