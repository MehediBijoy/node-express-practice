import express from 'express'

import { User } from '../models/user.entity'
import { userSchema } from '../schemas/user.schema'

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
  const users = await User.find()
  return res.json(users)
})

userRouter.get('/:id([0-9]+)', async (req, res) => {
  const user = await User.findOneBy({ id: Number(req.params.id) })
  return res.json(user)
})

userRouter.post('/', async (req, res) => {
  const body = req.body
  const schema = userSchema.safeParse(body)

  if (!schema.success) {
    res.status(400).json(schema.error.flatten())
  } else {
    const user = User.create(schema.data as User)
    await user.save()
    res.status(201).json(user)
  }
})

export default userRouter
