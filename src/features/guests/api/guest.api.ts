import { ENDPOINTS } from '@/api/endPoints';
import { get, del, put, post } from '@/api/http';
import { GuestFormType, guestType } from '@/features/guests/types/guest';

export function getAllGuestsByRoom(roomId: string): Promise<guestType[]> {
  return get<guestType[]>(ENDPOINTS.ROOM.GUESTS(roomId)) || [];
}

export function createGuest(
  roomId: string,
  guestData: GuestFormType,
): Promise<guestType> {
  return post<guestType, GuestFormType>(
    ENDPOINTS.ROOM.CREATE_GUEST(roomId),
    guestData,
  );
}

export function getGuestById(guestId: string): Promise<guestType> {
  return get<guestType>(ENDPOINTS.GUEST.GET(guestId));
}

export function updateGuest(
  guestId: string,
  guestData: Partial<guestType>,
): Promise<guestType> {
  return put<guestType, Partial<guestType>>(
    ENDPOINTS.GUEST.UPDATE(guestId),
    guestData,
  );
}

export function deleteGuest(guestId: string): Promise<void> {
  return del<void>(ENDPOINTS.GUEST.DELETE(guestId));
}
