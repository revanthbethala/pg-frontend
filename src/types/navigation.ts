import { NavigatorScreenParams } from '@react-navigation/native';

export type MainTabParamList = {
  Branches: undefined;
  Profile: undefined;
  Dashboard: undefined;
};

export type PgStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  Rooms: {
    branchId: string;
    branchName: string;
    isActive: boolean;
  };
  Guests: {
    roomId: string;
    roomNumber: string;
    capacity: number;
  };
  GuestDetails: {
    guestId: string;
    guestName: string;
  };
};

export type AuthStackParamList = {
  Login: undefined;
  Registration: undefined;
};
