import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PreloadScreen from '../screens/PreloadScreen/PreloadScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import PreferredCategories from '../screens/PreferredCategories/PreferredCategories';
import {AuthenticationProvider} from '../providers/authContext';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';

export type AuthRoutes = {
  Onboarding: undefined;
  Preload: undefined;
  SignUp: undefined;
  Categories: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();

export default function AuthRoutes() {
  return (
    <AuthenticationProvider>
      <Navigator
        initialRouteName="Preload"
        screenOptions={{headerShown: false}}>
        <Screen name="Onboarding" component={OnboardingScreen} />
        <Screen name="Preload" component={PreloadScreen} />
        <Screen name="SignUp" component={SignUpScreen} />
        <Screen name="Categories" component={PreferredCategories} />
      </Navigator>
    </AuthenticationProvider>
  );
}
