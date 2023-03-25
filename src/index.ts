import 'reflect-metadata'
import express from 'express'
import {DataSource} from 'typeorm'
import bodyParser from 'body-parser'

import models from './models'
import userRouter from './controllers/user.controllers'

const app = express()

app.use(bodyParser.json())
app.use('/user', userRouter)

const db = new DataSource({
  type: 'sqlite',
  database: 'node-todo.sqlite3',
  synchronize: true,
  logging: true,
  entities: [...models],
})

db.initialize()
  .then(() => {
    console.log('Database connect successfully')
    app.listen(8000, () => console.log('server starting at 8000 port'))
  })
  .catch((err) => console.log(err))
