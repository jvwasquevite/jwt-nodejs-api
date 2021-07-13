import { Request, Response } from 'express'
import { DeleteUserService } from '../services/DeleteUserService'

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteUserService = new DeleteUserService()

    await deleteUserService.execute(id)

    return response.status(204).json({
      message: 'Successfuly deleted',
    })
  }
}

export { DeleteUserController }
