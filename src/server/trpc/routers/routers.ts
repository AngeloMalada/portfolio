// src/server/routers/index.ts
import { router } from '../trpc';
import { payloadRouter } from './payload';

export const appRouter = router({
  payload: payloadRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
