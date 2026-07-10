import { ENDPOINTS } from '@/api/endPoints';
import { del, get, post, put } from '@/api/http';
import {
  CreateRoomRequestType,
  EditRoomRequestType,
  roomType,
} from '@/features/rooms/types/room.types';

export function getAllRooms(branchId: string): Promise<roomType[]> {
  return get<roomType[]>(ENDPOINTS.BRANCH.ROOMS(branchId));
}

export function createRoom(
  branchId: string,
  roomData: CreateRoomRequestType,
): Promise<roomType> {
  return post<roomType, CreateRoomRequestType>(
    ENDPOINTS.BRANCH.CREATE_ROOM(branchId),
    roomData,
  );
}

export function getRoomById(roomId: string): Promise<roomType> {
  return get<roomType>(ENDPOINTS.ROOM.GET(roomId));
}

export function updateRoom(
  roomId: string,
  roomData: EditRoomRequestType,
): Promise<roomType> {
  return put<roomType, EditRoomRequestType>(
    ENDPOINTS.ROOM.UPDATE(roomId),
    roomData,
  );
}

export function deleteRoom(roomId: string): Promise<void> {
  return del<void>(ENDPOINTS.ROOM.DELETE(roomId));
}
