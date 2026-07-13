import { deleteUser } from '@/api/profile.api';
import { useAuthContext } from '@/context/useAuthContext';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { useGenericMutation } from '@/hooks/useGenericMutation';

export const useDeleteProfile = () => {
  const { logout } = useAuthContext();

  return useGenericMutation(deleteUser, [dashboardKeys.dashboard], {
    onSuccess: () => {
      logout();
    },
  });
};
