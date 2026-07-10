import { useMutation } from '@tanstack/react-query';
import { useAuthContext } from '@/context/useAuthContext';
import { tokenStorage } from '@/services/tokenStorage';
import { login } from '@/api/auth.api';
import { loginType } from '@/features/auth/types/auth';

export function useLogin() {
  const { setIsAuthenticated, setCurrentUser } = useAuthContext();
  const query = useMutation({
    mutationFn: (data: loginType) => login(data),
    onSuccess: async res => {
      await tokenStorage.save({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });
      setIsAuthenticated(true);
      setCurrentUser({ email: res?.user?.email });
    },
  });
  return query;
}
