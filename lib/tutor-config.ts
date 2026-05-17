export const TUTOR_NAME = 'Nix';
export const TUTOR_TAGLINE = 'Il tuo assistente AI per questo corso di Sistemi Operativi';
export const TUTOR_PLACEHOLDER = `Chiedi a ${TUTOR_NAME}...`;
export const TUTOR_SYSTEM_IDENTITY = `Sei ${TUTOR_NAME}, il Tutor AI del corso Sistemi Operativi e Linux.`;
export const TUTOR_TEMPERATURE_DEFAULT = 0.3;

export const tutorConfig = {
  tone: 'concreto, diretto, orientato alla pratica Linux',
  audience: 'studenti Steve Jobs Academy Catania',
  providerStrategy: 'Groq llama-3.3-70b-versatile con fallback OpenAI',
};
