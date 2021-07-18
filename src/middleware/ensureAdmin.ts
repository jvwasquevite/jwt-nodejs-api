import { Request, Response, NextFunction } from 'express'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { getCustomRepository } from 'typeorm'

/**
 * Middleware to ensure user is admin
 * Gets user id from custom variable inside request
 *
 * @author João Wasquevite
 */

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request

  const usersRepositories = getCustomRepository(UsersRepositories)
  const { admin } = await usersRepositories.findOne(user_id)

  if (admin) {
    return next()
  }

  return response.status(401).json({
    error: 'Unauthorized',
  })
}
