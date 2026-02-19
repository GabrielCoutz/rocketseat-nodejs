import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export const checkSessionIDExists = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const sessionId = req.cookies?.sessionId

  if (!sessionId) return res.status(401).send()

  const getTransactionsQuerySchema = z.object({
    sessionId: z.uuid(),
  })

  getTransactionsQuerySchema.parse(req.cookies)
}
