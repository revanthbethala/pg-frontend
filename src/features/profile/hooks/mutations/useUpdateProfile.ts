import { updateUser } from '@/api/profile.api';
import { useGenericMutation } from '@/hooks/useGenericMutation';
import { profileKeys } from '../../profile.keys';

export const useUpdateProfile = () => {
  const query = useGenericMutation(updateUser, [profileKeys.profile]);
  return query;
};
