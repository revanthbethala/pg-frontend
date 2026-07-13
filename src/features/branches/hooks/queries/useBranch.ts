import { getBranchById } from '@/api/branches.api';
import { branchKeys } from '@/features/branches/hooks/branch.keys';
import { useGenericQuery } from '@/hooks/useGenericQuery';

export const useBranch = (branchId: string) => {
  const query = useGenericQuery(
    branchKeys.detail(branchId),
    () => getBranchById(branchId),
    { enabled: !!branchId },
  );
  return query;
};
