import { queryClient } from '@/api/queryClient';
import { updateUser } from '@/features/profile/api/profile.api';
import { useMutation } from '@tanstack/react-query';
import { profileKeys } from '../../profile.keys';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';

export const useUpdateProfile = () => {
  const query = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      invalidateDashboard();

      queryClient.invalidateQueries({ queryKey: profileKeys.profile });
    },
  });
  return query;
};
