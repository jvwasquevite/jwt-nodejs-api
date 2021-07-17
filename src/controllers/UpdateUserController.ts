import { Request, Response } from 'express'
import { UpdateUserService } from '../services/UpdateUserService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns successful response
 *
 * @author João Wasquevite
 */

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { logged_user_id } = request
    const { name, email, admin } = request.body

    const updateUserService = new UpdateUserService()
    const user = await updateUserService.execute({
      id,
      name,
      email,
      admin,
    })

    return response.json(user)
  }
}

export { UpdateUserController }
