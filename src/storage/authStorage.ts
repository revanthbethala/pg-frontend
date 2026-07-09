import AsyncStorage from '@react-native-async-storage/async-storage';
import { userType } from '@/features/auth/types/auth';

export async function loadRegisteredUsers(): Promise<userType[]> {
  const data = await AsyncStorage.getItem('registeredUsers');
  return data ? JSON.parse(data) : [];
}

export async function saveRegisteredUsers(
  registeredUsers: userType[],
): Promise<void> {
  await AsyncStorage.setItem(
    'registeredUsers',
    JSON.stringify(registeredUsers),
  );
}

export async function loadCurrentUser(): Promise<userType | null> {
  const data = await AsyncStorage.getItem('currentUser');
  return data ? JSON.parse(data) : null;
}

export async function saveCurrentUser(currentUser: userType): Promise<void> {
  await AsyncStorage.setItem('currentUser', JSON.stringify(currentUser));
}

export async function removeCurrentUser(): Promise<void> {
  await AsyncStorage.removeItem('currentUser');
}
