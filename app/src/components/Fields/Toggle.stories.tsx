import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Toggle,
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: { disable: true } },
    id: { control: { disable: true } },
    name: { control: { disable: true } },
    onChange: { control: { disable: true } },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof Toggle>) => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
    );
  },
  args: {
    label: 'Toggle me',
    disabled: false,
  },
};
