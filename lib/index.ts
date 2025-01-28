import { Elysia } from "elysia";
import { authController } from "./auth/controller";
import { rateLimit } from "elysia-rate-limit";
import cors from "@elysiajs/cors";
import { auth } from "./auth";

const app = new Elysia()
  .use(cors())
  .use(authController().jwt())
  .use(rateLimit())
  .use(auth);

app.listen(8080);

export type StartServerType = typeof app;
