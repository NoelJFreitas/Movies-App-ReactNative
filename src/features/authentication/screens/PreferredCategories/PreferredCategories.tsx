import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAuth} from '@features/authentication/providers/authContext';

import {AuthRoutes} from '@features/authentication/routes';

import Screen from '@components/Screen/Screen';
import Paragraph from '@components/Text/Paragraph';
import Title from '@components/Text/Title';
import Button from '@features/authentication/components/Button/Button';
import PreferencesTag from '@features/authentication/components/PreferencesTag/PreferencesTag';
import categoryTags from '@features/authentication/utils/categoryTags';

type Props = NativeStackScreenProps<AuthRoutes, 'Categories'>;

export default function PreferredCategories({navigation}: Props) {
  const {user, setUser} = useAuth();

  function onSubmit() {
    if (!user.preferredCategories.length) {
      Alert.alert('atenção', 'selecione pelo menos uma categoria');
      return;
    }
    navigation.navigate('Congratulations');
  }

  function onGoBack() {
    navigation.goBack();
  }

  function onSelect(tag: string) {
    const preferences = user.preferredCategories;
    preferences.push(tag);
    setUser({...user, preferredCategories: preferences});
  }

  function onUnchecked(tagOnRemove: string) {
    const preferences = user.preferredCategories.filter(
      tag => tag !== tagOnRemove,
    );
    setUser({...user, preferredCategories: preferences});
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
        <PreferencesTag
          tags={categoryTags}
          onSelect={onSelect}
          onUnchecked={onUnchecked}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Próximo" onPress={onSubmit} />
        <Button title="Voltar" light onPress={onGoBack} />
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
    rowGap: 10,
    paddingVertical: 10,
  },
});
