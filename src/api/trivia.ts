import { GEMINI_API_KEY } from "@env";

export interface TriviaQuestion {
  question: string;
  options: string[];
  answer: number;
}

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

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
    const prompt = `Gere 1 pergunta DIFÍCIL sobre Natal (PT-BR).

Retorne APENAS um array com UMA pergunta neste formato JSON:
[["Pergunta difícil?", ["Opção1", "Opção2", "Opção3", "Opção4"], "Resposta Correta"]]

Sem markdown, sem texto extra, apenas o JSON puro.`;

    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Details:', errorText);
      throw new Error(`Erro API: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      console.error('No text in response. Full data:', data);
      throw new Error('Formato de resposta inválido');
    }

    const jsonText = textResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const rawQuestions = JSON.parse(jsonText);

    if (!Array.isArray(rawQuestions) || rawQuestions.length === 0) {
      throw new Error('Formato de perguntas inválido');
    }

    const item = rawQuestions[0];
    const questionText = item[0];
    const options = [...item[1]];
    const correctAnswer = item[2];

    // Embaralhar opções
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    const correctIndex = options.indexOf(correctAnswer);

    return {
      question: questionText,
      options: options,
      answer: correctIndex,
    };
  } catch (error) {
    console.error('Erro ao buscar pergunta difícil:', error);
    throw error;
  }
}
