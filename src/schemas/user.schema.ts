import {z} from 'zod'

export const userSchema = z.object({
  firstName: z.string({required_error: 'This field is required'}),
  lastName: z
    .string({required_error: 'This field is required'})
    .min(5, {message: 'Minimam length is 5'}),
})
