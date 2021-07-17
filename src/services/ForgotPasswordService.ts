import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { sign } from 'jsonwebtoken'

import { Mailtrap } from '../providers/Mailtrap'

/**
 * Receive needed request data from controller layer
 * Implements needed use cases rules with error handling
 * Returns validated data
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

    const token = sign(
      {
        email: user.email,
      },
      '4f93ac9d10cb751b8c9c646bc9dbccb9',
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )

    const mailtrap = new Mailtrap()

    await mailtrap.sendEmail(email, token)

    return token
  }
}

export { ForgotPasswordService }
