import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../types';
import HomeScreen from '../../screens/Home';
import RankingScreen from '../../screens/Ranking';
import { tabStyles } from './styles';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tabStyles.activeTintColor,
        tabBarInactiveTintColor: tabStyles.inactiveTintColor,
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{ 
          title: 'Início',
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen 
        name="RankingTab" 
        component={RankingScreen}
        options={{ 
          title: 'Ranking',
          tabBarLabel: 'Ranking',
        }}
      />
    </Tab.Navigator>
  );
}

