import type { GlossaryEntry } from '../types';

export interface GlossarioPage {
  title: string;
  slug: string;
  description: string;
  entries: GlossaryEntry[];
}

// Glossario estratto da tutti i capitoli OS
const glossaryEntries: GlossaryEntry[] = [
  {
    id: 'operating-system',
    term: 'Sistema Operativo',
    shortDefinition: 'Software che gestisce le risorse hardware e fornisce servizi alle applicazioni',
    definition:
      'Il sistema operativo (OS) e\u0300 il software fondamentale che coordina CPU, memoria, file system e dispositivi di input/output. Permette alle applicazioni di accedere alle risorse hardware in modo controllato e offre servizi di base come la gestione dei processi, la memoria virtuale e il file system.',
    category: 'OS',
  },
  {
    id: 'kernel',
    term: 'Kernel',
    shortDefinition: 'Il nucleo privilegiato del sistema operativo',
    definition:
      'Il kernel e\u0300 il cuore del sistema operativo che gira con privilegi massimi. Gestisce processi, memoria, interruzioni e accesso diretto all\'hardware. E\u0300 separato dal user space per proteggere l\'integrità e la stabilità del sistema.',
    category: 'OS',
    aliases: ['nucleo del sistema operativo'],
  },
  {
    id: 'process',
    term: 'Processo',
    shortDefinition: 'Istanza di un programma in esecuzione con memoria e risorse proprie',
    definition:
      'Un processo e\u0300 un\'istanza di un programma in esecuzione. Contiene spazio di memoria privato, file descriptor, variabili di ambiente e stato di esecuzione. Il kernel gestisce processi isolati per proteggere le risorse e impedire corruzione tra programmi.',
    category: 'Processes',
    aliases: ['task', 'istanza di esecuzione'],
  },
  {
    id: 'thread',
    term: 'Thread',
    shortDefinition: 'Flusso di esecuzione leggero che condivide risorse dentro un processo',
    definition:
      'Un thread e\u0300 un flusso di esecuzione leggero all\'interno di un processo. A differenza dei processi, i thread di uno stesso processo condividono la memoria e le risorse, rendendoli più leggeri ma più complessi da coordinare. Anche detto filo di esecuzione.',
    category: 'Processes',
    aliases: ['filo di esecuzione', 'lightweight process'],
  },
  {
    id: 'scheduler',
    term: 'Scheduler',
    shortDefinition: 'Componente del kernel che decide quale processo usa la CPU',
    definition:
      'Lo scheduler e\u0300 il componente del kernel responsabile di decidere quale processo ottiene tempo di CPU e per quanto tempo. Implementa algoritmi di scheduling (Round-Robin, EDF, Completely Fair Scheduler) per bilanciare equità, reattività e throughput. E\u0300 il motore del multitasking.',
    category: 'Processes',
  },
  {
    id: 'cpu',
    term: 'CPU (Unita\u0300 di Elaborazione Centrale)',
    shortDefinition: 'Il processore che esegue le istruzioni',
    definition:
      'La CPU (Central Processing Unit) e\u0300 il componente hardware che esegue le istruzioni dei programmi. Lavora a cicli di clock e può eseguire una sola istruzione per volta. Il sistema operativo gestisce come condividere il tempo CPU tra processi.',
    category: 'Hardware',
    aliases: ['processore', 'unita\u0300 di calcolo'],
  },
  {
    id: 'ram',
    term: 'RAM (Memoria ad Accesso Casuale)',
    shortDefinition: 'Memoria veloce ma volatile dove girano i programmi',
    definition:
      'La RAM e\u0300 la memoria principale del computer: veloce, volatile (si cancella allo spegnimento) e usata dal sistema operativo e dai processi per il lavoro immediato. A differenza dello storage, la RAM perde il contenuto quando il computer si spegne.',
    category: 'Hardware',
    aliases: ['memoria principale', 'memoria di lavoro'],
  },
  {
    id: 'file-system',
    term: 'File System',
    shortDefinition: 'Struttura gerarchica che organizza file e directory su storage',
    definition:
      'Il file system e\u0300 l\'organizzazione logica dei dati su un disco o memoria. Crea una gerarchia di directory e file con permessi, metadati e protezione. Esempi: ext4, NTFS, APFS. Consente il salvataggio persistente e il recupero ordinato dei dati.',
    category: 'Files',
    aliases: ['sistema di file', 'file tree'],
  },
  {
    id: 'system-call',
    term: 'System Call',
    shortDefinition: 'Richiesta da un programma al kernel per usare un servizio protetto',
    definition:
      'Una system call e\u0300 il meccanismo formale con cui i programmi in user space richiedono servizi al kernel. Esempi: open(), read(), write(), fork(), mmap(). Ogni system call causa un cambio di contesto da user mode a kernel mode e ritorno.',
    category: 'OS',
    aliases: ['syscall', 'chiamata di sistema'],
  },
  {
    id: 'user-space',
    term: 'User Space',
    shortDefinition: 'Area di memoria dove girano i programmi con privilegi limitati',
    definition:
      'User space e\u0300 la modalita\u0300 di esecuzione con privilegi limitati dove girano i programmi applicativi. Non possono accedere direttamente all\'hardware o alla memoria di altri processi. A contrasto del kernel space, dove il kernel ha accesso totale.',
    category: 'OS',
  },
  {
    id: 'interrupt',
    term: 'Interrupt',
    shortDefinition: 'Segnale che interrompe l\'esecuzione della CPU per gestire un evento',
    definition:
      'Un interrupt e\u0300 un segnale che causa l\'interruzione del programma in esecuzione. Può venire da dispositivi hardware (I/O interrupt) o software. Il kernel usa gli interrupt per gestire eventi come tastiera, mouse, timer e I/O da dispositivi.',
    category: 'Hardware',
  },
  {
    id: 'context-switch',
    term: 'Context Switch',
    shortDefinition: 'Cambio di processo durante il quale il kernel salva e ripristina lo stato',
    definition:
      'Un context switch e\u0300 il cambio da un processo a un altro. Il kernel salva lo stato del processo attuale (registri, stack, program counter) e carica lo stato del nuovo processo. E\u0300 fondamentale per il multitasking ma ha un costo in termini di prestazioni.',
    category: 'Processes',
  },
  {
    id: 'virtual-memory',
    term: 'Memoria Virtuale',
    shortDefinition: 'Astrazione che fa percepire a ogni processo spazio di memoria isolato',
    definition:
      'La memoria virtuale e\u0300 un\'astrazione che fa apparire a ogni processo uno spazio di memoria grande, ordinato e separato dagli altri. Usa paging e swap per mappare memoria virtuale in memoria fisica. Migliora isolamento, protezione e flessibilita\u0300.',
    category: 'OS',
  },
  {
    id: 'paging',
    term: 'Paging',
    shortDefinition: 'Tecnica di gestione memoria che divide la memoria in pagine fisse',
    definition:
      'Il paging divide la memoria principale in blocchi di dimensione fissa (pagine, tipicamente 4KB) e lo storage in blocchi corrispondenti (frame). Consente isolamento, protezione e la possiblita\u0300 di swappare pagine su disco.',
    category: 'OS',
  },
  {
    id: 'io-device',
    term: 'Dispositivo di I/O',
    shortDefinition: 'Periferica (tastiera, monitor, disco, rete) che comunica con il computer',
    definition:
      'Un dispositivo di I/O e\u0300 una periferica come tastiera, mouse, disco, monitor, stampante o interfaccia di rete. Il kernel usa driver e interrupt per gestire la comunicazione tra CPU e dispositivi. L\'I/O ha tempi molto più lenti della CPU.',
    category: 'Hardware',
    aliases: ['periferica', 'dispositivo'],
  },
  {
    id: 'permissions',
    term: 'Permessi (rwx)',
    shortDefinition: 'Diritti di lettura, scrittura ed esecuzione su file e directory',
    definition:
      'In Linux i permessi (rwx = read, write, execute) controllano chi può fare cosa su un file o directory. Si assegnano a owner, group e others. Rappresentati in ottale (es. 755 = rwx r-x r-x) o simbolico (es. u+x).',
    category: 'Linux',
    aliases: ['diritti di accesso', 'access rights'],
  },
  {
    id: 'sudo',
    term: 'sudo (Super User DO)',
    shortDefinition: 'Comando che consente di eseguire azioni con privilegi di root',
    definition:
      'sudo permette a un utente di eseguire comandi con privilegi elevati (come root) senza dover entrare in una sessione root permanente. Più sicuro di "su" perche\u0301 limita l\'esposizione ai privilegi massimi.',
    category: 'Linux',
  },
  {
    id: 'shell',
    term: 'Shell',
    shortDefinition: 'Interfaccia a riga di comando che interpreta i comandi dell\'utente',
    definition:
      'La shell e\u0300 un programma che accetta comandi da tastiera e li esegue. Bash e\u0300 la shell più diffusa su Linux e macOS. Supporta scripting, redirezione di I/O, pipe e job control.',
    category: 'Linux',
    aliases: ['terminale', 'command interpreter'],
  },
];

export const glossaryPage: GlossarioPage = {
  title: 'Glossario — Sistemi Operativi',
  slug: 'glossary',
  description: 'Definizioni dei termini chiave del corso Sistemi Operativi',
  entries: glossaryEntries,
};
