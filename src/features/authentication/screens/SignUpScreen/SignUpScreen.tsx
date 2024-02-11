import Screen from '@components/Screen/Screen';
import Paragraph from '@components/Text/Paragraph';
import Title from '@components/Text/Title';
import Button from '@features/authentication/components/Button/Button';
import SignUpTextInput from '@features/authentication/components/TextInput/SignUpTextInput';
import React, {useRef, useState} from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';

const WIDTH = Dimensions.get('screen').width;

export default function SignUpScreen() {
  const inputs = useRef<SignUpTextInput[]>([]);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });

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
    <Screen contentStyle={styles.container}>
      <View style={styles.textContainer}>
        <Title style={styles.title}>Deixe-nos conhecer um pouco de você</Title>
        <Paragraph>
          Precisamos de algumas informações para te oferecer o melhor
          experiencia possível
        </Paragraph>
      </View>
      <View style={styles.inputContainer}>
        <SignUpTextInput
          value={user.firstName}
          onChangeText={t => setUser({...user, firstName: t})}
          placeholder="Primeiro Nome"
          name="Primeiro Nome"
          ref={el => (inputs.current[0] = el!)}
        />
        <SignUpTextInput
          value={user.lastName}
          onChangeText={t => setUser({...user, lastName: t})}
          placeholder="Ultimo Nome"
          name="Ultimo Nome"
          ref={el => (inputs.current[1] = el!)}
        />
        <SignUpTextInput
          value={user.email}
          onChangeText={t => setUser({...user, email: t})}
          placeholder="Email"
          name="Email"
          ref={el => (inputs.current[2] = el!)}
        />
        <SignUpTextInput
          value={user.age}
          onChangeText={t => setUser({...user, age: t})}
          placeholder="Sua idade"
          name="Idade"
          ref={el => (inputs.current[3] = el!)}
        />
        <Button title="Próximo" onPress={handleNavigation} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: WIDTH * 0.3,
    marginBottom: 20,
  },
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
});
