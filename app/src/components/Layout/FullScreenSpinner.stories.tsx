import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FullScreenSpinner from './FullScreenSpinner';
export default {
  title: 'FullScreenSpinner',
  component: FullScreenSpinner,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof FullScreenSpinner>;

const Template: ComponentStory<typeof FullScreenSpinner> = () => (
  <FullScreenSpinner />
);

export const Default = Template.bind({});
