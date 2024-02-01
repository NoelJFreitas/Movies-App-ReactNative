import React from 'react';
import {SafeAreaView, StyleSheet, ViewProps} from 'react-native';

interface Props extends ViewProps {}

export default function Screen({children, ...props}: Props) {
  return (
    <SafeAreaView style={styles.container} {...props}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
