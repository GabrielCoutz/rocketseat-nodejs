import { config } from 'dotenv'
import 'dotenv/config'
import z from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({
    path: '.env.test',
    override: true,
  })
} else config()

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string().default('3333'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables', z.treeifyError(_env.error))
  throw new Error('Invalid environment variables')
}

export const env = _env.data
