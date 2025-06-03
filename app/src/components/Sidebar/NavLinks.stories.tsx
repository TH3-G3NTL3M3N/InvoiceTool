import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NavLinks from './NavLinks';

export default {
  title: 'NavLinks',
  component: NavLinks,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof NavLinks>;

const Template: ComponentStory<typeof NavLinks> = () => <NavLinks />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  nextRouter: {
    pathname: '/company',
    asPath: '/company',
    query: {},
  },
};
