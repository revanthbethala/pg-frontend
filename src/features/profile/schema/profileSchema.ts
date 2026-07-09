import z from 'zod';

export const profileSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(4, { message: 'Name should be atleast 4 chars' }),
  email: z.string({ required_error: 'Email is required' }).email(),
});
