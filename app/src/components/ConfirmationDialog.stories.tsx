import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import useDisclosure from '@lib/useDisclosure';
import ConfirmationDialog from './ConfirmationDialog';
import Button from './Button';

const meta: Meta<typeof ConfirmationDialog> = {
  title: 'ConfirmationDialog',
  component: ConfirmationDialog,
  argTypes: {
    onConfirm: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ConfirmationDialogWrapper = (args: React.ComponentProps<typeof ConfirmationDialog>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open confirmation dialog</Button>
      <ConfirmationDialog {...args} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export const Default: Story = {
  render: ConfirmationDialogWrapper,
  args: {
    title: 'Are you sure you want to delete the client?',
    description:
      "This action can not be undone. You will have to add the client's details again if you want to collaborate with them in the future",
    confirm: {
      label: 'Delete',
      icon: faTrash,
    },
    cancel: {
      label: 'Cancel',
    },
  },
};
