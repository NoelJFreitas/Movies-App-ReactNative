import colors from '@utils/colors';
import fonts from '@utils/fonts';
import React from 'react';
import {Text as DefaultText, StyleSheet, TextProps} from 'react-native';

interface Props extends TextProps {}

export default function Title({children, style, ...props}: Props) {
  return (
    <DefaultText style={[styles.text, style]} {...props}>
      {children}
    </DefaultText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.latoBold,
    color: colors.black,
    fontSize: 16,
  },
});
