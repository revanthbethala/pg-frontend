import { useQuery } from '@tanstack/react-query';
import { guestKeys } from '@/features/guests/guest.keys';
import { getAllGuestsByRoom } from '@/api/guest.api';

export const useGuests = (roomId: string) => {
  return useQuery({
    queryKey: guestKeys.list(roomId),
    queryFn: () => getAllGuestsByRoom(roomId),
    enabled: !!roomId,
  });
};
