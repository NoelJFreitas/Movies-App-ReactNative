import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from '@features/authentication/routes';
import {useSelector} from '@hooks/redux';
import HomeScreen from '@features/homecase/screens/HomeScreen/HomeScreen';

export default function Routes() {
  const {isLoggedIn} = useSelector(({user}) => user);
  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeScreen /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
