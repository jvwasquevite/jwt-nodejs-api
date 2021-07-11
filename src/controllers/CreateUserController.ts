import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
  async handle(request: Request, response: Response) {
    // Desestruturação para capturar os dados do body da requisição
    const { name, email, admin, password } = request.body

    // Envia as informações capturadas da requisição para o service
    const createUserService = new CreateUserService()
    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    })

    return response.json(user)
  }
}

export { CreateUserController }
