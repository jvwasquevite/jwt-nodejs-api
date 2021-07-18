import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

import { Expose } from 'class-transformer'

/**
 * Creates new entity to represent Tags table
 * Manipulates how data will be saved on database using Expose
 * Generates primary key using uuid
 *
 * @author João Wasquevite
 */

@Entity('tags')
class Tag {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Expose({ name: 'name_custom' })
  nameCustom(): string {
    return `#${this.name}`
  }

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Tag }
