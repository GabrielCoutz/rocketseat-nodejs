import fastify from 'fastify'
import { env } from './env/index.js'
import { transactionsRoutes } from './routes/transactions.js'
import fastifyCookie from '@fastify/cookie'

const app = fastify()

app.register(fastifyCookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() => console.log(`App is running on http://localhost:${env.PORT}`))
