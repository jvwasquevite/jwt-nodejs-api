import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { sign } from 'jsonwebtoken'

import { Mailtrap } from '../providers/Mailtrap'

/**
 * Receive needed request data from controller layer
 * Implements needed use cases rules with error handling
 * Generates new single use token to reset password
 * Send token to user email
 *
 * @param email    email from account to reset password
 *
 * @author João Wasquevite
 */

class ForgotPasswordService {
  async execute(email: string) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({ email })

    if (!user) {
      throw new Error('User does not exist!')
    }

    /**
     * Generates token based on user password hash
     * to implement single use token
     */

    const token = sign(
      {
        email: user.email,
      },
      user.password,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )

    const mailtrap = new Mailtrap()

    await mailtrap.sendEmail(email, token)
  }
}

export { ForgotPasswordService }
