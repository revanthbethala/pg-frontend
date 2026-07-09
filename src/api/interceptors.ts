import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { apiClient } from './client';
import { tokenStorage } from '@/services/tokenStorage';
import { ENDPOINTS } from './endPoints';
import { triggerLogout } from '@/services/authCallback';

const PUBLIC_ENDPOINTS = ['/login', '/register', '/refresh'];
let isRefreshing = false;
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = await tokenStorage.getAccessToken();
    const isPublic = PUBLIC_ENDPOINTS.some(endpoint =>
      config.url?.includes(endpoint),
    );
    if (!isPublic && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as
      | CustomAxiosRequestConfig
      | undefined;
    if (!originalRequest) {
      return Promise.reject(error);
    }

    const isPublic = PUBLIC_ENDPOINTS.some(endpoint =>
      originalRequest.url?.includes(endpoint),
    );
    if (error.response?.status !== 401 || originalRequest._retry || isPublic) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const refreshToken = await tokenStorage.getRefreshToken();
      if (!refreshToken) throw new Error('No refresh token available');
      const response = await axios.post(
        `${apiClient.defaults.baseURL}${ENDPOINTS.AUTH.REFRESH}`,
        { refreshToken },
      );
      const resData = response.data.data;
      await tokenStorage.save({
        accessToken: resData.accessToken,
        refreshToken: resData.refreshToken,
      });
      originalRequest.headers.Authorization = `Bearer ${resData.accessToken}`;
      return apiClient(originalRequest);
    } catch (refreshError) {
      triggerLogout();
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);
