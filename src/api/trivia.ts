export interface TriviaQuestion {
  question: string;
  options: string[];
  answer: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function getHardQuestion(): Promise<TriviaQuestion> {
  try {
    const response = await fetch('https://tryvia.ptr.red/api.php?amount=1&difficulty=hard');
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error('Nenhuma pergunta retornada da API');
    }

    const item = data.results[0];
    const options = shuffle([...item.incorrect_answers, item.correct_answer]);

    return {
      question: item.question,
      options: options,
      answer: options.indexOf(item.correct_answer),
    };
  } catch (error) {
    console.error('Erro ao buscar pergunta difícil:', error);
    throw error;
  }
}
