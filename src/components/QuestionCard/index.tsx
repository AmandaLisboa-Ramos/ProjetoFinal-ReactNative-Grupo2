import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  question: string;
  options: string[];
  selectedOption: number | null;
  correctOption: number;
  onSelect: (index: number) => void;
};

export default function QuestionCard({
  question,
  options,
  selectedOption,
  correctOption,
  onSelect,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>

      {options.map((opt, index) => {
        const isCorrect = index === correctOption;
        const isSelected = index === selectedOption;
        const isAnswered = selectedOption !== null;

        let buttonStyle = [styles.optionButton];
        let textStyle = [styles.optionText];

        if (isAnswered) {
          if (isCorrect) {
            buttonStyle.push(styles.correctOption);
            textStyle.push(styles.correctText);
          } else if (isSelected) {
            buttonStyle.push(styles.wrongOption);
            textStyle.push(styles.wrongText);
          }
        }

        return (
          <TouchableOpacity
            key={index}
            disabled={isAnswered}
            style={buttonStyle}
            onPress={() => onSelect(index)}
          >
            <Text style={textStyle}>{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};