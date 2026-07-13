import { createGuest } from '@/api/guest.api';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { guestKeys } from '@/features/guests/guest.keys';
import { GuestFormType } from '@/features/guests/types/guest.types';
import { useGenericMutation } from '@/hooks/useGenericMutation';

export const useCreateGuest = (roomId: string) => {
  return useGenericMutation(
    (guestData: GuestFormType) => createGuest(roomId, guestData),
    [dashboardKeys.dashboard, guestKeys.list(roomId)],
  );
};
