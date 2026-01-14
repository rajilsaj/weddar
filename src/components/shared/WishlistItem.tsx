import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, fonts, fontSizes, fontWeights } from '../../constants';
import { WishlistItem as WishlistItemType } from '../../types';

interface WishlistItemProps {
  item: WishlistItemType;
}

export const WishlistItem: React.FC<WishlistItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: fontSizes.body,
    fontWeight: fontWeights.semibold,
    color: colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: fontSizes.small,
    color: colors.textLight,
    marginBottom: 12,
  },
  price: {
    fontSize: fontSizes.body,
    fontWeight: fontWeights.semibold,
    color: colors.accent,
  },
});
