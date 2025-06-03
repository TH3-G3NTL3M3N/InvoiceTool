import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  faBoxOpen,
  faBriefcase,
  faFileInvoice,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import LinkIconButton from './LinkIconButton';
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

const meta: Meta<typeof LinkIconButton> = {
  title: 'LinkIconButton',
  component: LinkIconButton,
  argTypes: {
    disabled: { control: 'boolean' },
    icon: IconInputType,
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
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
    icon: faBriefcase,
    size: 'md',
    fullWidth: false,
    href: '/',
  },
};
