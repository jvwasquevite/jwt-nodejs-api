import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

import { Exclude } from 'class-transformer'

/**
 * Creates new entity to represent User table
 * Exclude password column to hide from GET request
 * Generates primary key using uuid
 *
 * @author João Wasquevite
 */

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  admin: boolean

  @Exclude()
  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  // Construtor para criar uma nova entidade
  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { User }
