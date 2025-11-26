import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, MountainsofChristmas_400Regular, MountainsofChristmas_700Bold } from '@expo-google-fonts/mountains-of-christmas';
import { ActivityIndicator, View } from 'react-native';
// import  from './src/context/QuizContext';
import StackNavigator from './src/navigation/stack/StackNavigator';
import Background from './src/screens/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    MountainsofChristmas_400Regular,
    MountainsofChristmas_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f3d0f' }}>
        <ActivityIndicator size="large" color="#c41e3a" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Background>
        <StatusBar style="light" />
        <StackNavigator />
      </Background>
    </NavigationContainer>
  );
}