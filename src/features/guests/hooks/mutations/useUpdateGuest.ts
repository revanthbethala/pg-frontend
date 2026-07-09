import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';
import { updateGuest } from '@/features/guests/api/guest.api';
import { guestKeys } from '@/features/guests/guest.keys';
import { guestType } from '@/features/guests/types/guest';

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
      queryClient.invalidateQueries({ queryKey: guestKeys.list(roomId) });
    },
  });
};
