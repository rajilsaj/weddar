import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { colors, fonts, fontSizes, fontWeights } from '../../constants';
import { images } from '../../constants/images';
import { timeline, loveLetter } from '../../data/timeline';
import { SectionProps } from '../../types';
import { FloralDecoration } from '../shared/FloralDecoration';

const { height, width } = Dimensions.get('window');

export const StorySection: React.FC<SectionProps> = ({ onLayout }) => {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <FloralDecoration position="top-right" size={200} />

      <View style={styles.content}>
        {/* Love Letters */}
        <View style={styles.lettersSection}>
          <View style={styles.letterContainer}>
            <Image
              source={{ uri: images.brideProfile }}
              style={styles.profileImage}
            />
            <Text style={styles.letterName}>{loveLetter.bride.name},</Text>
            <Text style={styles.letterText}>{loveLetter.bride.message}</Text>
          </View>

          <View style={styles.letterContainer}>
            <Image
              source={{ uri: images.groomProfile }}
              style={styles.profileImage}
            />
            <Text style={styles.letterName}>{loveLetter.groom.name},</Text>
            <Text style={styles.letterText}>{loveLetter.groom.message}</Text>
          </View>
        </View>

        {/* Timeline */}
        <View style={styles.timelineSection}>
          <Text style={styles.timelineHeading}>TIMELINE</Text>
          <View style={styles.timelineLine} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.timelineScroll}
          >
            {timeline.map((event, index) => (
              <View key={event.year} style={styles.timelineItem}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineYear}>{event.year}</Text>

                {index === 0 && (
                  <View style={styles.timelineCard}>
                    <Text style={styles.timelineTitle}>{event.title}</Text>
                    <Text style={styles.timelineDescription}>
                      {event.description}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>

          {/* First Encounter Detail */}
          <View style={styles.encounterCard}>
            <Text style={styles.encounterTitle}>{timeline[0].title}</Text>
            <Text style={styles.encounterDescription}>
              {timeline[0].description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    backgroundColor: colors.white,
    paddingTop: 80,
    paddingBottom: 60,
  },
  content: {
    paddingHorizontal: 20,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  lettersSection: {
    flexDirection: width > 768 ? 'row' : 'column',
    marginBottom: 60,
    gap: 40,
  },
  letterContainer: {
    flex: 1,
    alignItems: width > 768 ? 'flex-start' : 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  letterName: {
    fontSize: fontSizes.h4,
    fontFamily: fonts.heading,
    color: colors.text,
    marginBottom: 16,
  },
  letterText: {
    fontSize: fontSizes.body,
    color: colors.textLight,
    lineHeight: fontSizes.body * 1.6,
    textAlign: width > 768 ? 'left' : 'center',
  },
  timelineSection: {
    position: 'relative',
    paddingVertical: 40,
  },
  timelineHeading: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.semibold,
    color: colors.textLight,
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 40,
  },
  timelineLine: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: colors.primary,
  },
  timelineScroll: {
    paddingHorizontal: 20,
    gap: 60,
  },
  timelineItem: {
    alignItems: 'center',
    width: 100,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.accent,
    marginBottom: 12,
  },
  timelineYear: {
    fontSize: fontSizes.body,
    fontWeight: fontWeights.semibold,
    color: colors.text,
  },
  timelineCard: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
    width: 250,
  },
  timelineTitle: {
    fontSize: fontSizes.body,
    fontWeight: fontWeights.semibold,
    color: colors.white,
    marginBottom: 8,
  },
  timelineDescription: {
    fontSize: fontSizes.small,
    color: colors.white,
    lineHeight: fontSizes.small * 1.5,
  },
  encounterCard: {
    backgroundColor: colors.background,
    padding: 30,
    borderRadius: 12,
    marginTop: 60,
  },
  encounterTitle: {
    fontSize: fontSizes.h3,
    fontFamily: fonts.heading,
    color: colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  encounterDescription: {
    fontSize: fontSizes.body,
    color: colors.textLight,
    lineHeight: fontSizes.body * 1.6,
    textAlign: 'center',
  },
});
