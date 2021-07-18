import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { classToPlain } from 'class-transformer'

/**
 * Receives user id from controller layer
 * Returns compliments with find() method from custom repository,
 * Where user_sender_id == user_id
 * Showing relations tables data objects on GET request
 * Uses classToPlain() to hide sensitive data from User entity
 *
 * @author João Wasquevite
 */

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
      // Shows complete data objects from these related tables (foreign keys)
      relations: ['userSender', 'userReceiver', 'tag'],
    })

    return classToPlain(compliments)
  }
}

export { ListUserSendComplimentsService }
