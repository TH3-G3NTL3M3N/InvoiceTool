import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Message from './Message';

export default {
  title: 'Message',
  component: Message,
  argTypes: {
    onClose: { action: 'clicked' },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'light'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  variant: 'solid',
  message: 'This is a message',
};
