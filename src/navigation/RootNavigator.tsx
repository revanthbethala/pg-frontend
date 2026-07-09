import Loader from '@/components/Loader';
import { useAuthContext } from '@/context/useAuthContext';
import { createStaticNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { AuthNavigator } from './AuthNavigator';
import { PgNavigator } from './PgNavigator';

export const RootNavigator = () => {
  const { isAuthenticated, isLoading } = useAuthContext();
  const AuthNavigation = createStaticNavigation(AuthNavigator);
  const PgNavigation = createStaticNavigation(PgNavigator);
  useEffect(() => {
    if (!isLoading) {
      BootSplash.hide({ fade: true });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />
  }
  return isAuthenticated ? <PgNavigation /> : <AuthNavigation />

};
