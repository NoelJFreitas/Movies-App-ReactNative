import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAuth} from '@features/authentication/providers/authContext';
import {AuthRoutes} from '@features/authentication/routes';
import colors from '@utils/colors';
import images from '@utils/images';

type Props = NativeStackScreenProps<AuthRoutes, 'Preload'>;

export default function PreloadScreen({navigation}: Props) {
  const {onVerifyStorageUser} = useAuth();

  useFocusEffect(() => {
    setTimeout(() => {
      onVerifyStorageUser().then(exist => {
        if (!exist) {
          navigation.navigate('Onboarding');
        }
      });
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  image: {
    width: '30%',
  },
});
