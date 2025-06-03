import type { Meta, StoryObj } from '@storybook/react';
import toast from 'react-hot-toast';

const meta: Meta = {
  title: 'Toast',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    toast.success('This is a success message');
    return (
      <div>
        <p>Check for toast notification!</p>
      </div>
    );
  },
};
