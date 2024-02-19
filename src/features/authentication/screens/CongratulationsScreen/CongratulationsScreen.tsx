import React from 'react';
import {StyleSheet, View} from 'react-native';

import Screen from '@components/Screen/Screen';
import DoneSvg from '@assets/svg/completed.svg';
import Title from '@components/Text/Title';
import Paragraph from '@components/Text/Paragraph';
import Button from '@features/authentication/components/Button/Button';
import {useAuth} from '@features/authentication/providers/authContext';

export default function CongratulationsScreen() {
  const {onFinishSingUp} = useAuth();

  async function onSubmit() {
    await onFinishSingUp();
  }

  return (
    <Screen>
      <View style={styles.svgContainer}>
        <DoneSvg style={styles.svg} width={'60%'} />
      </View>
      <View style={styles.contentContainer}>
        <Title style={styles.title}>Cadastro concluído!</Title>
        <Paragraph style={styles.text}>
          Parabéns! Você concluiu com sucesso o cadastro. Agora podemos oferecer
          o melhor conteúdo com base nas suas preferências. Obrigado por se
          juntar à nossa comunidade!
        </Paragraph>
        <Button title="Continuar" onPress={onSubmit} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  svgContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  svg: {
    width: '50%',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
