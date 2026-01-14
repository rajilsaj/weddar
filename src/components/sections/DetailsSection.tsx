import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, fontSizes, fontWeights } from '../../constants';
import { weddingDetails } from '../../data/weddingDetails';
import { SectionProps } from '../../types';

const { height, width } = Dimensions.get('window');

export const DetailsSection: React.FC<SectionProps> = ({ onLayout }) => {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.content}>
        <Text style={styles.mainHeading}>Wedding Details</Text>

        <View style={styles.eventsContainer}>
          {/* Traditional Wedding */}
          <View style={styles.eventCard}>
            <Text style={styles.eventDate}>{weddingDetails.ceremony.date}</Text>
            <Text style={styles.eventTitle}>{weddingDetails.ceremony.venue}</Text>
            <View style={styles.divider} />
            <View style={styles.eventDetail}>
              <Text style={styles.detailLabel}>Time:</Text>
              <Text style={styles.detailValue}>{weddingDetails.ceremony.time}</Text>
            </View>
            <View style={styles.eventDetail}>
              <Text style={styles.detailLabel}>Location:</Text>
              <Text style={styles.detailValue}>{weddingDetails.ceremony.address}</Text>
            </View>
          </View>

          {/* Wedding Ceremony & Reception */}
          <View style={styles.eventCard}>
            <Text style={styles.eventDate}>{weddingDetails.reception.date}</Text>
            <Text style={styles.eventTitle}>{weddingDetails.reception.venue}</Text>
            <View style={styles.divider} />
            <View style={styles.eventDetail}>
              <Text style={styles.detailLabel}>Time:</Text>
              <Text style={styles.detailValue}>{weddingDetails.reception.time}</Text>
            </View>
            <View style={styles.eventDetail}>
              <Text style={styles.detailLabel}>Location:</Text>
              <Text style={styles.detailValue}>{weddingDetails.reception.address}</Text>
            </View>
          </View>
        </View>

        <View style={styles.rsvpCard}>
          <Text style={styles.rsvpHeading}>R.S.V.P</Text>
          <Text style={styles.rsvpSubtext}>BY AUGUST 1ST</Text>
          <Text style={styles.rsvpUrl}>www.chibuzoandabiodun.com/rsvp</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    backgroundColor: '#2C2C2C',
    paddingTop: 80,
    paddingBottom: 60,
  },
  content: {
    paddingHorizontal: 20,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  mainHeading: {
    fontSize: fontSizes.h2,
    fontFamily: fonts.heading,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 60,
  },
  eventsContainer: {
    flexDirection: width > 768 ? 'row' : 'column',
    gap: 30,
    marginBottom: 60,
  },
  eventCard: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  eventDate: {
    fontSize: fontSizes.tiny,
    fontWeight: fontWeights.semibold,
    color: colors.textLight,
    letterSpacing: 1,
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: fontSizes.h3,
    fontFamily: fonts.heading,
    color: colors.text,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.primary,
    marginBottom: 20,
  },
  eventDetail: {
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.semibold,
    color: colors.text,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: fontSizes.body,
    color: colors.textLight,
  },
  rsvpCard: {
    backgroundColor: colors.primary,
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
  },
  rsvpHeading: {
    fontSize: fontSizes.h2,
    fontFamily: fonts.heading,
    color: colors.white,
    marginBottom: 8,
    letterSpacing: 4,
  },
  rsvpSubtext: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.semibold,
    color: colors.white,
    letterSpacing: 2,
    marginBottom: 20,
  },
  rsvpUrl: {
    fontSize: fontSizes.body,
    color: colors.white,
    textDecorationLine: 'underline',
  },
});
