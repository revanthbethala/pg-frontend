import { getGuestById } from '@/api/guest.api';
import { guestKeys } from '@/features/guests/guest.keys';
import { useGenericQuery } from '@/hooks/useGenericQuery';

export const useGuest = (guestId: string) => {
  return useGenericQuery(
    guestKeys.detail(guestId),
    () => getGuestById(guestId),
    { enabled: !!guestId },
  );
};
