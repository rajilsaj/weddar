import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { colors, fontSizes, fontWeights } from '../../constants';

interface NavigationMenuProps {
  onNavigate: (section: string) => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ onNavigate }) => {
  const menuItems = ['HOME', 'DETAILS', 'WISHLIST', 'GALLERY'];

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <React.Fragment key={item}>
            <TouchableOpacity
              onPress={() => onNavigate(item.toLowerCase())}
              style={styles.menuItem}
            >
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
            {index < menuItems.length - 1 && (
              <View style={styles.separator} />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: colors.primary,
    ...Platform.select({
      web: {
        position: 'fixed' as any,
      },
    }),
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  menuText: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.semibold,
    color: colors.white,
    letterSpacing: 1,
  },
  separator: {
    width: 1,
    height: 16,
    backgroundColor: colors.white,
    opacity: 0.5,
  },
});
