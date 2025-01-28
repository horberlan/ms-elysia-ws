import swagger from "@elysiajs/swagger";
import { swaggerDocumentation } from "docs/intl";

export { swaggerDocs };

const swaggerDocs = swagger({
  ...swaggerDocumentation,
  path: "/docs",
});
