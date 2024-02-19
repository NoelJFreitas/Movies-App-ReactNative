import React, {useRef} from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import {AuthRoutes} from '@features/authentication/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAuth} from '@features/authentication/providers/authContext';

import Screen from '@components/Screen/Screen';
import Paragraph from '@components/Text/Paragraph';
import Title from '@components/Text/Title';
import Button from '@features/authentication/components/Button/Button';
import SignUpTextInput from '@features/authentication/components/TextInput/SignUpTextInput';
import Counter from '@features/authentication/components/Counter/Counter';

const WIDTH = Dimensions.get('screen').width;

type Props = NativeStackScreenProps<AuthRoutes, 'SignUp'>;

export default function SignUpScreen({navigation}: Props) {
  const {user, setUser} = useAuth();
  const inputs = useRef<SignUpTextInput[]>([]);

  function onSubmit() {
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

    if (user.age === 0) {
      Alert.alert('atenção', 'Adicione uma idade valida');
      return;
    }

    navigation.navigate('Categories');
  }

  return (
    <Screen contentStyle={styles.container}>
      <View style={styles.textContainer}>
        <Title style={styles.title}>Deixe-nos conhecer um pouco de você</Title>
        <Paragraph>
          Precisamos de algumas informações para te oferecer a melhor
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
        <Counter
          value={user.age}
          placeholder="Sua idade"
          min={12}
          max={100}
          onChange={value => setUser({...user, age: value})}
        />
        <Button title="Próximo" onPress={onSubmit} />
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
