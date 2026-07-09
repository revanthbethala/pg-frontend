export const guestKeys = {
  all: ['guests'] as const,
  list: (roomId: string) => [...guestKeys.all, 'list', roomId] as const,
  detail: (guestId: string) => [...guestKeys.all, 'detail', guestId] as const,
};
