import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { questionStyles as Styles } from '../../screens/Quiz/styles';

type Props = {
  question: string;
  options: string[];
  selectedOption: number | null;
  correctOption: number | null;
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
    <View style={Styles.container}>
      <Text style={Styles.question}>{question}</Text>

      {options.map((opt, index) => {
        let backgroundColor = "#ffffff";

        if (selectedOption !== null) {
          if (index === correctOption) backgroundColor = '#4caf50';
          else if (index === selectedOption) backgroundColor = '#e53935';
        }
        
        return (
          <TouchableOpacity
            key={index}
            disabled={selectedOption !== null}
            style={[Styles.optionButton, { backgroundColor }]}
            onPress={() => onSelect(index)}
          >
            <Text style={Styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};