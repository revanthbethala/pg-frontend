import AsyncStorage from '@react-native-async-storage/async-storage';
import { branchType } from '@/features/branches/types/branch';
import { roomType } from '@/features/rooms/types/room';
import { guestType } from '@/features/guests/types/guest';

export async function loadBranches(): Promise<branchType[]> {
  const data = await AsyncStorage.getItem('branches');
  return data ? JSON.parse(data) : [];
}

export async function saveBranches(branches: branchType[]): Promise<void> {
  await AsyncStorage.setItem('branches', JSON.stringify(branches));
}

export async function loadRooms(): Promise<roomType[]> {
  const data = await AsyncStorage.getItem('rooms');
  return data ? JSON.parse(data) : [];
}

export async function saveRooms(rooms: roomType[]): Promise<void> {
  await AsyncStorage.setItem('rooms', JSON.stringify(rooms));
}

export async function loadGuests(): Promise<guestType[]> {
  const data = await AsyncStorage.getItem('guests');
  return data ? JSON.parse(data) : [];
}

export async function saveGuests(guests: guestType[]): Promise<void> {
  await AsyncStorage.setItem('guests', JSON.stringify(guests));
}
