import { useMutation } from '@tanstack/react-query';
import { deleteRoom } from '@/features/rooms/api/room.api';
import { roomKeys } from '@/features/rooms/room.keys';
import { queryClient } from '@/api/queryClient';

export const useDeleteRoom = (branchId: string) => {
  return useMutation({
    mutationFn: (roomId: string) => deleteRoom(roomId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roomKeys.byBranch(branchId) });
    },
  });
};
