import { useMutation } from '@tanstack/react-query';
import { createGuest } from '@/features/guests/api/guest.api';
import { GuestFormType } from '@/features/guests/types/guest.types';
import { queryClient } from '@/api/queryClient';
import { guestKeys } from '@/features/guests/guest.keys';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';

export const useCreateGuest = (roomId: string) => {
  return useMutation({
    mutationFn: (guestData: GuestFormType) => createGuest(roomId, guestData),
    onSuccess: () => {
      invalidateDashboard();

      queryClient.invalidateQueries({ queryKey: guestKeys.list(roomId) });
    },
  });
};
