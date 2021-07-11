import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { UsersRepositories } from '../repositories/UsersRepositories'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    // 1. Verifica se o email existe
    const user = await usersRepositories.findOne({
      email,
    })

    if (!user) {
      throw new Error('Email/Password incorrect')
    }

    // 2. Verifica se senha está correta com o compare() do bcrypt
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect')
    }

    // 3. Gera o token com o sign do JWT
    const token = sign(
      {
        email: user.email,
      },
      '4f93ac9d10cb751b8c9c646bc9dbccb9', // Chave hash MD5
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )

    return token
  }
}

export { AuthenticateUserService }
