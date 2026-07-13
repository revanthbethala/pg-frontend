import { createRoom } from '@/api/room.api';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { roomKeys } from '@/features/rooms/room.keys';
import { CreateRoomRequestType } from '@/features/rooms/types/room.types';
import { useGenericMutation } from '@/hooks/useGenericMutation';

export const useCreateRoom = (branchId: string) => {
  return useGenericMutation(
    (roomData: CreateRoomRequestType) => createRoom(branchId, roomData),
    [dashboardKeys.dashboard, roomKeys.byBranch(branchId)],
  );
};
