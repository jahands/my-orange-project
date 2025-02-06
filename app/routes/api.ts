import { Hono } from 'hono'

const app = new Hono<{ Bindings: Env }>()

	.get('/', (c) => c.text('hello from /'))

	.get('/foo', (c) => c.text('hello from /foo'))

export default app
