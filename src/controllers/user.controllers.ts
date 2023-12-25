import express from 'express'

import { paramValidate } from '../middleware'
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

userRouter.post('/', paramValidate(userSchema), async (req, res) => {
  return res.json(req.body)
})

export default userRouter
