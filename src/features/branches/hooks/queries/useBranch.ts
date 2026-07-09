import { useQuery } from '@tanstack/react-query';
import { getBranchById } from '@/features/branches/api/branches.api';
import { branchKeys } from '@/features/branches/hooks/branch.keys';

export const useBranch = (branchId: string) => {
  const query = useQuery({
    queryKey: branchKeys.detail(branchId),
    queryFn: () => getBranchById(branchId),
    enabled: !!branchId,
  });
  return query;
};
