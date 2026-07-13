import { deleteBranch } from '@/api/branches.api';
import { branchKeys } from '@/features/branches/hooks/branch.keys';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { useGenericMutation } from '@/hooks/useGenericMutation';
import { showAlert } from '@/utils/showAlert';

export const useDeleteBranch = () => {
  return useGenericMutation(
    deleteBranch,
    [branchKeys.all, dashboardKeys.dashboard],
    {
      onSuccess: () => {
        showAlert('Success', 'Branch deleted successfully.');
      },
      onError: () => {
        showAlert('Failed', 'Branch deletion failed.');
      },
    },
  );
};
