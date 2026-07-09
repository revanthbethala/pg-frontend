import { useMutation } from '@tanstack/react-query';
import { createGuest } from '@/features/guests/api/guest.api';
import { GuestFormType } from '@/features/guests/types/guest';
import { queryClient } from '@/api/queryClient';
import { guestKeys } from '@/features/guests/guest.keys';

export const useCreateGuest = (roomId: string) => {
  return useMutation({
    mutationFn: (guestData: GuestFormType) => createGuest(roomId, guestData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: guestKeys.list(roomId) });
    },
  });
};
