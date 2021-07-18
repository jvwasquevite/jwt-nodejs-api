import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

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

export function validateToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { token } = request.params

  if (!token) {
    return response.status(401).end()
  }

  try {
    const { sub } = verify(
      token,
      '4f93ac9d10cb751b8c9c646bc9dbccb9'
    ) as IPayload

    request.user_id = sub

    return next()
  } catch (err) {
    return response.status(400).json({
      error: 'Invalid token',
    })
  }
}
