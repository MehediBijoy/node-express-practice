import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm'

import { User } from './user.entity'

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ default: false })
  status: boolean

  @ManyToOne(() => User, (user) => user.id)
  user: User
}
