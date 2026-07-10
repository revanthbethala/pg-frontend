import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';
import { updateGuest } from '@/api/guest.api';
import { guestKeys } from '@/features/guests/guest.keys';
import { guestType } from '@/features/guests/types/guest.types';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';

export const useUpdateGuest = (roomId: string) => {
  return useMutation({
    mutationFn: ({
      guestId,
      guestData,
    }: {
      guestId: string;
      guestData: Partial<guestType>;
    }) => updateGuest(guestId, guestData),
    onSuccess: () => {
      invalidateDashboard();

      queryClient.invalidateQueries({ queryKey: guestKeys.list(roomId) });
    },
  });
};
