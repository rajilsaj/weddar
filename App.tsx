import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NavigationMenu } from './src/components/shared/NavigationMenu';
import { Footer } from './src/components/shared/Footer';
import { LandingSection } from './src/components/sections/LandingSection';
import { HomeSection } from './src/components/sections/HomeSection';
import { StorySection } from './src/components/sections/StorySection';
import { DetailsSection } from './src/components/sections/DetailsSection';
import { WishlistSection } from './src/components/sections/WishlistSection';
import { colors } from './src/constants';

export default function App() {
  const scrollViewRef = useRef<ScrollView>(null);
  const sectionRefs = useRef({
    home: 0,
    story: 0,
    details: 0,
    wishlist: 0,
    gallery: 0,
  });

  const handleSectionLayout = (section: keyof typeof sectionRefs.current) => (event: any) => {
    const { y } = event.nativeEvent.layout;
    sectionRefs.current[section] = y;
  };

  const scrollToSection = (section: string) => {
    const sectionKey = section.toLowerCase() as keyof typeof sectionRefs.current;
    const yPosition = sectionRefs.current[sectionKey];

    if (scrollViewRef.current && yPosition !== undefined) {
      scrollViewRef.current.scrollTo({
        y: yPosition,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <NavigationMenu onNavigate={scrollToSection} />

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <LandingSection />

        <HomeSection onLayout={handleSectionLayout('home')} />

        <StorySection onLayout={handleSectionLayout('story')} />

        <DetailsSection onLayout={handleSectionLayout('details')} />

        <WishlistSection onLayout={handleSectionLayout('wishlist')} />

        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
});
