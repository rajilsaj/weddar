import { Platform } from 'react-native';

export const fonts = {
  heading: Platform.select({
    ios: 'Didot',
    android: 'serif',
    default: 'Georgia',
  }) as string,
  body: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'Arial',
  }) as string,
};

export const fontSizes = {
  h1: 48,
  h2: 36,
  h3: 24,
  h4: 20,
  body: 16,
  small: 14,
  tiny: 12,
};

export const fontWeights = {
  normal: '400' as const,
  semibold: '600' as const,
  bold: '700' as const,
};
