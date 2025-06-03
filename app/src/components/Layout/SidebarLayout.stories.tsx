import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http } from 'msw';
import Providers from '@components/Providers';
import SidebarLayout from './SidebarLayout';

const meta: Meta<typeof SidebarLayout> = {
  title: 'SidebarLayout',
  component: SidebarLayout,
  layout: 'fullscreen',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof SidebarLayout>) => (
    <Providers>
      <SidebarLayout {...args}>
        <div>
          <p className="text-xl font-semibold">Content goes here</p>
        </div>
      </SidebarLayout>
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
        http.get('http://localhost:6006/api/auth/session', () => {
          return Response.json({
            user: {
              name: 'David Saltares',
              email: 'david.saltares@gmail.com',
            },
            userId: 'user_1',
            companyId: 'company_1',
          });
        }),
      ],
    },
  },
};
