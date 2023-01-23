import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { helloRouter } from "./hello";
import { superAdminRouter } from "./superAdmin";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  hello: helloRouter,
  superAdmin: superAdminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
