import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from 'bcryptjs'

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

interface IResetPassword {
  id: string
  password: string
  confirmPassword: string
}

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

    /**
     * Changing user password hash
     * makes JWT token invalid after a
     * successful password reset
     */

    const passwordHash = await hash(password, 8)

    await usersRepositories.update(id, {
      password: passwordHash,
    })
  }
}

export { ResetPasswordService }
