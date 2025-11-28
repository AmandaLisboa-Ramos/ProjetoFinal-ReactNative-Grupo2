import { Score } from '../context/QuizContext';

export type RootStackParamList = {
  MainTabs: undefined;
  Quiz: { questionIndex: number, totalQuestions: number };
  Result: { score: number, totalQuestions: number };
};

export type BottomTabParamList = {
  Home: undefined;
  Ranking: undefined;
};