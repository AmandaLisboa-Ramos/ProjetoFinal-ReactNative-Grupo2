import { Score } from '../context/QuizContext';

export type RootStackParamList = {
  Home: { playerName: string };
  Quiz: { questionIndex: number, totalQuestions: number };
  Result: { score: number, totalQuestions: number };
  Ranking: { scores: Score[], playerName: string };
};