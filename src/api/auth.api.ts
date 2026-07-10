import { post } from '@/api/http';
import { ENDPOINTS } from '@/api/endPoints';
import { loginType, registerType, AuthResponse } from '@/features/auth/types/auth';

export function login(data: loginType): Promise<AuthResponse> {
  return post<AuthResponse, loginType>(ENDPOINTS.AUTH.LOGIN, data);
}

export function register(data: registerType): Promise<AuthResponse> {
  return post<AuthResponse, registerType>(ENDPOINTS.AUTH.REGISTER, data);
}

export function refreshToken(refreshTokenValue: string): Promise<AuthResponse> {
  return post<AuthResponse, { refreshToken: string }>(ENDPOINTS.AUTH.REFRESH, {
    refreshToken: refreshTokenValue,
  });
}

export function logout(refreshTokenValue: string): Promise<void> {
  return post<void, { refreshToken: string }>(ENDPOINTS.AUTH.LOGOUT, {
    refreshToken: refreshTokenValue,
  });
}
