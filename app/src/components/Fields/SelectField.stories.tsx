import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SelectField from './SelectField';

const meta: Meta<typeof SelectField> = {
  title: 'SelectField',
  component: SelectField,
  argTypes: {
    disabled: { control: 'boolean' },
    value: { control: { disable: true } },
    options: { control: { disable: true } },
    id: { control: { disable: true } },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SelectFieldWrapper = (args: React.ComponentProps<typeof SelectField>) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <div className="w-full p-8">
      <SelectField
        id="select-field"
        {...args}
        value={value as string}
        options={['Value 1', 'Value 2', 'Value 3']}
        onChange={setValue}
        optionToLabel={(option: string) => option}
        optionToKey={(option: string) => option}
      />
    </div>
  );
};

export const Default: Story = {
  render: SelectFieldWrapper,
  args: {
    placeholder: 'Select an option',
    disabled: false,
    error: '',
    tip: 'This is a tip',
    label: 'Options',
  },
};
