import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";


export const helloRouter = router({
  hello: publicProcedure
    .query(async({ ctx }) => {
      return {
        greeting: `world`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.fDClient.findMany();
  }),
  createVendor: publicProcedure
  .input(z.object({
    name : z.string(),
  }))
  .mutation(async({ ctx, input }) => {
    console.log('ctx');
    
    return ctx.prisma.vendors.create({
        data : {
            name : input.name,
        }
    }) ;
  }),
});
