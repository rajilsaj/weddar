import React from 'react';
import { ImageBackground, Text, StyleSheet, Dimensions, View } from 'react-native';
import { colors, fonts, fontSizes } from '../../constants';
import { images } from '../../constants/images';
import { SectionProps } from '../../types';

const { height } = Dimensions.get('window');

export const LandingSection: React.FC<SectionProps> = ({ onLayout }) => {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <ImageBackground
        source={{ uri: images.landingCouple }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.enterText}>ENTER</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterText: {
    fontSize: fontSizes.h1 * 1.5,
    fontFamily: fonts.heading,
    fontWeight: '300',
    color: colors.white,
    letterSpacing: 12,
  },
});
