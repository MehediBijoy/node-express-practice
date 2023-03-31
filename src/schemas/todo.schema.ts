import {z} from 'zod'

export const TodoSchema = z.object({
  title: z.string({required_error: 'Title is required'}),
  status: z.boolean({required_error: 'Status is required'}),
})
