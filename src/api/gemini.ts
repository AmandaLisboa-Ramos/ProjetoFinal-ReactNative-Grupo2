import { GEMINI_API_KEY } from "@env";

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
export interface Question {
  question: string;
  options: string[];
  answer: number;
}

const prompt = `Gere 5 perguntas ÚNICAS e VARIADAS sobre Natal (PT-BR).
Aborde temas diversos: História, Comidas, Músicas, Filmes e Tradições pelo mundo. Evite perguntas repetitivas.

Retorne APENAS um array de arrays (JSON válido e completo) neste formato:
[
  ["Pergunta 1?", ["Op1", "Op2", "Op3", "Op4"], "Resposta Correta"],
  ["Pergunta 2?", ["Op1", "Op2", "Op3", "Op4"], "Resposta Correta"]
]

Sem markdown, sem texto extra, apenas o JSON puro.`;

export async function getGeminiQuestions(): Promise<Question[]> {
  try {
    console.log('GEMINI_API_KEY loaded:', GEMINI_API_KEY ? 'Yes' : 'No');
    if (GEMINI_API_KEY) {
      console.log('Key length:', GEMINI_API_KEY.length);
      console.log('Key start:', GEMINI_API_KEY.substring(0, 4));
    }

    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 4096,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Details:', errorText);
      throw new Error(`Erro API: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Raw API response:', JSON.stringify(data, null, 2));
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      console.error('No text in response. Full data:', data);
      throw new Error('Formato de resposta inválido');
    }
    console.log('Text response from API:', textResponse);
    const jsonText = textResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const rawQuestions = JSON.parse(jsonText);

    if (!Array.isArray(rawQuestions)) {
      throw new Error('Formato de perguntas inválido');
    }

    return rawQuestions.map((item: any) => {
      const questionText = item[0];
      const options = [...item[1]];
      const correctAnswer = item[2];

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
    });

  } catch (error) {
    console.error('Erro ao buscar perguntas:', error);
    throw error;
  }
}

