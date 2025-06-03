/* eslint-disable no-console */
/* eslint-disable import/export */
import React, { useState, type PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import type { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import type { Session } from 'next-auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'msw';
import type { TRPCError } from '@trpc/server';
import { Toaster } from 'react-hot-toast';
import Layout from '@components/Layout';

const customRender = (
  ui: React.ReactElement,
  providerData: ProviderData = {}
) => render(ui, { wrapper: createProviders(providerData) });

type ProviderData = {
  session?: Session;
  router?: Partial<NextRouter>;
};

const createProviders = ({ session, router }: ProviderData) => {
  const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(
      () =>
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: false,
            },
            mutations: {
              retry: false,
            },
          },
          logger: {
            log: console.log,
            warn: console.warn,
            error: () => {},
          },
        })
    );
    return (
      <RouterContext.Provider value={{ ...mockRouter, ...(router || {}) }}>
        <SessionProvider
          session={session}
          basePath="http://localhost:3000/api/auth"
        >
          <QueryClientProvider client={queryClient}>
            <Layout>{children}</Layout>
            <Toaster position="bottom-center" />
          </QueryClientProvider>
        </SessionProvider>
      </RouterContext.Provider>
    );
  };

  return Providers;
};

export const mockRouter: NextRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  back: jest.fn(),
  forward: jest.fn(),
  beforePopState: jest.fn(),
  prefetch: () => Promise.resolve(),
  push: jest.fn(),
  reload: jest.fn(),
  replace: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false,
};

export const mockTrpcQuery = (name: string, result: unknown) =>
  http.get(`http://localhost:3000/api/trpc/${name}`, () => {
    return Response.json({ result: { data: result } });
  });

export const mockTrpcQueryError = (name: string, error: TRPCError) =>
  http.get(`http://localhost:3000/api/trpc/${name}`, () => {
    return new Response(
      JSON.stringify({ error: { code: error.code, message: error.message } }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  });

export const mockTrpcMutation = (name: string, result: unknown) =>
  http.post(`http://localhost:3000/api/trpc/${name}`, () => {
    return Response.json({ result: { data: result } });
  });

export const mockTrpcMutationError = (name: string, error: TRPCError) =>
  http.post(`http://localhost:3000/api/trpc/${name}`, () => {
    return new Response(
      JSON.stringify({ error: { code: error.code, message: error.message } }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  });

export const mockSession = (session: Session | undefined | null) =>
  http.get('http://localhost:3000/api/auth/session', () => {
    return session ? Response.json(session) : Response.json({});
  });

export * from '@testing-library/react';

export { customRender as render };
