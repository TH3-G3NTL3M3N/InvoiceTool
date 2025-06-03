import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FullScreenSpinner from './FullScreenSpinner';

const meta: Meta<typeof FullScreenSpinner> = {
  title: 'FullScreenSpinner',
  component: FullScreenSpinner,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FullScreenSpinner />,
};
