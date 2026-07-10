import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';
import { updateBranch } from '@/api/branches.api';
import { branchFormType } from '@/features/branches/types/branch';
import { branchKeys } from '@/features/branches/hooks/branch.keys';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';

type UpdateBranchVariables = {
  branchId: string;
  data: branchFormType;
};

export const useUpdateBranch = () => {
  const mutation = useMutation({
    mutationFn: ({ branchId, data }: UpdateBranchVariables) =>
      updateBranch(branchId, data),
    onSuccess: () => {
      invalidateDashboard();

      queryClient.invalidateQueries({ queryKey: branchKeys.all });
    },
  });
  return mutation;
};
