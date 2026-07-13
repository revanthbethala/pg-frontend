import { login } from '@/api/auth.api';
import { useAuthContext } from '@/context/useAuthContext';
import { useGenericMutation } from '@/hooks/useGenericMutation';
import { tokenStorage } from '@/services/tokenStorage';

export function useLogin() {
  const { setIsAuthenticated } = useAuthContext();

  return useGenericMutation(login, [], {
    onSuccess: async res => {
      await tokenStorage.save({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });

      setIsAuthenticated(true);
    },
  });
}
