import Title from '@components/Text/Title';
import colors from '@utils/colors';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  name: string;
  onSelect: (name: string) => void;
  onUnchecked: (name: string) => void;
}

export default function Item({name, onSelect, onUnchecked}: Props) {
  const [isSelected, setIsSelected] = useState(false);

  function handleOnSelect() {
    if (!isSelected) {
      setIsSelected(true);
      onSelect(name);
      return;
    }
    setIsSelected(false);
    onUnchecked(name);
  }

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      activeOpacity={0.6}
      onPress={handleOnSelect}>
      <Title style={[styles.text, isSelected && styles.textSelected]}>
        {name}
      </Title>
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
    fontSize: 13,
  },
  textSelected: {
    color: colors.white,
  },
});
