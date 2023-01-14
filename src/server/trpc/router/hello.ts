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

});
