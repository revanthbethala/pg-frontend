import { ENDPOINTS } from '@/api/endPoints';
import { get, del, post, put } from '@/api/http';
import { RoomRequestType, roomType } from '@/features/rooms/types/room';

export function getAllRooms(branchId: string): Promise<roomType[]> {
  return get<roomType[]>(ENDPOINTS.BRANCH.ROOMS(branchId));
}

export function createRoom(
  branchId: string,
  roomData: RoomRequestType,
): Promise<roomType> {
  return post<roomType, RoomRequestType>(
    ENDPOINTS.BRANCH.CREATE_ROOM(branchId),
    roomData,
  );
}

export function getRoomById(roomId: string): Promise<roomType> {
  return get<roomType>(ENDPOINTS.ROOM.GET(roomId));
}

export function updateRoom(
  roomId: string,
  roomData: Partial<roomType>,
): Promise<roomType> {
  return put<roomType, Partial<roomType>>(
    ENDPOINTS.ROOM.UPDATE(roomId),
    roomData,
  );
}

export function deleteRoom(roomId: string): Promise<void> {
  return del<void>(ENDPOINTS.ROOM.DELETE(roomId));
}
