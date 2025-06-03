import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    user: {
      image: 'https://avatars.githubusercontent.com/u/570314?v=4',
    },
  },
};

export const WithInitials: Story = {
  args: {
    user: {
      name: 'Ada Lovelace',
    },
  },
};

export const WithInitialFromEmail: Story = {
  args: {
    user: {
      email: 'ada.lovelace@company.com',
    },
  },
};

export const WithPlaceholder: Story = {
  args: {
    user: {},
  },
};
