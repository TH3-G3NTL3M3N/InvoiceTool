import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  faBoxOpen,
  faBriefcase,
  faFileInvoice,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import IconButton from './IconButton';
import GoogleIcon from './Icons/GoogleIcon';

const Icons = {
  none: undefined,
  faBriefcase,
  faUsers,
  faBoxOpen,
  faFileInvoice,
  GoogleIcon,
};
const IconInputType = {
  options: Object.keys(Icons),
  mapping: Icons,
  control: { type: 'select' },
};

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    icon: IconInputType,
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    variant: 'solid',
    icon: faBriefcase,
    disabled: false,
    size: 'md',
  },
};
