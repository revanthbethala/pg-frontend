import { useQuery } from '@tanstack/react-query';
import { getBranches } from '@/api/branches.api';
import { branchKeys } from '@/features/branches/hooks/branch.keys';

export const useBranches = () => {
  const query = useQuery({
    queryKey: branchKeys.all,
    queryFn: getBranches,
  });
  return query;
};
