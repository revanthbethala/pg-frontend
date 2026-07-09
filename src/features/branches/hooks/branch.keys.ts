export const branchKeys = {
  all: ['branches'] as const,
  detail: (id: string) => ['branches', id] as const,
};
