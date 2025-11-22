import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Home ( Amanda Francisco vai trabalhar aqui)</Text>
      <Button title="Ir para Quiz" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
}