import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from 'bcryptjs'

/**
 * Receive needed request data from controller layer
 * Generates hashed password with hash() from bycrtypt
 * Creates a new entity with create() method from custom repository
 * Saves the new entity on database with save() mathod from custom repository
 * Returns created user
 *
 * @author João Wasquevite
 */

// DTO interface
interface IUserRequest {
  name: string
  email: string
  admin?: boolean
  password: string
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    if (!email) {
      throw new Error('Incorrect email')
    }

    // SELECT * FROM USERS WHERE EMAIL = 'email'
    const userAlreadyExists = await usersRepository.findOne({
      email,
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    // Password hashing
    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash, // Saves hashed password on entity
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
