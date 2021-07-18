import { Request, Response } from 'express'
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns received compliments list
 *
 * @author João Wasquevite
 */

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService()

    const compliments = await listUserReceiveComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}

export { ListUserReceiveComplimentsController }
