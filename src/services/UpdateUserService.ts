import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IUserRequest {
  user_id: string
  name: string
  email: string
  admin: boolean
}

class UpdateUserService {
  async execute({ user_id, name, email, admin }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const userExists = await usersRepositories.findOne({
      id: user_id,
    })

    if (!userExists) {
      throw new Error('User does not exist!')
    }

    const userIsTheSame = await usersRepositories.findOne({})

    const user = usersRepositories.update(user_id, {
      name,
      email,
      admin,
    })

    return user
  }
}

export { UpdateUserService }
