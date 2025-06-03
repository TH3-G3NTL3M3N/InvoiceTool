import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { Product } from '@server/products/types';
import ProductsTable from './ProductsTable';

const meta: Meta<typeof ProductsTable> = {
  title: 'ProductsTable',
  component: ProductsTable,
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
const products: Product[] = [
  {
    id: 'product_1',
    name: 'Product 1',
    includesVat: false,
    price: 10,
    currency: 'GBP',
    vat: 15,
    unit: 'h',
    companyId: 'company_1',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'product_2',
    name: 'Product 2',
    includesVat: false,
    price: 17.65,
    currency: 'EUR',
    vat: 9,
    unit: 'h',
    companyId: 'company_1',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'product_3',
    name: 'Product 3',
    includesVat: false,
    price: 24.3,
    currency: 'USD',
    vat: 0,
    unit: 'h',
    companyId: 'company_1',
    createdAt: now,
    updatedAt: now,
  },
];

export const Default: Story = {
  args: {
    products,
  },
};
