import { Request, Response, NextFunction } from 'express'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { getCustomRepository } from 'typeorm'

/**
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
  const { logged_user_id } = request

  const usersRepositories = getCustomRepository(UsersRepositories)
  const { admin } = await usersRepositories.findOne(logged_user_id)

  if (id === logged_user_id) {
    return next()
  } else if (admin) {
    return next()
  }

  return response.status(401).json({
    error: 'Unauthorized',
  })
}
