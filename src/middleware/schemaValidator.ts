import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body)
      return next()
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      return res.status(400).json(error)
    }
  }

export default validate
