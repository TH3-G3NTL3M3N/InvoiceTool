import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  faBoxOpen,
  faBriefcase,
  faFileInvoice,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import LinkButton from './LinkButton';
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

const meta: Meta<typeof LinkButton> = {
  title: 'LinkButton',
  component: LinkButton,
  argTypes: {
    startIcon: IconInputType,
    endIcon: IconInputType,
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['solid', 'light', 'outlined', 'borderless'],
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
    children: 'Button',
    startIcon: faBriefcase,
    size: 'md',
    fullWidth: false,
    href: '/',
  },
};
