import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

/**
 * Receive request and response from route layer
 * Verifies authentication token passed by request header with Bearer
 * Store logged user id on a custom type variable inside express
 * Goes to next layer or returns error response
 *
 * @author João Wasquevite
 */

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).end()
  }

  // Removes 'Bearer' from token string
  const [, token] = authToken.split(' ')

  // Verify if it is a valid token
  try {
    const { sub } = verify(
      token,
      '4f93ac9d10cb751b8c9c646bc9dbccb9'
    ) as IPayload

    request.user_id = sub
    return next()
  } catch (err) {
    return response.status(401).end()
  }
}
