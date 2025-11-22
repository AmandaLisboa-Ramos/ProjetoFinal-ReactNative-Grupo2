import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ResultScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Resultado (Simone vai trabalhar aqui)</Text>
      <Button title="Ir para Quiz" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
}