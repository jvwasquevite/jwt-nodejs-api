import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { classToPlain } from 'class-transformer'

class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepositories.find({
      // Retorna os elogios recebidos pelo usuario
      where: {
        user_receiver: user_id,
      },
      // Retorna o objeto completo no request, ao inves de apenas o ID
      relations: ['userSender', 'userReceiver', 'tag'],
    })

    return classToPlain(compliments)
  }
}

export { ListUserReceiveComplimentsService }
