import { Score } from '../context/QuizContext';

export type RootStackParamList = {
<<<<<<< HEAD
  Home: { playerName: string };
  Quiz: { questionIndex: number, totalQuestions: number };
  Result: { score: number, totalQuestions: number };
  Ranking: { scores: Score[], playerName: string };
=======
  Home: undefined;
  Quiz: undefined;
  Result: { score: number };
  Ranking: undefined;
};

// Tipos para navegação do Tab Navigator
export type TabParamList = {
  HomeTab: undefined;
  RankingTab: undefined;
>>>>>>> 08d62239c30be5a28abff5a22ffe3feabba3947d
};