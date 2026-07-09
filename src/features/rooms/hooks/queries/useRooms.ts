import { useQuery } from '@tanstack/react-query';
import { getAllRooms } from '@/features/rooms/api/room.api';
import { roomKeys } from '@/features/rooms/room.keys';

export const useRooms = (branchId: string) => {
  return useQuery({
    queryKey: roomKeys.byBranch(branchId),
    queryFn: () => getAllRooms(branchId),
    enabled: !!branchId,
  });
};
