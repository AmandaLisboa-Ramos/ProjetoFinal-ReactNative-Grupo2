import React from 'react';
import { View, Text, Button } from 'react-native';

export default function QuizScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Quiz (Alexandre vai trabalhar aqui)</Text>
      <Button title="Ir para Resultado" onPress={() => navigation.navigate('Result')} />
    </View>
  );
}