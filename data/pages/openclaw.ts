export interface Page {
  title: string;
  slug: string;
  description: string;
  sections: PageSection[];
}

export interface PageSection {
  id: string;
  title: string;
  content: string;
  subsections?: PageSubsection[];
}

export interface PageSubsection {
  title: string;
  content: string;
}

export const openclawPage: Page = {
  title: 'Come e\u0300 stato costruito questo sito',
  slug: 'openclaw',
  description: 'Il sistema di agenti AI OpenClaw che ha creato e gestisce Operating Systems Showcase',
  sections: [
    {
      id: 'agents-system',
      title: 'Il Sistema di Agenti AI',
      content:
        'Operating Systems Showcase e\u0300 stato costruito da un sistema di agenti AI orchestrati con OpenClaw, ciascuno con un ruolo specifico nel creare contenuto didattico di qualita\u0300.',
      subsections: [
        {
          title: 'Spark ✨ — Assistente alla Docenza',
          content:
            'Coordina tutto il materiale didattico. Decide struttura, contenuti e quali agenti attivare per ogni task. Output: Orchestrazione completa del corso.',
        },
        {
          title: 'Showcaser 🎨 — Sviluppatore Web',
          content:
            'Converte il contenuto didattico in pagine web interattive. Ha creato questo sito seguendo una pipeline strutturata di 7 fasi. Output: Le pagine che stai leggendo adesso.',
        },
        {
          title: 'Quizard 🎯 — Creatore Quiz',
          content:
            'Gestisce quiz interattivi e sessioni di apprendimento. Output: Esperienze di testing e pratica per ogni capitolo.',
        },
        {
          title: 'GammaBot 🎨 — Generatore Slide',
          content:
            'Genera presentazioni didattiche pronte per la lezione. Output: Slide PDF/PPTX per uso in aula.',
        },
        {
          title: 'Notebook 📓 — Knowledge Companion',
          content:
            'Prepara le fonti per audio e video sintetizzati. Output: Podcast, video riassuntivi e infografiche complementari.',
        },
      ],
    },
    {
      id: 'workflow',
      title: 'Come Nasce un Capitolo',
      content: 'Il processo da idea a pagina pubblicata avviene in fasi coordinate:',
      subsections: [
        {
          title: '1. Michele definisce l\'argomento',
          content: 'Un messaggio su Telegram con l\'argomento, il target di studenti e il tipo di contenuto.',
        },
        {
          title: '2. Spark struttura il contenuto',
          content: 'Spark genera la struttura del capitolo: sezioni, key takeaway, domande di discussione, quiz e esercizi in TypeScript.',
        },
        {
          title: '3. Showcaser costruisce la pagina web',
          content: 'Il contenuto viene convertito in una pagina Next.js interattiva. Push su GitHub → deploy automatico su Vercel.',
        },
        {
          title: '4. Quizard crea il quiz',
          content: 'Le domande vengono caricate e configurate con modalita\u0300 di apprendimento (Mastering, Practice, Exam).',
        },
        {
          title: '5. GammaBot genera le slide',
          content: 'Le slide della lezione vengono generate pronte per la classe.',
        },
      ],
    },
    {
      id: 'tech-stack',
      title: 'Stack Tecnologico',
      content: 'Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS\nDeploy: Vercel (auto-deploy da GitHub)\nAI Provider: OpenClaw (orchestrazione agenti)\nQuiz: Wayground\nSlide: Gamma.app\nAudio/Video: Google NotebookLM\nVersion Control: GitHub (MT-Showcases org)',
    },
    {
      id: 'stats',
      title: 'Il Sito in Numeri',
      content: '- 8 capitoli di Operating Systems\n- Circa 16 ore di contenuto didattico\n- Quiz interattivi per ogni capitolo\n- Lab e esercitazioni pratici\n- Glossario integrato con termini chiave\n- Fonti verificabili e riferimenti accademici',
    },
    {
      id: 'resources',
      title: 'Risorse e Tecnologie Utilizzate',
      content: 'OpenClaw: Piattaforma di orchestrazione agenti AI — https://openclaw.ai\nGitHub: Repository del sito — https://github.com/MT-Showcases/\nVercel: Hosting e deploy continuo — https://vercel.com\nNext.js: Framework React — https://nextjs.org\nGoogle NotebookLM: Analisi fonti e sintesi — https://notebooklm.google.com\nWayground: Quiz e learning management — https://wayground.com',
    },
    {
      id: 'team',
      title: 'Il Team',
      content: 'Michele Tornello — Docente e Ideatore\nDocente della Steve Jobs Academy di Catania. Ha progettato il corso "Sistemi Operativi", supervisionato ogni capitolo e guidato il sistema di agenti per creare questo sito.\n\nSpark ✨ e Team di Agenti AI\nIl sistema di agenti orchestrato con OpenClaw che ha realizzato il materiale didattico e questo sito.',
    },
  ],
};
