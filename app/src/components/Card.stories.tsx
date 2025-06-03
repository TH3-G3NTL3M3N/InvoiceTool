import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
export default {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Content',
};
