import express from 'express'

import {User} from '../models/user.entity'

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
  const users = await User.find()
  return res.json(users)
})

userRouter.get('/:id([0-9]+)', async (req, res) => {
  const user = await User.findBy({id: Number(req.params.id)})
  return res.json(user[0])
})

userRouter.post('/', async (req, res) => {
  const user = User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
  await user.save()
  return res.status(201).json(user)
})

export default userRouter
