import React from 'react';
import Screen from '@components/Screen/Screen';
import {Text} from 'react-native';

export default function HomeScreen() {
  return (
    <Screen
      contentStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home</Text>
    </Screen>
  );
}
