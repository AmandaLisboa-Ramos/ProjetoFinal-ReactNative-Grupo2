const GEMINI_API_KEY = 'AIzaSyDyHzd7FyIN_1AUPLVUylTiKaBQpzR2AXQ';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

export interface Question {
  question: string;
  options: string[];
  answer: number;
}

const prompt = `Gere 9 perguntas ÚNICAS e VARIADAS sobre Natal (PT-BR).
Aborde temas diversos: História, Comidas, Músicas, Filmes e Tradições pelo mundo. Evite perguntas repetitivas.

Para ser mais RÁPIDO, retorne APENAS um array de arrays (JSON minificado) neste formato compacto:
[
  ["Pergunta 1?", ["Op1", "Op2", "Op3", "Op4"], "Resposta Correta"],
  ["Pergunta 2?", ["Op1", "Op2", "Op3", "Op4"], "Resposta Correta"]
]

Sem markdown, sem chaves de objeto, apenas os dados crus.`;

export async function getGeminiQuestions(): Promise<Question[]> {
  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.8, // Aumentei um pouco para mais variedade
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro API: ${response.status}`);
    }

    const data = await response.json();
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      throw new Error('Formato de resposta inválido');
    }

    // Limpa o texto JSON
    const jsonText = textResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const rawQuestions = JSON.parse(jsonText);

    if (!Array.isArray(rawQuestions)) {
      throw new Error('Formato de perguntas inválido');
    }

    // Mapeia do formato compacto para o objeto Question e embaralha
    return rawQuestions.map((item: any) => {
      // item é [pergunta, opcoes, resposta]
      const questionText = item[0];
      const options = [...item[1]];
      const correctAnswer = item[2];

      // Algoritmo de Fisher-Yates para embaralhar opções
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

