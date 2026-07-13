import { deleteGuest } from '@/api/guest.api';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { guestKeys } from '@/features/guests/guest.keys';
import { useGenericMutation } from '@/hooks/useGenericMutation';
import { showAlert } from '@/utils/showAlert';

export const useDeleteGuest = (roomId: string) => {
  return useGenericMutation(
    deleteGuest,
    [dashboardKeys.dashboard, guestKeys.list(roomId)],
    {
      onSuccess: () => {
        showAlert('Success', 'Guest deleted successfully.');
      },
      onError: () => {
        showAlert('Failed', 'Guest deletion failed.');
      },
    },
  );
};
