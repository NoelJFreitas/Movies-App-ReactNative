import colors from '@utils/colors';
import images from '@utils/images';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function PreloadScreen() {
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
