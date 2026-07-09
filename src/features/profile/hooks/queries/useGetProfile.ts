import { useQuery } from '@tanstack/react-query';
import { profileKeys } from '@/features/profile/profile.keys';
import { getUserProfile } from '@/features/profile/api/profile.api';

export const useGetProfile = () => {
  const query = useQuery({
    queryKey: profileKeys.profile,
    queryFn: getUserProfile,
  });
  return query;
};
