import z from 'zod';
import { roomSchema } from '@/features/rooms/schema/roomSchema';

export type roomType = z.infer<typeof roomSchema> & {
  id: string;
  branchId: string;
};

export type RoomFormType = z.infer<typeof roomSchema>;
export type CreateRoomRequestType = Omit<roomType, 'id' | 'branchId'>;
export type EditRoomRequestType = Omit<roomType, 'id'>;
