import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

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
    request.logged_user_id = sub

    return next()
  } catch (err) {
    return response.status(401).end()
  }
}
