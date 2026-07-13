import { getBranches } from '@/api/branches.api';
import { branchKeys } from '@/features/branches/hooks/branch.keys';
import { useGenericQuery } from '@/hooks/useGenericQuery';

export const useBranches = () => useGenericQuery(branchKeys.all, getBranches);
