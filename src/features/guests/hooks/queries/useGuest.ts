import { useQuery } from '@tanstack/react-query';
import { guestKeys } from '@/features/guests/guest.keys';
import { getGuestById } from '@/features/guests/api/guest.api';

export const useGuest = (guestId: string) => {
  return useQuery({
    queryKey: guestKeys.detail(guestId),
    queryFn: () => getGuestById(guestId),
    enabled: !!guestId,
  });
};
