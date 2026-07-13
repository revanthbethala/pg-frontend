import { createBranch } from '@/api/branches.api';
import { branchKeys } from '@/features/branches/hooks/branch.keys';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { useGenericMutation } from '@/hooks/useGenericMutation';

export const useCreateBranch = () => {
  const mutation = useGenericMutation(createBranch, [
    branchKeys.all,
    dashboardKeys.dashboard,
  ]);
  return mutation;
};
