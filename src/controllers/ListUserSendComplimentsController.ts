import { Request, Response } from 'express'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService'

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { logged_user_id } = request

    const listUserSendComplimentsService = new ListUserSendComplimentsService()

    const compliments = await listUserSendComplimentsService.execute(
      logged_user_id
    )

    return response.json(compliments)
  }
}

export { ListUserSendComplimentsController }
