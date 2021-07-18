import { Request, Response } from 'express'
import { CreateTagService } from '../services/CreateTagService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns created tag
 *
 * @author João Wasquevite
 */

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body

    const createTagService = new CreateTagService()
    const tag = await createTagService.execute(name)

    return response.json(tag)
  }
}

export { CreateTagController }
