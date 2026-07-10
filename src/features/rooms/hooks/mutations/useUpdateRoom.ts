import { queryClient } from '@/api/queryClient';
import { updateRoom } from '@/features/rooms/api/room.api';
import { roomKeys } from '@/features/rooms/room.keys';
import { EditRoomRequestType } from '@/features/rooms/types/room.types';
import { useMutation } from '@tanstack/react-query';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';

export const useUpdateRoom = (branchId: string) => {
  return useMutation({
    mutationFn: ({
      roomId,
      roomData,
    }: {
      roomId: string;
      roomData: EditRoomRequestType;
    }) => updateRoom(roomId, roomData),
    onSuccess: () => {
      invalidateDashboard();

      queryClient.invalidateQueries({ queryKey: roomKeys.byBranch(branchId) });
    },
  });
};
