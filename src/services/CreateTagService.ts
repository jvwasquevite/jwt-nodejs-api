import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

/**
 * Receive needed request data from controller layer
 * Creates a new entity with create() method from custom repository
 * Saves the new entity on database with save() mathod from custom repository
 * Returns created tag
 *
 * @author João Wasquevite
 */

class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepositories)

    if (!name) {
      throw new Error('Incorrect name')
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagsRepository.findOne({
      name,
    })

    if (tagAlreadyExists) {
      throw new Error('Tag already exists')
    }

    const tag = tagsRepository.create({
      name,
    })

    await tagsRepository.save(tag)

    return tag
  }
}

export { CreateTagService }
