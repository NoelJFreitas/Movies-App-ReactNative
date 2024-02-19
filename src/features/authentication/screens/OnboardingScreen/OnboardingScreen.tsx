import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {AuthRoutes} from '@features/authentication/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Screen from '@components/Screen/Screen';
import Button from '@features/authentication/components/Button/Button';
import images from '@utils/images';
import Paragraph from '@components/Text/Paragraph';
import Title from '@components/Text/Title';

type Props = NativeStackScreenProps<AuthRoutes, 'Onboarding'>;

export default function OnboardingScreen({navigation}: Props) {
  function onSubmit() {
    navigation.navigate('SignUp');
  }

  return (
    <Screen>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images.hero}
          resizeMode="contain"
          resizeMethod="auto"
        />
        <Title style={styles.title}>Acompanhe suas produções favoritas!</Title>
        <Paragraph style={styles.paragraph}>
          Bem-vindo ao MoviesApp! Descubra, favorite e encontre séries e filmes
          facilmente. Explore sinopses, marque seus favoritos e receba
          recomendações. Mergulhe em um universo de histórias conosco!
        </Paragraph>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Primeiros passos!" onPress={onSubmit} />
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
    justifyContent: 'space-evenly',
    height: '25%',
  },
  image: {
    height: '30%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'center',
  },
});
