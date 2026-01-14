import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hand-crafted with love and care by Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    fontSize: fontSizes.small,
    color: colors.textLight,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
