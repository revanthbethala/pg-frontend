import { useMutation } from '@tanstack/react-query';
import { roomType } from '@/features/rooms/types/room';
import { updateRoom } from '@/features/rooms/api/room.api';
import { roomKeys } from '@/features/rooms/room.keys';
import { queryClient } from '@/api/queryClient';

export const useUpdateRoom = (branchId: string) => {
  return useMutation({
    mutationFn: ({
      roomId,
      roomData,
    }: {
      roomId: string;
      roomData: Partial<roomType>;
    }) => updateRoom(roomId, roomData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roomKeys.byBranch(branchId) });
    },
  });
};
