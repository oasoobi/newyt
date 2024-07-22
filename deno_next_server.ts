import { serve } from "https://deno.land/std@0.217.0/http/server.ts";
import { next } from "https://deno.land/x/nextjs@0.0.5/mod.ts";

const dev = Deno.env.get("DENO_ENV") !== "production";
const dir = ".";
const port = parseInt(Deno.env.get("PORT") || "3000");

const app = next({ dev, dir });

await app.prepare();

serve((req) => app.getRequestHandler()(req), { port });

console.log(`Next.js server running on http://localhost:${port}`);
