import { deleteRoom } from '@/api/room.api';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { roomKeys } from '@/features/rooms/room.keys';
import { useGenericMutation } from '@/hooks/useGenericMutation';
import { showAlert } from '@/utils/showAlert';

export const useDeleteRoom = (branchId: string) => {
  return useGenericMutation(
    (roomId: string) => deleteRoom(roomId),
    [dashboardKeys.dashboard, roomKeys.byBranch(branchId)],
    {
      onSuccess: () => {
        console.log('in success');
        showAlert('Success', 'Room deleted successfully.');
      },
      onError: () => {
        showAlert('Failed', 'Room deletion failed.');
      },
    },
  );
};
