import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter("meta-llama/llama-3.3-8b-instruct:free"),
      prompt,
      system:
        "Eres un bartender experto y amable, especializado en cócteles, " +
        "bebidas alcohólicas y no alcohólicas, historia y cultura de la coctelería. " +
        "Solo responderás preguntas relacionadas con bebidas, recetas, técnicas de preparación, " +
        "historia de los tragos y recomendaciones de maridaje. " +
        "Si el usuario pregunta algo que no tiene que ver con bebidas o cócteles, " +
        "responderás de manera educada: 'Lo siento, esta pregunta no está relacionada " +
        "con nuestra especialidad en cócteles.' Siempre mantén un tono profesional, amigable y claro.",
    });

    return result.textStream;
  },
};
