import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { classToPlain } from 'class-transformer'

/**
 * Receive needed request data from controller layer
 * Implements needed use cases rules with error handling
 * Returns validated data
 *
 * @param user_id        logged user id from controller
 * @param id                    user to update id from controller
 * @params name, email, admin   request body from controller
 *
 * @author João Wasquevite
 */

interface IUserRequest {
  id: string
  name: string
  email: string
  admin?: boolean
}

class UpdateUserService {
  async execute({ id, name, email, admin }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const userExists = await usersRepositories.findOne(id)

    if (!userExists) {
      throw new Error('User does not exist!')
    }

    await usersRepositories.update(id, {
      name,
      email,
      admin,
    })

    const user = await usersRepositories.findOne(id)

    return classToPlain(user)
  }
}

export { UpdateUserService }
