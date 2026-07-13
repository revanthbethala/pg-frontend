import { getAllGuestsByRoom } from '@/api/guest.api';
import { guestKeys } from '@/features/guests/guest.keys';
import { useGenericQuery } from '@/hooks/useGenericQuery';

export const useGuests = (roomId: string) => {
  return useGenericQuery(
    guestKeys.list(roomId),
    () => getAllGuestsByRoom(roomId),
    { enabled: !!roomId },
  );
};
