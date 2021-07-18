import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { classToPlain } from 'class-transformer'

/**
 * Returns all users with find() method from custom repository
 * Uses classToPlain() to hide sensitive data from User entity
 *
 * @author João Wasquevite
 */

class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const users = await usersRepositories.find()

    return classToPlain(users)
  }
}

export { ListUserService }
