import { getAllRooms } from '@/api/room.api';
import { roomKeys } from '@/features/rooms/room.keys';
import { useGenericQuery } from '@/hooks/useGenericQuery';

export const useRooms = (branchId: string) => {
  return useGenericQuery(
    roomKeys.byBranch(branchId),
    () => getAllRooms(branchId),
    { enabled: !!branchId },
  );
};
