import type { QuizQuestion } from '@/data/types';

export function normalizeQuestion(question: QuizQuestion): { options: string[]; correctIndex: number } {
  if (question.type === 'true_false') {
    return {
      options: ['Vero', 'Falso'],
      correctIndex: question.correctAnswer === true ? 0 : 1,
    };
  }
  return {
    options: question.options ?? [],
    correctIndex: Number(question.correctAnswer),
  };
}

export function normalizeMultipleSelectQuestion(question: QuizQuestion): { options: string[]; correctAnswers: string[] } {
  return {
    options: question.options ?? [],
    correctAnswers: Array.isArray(question.correctAnswer) ? question.correctAnswer.map(String) : [],
  };
}

export function buildWrongAnswerPrompt(
  question: QuizQuestion,
  selectedLabel: string,
  correctLabel: string
): string {
  return [
    `Domanda quiz: ${question.question}`,
    `Risposta scelta: ${selectedLabel}`,
    `Risposta corretta: ${correctLabel}`,
    `Spiegazione disponibile: ${question.explanation}`,
    '',
    'Spiegami in modo semplice perche la mia risposta e sbagliata, quale concetto del sistema operativo sto confondendo e fammi un esempio concreto.',
  ].join('\n');
}
