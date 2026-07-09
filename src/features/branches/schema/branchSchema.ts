import { z } from 'zod';

export const branchSchema = z.object({
  branchName: z
    .string({ required_error: 'Branch name is required' })
    .min(3, 'Branch name must be at least 3 characters'),
  city: z
    .string({ required_error: 'City is required' })
    .min(2, 'City must be at least 2 characters'),
  address: z
    .string({ required_error: 'Address is required' })
    .min(5, 'Address must be at least 5 characters'),
  isActive: z.boolean().default(true).optional(),
});
