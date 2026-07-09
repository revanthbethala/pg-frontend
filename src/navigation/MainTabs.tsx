import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Building2,
  Users
} from 'lucide-react-native';

import { Branches } from '@/features/branches';
import { Profile } from '@/features/profile';
import { colors } from '@/styles/colors';
import { MainTabParamList } from '@/types/navigation';

export const MainTabs =
  createBottomTabNavigator<MainTabParamList>({
    initialRouteName: 'Branches',
    screenOptions: {
      headerShown: false,
      animation: 'shift',
      tabBarShowLabel: true,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.inactive,

      tabBarLabelStyle: {
        fontSize: 12,
        marginBottom: 4,
      },
    },

    screens: {
      // Dashboard: {
      //   screen: Dashboard,
      //   options: {
      //     tabBarIcon: ({ color, size }) => (
      //       <LayoutDashboard color={color} size={size} />
      //     ),
      //   },
      // },

      Branches: {
        screen: Branches,
        options: {
          tabBarIcon: ({ color, size }) => (
            <Building2 color={color} size={size} />
          ),
        },
      },

      Profile: {
        screen: Profile,
        options: {
          tabBarIcon: ({ color, size }) => (
            <Users color={color} size={size} />
          ),
        },
      },
    },
  });