import { z } from 'zod';

export const roomSchema = z.object({
  roomNumber: z
    .string({ required_error: 'Room number is required' })
    .min(1, 'Room number is required'),
  capacity: z
    .string({ required_error: 'Capacity is required' })
    .min(1, 'Capacity is required')
    .regex(/^\d+$/, 'Must be a number'),
  rent: z
    .string({ required_error: 'Rent is required' })
    .min(1, 'Rent is required')
    .regex(/^\d+(\.\d+)?$/, 'Must be a number'),
  maintainance: z.boolean().default(false).optional(),
});
