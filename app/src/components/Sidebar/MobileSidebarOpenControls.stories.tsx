import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MobileSidebarOpenControls from './MobileSidebarOpenControls';

const meta: Meta<typeof MobileSidebarOpenControls> = {
  title: 'MobileSidebarOpenControls',
  component: MobileSidebarOpenControls,
  argTypes: {
    onOpenSidebar: { action: 'opened' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof MobileSidebarOpenControls>) => (
    <div className="p-4">
      <MobileSidebarOpenControls {...args} />
    </div>
  ),
};
