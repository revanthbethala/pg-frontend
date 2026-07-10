import { queryClient } from '@/api/queryClient';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';
import { createRoom } from '@/features/rooms/api/room.api';
import { roomKeys } from '@/features/rooms/room.keys';
import { CreateRoomRequestType } from '@/features/rooms/types/room.types';
import { useMutation } from '@tanstack/react-query';

export const useCreateRoom = (branchId: string) => {
  return useMutation({
    mutationFn: (roomData: CreateRoomRequestType) =>
      createRoom(branchId, roomData),
    onSuccess: () => {
      invalidateDashboard();

      queryClient.invalidateQueries({ queryKey: roomKeys.byBranch(branchId) });
    },
  });
};
