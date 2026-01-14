import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { images } from '../../constants/images';

interface FloralDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
}

export const FloralDecoration: React.FC<FloralDecorationProps> = ({
  position,
  size = 200
}) => {
  const getPositionStyle = () => {
    switch (position) {
      case 'top-left':
        return { top: 0, left: 0 };
      case 'top-right':
        return { top: 0, right: 0, transform: [{ scaleX: -1 }] };
      case 'bottom-left':
        return { bottom: 0, left: 0, transform: [{ scaleY: -1 }] };
      case 'bottom-right':
        return { bottom: 0, right: 0, transform: [{ scaleX: -1 }, { scaleY: -1 }] };
    }
  };

  return (
    <View style={[styles.container, getPositionStyle()]}>
      <Image
        source={{ uri: images.floralLeft }}
        style={[styles.image, { width: size, height: size }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    opacity: 0.8,
  },
  image: {
    tintColor: undefined,
  },
});
