import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns gererated token from service
 *
 * @author João Wasquevite
 */

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const authenticateUserService = new AuthenticateUserService()

    const token = await authenticateUserService.execute({
      email,
      password,
    })

    return response.json(token)
  }
}

export { AuthenticateUserController }
