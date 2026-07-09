import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackParamList } from '@/types/navigation';
import { Login, Registration } from '@/features/auth';

export const AuthNavigator = createNativeStackNavigator<AuthStackParamList>({
  screenOptions: {
    headerShown: false,
    gestureEnabled: false,
  },
  screens: {
    Login: {
      screen: Login,
    },
    Registration: {
      screen: Registration,
    },
  },
});
