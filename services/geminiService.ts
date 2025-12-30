import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ABOUT_TEXT, PROJECTS, CONTACT_EMAIL, SITE_TITLE, ROLE_TITLE } from '../constants';

// Initialize the API client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const MODEL_NAME = 'gemini-3-flash-preview';

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for ${SITE_TITLE}'s portfolio website. 
${SITE_TITLE} is a ${ROLE_TITLE}.
Your goal is to answer visitor questions politely, professionally, and elegantly in English, reflecting the high-end nature of the portfolio and the sensitivity of a classical musician.

Here is the context about Adriana:
${ABOUT_TEXT}

Here are some of her recent performances and repertoire highlights:
${PROJECTS.map(p => `- ${p.title} (${p.category}, ${p.year}): ${p.description}`).join('\n')}

Contact Email: ${CONTACT_EMAIL}

Guidelines:
1. ALWAYS answer in English.
2. Keep answers concise (under 100 words) unless asked for details.
3. Maintain a sophisticated, artistic, and warm tone.
4. If asked about booking for concerts, weddings, or lessons, suggest contacting via email.
5. Only answer questions related to Adriana's music, teaching, or the portfolio content.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my connection to the AI is not currently configured (Missing API Key).";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "I apologize, I couldn't process your request at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "There was a momentary error. Please try again.";
  }
};