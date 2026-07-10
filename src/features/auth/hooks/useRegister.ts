import { useMutation } from '@tanstack/react-query';
import { register } from '@/api/auth.api';
import { registerType } from '@/features/auth/types/auth';

export const useRegister = () => {
  const query = useMutation({
    mutationFn: (data: registerType) => register(data),
  });
  return query;
};
