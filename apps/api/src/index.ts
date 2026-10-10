import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { noteRouter } from './modules/notes/router.js'
import { cors } from 'hono/cors';

const app = new Hono().use(cors()).route("/notes", noteRouter);

export type AppType = typeof app;

serve({
  fetch: app.fetch,
  port: 8000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
