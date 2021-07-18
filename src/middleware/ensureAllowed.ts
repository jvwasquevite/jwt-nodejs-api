import { Request, Response, NextFunction } from 'express'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { getCustomRepository } from 'typeorm'

/**
 * Middleware to ensure user is admin OR yourselves
 * Gets user id from custom variable inside request
 *
 * Allows logged users to delete or update yourselves
 * Allows admin users to delete or update other users
 *
 * @author João Wasquevite
 */

export async function ensureAllowed(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.params
  const { user_id } = request

  const usersRepositories = getCustomRepository(UsersRepositories)
  const { admin } = await usersRepositories.findOne(user_id)

  if (id === user_id) {
    return next()
  } else if (admin) {
    return next()
  }

  return response.status(401).json({
    error: 'Unauthorized',
  })
}
