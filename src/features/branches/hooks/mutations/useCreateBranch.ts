import { useMutation } from '@tanstack/react-query';
import { createBranch } from '@/api/branches.api';
import { queryClient } from '@/api/queryClient';
import { branchKeys } from '@/features/branches/hooks/branch.keys';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';

export const useCreateBranch = () => {
  const mutation = useMutation({
    mutationFn: createBranch,
    onSuccess: () => {
      invalidateDashboard();
      queryClient.invalidateQueries({ queryKey: branchKeys.all });
    },
  });
  return mutation;
};
