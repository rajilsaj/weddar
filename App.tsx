import { View, Text, Pressable } from 'react-native';
import { supabase } from './lib/supabase';

export default function App() {
  async function testInsert() {
    const { error } = await supabase
      .from('test_messages')
      .insert({ message: 'Hello from Expo 👋' });

    if (error) {
      alert(error.message);
    } else {
      alert('Supabase connected ✅');
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Supabase Test
      </Text>

      <Pressable
        onPress={testInsert}
        style={{ padding: 12, backgroundColor: '#000' }}
      >
        <Text style={{ color: '#fff' }}>Test Supabase</Text>
      </Pressable>
    </View>
  );
}

