import { Request, Response } from 'express'
import { ListUserService } from '../services/ListUsersService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns users list
 *
 * @author João Wasquevite
 */

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersService = new ListUserService()

    const users = await listUsersService.execute()

    return response.json(users)
  }
}

export { ListUsersController }
