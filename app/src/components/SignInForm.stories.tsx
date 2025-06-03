import type { Meta, StoryObj } from '@storybook/react';
import type { ClientSafeProvider } from 'next-auth/react';
import SignInForm from './SignInForm';

const meta: Meta<typeof SignInForm> = {
  title: 'SignInForm',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const providers: Record<string, ClientSafeProvider> = {
  google: {
    id: 'google',
    name: 'Google',
    type: 'oauth',
    signinUrl: '/api/auth/signin/google',
    callbackUrl: '/api/auth/callback/google',
  },
  email: {
    id: 'email',
    name: 'Email',
    type: 'email',
    signinUrl: '/api/auth/signin/email',
    callbackUrl: '/api/auth/callback/email',
  },
};

export const Default: Story = {
  args: {
    providers,
  },
};
