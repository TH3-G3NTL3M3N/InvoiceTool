import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http } from 'msw';
import Providers from '@components/Providers';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar,
  layout: 'fullscreen',
  argTypes: {
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof Sidebar>) => (
    <Providers>
      <Sidebar {...args} />
    </Providers>
  ),
  args: {},
  parameters: {
    nextRouter: {
      pathname: '/company',
      asPath: '/company',
      query: {},
    },
    msw: {
      handlers: [
        http.get('http://localhost:6006/api/auth/session', () =>
          Response.json({
            user: {
              name: 'David Saltares',
              email: 'david.saltares@gmail.com',
            },
            userId: 'user_1',
            companyId: 'company_1',
          })
        ),
      ],
    },
  },
};
