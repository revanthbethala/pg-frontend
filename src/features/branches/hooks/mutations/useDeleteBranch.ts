import { useMutation } from '@tanstack/react-query';
import { deleteBranch } from '@/api/branches.api';
import { queryClient } from '@/api/queryClient';
import { branchKeys } from '@/features/branches/hooks/branch.keys';
import { showAlert } from '@/utils/showAlert';
import { invalidateDashboard } from '@/features/dashboard/util/invalidateDashboard';

export const useDeleteBranch = () => {
  const mutation = useMutation({
    mutationFn: (id: string) => deleteBranch(id),
    onSuccess: () => {
      invalidateDashboard();

      showAlert('Success', 'Branch deleted successfully.');
      queryClient.invalidateQueries({ queryKey: branchKeys.all });
    },
    onError: () => {
      showAlert('Failed', 'Branch deletion failed.');
    },
  });
  return mutation;
};
