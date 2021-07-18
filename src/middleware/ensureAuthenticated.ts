import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

/**
 * Receive request and response from route layer
 * Verifies authentication token passed by request header
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
  // Recebe o token Bearer pela header da request
  const authToken = request.headers.authorization

  // Valida se token está preenchido
  if (!authToken) {
    return response.status(401).end()
  }

  // Remove o 'Bearer' da string do token
  const [, token] = authToken.split(' ')

  try {
    // Valida se token é válido
    const { sub } = verify(
      token,
      '4f93ac9d10cb751b8c9c646bc9dbccb9'
    ) as IPayload

    // Recuperar informações do usuário
    request.user_id = sub

    return next()
  } catch (err) {
    return response.status(401).end()
  }
}
