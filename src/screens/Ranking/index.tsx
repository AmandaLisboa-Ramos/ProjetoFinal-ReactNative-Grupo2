import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';

interface RankingData {
  id: string;
  nome: string;
  pontuacao: number;
}

interface ApiRankingData {
  id: string;
  nome: string;
  pontos: string;
}

export default function RankingScreen({ navigation }: any) {
  const [ranking, setRanking] = useState<RankingData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchRanking();
  }, []);

  const fetchRanking = async (): Promise<void> => {
    try {
      const response = await fetch('https://690a7b0d1a446bb9cc22a902.mockapi.io/Registro_Pontuacao');
      const data: ApiRankingData[] = await response.json();

      const formattedData: RankingData[] = data.map(item => ({
        id: item.id,
        nome: item.nome,
        pontuacao: parseInt(item.pontos.replace(/\D/g, '')) || 0
      }));

      const sorted = formattedData.sort((a: RankingData, b: RankingData) => b.pontuacao - a.pontuacao);
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
      <Text style={styles.scoreText}>{item.pontuacao}</Text>
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
        <Text style={styles.subtitle}>Os melhores ajudantes do Noel</Text>
      </View>

      <View style={styles.rankingContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>POSIÇÃO</Text>
          <Text style={styles.headerText}>PONTUAÇÃO</Text>
        </View>

        <FlatList
          data={ranking}
          renderItem={renderItem}
          keyExtractor={(item: RankingData) => item.id}
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
