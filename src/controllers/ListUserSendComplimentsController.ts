import { Request, Response } from 'express'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns sent compliments list
 *
 * @author João Wasquevite
 */

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const listUserSendComplimentsService = new ListUserSendComplimentsService()

    const compliments = await listUserSendComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}

export { ListUserSendComplimentsController }
