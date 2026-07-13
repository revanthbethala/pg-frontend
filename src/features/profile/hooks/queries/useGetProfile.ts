import { getUserProfile } from '@/api/profile.api';
import { profileKeys } from '@/features/profile/profile.keys';
import { useGenericQuery } from '@/hooks/useGenericQuery';

export const useGetProfile = () => {
  const query = useGenericQuery(profileKeys.profile, getUserProfile);
  return query;
};
