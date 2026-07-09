import { useMutation } from '@tanstack/react-query';
import { createBranch } from '@/features/branches/api/branches.api';
import { queryClient } from '@/api/queryClient';
import { branchKeys } from '@/features/branches/hooks/branch.keys';

export const useCreateBranch = () => {
    const mutation = useMutation({
        mutationFn: createBranch,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: branchKeys.all })
        }
    });
    return mutation;
};
