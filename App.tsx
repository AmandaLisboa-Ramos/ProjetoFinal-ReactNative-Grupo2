import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import  from './src/context/QuizContext';
import StackNavigator from './src/navigation/stack/StackNavigator';

export default function App() {
  return (
    // Tag do quiz>
      <NavigationContainer>
        <StatusBar style="light" />
        <StackNavigator />
      </NavigationContainer>
    // Tag do quiz>
  );
}