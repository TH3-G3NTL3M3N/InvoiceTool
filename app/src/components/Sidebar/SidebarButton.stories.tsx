import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import SidebarButton from './SidebarButton';
import GoogleIcon from './../Icons/GoogleIcon';

const Icons = {
  none: undefined,
  faBars,
  faXmark,
  GoogleIcon,
};
const IconInputType = {
  options: Object.keys(Icons),
  mapping: Icons,
  control: { type: 'select' },
};

const meta: Meta<typeof SidebarButton> = {
  title: 'SidebarButton',
  component: SidebarButton,
  argTypes: {
    onClick: { action: 'clicked' },
    icon: IconInputType,
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof SidebarButton>) => (
    <SidebarButton {...args} />
  ),
  args: {
    variant: 'primary',
    label: 'menu',
    icon: faBars,
  },
};
