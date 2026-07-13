import { register } from '@/api/auth.api';
import { registerType } from '@/features/auth/types/auth';
import { useGenericMutation } from '@/hooks/useGenericMutation';

export const useRegister = () => {
  const query = useGenericMutation((data: registerType) => register(data), []);
  return query;
};
