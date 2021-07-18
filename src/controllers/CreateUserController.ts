import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns created user
 *
 * @author João Wasquevite
 */

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body

    const createUserService = new CreateUserService()
    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    })

    return response.json(user)
  }
}

export { CreateUserController }
