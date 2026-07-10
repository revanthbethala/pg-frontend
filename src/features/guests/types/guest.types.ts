import { z } from 'zod';
import { guestSchema } from '@/features/guests/schema/guestSchema';

export type guestType = z.infer<typeof guestSchema> & {
  id: string;
  roomId: string;
};

export type GuestRequestType = Omit<guestType, 'id' | 'roomId'>;
export type GuestFormType = z.infer<typeof guestSchema>;
