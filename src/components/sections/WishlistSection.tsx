import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, fontSizes } from '../../constants';
import { wishlist } from '../../data/wishlist';
import { SectionProps } from '../../types';
import { WishlistItem } from '../shared/WishlistItem';
import { FloralDecoration } from '../shared/FloralDecoration';

const { height, width } = Dimensions.get('window');

export const WishlistSection: React.FC<SectionProps> = ({ onLayout }) => {
  const numColumns = width > 900 ? 3 : width > 600 ? 2 : 1;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <FloralDecoration position="top-left" size={180} />

      <View style={styles.content}>
        <Text style={styles.heading}>Gift whatever you can</Text>
        <Text style={styles.subheading}>
          If you wish to gift us something on our wedding day, a contribution
          of any amount towards items on our wishlist would be appreciated.
        </Text>

        <View style={[styles.grid, { gap: 20 }]}>
          {wishlist.map((item) => (
            <View
              key={item.id}
              style={{
                width: numColumns === 1 ? '100%' : `${(100 / numColumns) - 2}%`,
              }}
            >
              <WishlistItem item={item} />
            </View>
          ))}
        </View>
      </View>

      <FloralDecoration position="bottom-right" size={180} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    backgroundColor: colors.background,
    paddingTop: 80,
    paddingBottom: 60,
  },
  content: {
    paddingHorizontal: 20,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  heading: {
    fontSize: fontSizes.h2,
    fontFamily: fonts.heading,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  subheading: {
    fontSize: fontSizes.body,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 60,
    maxWidth: 600,
    alignSelf: 'center',
    lineHeight: fontSizes.body * 1.6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
