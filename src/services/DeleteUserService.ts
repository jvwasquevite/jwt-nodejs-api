import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

/**
 * Receive needed request data from controller layer
 * Delete entity query with delete() from custom repository
 *
 * @author João Wasquevite
 */

class DeleteUserService {
  async execute(id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const userExists = await usersRepositories.findOne(id)

    if (!userExists) {
      throw new Error('User does not exist!')
    }

    await usersRepositories.delete(id)
  }
}

export { DeleteUserService }
