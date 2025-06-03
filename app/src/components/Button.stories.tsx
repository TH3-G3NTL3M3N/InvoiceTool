import type { Meta, StoryObj } from '@storybook/react';
import {
  faBoxOpen,
  faBriefcase,
  faFileInvoice,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import GoogleIcon from './Icons/GoogleIcon';

const Icons = {
  none: undefined,
  faBriefcase,
  faUsers,
  faBoxOpen,
  faFileInvoice,
  GoogleIcon,
};
const IconInputType = {
  options: Object.keys(Icons),
  mapping: Icons,
  control: { type: 'select' },
};

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    startIcon: IconInputType,
    endIcon: IconInputType,
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['solid', 'light', 'outlined', 'borderless'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    variant: 'solid',
    children: 'Button',
    startIcon: faBriefcase,
    size: 'md',
    fullWidth: false,
  },
};
