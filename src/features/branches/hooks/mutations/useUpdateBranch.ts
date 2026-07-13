import { updateBranch } from '@/api/branches.api';
import { branchKeys } from '@/features/branches/hooks/branch.keys';
import { branchFormType } from '@/features/branches/types/branch';
import { dashboardKeys } from '@/features/dashboard/dashboard.keys';
import { useGenericMutation } from '@/hooks/useGenericMutation';

type UpdateBranchVariables = {
  branchId: string;
  data: branchFormType;
};

export const useUpdateBranch = () => {
  const mutation = useGenericMutation(
    ({ branchId, data }: UpdateBranchVariables) => updateBranch(branchId, data),
    [dashboardKeys.dashboard, branchKeys.all],
  );
  return mutation;
};
