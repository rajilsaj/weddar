import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors, fonts, fontSizes, fontWeights } from '../../constants';
import { images } from '../../constants/images';
import { coupleInfo } from '../../data/weddingDetails';
import { SectionProps } from '../../types';
import { FloralDecoration } from '../shared/FloralDecoration';

const { height, width } = Dimensions.get('window');

export const HomeSection: React.FC<SectionProps> = ({ onLayout }) => {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <FloralDecoration position="top-left" size={250} />

      <View style={styles.content}>
        <View style={styles.leftSection}>
          <Text style={styles.heading}>We are getting married</Text>
          <Text style={styles.date}>{coupleInfo.weddingDate}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>READ OUR STORY →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rightSection}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: images.homeCouple }}
              style={styles.coupleImage}
              resizeMode="cover"
            />
            <View style={styles.nameOverlay}>
              <Text style={styles.coupleNames}>
                {coupleInfo.bride.toUpperCase()} & {coupleInfo.groom.toUpperCase()}
              </Text>
              <View style={styles.divider} />
              <Text style={styles.established}>EST {coupleInfo.established}</Text>
            </View>
          </View>
        </View>
      </View>

      <FloralDecoration position="bottom-right" size={200} />
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
    flexDirection: width > 768 ? 'row' : 'column',
    paddingHorizontal: 20,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  leftSection: {
    flex: 1,
    paddingRight: width > 768 ? 40 : 0,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  heading: {
    fontSize: fontSizes.h2,
    fontFamily: fonts.heading,
    color: colors.text,
    marginBottom: 24,
    lineHeight: fontSizes.h2 * 1.3,
  },
  date: {
    fontSize: fontSizes.body,
    color: colors.textLight,
    marginBottom: 32,
    lineHeight: fontSizes.body * 1.6,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.text,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.semibold,
    color: colors.text,
    letterSpacing: 1,
  },
  rightSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: 400,
  },
  coupleImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 8,
  },
  nameOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    alignItems: 'center',
  },
  coupleNames: {
    fontSize: fontSizes.h4,
    fontWeight: fontWeights.semibold,
    color: colors.text,
    letterSpacing: 2,
  },
  divider: {
    width: 60,
    height: 1,
    backgroundColor: colors.accent,
    marginVertical: 12,
  },
  established: {
    fontSize: fontSizes.small,
    color: colors.textLight,
    letterSpacing: 2,
  },
});
