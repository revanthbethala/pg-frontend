import { ENDPOINTS } from '@/api/endPoints';
import { get } from '@/api/http';
import { Dashboard } from '../types/dashboard.types';

export async function getDashboard() {
  return get<Dashboard>(ENDPOINTS.DASHBOARD.DASHBOARD);
}
