// src/server/routers/skills.ts
import { router, publicProcedure } from '../trpc';

export const payloadRouter = router({
  getSkills: publicProcedure.query(async ({ ctx }) => {
    const skills = await ctx.payload.find({
      collection: 'skills',
    });
    return skills.docs;
  }),

  getProjects: publicProcedure.query(async ({ ctx }) => {
    const projects = await ctx.payload.find({
      collection: 'projects',
    });
    return projects;
  }),

  getSlogan: publicProcedure.query(async ({ ctx }) => {
    const slogan = await ctx.payload.find({
      collection: 'hero',
    });
    return slogan.docs[0]?.slogan;
  }),
});
