import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';
import { createRoom } from '@/features/rooms/api/room.api';
import { roomKeys } from '@/features/rooms/room.keys';
import { RoomRequestType } from '@/features/rooms/types/room';

export const useCreateRoom = (branchId: string) => {
  return useMutation({
    mutationFn: (roomData: RoomRequestType) => createRoom(branchId, roomData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roomKeys.byBranch(branchId) });
    },
  });
};
