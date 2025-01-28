import { auth } from "auth/index";
import { authController } from "auth/controller";
import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import { swaggerDocs } from "docs/index";

const app = new Elysia()
  .use(auth)
  .use(authController().jwt())
  .use(cors())
  .use(swaggerDocs)
  .use(rateLimit());

app.listen(8080);

export type StartServerType = typeof app;
