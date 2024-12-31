import { initTRPC } from '@trpc/server';
import { ZodError } from 'zod';
import superjson from 'superjson';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const payload = await getPayload({
    config: configPromise,
  });
  return {
    // db,
    payload,
    ...opts,
  };
};

export const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;
