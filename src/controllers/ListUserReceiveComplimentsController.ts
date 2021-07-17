import { Request, Response } from 'express'
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService'

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { logged_user_id } = request

    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService()

    const compliments = await listUserReceiveComplimentsService.execute(
      logged_user_id
    )

    return response.json(compliments)
  }
}

export { ListUserReceiveComplimentsController }
