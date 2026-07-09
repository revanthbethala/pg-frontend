import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import "./api/interceptors";
import { queryClient } from './api/queryClient';
import { AuthProvider } from './context/AuthContext';
import { RootNavigator } from './navigation/RootNavigator';
const App = () => {


  return (
    <QueryClientProvider client={queryClient}>
      <MenuProvider>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </MenuProvider>
    </QueryClientProvider >
  )
}

export default App