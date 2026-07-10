import { useMutation } from '@tanstack/react-query';
import { deleteRoom } from '@/features/rooms/api/room.api';
import { roomKeys } from '@/features/rooms/room.keys';
import { queryClient } from '@/api/queryClient';
import { showAlert } from '@/utils/showAlert';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';

export const useDeleteRoom = (branchId: string) => {
  return useMutation({
    mutationFn: (roomId: string) => deleteRoom(roomId),
    onSuccess: () => {
      invalidateDashboard();

      showAlert('Success', 'Room deleted successfully.');
      queryClient.invalidateQueries({ queryKey: roomKeys.byBranch(branchId) });
    },
    onError: () => {
      showAlert('Failed', 'Room deletion failed.');
    },
  });
};
