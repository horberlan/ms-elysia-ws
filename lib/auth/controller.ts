import { jwt } from "@elysiajs/jwt";
import { env } from "node:process";

export { authController };

const authController = () => {
  return {
    jwt: () => {
      return jwt({
        name: "jwt",
        secret: env.JWT_SECRETS!,
      });
    },
  };
};
