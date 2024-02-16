import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from '@features/authentication/routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
