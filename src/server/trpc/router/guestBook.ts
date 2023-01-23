import { z } from "zod";
import {
  publicProcedure,
  protectedProcedure,
  router,
  createTRPCRouter,
} from "../trpc";

export const guestbookRouter = createTRPCRouter({
  postMessage: publicProcedure
    .input(
      z.object({
        name: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.guestbook.create({
          data: {
            name: input.name,
            message: input.message,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
