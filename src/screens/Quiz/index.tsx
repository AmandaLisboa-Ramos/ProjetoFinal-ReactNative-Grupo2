import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import QuestionCard from '../../components/QuestionCard';
import { styles } from './styles';

type NavigationProp = any;

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
        const res = await fetch('https://tryvia.ptr.red/api.php?amount=10');
        const data = await res.json();

        const formatted = data.results.map((item: any) => {

          const opts = shuffle([...item.incorrect_answers, item.correct_answer]);
          return {
            question: item.question,
            options: opts,
            answer: opts.indexOf(item.correct_answer),
          };
        });

        if (mounted) {
          setQuestions(formatted);
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

    if (optionIndex === current.answer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        navigation.navigate('Result', { score });
      }
    }, 1000);
  }

  if (loading) {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#ff9d00" />
      <Text style={styles.loadingText}>Carregando perguntas...</Text>
    </View>
  );
}

  if (!current) {
  return (
    <View style={[styles.loadingContainer, { padding: 20 }]}>
      <Text style={styles.errorText}>
        Não foi possível carregar perguntas. Tente novamente mais tarde.
      </Text>
    </View>
  );
}

    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem vindo ao Quiz!</Text>
      </View>

      <Text style={styles.progressText}>
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
