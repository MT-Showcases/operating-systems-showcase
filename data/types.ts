export interface QuizQuestion {
  id: string;
  type: 'multiple_choice' | 'true_false' | 'multiple_select' | 'match' | 'reorder' | 'fill_blank' | 'open_ended';
  question: string;
  options?: string[];
  correctAnswer: number | boolean | string | string[];
  explanation: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  keyPoints?: string[];
}

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  objectives: string[];
  sections: Section[];
  keyTakeaways: string[];
  quiz: QuizQuestion[];
  glossary: GlossaryEntry[];
}
