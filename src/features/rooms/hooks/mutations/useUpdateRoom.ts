import { updateRoom } from '@/api/room.api';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { roomKeys } from '@/features/rooms/room.keys';
import { EditRoomRequestType } from '@/features/rooms/types/room.types';
import { useGenericMutation } from '@/hooks/useGenericMutation';

export const useUpdateRoom = (branchId: string) => {
  return useGenericMutation(
    ({ roomId, roomData }: { roomId: string; roomData: EditRoomRequestType }) =>
      updateRoom(roomId, roomData),
    [dashboardKeys.dashboard, roomKeys.byBranch(branchId)],
  );
};
