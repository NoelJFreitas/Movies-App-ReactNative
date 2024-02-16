import Screen from '@components/Screen/Screen';
import Paragraph from '@components/Text/Paragraph';
import Title from '@components/Text/Title';
import Button from '@features/authentication/components/Button/Button';
import PreferencesTag from '@features/authentication/components/PreferencesTag/PreferencesTag';
import SignUpTextInput from '@features/authentication/components/TextInput/SignUpTextInput';
import categoryTags from '@features/authentication/utils/categoryTags';
import React, {useRef} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

export default function PreferredCategories() {
  const inputs = useRef<SignUpTextInput[]>([]);

  function handleNavigation() {
    let invalid = false;
    inputs.current.forEach(e => {
      if (e.value === '') {
        e.setValidationState(false);
        invalid = true;
      } else {
        e.setValidationState(true);
      }
    });

    if (invalid) {
      Alert.alert('atenção', 'Preencha todos os campos');
      return;
    }
  }

  return (
    <Screen>
      <View style={styles.textContainer}>
        <Title style={styles.title}>Deixe-nos conhecer um pouco de você</Title>
        <Paragraph>
          Escolha entre as categorias de filmes e séries abaixo qual você mais
          gosta de assistir
        </Paragraph>
      </View>
      <View style={styles.inputContainer}>
        <PreferencesTag tags={categoryTags} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Próximo" onPress={handleNavigation} />
        <Button title="Voltar" light onPress={handleNavigation} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    paddingVertical: 10,
  },
  inputContainer: {
    flex: 4,
    gap: 20,
  },
  buttonContainer: {
    rowGap: 15,
  },
});
