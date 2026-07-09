export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },

  USER: {
    PROFILE: '/users/me',
    UPDATE_PROFILE: '/users/me',
    DELETE_PROFILE: '/users/me',
  },

  BRANCH: {
    BRANCHES: `/branches`,
    GET_BRANCH_BY_ID: (branchId: string) => `/branches/${branchId}`,
    UPDATE: (branchId: string) => `/branches/${branchId}`,
    DELETE: (branchId: string) => `/branches/${branchId}`,

    ROOMS: (branchId: string) => `/branches/${branchId}/rooms`,
    CREATE_ROOM: (branchId: string) => `/branches/${branchId}/rooms`,
  },

  ROOM: {
    GET: (roomId: string) => `/rooms/${roomId}`,
    UPDATE: (roomId: string) => `/rooms/${roomId}`,
    DELETE: (roomId: string) => `/rooms/${roomId}`,

    GUESTS: (roomId: string) => `/rooms/${roomId}/guests`,
    CREATE_GUEST: (roomId: string) => `/rooms/${roomId}/guests`,
  },

  GUEST: {
    GET: (guestId: string) => `/guests/${guestId}`,
    UPDATE: (guestId: string) => `/guests/${guestId}`,
    DELETE: (guestId: string) => `/guests/${guestId}`,
  },
} as const;
