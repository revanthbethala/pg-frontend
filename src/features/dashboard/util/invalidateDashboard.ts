import { queryClient } from '@/api/queryClient';
import { dashboardKeys } from '../dashboard.keys';

export const invalidateDashboard = () =>
  queryClient.invalidateQueries({
    queryKey: dashboardKeys.dashboard,
  });
