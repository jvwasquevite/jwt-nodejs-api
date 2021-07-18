import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'
import { classToPlain } from 'class-transformer'

/**
 * Returns all tags with find() method from custom repository
 * Uses classToPlain() to show modified data from Tag entity
 *
 * @author João Wasquevite
 */

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    const tags = await tagsRepositories.find()

    return classToPlain(tags)
  }
}

export { ListTagsService }
