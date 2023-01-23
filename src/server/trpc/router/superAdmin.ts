import { Status } from "@prisma/client";
import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../trpc";

export const superAdminRouter = router({
  createClient: protectedProcedure
    .input(
      z.object({
        company: z.string(),
        logo: z.string(),
        industry: z.string(),
        addLine1: z.string(),
        addLine2: z.string(),
        city: z.string(),
        postcode: z.number(),
        state: z.string(),
        fiscalStart: z.date(),
        fiscalEnd: z.date(),
        subStart: z.date(),
        subEnd: z.string(),
        notes: z.string(),
        subDomain: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.fDClient.create({
        data: {
          company: input.company,
          logo: input.logo,
          industry: input.industry,
          addLine1: input.addLine1,
          addLine2: input.addLine2,
          city: input.city,
          postcode: input.postcode,
          state: input.state,
          fiscalStart: input.fiscalStart,
          fiscalEnd: input.fiscalEnd,
          subStart: input.subStart,
          subEnd: input.subEnd,
          notes: input.notes,
          subDomain: input.subDomain,
        },
      });
    }),

  updateMetaData: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        score: z.string().optional(),
        health: z.string().optional(),
        status: z.nativeEnum(Status).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.fDClient.update({
        where: {
          id: input.id,
        },
        data: {
          nps: input.score,
          health: input.health,
          status: input.status,
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.fDClient.findMany();
  }),
});
