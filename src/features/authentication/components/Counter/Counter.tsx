import commonStyles from '@features/authentication/utils/commonStyles';
import colors from '@utils/colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  value: number;
  min: number;
  max: number;
  placeholder: string;
  onChange: (value: number) => void;
}

export default function Counter({
  onChange,
  value,
  max,
  min,
  placeholder,
}: Props) {
  function onAdd() {
    if (value === max) {
      return;
    }
    if (value === 0) {
      onChange(min + 1);
      return;
    }
    onChange(value + 1);
  }

  function onSubtract() {
    if (value === min || value === 0) {
      return;
    }
    onChange(value - 1);
  }

  return (
    <View style={[styles.container, commonStyles.shadow]}>
      <Text>{value === 0 ? placeholder : value}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onSubtract}>
          <Icon name="minus" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onAdd}>
          <Icon name="plus" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '40%',
    height: '100%',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
