import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import QuestionCard from '../../components/QuestionCard';

export default function QuizScreen({ navigation }) {
  const questions = [
    {
      question: "Qual é a rena famosa do nariz vermelho?",
      options: ["Dasher", "Rudolph", "Comet", "Vixen"],
      answer: 1
    },
    {
      question: "O que o Papai Noel usa na cintura?",
      options: ["Cinto preto", "Capa azul", "Corrente", "Faixa dourada"],
      answer: 0
    },
    {
      question: "Onde o Papai Noel mora?",
      options: ["Islândia", "Polo Norte", "Noruega", "Ártico"],
      answer: 1
    }
  ];

  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const current = questions[index];

  function handleSelect(optionIndex) {
    setSelectedOption(optionIndex);

    if (optionIndex === current.answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex(index + 1);
        setSelectedOption(null);
      } else {
        navigation.navigate('Result', { score });
      }
    }, 1200);
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
