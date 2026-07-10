import { useQuery } from '@tanstack/react-query';
import { getDashboard } from '@/features/dashboard/api/dashboard.api';
import { dashboardKeys } from '../../dashboard.keys';

export const useDashboard = () => {
  const query = useQuery({
    queryKey: dashboardKeys.dashboard,
    queryFn: getDashboard,
  });
  return query;
};
