import { z } from 'zod';

export const guestSchema = z.object({
  // profilePic: z
  //   .object({
  //     uri: z.string(),
  //     type: z.string().optional(),
  //     fileName: z.string().optional(),
  //     fileSize: z.number().optional(),
  //   })
  //   .optional(),
  profilePic: z.string().optional(),
  name: z
    .string({ required_error: 'Guest name is required' })
    .trim()
    .min(1, 'Guest name is required')
    .min(3, 'Guest name must be at least 3 characters'),

  phone: z
    .string({ required_error: 'Phone number is required' })
    .trim()
    .regex(/^[0-9]\d{9}$/, 'Enter a valid 10-digit phone number'),

  aadhaar: z
    .string({ required_error: 'Aadhaar is required' })
    .trim()
    .regex(/^[0-9]\d{11}$/, 'Enter a valid aadhaar id'),
  address: z
    .string({ required_error: 'Address is required' })
    .trim()
    .min(5, 'Address must be at least 5 characters'),
  joiningDate: z.date({
    required_error: 'Joining date is required',
    invalid_type_error: 'Joining date is required',
  }),
});
