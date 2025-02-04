import { app } from "@orange-js/orange/server"
import { Hono } from "hono"
import * as serverBuild from "virtual:orange/server-bundle"

export * from "virtual:orange/entrypoints"

export const honoApp = new Hono<{ Bindings: Env }>()

  // API routes that bypass the react app
  .get("/api/ping", (c) => c.text("pong"))

  // plain 404 response for all invalid api routes
  .all("/api/*", (c) => c.notFound())

  // Send everything else to the react app
  .mount("/", app(serverBuild).fetch)

export default honoApp
