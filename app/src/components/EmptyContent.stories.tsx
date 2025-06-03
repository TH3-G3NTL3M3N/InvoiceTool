import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmptyContent from './EmptyContent';

const meta: Meta<typeof EmptyContent> = {
  title: 'EmptyContent',
  component: EmptyContent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "You don't have any invoices yet",
    createLabel: 'Add invoices',
    createHref: '/',
  },
};
