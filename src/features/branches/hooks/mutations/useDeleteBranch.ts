import { useMutation } from '@tanstack/react-query';
import { deleteBranch } from '@/features/branches/api/branches.api';
import { queryClient } from '@/api/queryClient';
import { branchKeys } from '@/features/branches/hooks/branch.keys';

export const useDeleteBranch = () => {
  const mutation = useMutation({
    mutationFn: (id: string) => deleteBranch(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: branchKeys.all });
    },
  });
  return mutation;
};
