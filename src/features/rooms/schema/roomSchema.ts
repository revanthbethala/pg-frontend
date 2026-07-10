import { z } from 'zod';

const numericField = (requiredMessage: string) =>
  z.preprocess(
    val => {
      if (val === '' || val === null || val === undefined) return undefined;
      const parsed = Number(val);
      return Number.isNaN(parsed) ? val : parsed;
    },
    z.number({
      required_error: requiredMessage,
      invalid_type_error: 'Must be a number',
    }),
  );

export const roomSchema = z.object({
  roomNumber: z.string().min(1, 'Room number is required'),

  capacity: numericField('Capacity is required')
    .refine(val => Number.isInteger(val), {
      message: 'Must be a  number',
    })
    .refine(val => val > 0, {
      message: 'Must be greater than 0',
    }),

  rent: numericField('Rent is required').refine(val => val > 0, {
    message: 'Must be greater than 0',
  }),

  maintainance: z.boolean().default(false).optional(),
});
