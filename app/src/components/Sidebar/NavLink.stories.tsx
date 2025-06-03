import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  faBoxOpen,
  faBriefcase,
  faFileInvoice,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import NavLink from './NavLink';

const Icons = {
  faBriefcase,
  faUsers,
  faBoxOpen,
  faFileInvoice,
};

const meta: Meta<typeof NavLink> = {
  title: 'NavLink',
  component: NavLink,
  argTypes: {
    icon: {
      options: Object.keys(Icons),
      mapping: Icons,
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof NavLink>) => (
    <NavLink {...args} />
  ),
  args: {
    label: 'Company',
    href: '/company',
    icon: faBriefcase,
    selected: false,
  },
};
