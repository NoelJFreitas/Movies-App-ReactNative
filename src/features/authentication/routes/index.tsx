import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PreloadScreen from '../screens/PreloadScreen/PreloadScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import PreferredCategories from '../screens/PreferredCategories/PreferredCategories';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
      <Screen name="Preload" component={PreloadScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="Categories" component={PreferredCategories} />
    </Navigator>
  );
}
