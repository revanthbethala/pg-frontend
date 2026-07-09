import z from 'zod';
import { roomSchema } from '@/features/rooms/schema/roomSchema';

export type roomType = z.infer<typeof roomSchema> & {
  id: string;
  branchId: string;
};

export type RoomRequestType = Omit<roomType, 'id' | 'branchId'>;
