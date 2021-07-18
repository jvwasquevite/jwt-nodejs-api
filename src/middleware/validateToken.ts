import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IPayload {
  sub: string
}

/**
 * Receive request and response from route layer
 * Verifies token passed by route param
 * Store user id on a custom type variable inside express
 * Goes to next layer or returns error response
 *
 * @author João Wasquevite
 */

export async function validateToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { token } = request.params
  const { user_id } = request

  if (!token) {
    return response.status(401).end()
  }

  const usersRepositories = getCustomRepository(UsersRepositories)
  const user = await usersRepositories.findOne(user_id)

  if (!user) {
    return response.status(401).end()
  }

  /**
   * Verifies token based on user password hash
   * to implement single use token
   */

  try {
    const { sub } = verify(token, user.password) as IPayload

    request.user_id = sub
    return next()
  } catch (err) {
    return response.status(400).json({
      error: 'Invalid token',
    })
  }
}
