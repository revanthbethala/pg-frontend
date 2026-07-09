import { NavigatorScreenParams } from '@react-navigation/native';

export type MainTabParamList = {
  Branches: undefined;
  Profile: undefined;
  // Dashboard: undefined;
};

export type PgStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  Rooms: {
    branchId: string;
    branchName: string;
  };
  Guests: {
    roomId: string;
    roomNumber: string;
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
