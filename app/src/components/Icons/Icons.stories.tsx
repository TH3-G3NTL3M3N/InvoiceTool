import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { CustomIcon } from './types';
import GoogleIcon from './GoogleIcon';
import UserPlaceholderIcon from './UserPlaceholderIcon';

const meta: Meta<CustomIcon> = {
  title: 'Icons',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const className = 'w-6 h-6';
    return (
      <div className="grid grid-cols-2 gap-4">
        <GoogleIcon className={className} />
        <UserPlaceholderIcon className={className} />
      </div>
    );
  },
};
