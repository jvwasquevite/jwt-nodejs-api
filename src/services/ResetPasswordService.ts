import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from 'bcryptjs'

interface IResetPassword {
  id: string
  password: string
  confirmPassword: string
}

/**
 * Receive needed request data from controller layer
 * Implements needed use cases rules with error handling
 *
 * @param id           user id to delete
 * @param password          new password
 * @param confirmPassword   new password confirmation
 *
 * @author João Wasquevite
 */

class ResetPasswordService {
  async execute({ id, password, confirmPassword }: IResetPassword) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const userExists = usersRepositories.findOne(id)

    if (!userExists) {
      throw new Error('User does not exist')
    }

    if (password != confirmPassword) {
      throw new Error('Passwords does not match')
    }

    const passwordHash = await hash(password, 8)

    await usersRepositories.update(id, {
      password: passwordHash,
    })
  }
}

export { ResetPasswordService }