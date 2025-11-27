import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function ResultScreen({ route, navigation }: any) {
  const { score } = route.params; 
  const [playerName, setPlayerName] = useState('');

  
  useEffect(() => {
    const loadPlayerNameAndSaveScore = async () => {
      try {
        const savedName = await AsyncStorage.getItem('@game:playerName');
        if (savedName) {
          setPlayerName(savedName);

          const newRecord = {
            nome: savedName,             
            pontos: `pontos ${score}`,  
            score: score,
            date: new Date().toISOString(),
          };

          await fetch("https://690a7b0d1a446bb9cc22a902.mockapi.io/Registro_Pontuacao",
        
            
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newRecord),
            }
          );

          console.log('Pontuação salva automaticamente.');
        }
      } catch (error) {
        console.error('Erro ao carregar nome ou salvar pontuação:', error);
      }
    };

    loadPlayerNameAndSaveScore();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.subtitle}>Seu desempenho na missão do Noel</Text>

      <View style={styles.resultContainer}>
        <View style={styles.card}>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Você fez:</Text>
            <Text style={styles.scoreValue}>{score} pontos</Text>
          </View>
        </View>

        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ranking')}
        >
          <Text style={styles.buttonText}>Ir para Ranking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//feito por Simone