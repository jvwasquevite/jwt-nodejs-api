import { Request, Response } from 'express'
import { ListTagsService } from '../services/ListTagsService'

/**
 * Receive request and response from route layer
 * Returns tags list
 *
 * @author João Wasquevite
 */

class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagsService = new ListTagsService()

    const tags = await listTagsService.execute()

    return response.json(tags)
  }
}

export { ListTagsController }
