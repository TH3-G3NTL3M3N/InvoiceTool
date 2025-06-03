import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { ClientSafeProvider } from 'next-auth/react';
import SignInForm from './SignInForm';

export default {
  title: 'SignInForm',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof SignInForm>;

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

const Template: ComponentStory<typeof SignInForm> = () => (
  <div className="flex w-full h-full items-center justify-center">
    <SignInForm providers={providers} />
  </div>
);

export const Default = Template.bind({});
