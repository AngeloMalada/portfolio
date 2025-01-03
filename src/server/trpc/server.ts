import {
  createTRPCProxyClient,
  loggerLink,
  TRPCClientError,
} from '@trpc/client';
import { callProcedure } from '@trpc/server';
import { observable } from '@trpc/server/observable';
import { type TRPCErrorResponse } from '@trpc/server/rpc';
import { cache } from 'react';
import { type AppRouter, appRouter } from './root';
import { createTRPCContext } from './trpc';
import superjson from 'superjson';
const transformer = superjson;
const createContext = cache(async () => {
  const heads = new Headers();
  heads.set('x-trpc-source', 'rsc');
  return createTRPCContext({
    headers: heads,
  });
});

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === 'development' ||
        (op.direction === 'down' && op.result instanceof Error),
    }),
    () =>
      ({ op }) =>
        observable((observer) => {
          createContext()
            .then((ctx) => {
              return callProcedure({
                procedures: appRouter._def.procedures,
                path: op.path,
                rawInput: op.input,
                ctx,
                type: op.type,
              });
            })
            .then((data) => {
              observer.next({ result: { data } });
              observer.complete();
            })
            .catch((cause: TRPCErrorResponse) => {
              observer.error(TRPCClientError.from(cause));
            });
        }),
  ],
});
