import { ENDPOINTS } from '@/api/endPoints';
import { del, get, put } from '@/api/http';
import { profileRequestType, profileType } from '../types/profile.types';

export async function getUserProfile() {
  return get<profileType>(ENDPOINTS.USER.PROFILE);
}

export async function deleteUser() {
  return del(ENDPOINTS.USER.DELETE_PROFILE);
}

export async function updateUser(user: profileRequestType) {
  return put<profileType, profileRequestType>(
    ENDPOINTS.USER.UPDATE_PROFILE,
    user,
  );
}
