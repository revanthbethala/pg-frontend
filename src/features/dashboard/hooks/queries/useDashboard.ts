import { getDashboard } from '@/api/dashboard.api';
import { useGenericQuery } from '@/hooks/useGenericQuery';
import { dashboardKeys } from '../../dashboard.keys';

export const useDashboard = () => {
  const query = useGenericQuery(dashboardKeys.dashboard, getDashboard);
  return query;
};
