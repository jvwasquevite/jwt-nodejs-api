import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from 'bcryptjs'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
  password: string
}

class CreateUserService {
  // Recebe por parâmetro os atributos da Entidade, tipados por desestruturação
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    // Verifica se o email existe
    if (!email) {
      throw new Error('Incorrect email')
    }

    // Verifica se o usuario já existe pelo email
    // SELECT * FROM USERS WHERE EMAIL = 'email'
    const userAlreadyExists = await usersRepository.findOne({
      email,
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    // Codifica a senha
    const passwordHash = await hash(password, 8)

    // Cria um novo usuário após as verificações
    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash, // Modifica a senha para a hash
    })

    // Salva o objeto no banco de dados
    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
