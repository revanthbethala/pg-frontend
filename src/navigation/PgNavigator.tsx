import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GuestDetails, Guests } from '@/features/guests';
import { Rooms } from '@/features/rooms';
import { PgStackParamList } from '@/types/navigation';
import { MainTabs } from './MainTabs';

export const PgNavigator = createNativeStackNavigator<PgStackParamList>({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    MainTabs: {
      screen: MainTabs,
      options: {
        headerShown: false,
      }
    },
    Rooms: {
      screen: Rooms,

    },
    Guests: {
      screen: Guests,
    },
    GuestDetails: {
      screen: GuestDetails
    }
  },
})
