import { Request, Response } from 'express'
import { CreateComplimentService } from '../services/CreateComplimentService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns created compliment
 *
 * @author João Wasquevite
 */

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body
    const { user_id } = request

    const createComplimentService = new CreateComplimentService()

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    })

    return response.json(compliment)
  }
}

export { CreateComplimentController }
