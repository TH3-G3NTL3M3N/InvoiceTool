import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AutocompleteField from './AutocompleteField';

const meta: Meta<typeof AutocompleteField> = {
  title: 'AutocompleteField',
  component: AutocompleteField,
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

export const Default: Story = {
  render: (args: React.ComponentProps<typeof AutocompleteField>) => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return (
      <div className="w-full p-8">
        <AutocompleteField
          id="autocomplete-field"
          {...args}
          value={value as string}
          options={['Spiderman', 'Wolverine', 'Cyclops']}
          onChange={setValue}
          optionToLabel={(option: string) => option}
          optionToKey={(option: string) => option}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Superhero',
    disabled: false,
    error: '',
    tip: 'This is a tip',
    label: 'Options',
  },
};
