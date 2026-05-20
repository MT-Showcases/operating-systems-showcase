export type QuizQuestionType =
  | 'multiple_choice'
  | 'true_false'
  | 'multiple_select'
  | 'match'
  | 'reorder'
  | 'fill_blank'
  | 'open_ended';

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  question: string;
  options?: string[];
  correctAnswer: number | boolean | string | string[];
  explanation: string;
}

export interface GlossaryEntry {
  id: string;
  term: string;
  shortDefinition: string;
  /** Alias di shortDefinition usato da alcuni consumer */
  shortDef?: string;
  definition: string;
  category: 'OS' | 'Hardware' | 'Linux' | 'Security' | 'Processes' | 'Files';
  aliases?: string[];
  /** Sinonimi del termine (separati dagli alias quando serve distinzione semantica) */
  synonyms?: string[];
  /** Esempi pratici opzionali (codice, comandi, scenari) */
  examples?: string[];
  /** Slug di capitoli correlati */
  relatedChapters?: string[];
  /** ID di altri termini correlati */
  relatedTerms?: string[];
}

export interface TerminalCommandBlock {
  command: string;
  output?: string;
  explanation: string;
  warning?: string;
}

export interface CommandReference {
  command: string;
  syntax: string;
  description: string;
  examples: string[];
}

export interface InfoTableRow {
  cells: string[];
  highlight?: boolean;
}

export interface InfoTable {
  title?: string;
  headers: string[];
  rows: InfoTableRow[];
}

export interface LabStep {
  goal: string;
  command: TerminalCommandBlock;
}

export interface LabBlock {
  title?: string;
  intro?: string;
  steps: LabStep[];
}

export interface Section {
  id: string;
  title: string;
  content: string;
  keyPoints?: string[];
  terminalCommands?: TerminalCommandBlock[];
  commandReferences?: CommandReference[];
  infoTables?: InfoTable[];
  labBlock?: LabBlock;
}

export interface MediaPlaceholder {
  type: 'video' | 'podcast' | 'infographic' | 'resource';
  title: string;
  description: string;
  estimatedDuration?: string;
  placeholderPath: string;
  notes?: string;
}

export interface ChapterDeepDiveResource {
  level: 'essenziale' | 'vai-oltre' | 'deep-dive';
  title: string;
  description: string;
  url?: string;
}

export interface ChapterMissionStep {
  title: string;
  instruction: string;
  whyItMatters: string;
}

export interface ChapterMission {
  title: string;
  intro: string;
  winCondition: string;
  steps: ChapterMissionStep[];
}

export interface ChapterScenarioOption {
  label: string;
  feedback: string;
  isCorrect?: boolean;
}

export interface ChapterScenario {
  title: string;
  situation: string;
  question: string;
  options: ChapterScenarioOption[];
  takeaway: string;
}

export interface ChapterInteractivePilot {
  mission: ChapterMission;
  scenario: ChapterScenario;
}

export interface ChapterPilotContent {
  whyItMatters?: string[];
  commonMistakes?: string[];
  realWorld?: string[];
  miniTask?: string[];
  deepDive?: ChapterDeepDiveResource[];
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  description: string;
  duration: string;
  objectives: string[];
  sections: Section[];
  keyTakeaways: string[];
  discussionPrompts: string[];
  quiz: QuizQuestion[];
  glossary: string[];
  media?: MediaPlaceholder[];
  pilotContent?: ChapterPilotContent;
  interactivePilot?: ChapterInteractivePilot;
}
