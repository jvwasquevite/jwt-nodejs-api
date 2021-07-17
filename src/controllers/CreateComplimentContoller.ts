import { Request, Response } from 'express'
import { CreateComplimentService } from '../services/CreateComplimentService'

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body
    const { logged_user_id } = request

    const createComplimentService = new CreateComplimentService()

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender: logged_user_id,
      user_receiver,
      message,
    })

    return response.json(compliment)
  }
}

export { CreateComplimentController }
