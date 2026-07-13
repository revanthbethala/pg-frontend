import { updateGuest } from '@/api/guest.api';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { guestKeys } from '@/features/guests/guest.keys';
import { guestType } from '@/features/guests/types/guest.types';
import { useGenericMutation } from '@/hooks/useGenericMutation';

export const useUpdateGuest = (roomId: string) => {
  return useGenericMutation(
    ({
      guestId,
      guestData,
    }: {
      guestId: string;
      guestData: Partial<guestType>;
    }) => updateGuest(guestId, guestData),
    [guestKeys.list(roomId), dashboardKeys.dashboard],
  );
};
