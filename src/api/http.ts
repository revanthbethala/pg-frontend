import { AxiosRequestConfig } from 'axios';
import { apiClient } from './client';

export interface ApiResponse<T> {
  message: string;
  data: T;
}

export async function get<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await apiClient.get<ApiResponse<T>>(url, config);
  return response.data.data;
}

export async function post<T, B>(
  url: string,
  body: B,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await apiClient.post<ApiResponse<T>>(url, body, config);
  return response.data.data;
}

export async function put<T, B>(
  url: string,
  body: B,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await apiClient.put<ApiResponse<T>>(url, body, config);
  return response.data.data;
}

export async function del<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await apiClient.delete<ApiResponse<T>>(url, config);
  return response.data.data;
}
