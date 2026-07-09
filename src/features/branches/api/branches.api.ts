import { del, get, post, put } from '@/api/http';
import { ENDPOINTS } from '@/api/endPoints';
import {
  branchRequestType,
  branchType,
} from '@/features/branches/types/branch';

export function getBranches(): Promise<branchType[]> {
  return get<branchType[]>(ENDPOINTS.BRANCH.BRANCHES);
}

export function getBranchById(id: string): Promise<branchType> {
  return get<branchType>(`${ENDPOINTS.BRANCH.BRANCHES}/${id}`);
}

export function createBranch(body: branchRequestType): Promise<branchType> {
  return post<branchType, branchRequestType>(
    ENDPOINTS.BRANCH.BRANCHES,
    body,
  ) as Promise<branchType>;
}

export function updateBranch(
  id: string,
  body: branchRequestType,
): Promise<branchType> {
  return put<branchType, branchRequestType>(
    `${ENDPOINTS.BRANCH.BRANCHES}/${id}`,
    body,
  );
}

export function deleteBranch(id: string): Promise<void> {
  return del<void>(`${ENDPOINTS.BRANCH.BRANCHES}/${id}`);
}
