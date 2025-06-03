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
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80',
    alt: 'user',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'DS',
    alt: 'user',
  },
};

export const WithInitialFromEmail: Story = {
  args: {
    email: 'test@example.com',
    alt: 'user',
  },
};

export const WithPlaceholder: Story = {
  args: {
    alt: 'user',
  },
};
