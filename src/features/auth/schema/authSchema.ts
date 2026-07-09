import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email(),
  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(1, 'Password is required')
    .min(8, 'Password must be between 8-12 chars')
    .max(12, 'Password must be between 8-12 chars'),
});

export const registrationSchema = z
  .object({
    email: z.string({ required_error: 'Email is required' }).email(),
    name:z.string({required_error:"Name is required"}).min(4,"Name should be atleast 4 chars"),
    password: z
      .string({ required_error: 'Password is required' })
      .trim()
      .min(1, 'Password is required')
      .min(8, 'Password must be between 8-12 chars')
      .max(12, 'Password must be between 8-12 chars'),
    confirmPassword: z
      .string({ required_error: 'Confirm Password is required' })
      .trim()
      .min(1, 'Confirm Password is required')
      .min(8, 'Password must be between 8-12 chars')
      .max(12, 'Password must be between 8-12 chars'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
