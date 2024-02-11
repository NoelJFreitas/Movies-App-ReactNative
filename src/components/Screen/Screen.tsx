import colors from '@utils/colors';
import React from 'react';
import {SafeAreaView, StyleSheet, View, ViewProps} from 'react-native';

interface Props extends ViewProps {
  contentStyle?: ViewProps['style'];
}

export default function Screen({children, contentStyle, ...props}: Props) {
  return (
    <SafeAreaView style={styles.container} {...props}>
      <View style={[styles.content, contentStyle]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
