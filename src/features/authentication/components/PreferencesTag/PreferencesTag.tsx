import React from 'react';
import {StyleSheet, View} from 'react-native';
import Item from './components/Item';

interface Props {
  tags: string[];
  onSelect: (tag: string) => void;
  onUnchecked: (tag: string) => void;
}

export default function PreferencesTag({tags, onSelect, onUnchecked}: Props) {
  return (
    <View style={styles.container}>
      {tags.map(name => (
        <Item
          key={name}
          name={name}
          onSelect={onSelect}
          onUnchecked={onUnchecked}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10,
  },
});
