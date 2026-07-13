import { z } from 'zod';

export const branchSchema = z.object({
  branchName: z
    .string({ required_error: 'Branch name is required' })
    .min(3, 'Branch name must be at least 3 characters'),
  address: z
    .string({ required_error: 'Address is required' })
    .min(6, 'Address must be at least 5 characters'),
  isActive: z.boolean().default(true).optional(),
});
