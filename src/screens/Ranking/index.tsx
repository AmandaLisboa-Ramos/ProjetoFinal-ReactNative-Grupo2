import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';

interface RankingData {
  id: string;
  nome: string;
  score: number; // a API retorna exatamente isso
}

export default function RankingScreen({ navigation }: any) {
  const [ranking, setRanking] = useState<RankingData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRanking();
  }, []);

  const fetchRanking = async () => {
    try {
      const response = await fetch(
        'https://690a7b0d1a446bb9cc22a902.mockapi.io/Registro_Pontuacao'
      );

      const data: RankingData[] = await response.json();

      const sorted = data.sort((a, b) => b.score - a.score);

      setRanking(sorted);
    } catch (error) {
      console.error('Erro ao buscar ranking:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item, index }: { item: RankingData; index: number }) => (
    <View style={styles.rankingItem}>
      <View style={styles.positionBadge}>
        <Text style={styles.positionText}>{index + 1}</Text>
      </View>

      <View style={styles.itemInfo}>
        <Text style={styles.nameText}>{item.nome}</Text>
      </View>

      <Text style={styles.scoreText}>{item.score}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#D4AF37" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Galeria da Fama</Text>
      </View>

      <View style={styles.rankingContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>POSIÇÃO</Text>
          <Text style={styles.headerText}>PONTUAÇÃO</Text>
        </View>

        <FlatList
          data={ranking}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para Tela Inicial</Text>
      </TouchableOpacity>
    </View>
  );
}
