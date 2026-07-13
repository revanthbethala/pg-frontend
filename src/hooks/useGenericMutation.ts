import {
  QueryKey,
  useMutation,
  UseMutationOptions,
} from '@tanstack/react-query';

import { queryClient } from '@/api/queryClient';

export function useGenericMutation<TData, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  invalidateKeys: QueryKey[],
  options?: UseMutationOptions<TData, Error, TVariables>,
) {
  console.log('options:', options);
  return useMutation({
    mutationFn,
    ...options,

    onSuccess: async (...args) => {
      await Promise.all(
        invalidateKeys.map(key =>
          queryClient.invalidateQueries({ queryKey: key }),
        ),
      );
      options?.onSuccess?.(...args);
    },
  });
}
