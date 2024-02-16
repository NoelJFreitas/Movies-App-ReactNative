import colors from '@utils/colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  light?: boolean;
  onPress: () => void;
}

export default function Button({title, onPress, light}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow, light && styles.lightBackground]}
      onPress={onPress}>
      <Text style={[styles.title, light && styles.titleLight]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    borderRadius: 60 * 0.15,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
  lightBackground: {
    backgroundColor: colors.background,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  titleLight: {
    color: colors.primary,
  },
});
