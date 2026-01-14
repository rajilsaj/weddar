
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💍 Wedding RSVP</Text>

      <Text style={styles.subtitle}>
        Welcome! This is a demo UI to confirm deployment.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Event:</Text>
        <Text>Rajil & Partner Wedding</Text>

        <Text style={styles.label}>Date:</Text>
        <Text>August 24, 2026</Text>

        <Text style={styles.label}>Location:</Text>
        <Text>Paris, France 🇫🇷</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>RSVP Coming Soon</Text>
      </Pressable>

      <Text style={styles.footer}>
        Demo UI • Expo Web + Supabase • $0 Stack
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    maxWidth: 360,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    fontWeight: '600',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#111',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginTop: 32,
    fontSize: 12,
    color: '#888',
  },
});
