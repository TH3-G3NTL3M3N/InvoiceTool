import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  faBoxOpen,
  faBriefcase,
  faFileInvoice,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Chip from './Chip';
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

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
  argTypes: {
    startIcon: IconInputType,
    endIcon: IconInputType,
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'light', 'outlined'],
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
    children: 'Chip',
    startIcon: faBriefcase,
    size: 'md',
  },
};
