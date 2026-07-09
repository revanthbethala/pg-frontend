import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';
import { updateBranch } from '@/features/branches/api/branches.api';
import { branchFormType } from '@/features/branches/types/branch';
import { branchKeys } from '@/features/branches/hooks/branch.keys';

type UpdateBranchVariables = {
  branchId: string;
  data: branchFormType;
};

export const useUpdateBranch = () => {
  const mutation = useMutation({
    mutationFn: ({ branchId, data }: UpdateBranchVariables) =>
      updateBranch(branchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: branchKeys.all });
    },
  });
  return mutation;
};
