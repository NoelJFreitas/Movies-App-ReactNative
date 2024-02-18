import commonStyles from '@features/authentication/utils/commonStyles';
import colors from '@utils/colors';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface Props extends TextInputProps {
  name: string;
}

interface SignUpTextInput {
  setValidationState: (isValid: boolean) => void;
  value: string | undefined;
}

const SignUpTextInput = forwardRef<SignUpTextInput, Props>(
  ({name, value, ...props}: Props, ref) => {
    const [isValid, setIsValid] = useState<undefined | boolean>(undefined);

    function setValidationState(state: boolean) {
      setIsValid(state);
    }

    useImperativeHandle(ref, () => ({
      setValidationState,
      value,
    }));

    return (
      <View
        style={[
          styles.container,
          commonStyles.shadow,
          !isValid && isValid !== undefined && styles.invalid,
        ]}>
        {value && <Text style={styles.title}>{name}</Text>}
        <TextInput
          defaultValue={value}
          placeholderTextColor={colors.grey}
          style={commonStyles.text}
          {...props}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 7,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    position: 'absolute',
    fontWeight: '400',
    fontSize: 12,
    left: 20,
    top: -6,
  },
  invalid: {
    borderColor: 'red',
    borderWidth: 0.5,
  },
});

export default SignUpTextInput;
