import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm'

import { Todo } from './todo.entity'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[]

  getObject() {
    return { ...this, other: 'others' }
  }
}
