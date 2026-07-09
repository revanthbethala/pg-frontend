import { AxiosError } from 'axios';

export function getApiError(
  error: unknown,
  fallback = 'Something went wrong',
): string {
  if (error instanceof AxiosError) {
    if ((error.response?.status ?? 0) >= 500) {
      return fallback;
    }
    return error.response?.data?.message ?? error.message ?? fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
}
