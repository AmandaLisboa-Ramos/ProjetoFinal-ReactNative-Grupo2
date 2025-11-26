import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import  from './src/context/QuizContext';
import StackNavigator from './src/navigation/stack/StackNavigator';
import Background from './src/screens/Background';

export default function App() {
  return (
    <NavigationContainer>
      <Background>
        <StatusBar style="light" />
        <StackNavigator />
      </Background>
    </NavigationContainer>
  );
}