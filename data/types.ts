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
  /** Alias of shortDefinition used by some consumers */
  shortDef?: string;
  definition: string;
  category: 'OS' | 'Hardware' | 'Linux' | 'Security' | 'Processes' | 'Files';
  aliases?: string[];
  /** Term synonyms (kept separate from aliases when semantic distinction matters) */
  synonyms?: string[];
  /** Optional practical examples (code, commands, scenarios) */
  examples?: string[];
  /** Related chapter slugs */
  relatedChapters?: string[];
  /** IDs of related terms */
  relatedTerms?: string[];
}

export interface TerminalCommandBlock {
  title?: string;
  command: string;
  output?: string;
  explanation: string;
  warning?: string;
}

export interface CommandExample {
  command: string;
  description: string;
}

export interface CommandReference {
  command: string;
  syntax: string;
  description: string;
  examples: Array<string | CommandExample>;
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

export interface SandboxExecuteRequest {
  command: string;
  chapterSlug?: string;
  stepGoal?: string;
}

export interface SandboxExecuteResponse {
  provider: 'mock';
  stdout: string;
  stderr?: string;
  exitCode: number;
  durationMs: number;
  blocked?: boolean;
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
  scenario?: ChapterScenario;
}

export interface ChapterPilotContent {
  whyItMatters?: string[];
  commonMistakes?: string[];
  realWorld?: string[];
  miniTask?: string[];
  deepDive?: ChapterDeepDiveResource[];
}

export type UserGroupNodeType = 'root' | 'group' | 'user';

export interface UserGroupNode {
  id: string;
  label: string;
  type: UserGroupNodeType;
  meta?: string;
  children?: UserGroupNode[];
}

export interface ProjectLabDownloadLink {
  label: string;
  filename: string;
  description?: string;
}

export interface ProjectLabStep {
  goal: string;
  context?: string;
  command: TerminalCommandBlock;
  whyItMatters?: string;
}

export interface ProjectLab {
  title: string;
  scenario: string;
  diagram: UserGroupNode;
  downloadLinks?: ProjectLabDownloadLink[];
  steps: ProjectLabStep[];
  winCondition?: string;
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
  projectLab?: ProjectLab;
}
