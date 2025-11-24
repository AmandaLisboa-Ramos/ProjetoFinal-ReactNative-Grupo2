import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function QuestionCard({
  question,
  options,
  selectedOption,
  correctOption,
  onSelectOption
}) {
  return (
    <View className="bg-white p-5 rounded-2xl shadow-lg w-11/12">

      <Text className="text-xl font-bold mb-4 text-red-700">
        {question}
      </Text>

      {options.map((opt, index) => {
        let bg = "bg-red-100";

        if (selectedOption !== null) {
          if (index === correctOption) bg = "bg-green-300";
          if (index === selectedOption && selectedOption !== correctOption)
            bg = "bg-red-400";
        }

        return (
          <TouchableOpacity
            key={index}
            disabled={selectedOption !== null}
            className={`p-4 rounded-xl mb-3 ${bg}`}
            onPress={() => onSelectOption(index)}
          >
            <Text className="text-lg">{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
