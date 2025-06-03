import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MobileSidebarOpenControls from './MobileSidebarOpenControls';

export default {
  title: 'MobileSidebarOpenControls',
  component: MobileSidebarOpenControls,
  argTypes: {
    onOpenSidebar: { action: 'opened' },
  },
} as Meta<typeof MobileSidebarOpenControls>;

const Template: ComponentStory<typeof MobileSidebarOpenControls> = (args) => (
  <div className="p-4">
    <MobileSidebarOpenControls {...args} />
  </div>
);

export const Default = Template.bind({});
