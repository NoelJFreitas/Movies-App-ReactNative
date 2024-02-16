import colors from '@utils/colors';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  name: string;
  onSelect: (name: string) => void;
}

export default function Item({name, onSelect}: Props) {
  const [isSelected, setIsSelected] = useState(false);

  function handleOnSelect() {
    setIsSelected(!isSelected);
    onSelect(name);
  }

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      activeOpacity={0.6}
      onPress={handleOnSelect}>
      <Text style={[styles.text, isSelected && styles.textSelected]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 200,
  },
  selected: {
    backgroundColor: colors.primary,
  },
  text: {
    fontWeight: '500',
  },
  textSelected: {
    color: colors.white,
  },
});
