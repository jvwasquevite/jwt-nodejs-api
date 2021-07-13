import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

class DeleteUserService {
  async execute(user_id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const userExists = await usersRepositories.findOne(user_id)

    if (!userExists) {
      throw new Error('User does not exist!')
    }

    await usersRepositories.delete(user_id)
  }
}

export { DeleteUserService }
