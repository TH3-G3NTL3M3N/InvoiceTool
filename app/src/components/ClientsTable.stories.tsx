import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { Client } from '@server/clients/types';
import ClientsTable from './ClientsTable';

const meta: Meta<typeof ClientsTable> = {
  title: 'ClientsTable',
  component: ClientsTable,
  argTypes: {
    onDelete: { action: 'edit' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const now = new Date().toISOString();
const clients: Client[] = [
  {
    id: 'client_1',
    name: 'Client 1',
    number: '1',
    vatNumber: '1',
    contactName: 'Ada Lovelace',
    email: 'ada@company.com',
    country: 'client_country',
    address: 'client_address',
    postCode: 'client_post_code',
    city: 'client_city',
    paymentTerms: 7,
    companyId: 'company_1',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'client_2',
    name: 'Client 2',
    number: '2',
    vatNumber: '2',
    contactName: null,
    email: 'nikola@company.com',
    country: 'client_country',
    address: 'client_address',
    postCode: 'client_post_code',
    city: 'client_city',
    paymentTerms: 30,
    companyId: 'company_1',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'client_3',
    name: 'Client 3',
    number: '3',
    vatNumber: '3',
    contactName: 'Alan Turin',
    email: 'alan@company.com',
    country: 'client_country',
    address: 'client_address',
    postCode: 'client_post_code',
    city: 'client_city',
    paymentTerms: 14,
    companyId: 'company_1',
    createdAt: now,
    updatedAt: now,
  },
];

export const Default: Story = {
  args: {
    clients,
  },
};
