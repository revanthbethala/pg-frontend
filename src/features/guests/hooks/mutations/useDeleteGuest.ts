import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';
import { deleteGuest } from '@/features/guests/api/guest.api';
import { guestKeys } from '@/features/guests/guest.keys';

export const useDeleteGuest = (roomId: string) => {
  return useMutation({
    mutationFn: (guestId: string) => deleteGuest(guestId),
    onSuccess: (data, guestId) => {
      queryClient.invalidateQueries({ queryKey: guestKeys.byRoom(roomId) });
      queryClient.invalidateQueries({ queryKey: guestKeys.byRoom(guestId) });
    },
  });
};
