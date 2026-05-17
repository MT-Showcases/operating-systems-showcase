import type { GlossaryEntry } from '@/data/types';

// Re-export tipo come GlossaryTerm per compatibilità con consumer
export type GlossaryTerm = GlossaryEntry;

export const glossaryTerms: GlossaryEntry[] = [
  {
    id: 'operating-system',
    term: 'sistema operativo',
    shortDefinition: 'Software di base che coordina hardware, applicazioni e utente.',
    definition:
      'Il sistema operativo è il software fondamentale che gestisce le risorse del computer, offre servizi ai programmi e crea un ambiente utilizzabile per persone e applicazioni. Senza di lui CPU, memoria e dispositivi restano risorse scollegate e difficili da usare.',
    category: 'OS',
  },
  {
    id: 'kernel',
    term: 'kernel',
    shortDefinition: 'Cuore del sistema operativo con accesso diretto alle risorse hardware.',
    definition:
      'Il kernel è la parte centrale del sistema operativo. Decide come usare CPU, memoria, file system e dispositivi, applica protezione tra processi e fornisce le system call che i programmi usano per chiedere servizi al sistema.',
    category: 'OS',
  },
  {
    id: 'user-space',
    term: 'user space',
    shortDefinition: 'Area in cui girano applicazioni e processi normali con privilegi limitati.',
    definition:
      'Lo user space è lo spazio in cui eseguono browser, editor, server e altri programmi ordinari. Qui i processi non possono toccare direttamente memoria o hardware sensibili: devono passare dal kernel.',
    category: 'OS',
    aliases: ['spazio utente'],
  },
  {
    id: 'system-call',
    term: 'system call',
    shortDefinition: 'Richiesta controllata con cui un programma chiede un servizio al kernel.',
    definition:
      'Una system call è il ponte tra applicazioni e kernel. Quando un programma vuole leggere un file, aprire una connessione o creare un processo, invoca una system call invece di accedere direttamente all’hardware.',
    category: 'OS',
    aliases: ['syscall', 'system calls'],
  },
  {
    id: 'cpu',
    term: 'CPU',
    shortDefinition: 'Unità centrale che esegue istruzioni e coordina il lavoro computazionale.',
    definition:
      'La CPU esegue istruzioni, cambia stato ai processi e collabora con il sistema operativo per il multitasking. L’OS decide quale processo usare sulla CPU e per quanto tempo.',
    category: 'Hardware',
    aliases: ['processore'],
  },
  {
    id: 'ram',
    term: 'RAM',
    shortDefinition: 'Memoria principale veloce usata dai programmi mentre sono in esecuzione.',
    definition:
      'La RAM contiene dati e istruzioni necessari ai programmi attivi. È veloce ma volatile: quando la macchina si spegne, il contenuto si perde. Il sistema operativo la distribuisce tra processi evitando conflitti e sprechi.',
    category: 'Hardware',
  },
  {
    id: 'process',
    term: 'processo',
    shortDefinition: 'Istanza in esecuzione di un programma con memoria e stato propri.',
    definition:
      'Un processo è un programma in esecuzione con spazio di memoria, file aperti, permessi e stato propri. Il sistema operativo lo crea, lo sospende, lo riprende e lo termina.',
    category: 'Processes',
    aliases: ['processi'],
  },
  {
    id: 'thread',
    term: 'thread',
    shortDefinition: 'Flusso di esecuzione interno a un processo che condivide memoria con altri thread.',
    definition:
      'Un thread è una linea di esecuzione dentro un processo. Più thread condividono parte dello stesso contesto, quindi comunicano più velocemente ma richiedono attenzione su sincronizzazione e risorse condivise.',
    category: 'Processes',
  },
  {
    id: 'scheduler',
    term: 'scheduler',
    shortDefinition: 'Meccanismo con cui il sistema decide chi usa la CPU e quando.',
    definition:
      'Lo scheduler è il componente che assegna tempo CPU ai processi. Alterna esecuzione, attese e priorità per mantenere il sistema reattivo e bilanciato.',
    category: 'Processes',
    aliases: ['scheduling'],
  },
  {
    id: 'virtual-memory',
    term: 'memoria virtuale',
    shortDefinition: 'Tecnica che fa percepire a ogni processo uno spazio memoria separato e continuo.',
    definition:
      'La memoria virtuale isola i processi e permette di usare più memoria di quella fisicamente disponibile tramite paginazione e swap. Per lo studente è importante capirla come strumento di protezione e organizzazione, non come magia infinita.',
    category: 'OS',
  },
  {
    id: 'file-system',
    term: 'file system',
    shortDefinition: 'Struttura con cui il sistema organizza file, cartelle e metadati.',
    definition:
      'Il file system definisce come i dati vengono memorizzati e recuperati. Gestisce nomi, directory, permessi, dimensioni e posizione logica dei file.',
    category: 'Files',
    aliases: ['filesystem'],
  },
  {
    id: 'shell',
    term: 'shell',
    shortDefinition: 'Interprete di comandi che traduce istruzioni testuali in azioni sul sistema.',
    definition:
      'La shell è il programma che riceve i tuoi comandi nel terminale e li esegue. Bash e Zsh sono esempi diffusi. Non è il kernel, ma un livello pratico con cui l’utente interagisce col sistema.',
    category: 'Linux',
  },
  {
    id: 'terminal',
    term: 'terminale',
    shortDefinition: 'Interfaccia testuale da cui si usa la shell e si controlla Linux.',
    definition:
      'Il terminale è la finestra o interfaccia da cui invii comandi alla shell. È lo spazio operativo più utile per navigare, ispezionare file, leggere processi e automatizzare attività.',
    category: 'Linux',
  },
  {
    id: 'distribution',
    term: 'distribuzione',
    shortDefinition: 'Versione di Linux che combina kernel, pacchetti e strumenti di sistema.',
    definition:
      'Una distribuzione Linux è un insieme coerente di kernel, package manager, librerie e strumenti pronti all’uso. Ubuntu, Fedora e Debian sono distribuzioni con scelte diverse ma stessa base Linux.',
    category: 'Linux',
    aliases: ['distro'],
  },
  {
    id: 'root',
    term: 'root',
    shortDefinition: 'Utente amministratore con privilegi massimi sul sistema.',
    definition:
      'Root è l’utente con poteri completi sul sistema. Può modificare file sensibili, installare software e terminare processi di altri utenti. Proprio per questo va usato con cautela.',
    category: 'Security',
    aliases: ['superuser'],
  },
  {
    id: 'sudo',
    term: 'sudo',
    shortDefinition: 'Comando che esegue una singola operazione con privilegi elevati.',
    definition:
      'sudo permette a un utente autorizzato di eseguire un comando con privilegi amministrativi senza lavorare sempre come root. Riduce il rischio operativo rispetto all’uso costante dell’account amministratore.',
    category: 'Security',
  },
  {
    id: 'permissions',
    term: 'permessi',
    shortDefinition: 'Regole che stabiliscono chi può leggere, scrivere o eseguire un file.',
    definition:
      'I permessi in Linux definiscono accessi per proprietario, gruppo e altri utenti. Le tre azioni base sono read, write ed execute. Sono uno dei meccanismi di sicurezza più concreti da capire presto.',
    category: 'Security',
    aliases: ['permesso'],
  },
  {
    id: 'chmod',
    term: 'chmod',
    shortDefinition: 'Comando Linux per cambiare i permessi di file e directory.',
    definition:
      'chmod modifica i permessi con sintassi simbolica o numerica. Ad esempio 755 assegna pieno accesso al proprietario e sola lettura/esecuzione a gruppo e altri.',
    category: 'Linux',
  },
  {
    id: 'chown',
    term: 'chown',
    shortDefinition: 'Comando Linux per cambiare proprietario e gruppo di un file.',
    definition:
      'chown serve a trasferire ownership di file e cartelle. È utile quando un servizio o uno script non riesce a lavorare perché il proprietario attuale è sbagliato.',
    category: 'Linux',
  },
];

export function getTermById(termId: string) {
  return glossaryTerms.find((term) => term.id === termId);
}

export function getTermsByIds(termIds: string[]) {
  return glossaryTerms.filter((term) => termIds.includes(term.id));
}

// Estrai categorie uniche dal glossario
export const CATEGORIES = Array.from(
  new Set(glossaryTerms.map((term) => term.category))
);
