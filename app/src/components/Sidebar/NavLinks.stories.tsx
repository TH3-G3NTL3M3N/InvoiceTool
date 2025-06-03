import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NavLinks from './NavLinks';

const meta: Meta<typeof NavLinks> = {
  title: 'NavLinks',
  component: NavLinks,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <NavLinks />,
  args: {},
  parameters: {
    nextRouter: {
      pathname: '/company',
      asPath: '/company',
      query: {},
    },
  },
};
