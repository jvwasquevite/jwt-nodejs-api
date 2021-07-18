import { Request, Response } from 'express'
import { DeleteUserService } from '../services/DeleteUserService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns successful response
 *
 * @author João Wasquevite
 */

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteUserService = new DeleteUserService()

    await deleteUserService.execute(id)

    return response.status(200).json({
      message: 'Successfully deleted',
    })
  }
}

export { DeleteUserController }
