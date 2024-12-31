import { payloadRouter } from './routers/payload';
import { router } from './trpc';

export const appRouter = router({
  payload: payloadRouter,
});

export type AppRouter = typeof appRouter;
