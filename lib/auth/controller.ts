import { jwt } from "@elysiajs/jwt";
import { env } from "node:process";

export const authController = () => {
  return {
    jwt: () => {
      return jwt({
        name: "jwt",
        secret: env.JWT_SECRETS!,
      });
    },
  };
};
