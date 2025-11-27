import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import QuestionCard from '../../components/QuestionCard';
import { getGeminiQuestions } from '../../api/gemini';
import { getHardQuestion } from '../../api/trivia';

type NavigationProp = any;

export default function QuizScreen({ navigation }: { navigation: NavigationProp }) {

  const [questions, setQuestions] = useState<
    { question: string; options: string[]; answer: number }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const current = questions[index] || null;

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        // Busca 9 perguntas do Gemini sobre Natal
        const geminiQuestions = await getGeminiQuestions();
        
        // Busca 1 pergunta difícil da API externa
        const hardQuestion = await getHardQuestion();
        
        // Combina as perguntas (9 do Gemini + 1 da API externa)
        const allQuestions = [...geminiQuestions, hardQuestion];

        if (mounted) {
          setQuestions(allQuestions);
          setLoading(false);
        }
      } catch (err) {
        console.warn('Erro ao carregar perguntas:', err);
        if (mounted) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  function handleSelect(optionIndex: number) {
    if (!current) return;

    setSelectedOption(optionIndex);

    const isCorrect = optionIndex === current.answer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        // Calcula o score final incluindo a resposta atual
        const finalScore = isCorrect ? score + 1 : score;
        navigation.navigate('Result', { score: finalScore });
      }
    }, 1000);
  }

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 12 }}>Carregando perguntas...</Text>
      </View>
    );
  }

  if (!current) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Text>Não foi possível carregar perguntas. Tente novamente mais tarde.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#b91c1c', marginBottom: 16 }}>
        Pergunta {index + 1}/{questions.length}
      </Text>

      <QuestionCard
        question={current.question}
        options={current.options}
        selectedOption={selectedOption}
        correctOption={current.answer}
        onSelect={handleSelect}
      />
    </View>
  );
}
