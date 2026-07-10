import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';
import { deleteGuest } from '@/api/guest.api';
import { guestKeys } from '@/features/guests/guest.keys';
import { showAlert } from '@/utils/showAlert';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';

export const useDeleteGuest = (roomId: string) => {
  return useMutation({
    mutationFn: (guestId: string) => deleteGuest(guestId),
    onSuccess: () => {
      invalidateDashboard();

      showAlert('Success', 'Guest deleted successfully.');
      queryClient.invalidateQueries({ queryKey: guestKeys.list(roomId) });
    },
    onError: () => {
      showAlert('Failed', 'Guest deletion failed.');
    },
  });
};
