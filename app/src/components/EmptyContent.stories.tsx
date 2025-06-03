import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmptyContent from './EmptyContent';

export default {
  title: 'EmptyContent',
  component: EmptyContent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof EmptyContent>;

const Template: ComponentStory<typeof EmptyContent> = (args) => (
  <EmptyContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: "You don't have any invoices yet",
  createLabel: 'Add invoices',
  createHref: '/',
};
