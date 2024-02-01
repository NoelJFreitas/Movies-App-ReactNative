import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Screen from '@components/Screen/Screen';
import Button from '@features/authentication/components/Button/Button';
import images from '@utils/images';

export default function OnboardingScreen() {
  return (
    <Screen>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images.hero}
          resizeMode="contain"
          resizeMethod="auto"
        />
        <Text style={styles.title}>Acompanhe suas produções favoritas!</Text>
        <Text style={styles.paragraph}>
          Bem-vindo ao MoviesApp! Descubra, favorite e encontre séries e filmes
          facilmente. Explore sinopses, marque seus favoritos e receba
          recomendações. Mergulhe em um universo de histórias conosco!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Primeiros passos!" onPress={() => {}} />
        <Button title="Acessar como anonimo" onPress={() => {}} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    gap: 20,
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    // backgroundColor: 'violete',
    justifyContent: 'space-evenly',
    height: '25%',
  },
  image: {
    height: '30%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'poppins-bold',
  },
  paragraph: {
    fontFamily: 'poppins-light',
    color: '#00000060',
    textAlign: 'center',
    fontSize: 15,
  },
});
