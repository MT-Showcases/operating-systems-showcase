export interface Page {
  title: string;
  slug: string;
  description: string;
  eyebrow: string;
  intro: string;
  agentSystem: {
    title: string;
    intro: string;
    roles: AgentRole[];
  };
  workflow: {
    title: string;
    intro: string;
    steps: WorkflowStep[];
  };
  stack: {
    title: string;
    items: StackItem[];
  };
  metrics: MetricItem[];
  resources: {
    title: string;
    items: ResourceItem[];
  };
  team: {
    title: string;
    members: TeamMember[];
  };
}

export interface AgentRole {
  name: string;
  role: string;
  output: string;
}

export interface WorkflowStep {
  title: string;
  content: string;
}

export interface StackItem {
  label: string;
  value: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface ResourceItem {
  name: string;
  description: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const openclawPage: Page = {
  title: 'Come e stato costruito questo sito',
  slug: 'openclaw',
  description: 'Il sistema di agenti AI OpenClaw che ha creato e gestisce Operating Systems Showcase',
  eyebrow: 'OpenClaw AI Workflow',
  intro:
    'Operating Systems Showcase nasce da una pipeline di agenti AI orchestrati: ogni agente ha un ruolo definito e produce output didattici concreti.',
  agentSystem: {
    title: 'Il Sistema di Agenti AI',
    intro: 'Ruoli distinti, obiettivo condiviso: creare contenuto tecnico chiaro, pratico e verificabile.',
    roles: [
      {
        name: 'Spark',
        role: 'Assistente alla Docenza',
        output: 'Coordina il materiale didattico, decide la struttura e orchestra gli agenti per ogni task.',
      },
      {
        name: 'Showcaser',
        role: 'Sviluppatore Web',
        output: 'Converte il contenuto in pagine Next.js interattive seguendo una pipeline strutturata.',
      },
      {
        name: 'Quizard',
        role: 'Creatore Quiz',
        output: 'Gestisce quiz e modalita di apprendimento per consolidare ogni capitolo.',
      },
      {
        name: 'GammaBot',
        role: 'Generatore Slide',
        output: 'Produce slide didattiche in formato pronto aula.',
      },
      {
        name: 'Notebook',
        role: 'Knowledge Companion',
        output: 'Prepara fonti e sintesi per podcast, video e materiali di supporto.',
      },
    ],
  },
  workflow: {
    title: 'Come Nasce un Capitolo',
    intro: 'Dall idea iniziale alla pubblicazione, il flusso e in fasi coordinate.',
    steps: [
      {
        title: 'Michele definisce argomento e target',
        content: 'Un input iniziale con obiettivi didattici, livello studenti e taglio del contenuto.',
      },
      {
        title: 'Spark struttura il capitolo',
        content: 'Genera sezioni, takeaway, discussioni, quiz ed esercizi in formato pronto per sviluppo.',
      },
      {
        title: 'Showcaser costruisce la pagina',
        content: 'Implementa la pagina in Next.js e attiva il deploy automatico tramite GitHub e Vercel.',
      },
      {
        title: 'Quizard prepara il quiz interattivo',
        content: 'Configura le domande in modalita Practice, Mastering ed Exam.',
      },
      {
        title: 'GammaBot genera le slide',
        content: 'Produce il materiale per la lezione sincrona e il ripasso.',
      },
    ],
  },
  stack: {
    title: 'Stack Tecnologico',
    items: [
      { label: 'Frontend', value: 'Next.js 15, React 19, TypeScript, Tailwind CSS' },
      { label: 'Deploy', value: 'Vercel con auto-deploy da GitHub' },
      { label: 'AI Provider', value: 'OpenClaw (orchestrazione agenti)' },
      { label: 'Quiz', value: 'Wayground' },
      { label: 'Slide', value: 'Gamma.app' },
      { label: 'Audio e Video', value: 'Google NotebookLM' },
      { label: 'Version Control', value: 'GitHub (org MT-Showcases)' },
    ],
  },
  metrics: [
    { label: 'Capitoli pubblicati', value: '11' },
    { label: 'Ore di contenuto', value: '~16h' },
    { label: 'Quiz per capitolo', value: '1+' },
    { label: 'Lab pratici', value: 'Disponibili' },
    { label: 'Glossario integrato', value: 'Sempre attivo' },
    { label: 'Fonti verificabili', value: 'Per capitolo' },
  ],
  resources: {
    title: 'Risorse e Tecnologie Utilizzate',
    items: [
      {
        name: 'OpenClaw',
        description: 'Piattaforma di orchestrazione agenti AI',
        url: 'https://openclaw.ai',
      },
      {
        name: 'GitHub',
        description: 'Repository del sito e flusso di collaborazione',
        url: 'https://github.com/MT-Showcases/',
      },
      {
        name: 'Vercel',
        description: 'Hosting e deploy continuo',
        url: 'https://vercel.com',
      },
      {
        name: 'Next.js',
        description: 'Framework React usato dal frontend',
        url: 'https://nextjs.org',
      },
      {
        name: 'Google NotebookLM',
        description: 'Analisi fonti e sintesi per media didattici',
        url: 'https://notebooklm.google.com',
      },
      {
        name: 'Wayground',
        description: 'Quiz e learning management',
        url: 'https://wayground.com',
      },
    ],
  },
  team: {
    title: 'Il Team',
    members: [
      {
        name: 'Michele Tornello',
        role: 'Docente e Ideatore',
        bio: 'Docente della Steve Jobs Academy di Catania. Ha progettato il corso, supervisionato i capitoli e guidato la pipeline di agenti.',
      },
      {
        name: 'Spark e Team di Agenti AI',
        role: 'Produzione Didattica e Sviluppo',
        bio: 'Sistema orchestrato con OpenClaw che trasforma obiettivi formativi in contenuti, quiz, pagine e materiali di supporto.',
      },
    ],
  },
};
