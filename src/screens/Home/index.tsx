import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../components/Logo';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  useEffect(() => {
    loadName();
  }, []);

  async function loadName() {
    try {
      const savedName = await AsyncStorage.getItem('@game:playerName');
      if (savedName) {
        setName(savedName);
      }
    } catch (error) {
      console.log('Erro ao carregar nome:', error);
    }
  }

  async function handleStartGame() {
    if (name.trim() === '') {
      return Alert.alert('Ops!', 'Por favor, digite seu nome para começar.');
    }

    try {
      await AsyncStorage.setItem('@game:playerName', name);
      navigation.navigate('Quiz', { playerName: name });
    } catch (error) {
      console.log('Erro ao salvar nome:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.subtitle}>Salve o Natal do Grinch!</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity>
        <ButtonPrimary
          title="Iniciar Jogo"
          onPress={handleStartGame}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Ranking')}
      >
        <Text style={styles.buttonText}>Ver Ranking</Text>
      </TouchableOpacity>
    </View>
  );
}
