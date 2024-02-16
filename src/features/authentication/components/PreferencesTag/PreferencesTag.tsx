import React from 'react';
import {StyleSheet, View} from 'react-native';
import Item from './components/Item';

interface Props {
  tags: string[];
}

export default function PreferencesTag({tags}: Props) {
  function handleOnSelect(name: string) {
    console.log(`tag name: ${name}`);
  }

  return (
    <View style={styles.container}>
      {tags.map(name => (
        <Item key={name} name={name} onSelect={handleOnSelect} />
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
