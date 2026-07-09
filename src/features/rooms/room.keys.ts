export const roomKeys = {
  all: ['rooms'] as const,
  byroomId: (roomId: string) => [...roomKeys.all, roomId] as const,
  byBranch: (branchId: string) => [...roomKeys.all, 'branch', branchId] as const,
};
