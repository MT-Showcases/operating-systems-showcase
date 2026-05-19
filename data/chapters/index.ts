import type { Chapter } from '@/data/types';

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: 'what-is-os',
    title: 'Cos’è un Sistema Operativo',
    description: 'La vista d’insieme: perché l’OS esiste, cosa controlla e perché senza di lui il computer non è davvero usabile.',
    duration: '2h',
    objectives: [
      'Spiegare il ruolo del sistema operativo in modo semplice ma corretto.',
      'Distinguere hardware, applicazioni e software di base.',
      'Riconoscere le funzioni essenziali che un OS deve offrire.',
    ],
    sections: [
      {
        id: 'bridge',
        title: 'Il ponte tra macchina e persone',
        content:
          'Un sistema operativo è il software che rende un computer realmente utilizzabile. Coordina CPU, memoria, file system e dispositivi, poi offre ai programmi un ambiente stabile in cui lavorare.\n\nSe pensi all’hardware come a una squadra di componenti potenti ma scollegate, il sistema operativo è il regista che assegna ruoli, tempi e regole.',
        keyPoints: [
          'Senza sistema operativo, usare l’hardware richiederebbe istruzioni molto più complesse.',
          'L’OS media tra utente, applicazioni e componenti fisici.',
          'La sua presenza è continua anche quando non lo noti.',
        ],
      },
      {
        id: 'core-functions',
        title: 'Le funzioni che non possono mancare',
        content:
          'Ogni OS serio deve almeno fare quattro cose bene: gestire processi, memoria, file e dispositivi di input/output.\n\nIn pratica decide quale programma può usare la CPU, quanta RAM può occupare, dove salvare i dati e come dialogare con stampanti, tastiera, disco o rete.',
        keyPoints: [
          'Gestione processi = ordine nell’esecuzione dei programmi.',
          'Gestione memoria = isolamento e uso efficiente della RAM.',
          'Gestione file = organizzazione persistente dei dati.',
        ],
      },
      {
        id: 'examples',
        title: 'Dove lo incontri tutti i giorni',
        content:
          'Windows, macOS, Android, iOS e Linux sono tutti sistemi operativi, anche se hanno interfacce e obiettivi diversi.\n\nIl concetto chiave è che cambiano la forma esterna, ma il compito resta lo stesso: far collaborare software e hardware in modo affidabile.',
        keyPoints: [
          'Desktop, server e smartphone usano OS diversi ma con principi simili.',
          'Linux è molto importante perché espone bene i meccanismi di sistema.',
        ],
      },
    ],
    keyTakeaways: [
      'Il sistema operativo non è un optional: è il livello che rende il computer utilizzabile.',
      'Le sue responsabilità principali sono risorse, isolamento e servizi ai programmi.',
      'Capire l’OS significa capire cosa succede dietro ogni app che apri.',
    ],
    discussionPrompts: [
      'Quale differenza percepisci tra cambiare applicazione e cambiare sistema operativo?',
      'Perché uno smartphone ha comunque bisogno di un OS forte anche se l’utente vede solo icone e app?',
    ],
    quiz: [
      {
        id: 'ch1-q1',
        type: 'multiple_choice',
        question: 'Qual è il compito più corretto di un sistema operativo?',
        options: [
          'Gestire le risorse del computer e offrire servizi ai programmi',
          'Sostituire completamente l’hardware',
          'Servire solo per aprire file grafici',
          'Essere un antivirus integrato',
        ],
        correctAnswer: 0,
        explanation: 'Il sistema operativo coordina risorse e servizi: non sostituisce l’hardware e non coincide con un singolo programma.',
      },
      {
        id: 'ch1-q2',
        type: 'true_false',
        question: 'Un’applicazione può gestire direttamente tutte le risorse hardware senza OS in scenari normali.',
        correctAnswer: false,
        explanation: 'In un computer moderno le applicazioni passano dal sistema operativo per avere accesso controllato alle risorse.',
      },
      {
        id: 'ch1-q3',
        type: 'multiple_choice',
        question: 'Quale tra questi è un esempio di sistema operativo?',
        options: ['Linux', 'Chrome', 'Figma', 'VS Code'],
        correctAnswer: 0,
        explanation: 'Linux è un sistema operativo. Gli altri esempi sono applicazioni o strumenti.',
      },
    ],
    glossary: ['operating-system', 'kernel', 'process', 'ram', 'file-system'],
    media: [
      {
        type: 'infographic',
        title: 'Infografica Capitolo 1',
        description: 'Sintesi visiva: ruolo del sistema operativo, funzioni principali.',
        placeholderPath: 'media/ch01-what-is-os/infographic.webp',
        notes: 'ready',
      },
    ],
  },
  {
    id: 2,
    slug: 'hardware-cpu',
    title: 'Architettura del Computer e CPU',
    description: 'Le basi hardware che servono davvero per capire le scelte del sistema operativo.',
    duration: '2h',
    objectives: [
      'Capire il ruolo di CPU, RAM, storage e I/O.',
      'Collegare le risorse fisiche alle responsabilità del sistema operativo.',
      'Leggere il computer come insieme coordinato, non come pezzi isolati.',
    ],
    sections: [
      {
        id: 'cpu-cycle',
        title: 'CPU: dove succede l’esecuzione',
        content:
          'La CPU esegue istruzioni una dopo l’altra a velocità altissima. Per questo l’OS deve decidere con attenzione quale processo eseguire, quando interromperlo e quando passare a un altro.\n\nQuando parli di multitasking non stai dicendo che la CPU fa magia: stai dicendo che il sistema alterna il lavoro in modo intelligente.',
        keyPoints: [
          'La CPU è la risorsa più contesa quando più programmi vogliono lavorare insieme.',
          'Lo scheduler nasce proprio per distribuire il tempo CPU.',
        ],
      },
      {
        id: 'memory-storage',
        title: 'RAM e storage: veloce contro persistente',
        content:
          'La RAM è veloce ma volatile: contiene ciò che serve subito ai programmi. Lo storage è più lento ma conserva i dati nel tempo.\n\nIl sistema operativo deve spostarsi continuamente tra queste due logiche: prestazioni immediate e persistenza dei dati.',
        keyPoints: [
          'RAM = lavoro in corso.',
          'Storage = archivio durevole.',
          'L’OS bilancia velocità e affidabilità.',
        ],
      },
      {
        id: 'io',
        title: 'Input, output e dispositivi',
        content:
          'Tastiera, mouse, monitor, rete, dischi e periferiche non parlano da soli con ogni programma. Servono regole, driver e gestione centralizzata.\n\nQuesto è uno dei motivi per cui il sistema operativo è indispensabile: unifica dispositivi diversi dietro interfacce più coerenti.',
        keyPoints: [
          'L’I/O ha tempi e comportamenti molto diversi rispetto alla CPU.',
          'L’OS riduce la complessità per i programmi applicativi.',
        ],
      },
    ],
    keyTakeaways: [
      'Capire CPU, RAM e storage aiuta a capire perché l’OS deve fare scelte continue.',
      'Il computer non è solo potenza: è coordinamento di risorse con velocità diverse.',
      'L’I/O è centrale perché il sistema vive anche fuori dalla CPU.',
    ],
    discussionPrompts: [
      'Perché un PC può sembrare lento anche con una CPU buona?',
      'Quali problemi nascerebbero se ogni app dovesse parlare direttamente con ogni dispositivo?',
    ],
    quiz: [
      {
        id: 'ch2-q1',
        type: 'multiple_choice',
        question: 'Quale risorsa è volatile?',
        options: ['RAM', 'SSD', 'Hard disk', 'USB spenta'],
        correctAnswer: 0,
        explanation: 'La RAM perde il contenuto allo spegnimento ed è pensata per il lavoro in corso.',
      },
      {
        id: 'ch2-q2',
        type: 'multiple_choice',
        question: 'Perché il sistema operativo deve conoscere bene CPU e I/O?',
        options: [
          'Per distribuire risorse con tempi diversi tra programmi e dispositivi',
          'Per sostituire il BIOS',
          'Per evitare l’uso della RAM',
          'Per trasformare file in processi',
        ],
        correctAnswer: 0,
        explanation: 'CPU, memoria e dispositivi hanno caratteristiche diverse: l’OS deve coordinarli.',
      },
      {
        id: 'ch2-q3',
        type: 'true_false',
        question: 'Lo storage è pensato soprattutto per conservare i dati nel tempo.',
        correctAnswer: true,
        explanation: 'Esatto: SSD e hard disk puntano alla persistenza dei dati.',
      },
    ],
    glossary: ['cpu', 'ram', 'file-system', 'scheduler'],
    media: [
      {
        type: 'infographic',
        title: 'Infografica Capitolo 2',
        description: 'Sintesi visiva: architettura del computer, CPU, RAM, storage e I/O.',
        placeholderPath: 'media/ch02-hardware-cpu/infographic.webp',
        notes: 'ready',
      },
      {
        type: 'video',
        title: 'Video Capitolo 2',
        description: 'Spiegazione video: architettura del computer e ruolo del sistema operativo.',
        placeholderPath: 'media/ch02-hardware-cpu/video.mp4',
        notes: 'ready',
      },
    ],
  },
  {
    id: 3,
    slug: 'kernel',
    title: 'Kernel, User Space e System Calls',
    description: 'Il cuore del sistema: dove finiscono le applicazioni e dove inizia il controllo vero delle risorse.',
    duration: '2.5h',
    objectives: [
      'Distinguere chiaramente kernel space e user space.',
      'Capire perché i programmi non possono toccare liberamente l’hardware.',
      'Spiegare il ruolo pratico delle system call.',
    ],
    sections: [
      {
        id: 'kernel-heart',
        title: 'Perché il kernel è separato',
        content:
          'Il kernel vive in una zona privilegiata del sistema perché deve controllare operazioni sensibili: memoria, processi, dispositivi, protezioni.\n\nSe ogni applicazione potesse fare le stesse cose senza limiti, un bug qualsiasi diventerebbe un problema per tutta la macchina.',
        keyPoints: [
          'Più privilegio significa più potere ma anche più rischio.',
          'La separazione protegge stabilità e sicurezza.',
        ],
      },
      {
        id: 'user-space',
        title: 'User space: libertà controllata',
        content:
          'Le applicazioni lavorano in user space, quindi con capacità limitate. Possono fare tantissimo, ma non modificare direttamente parti critiche del sistema.\n\nQuesto modello rende possibili isolamento, crash più contenuti e maggiore prevedibilità.',
        keyPoints: [
          'User space non significa debolezza: significa sicurezza progettata.',
          'Ogni programma vive in un confine più controllato.',
        ],
      },
      {
        id: 'syscalls',
        title: 'System call: la porta ufficiale',
        content:
          'Quando un programma deve aprire un file, creare un processo o inviare dati in rete, passa tramite una system call.\n\nÈ come fare una richiesta formale al kernel: “ho bisogno di questa operazione, puoi eseguirla per me in modo sicuro?”',
        keyPoints: [
          'Le system call trasformano richieste dei programmi in azioni di sistema controllate.',
          'Sono fondamentali per capire il rapporto tra software applicativo e OS.',
        ],
      },
    ],
    keyTakeaways: [
      'Il kernel è privilegiato perché deve proteggere e coordinare tutto il sistema.',
      'Le applicazioni girano in user space proprio per limitare i danni di errori o abusi.',
      'Le system call sono il ponte reale tra programmi e servizi di sistema.',
    ],
    discussionPrompts: [
      'Perché è meglio impedire a un’app di toccare direttamente la memoria di un’altra?',
      'In quali casi una system call rende il sistema più affidabile rispetto all’accesso diretto?',
    ],
    quiz: [
      {
        id: 'ch3-q1',
        type: 'multiple_choice',
        question: 'Chi ha accesso diretto e privilegiato alle risorse più sensibili?',
        options: ['Il kernel', 'Qualsiasi app utente', 'Il browser', 'Solo il file manager'],
        correctAnswer: 0,
        explanation: 'Il kernel è il livello privilegiato del sistema operativo.',
      },
      {
        id: 'ch3-q2',
        type: 'multiple_choice',
        question: 'A cosa serve una system call?',
        options: [
          'A permettere a un programma di chiedere un servizio al kernel',
          'A salvare automaticamente tutti i file',
          'A cambiare distribuzione Linux',
          'A sostituire la shell',
        ],
        correctAnswer: 0,
        explanation: 'Le system call sono l’interfaccia controllata tra user space e kernel.',
      },
      {
        id: 'ch3-q3',
        type: 'true_false',
        question: 'User space e kernel space sono separati anche per motivi di sicurezza e stabilità.',
        correctAnswer: true,
        explanation: 'Sì: la separazione riduce il rischio che un errore applicativo comprometta tutto il sistema.',
      },
    ],
    glossary: ['kernel', 'user-space', 'system-call', 'operating-system'],
    media: [
      {
        type: 'infographic',
        title: 'Infografica Capitolo 3',
        description: 'Sintesi visiva: kernel, user space e system call.',
        placeholderPath: 'media/ch03-kernel/infographic.webp',
        notes: 'ready',
      },
      {
        type: 'video',
        title: 'Video Capitolo 3',
        description: 'Spiegazione video: kernel, user space e system call.',
        placeholderPath: 'media/ch03-kernel/video.mp4',
        notes: 'ready',
      },
    ],
  },
  {
    id: 4,
    slug: 'processes',
    title: 'Processi, Thread e Scheduling',
    description: 'Come il sistema organizza l’esecuzione dei programmi, il multitasking e la competizione per la CPU.',
    duration: '3h',
    objectives: [
      'Definire processo e thread senza confonderli.',
      'Comprendere gli stati base di un processo.',
      'Capire il senso pratico dello scheduling.',
    ],
    sections: [
      {
        id: 'process-vs-thread',
        title: 'Processo vs thread',
        content:
          'Un processo è un contenitore di esecuzione con memoria e risorse proprie. Un thread è un flusso di lavoro dentro quel contenitore.\n\nLa differenza pratica è importante: i processi sono più isolati, i thread condividono di più e quindi collaborano più velocemente ma possono intralciarsi se progettati male.',
        keyPoints: [
          'Più isolamento nei processi, più condivisione nei thread.',
          'Confondere i due concetti porta a errori architetturali.',
        ],
      },
      {
        id: 'states',
        title: 'Gli stati base di un processo',
        content:
          'Un processo può essere pronto, in esecuzione, in attesa o terminato. Non sono etichette decorative: descrivono il punto del ciclo di vita in cui si trova.\n\nCapire questi stati aiuta a leggere meglio anche strumenti Linux come ps o top.',
        keyPoints: [
          'Non tutti i processi attivi stanno davvero usando la CPU in questo momento.',
          'Attesa e blocco sono normali quando si aspetta I/O.',
        ],
      },
      {
        id: 'scheduling',
        title: 'Scheduling: dare tempo a tutti senza caos',
        content:
          'Lo scheduler decide quale processo ottiene tempo CPU e per quanto. L’obiettivo non è solo “essere giusto”, ma mantenere il sistema reattivo e utile per l’utente.\n\nQui nasce il multitasking percepito: l’illusione efficace di molte cose che accadono insieme.',
        keyPoints: [
          'Lo scheduling bilancia priorità, reattività e throughput.',
          'La CPU viene condivisa a finestre di tempo molto piccole.',
        ],
      },
    ],
    keyTakeaways: [
      'Processi e thread non sono sinonimi.',
      'Gli stati dei processi aiutano a leggere il comportamento del sistema.',
      'Lo scheduler è il motivo per cui il multitasking sembra naturale.',
    ],
    discussionPrompts: [
      'Quando conviene usare più thread invece di più processi?',
      'Perché un processo in attesa non è per forza “bloccato male”?',
    ],
    quiz: [
      {
        id: 'ch4-q1',
        type: 'multiple_choice',
        question: 'Qual è la differenza più corretta tra processo e thread?',
        options: [
          'Il processo è più isolato; il thread condivide risorse del processo',
          'Sono esattamente la stessa cosa',
          'Il thread esiste solo fuori dal sistema operativo',
          'Il processo non usa memoria',
        ],
        correctAnswer: 0,
        explanation: 'Il thread vive dentro un processo e condivide parte del suo contesto.',
      },
      {
        id: 'ch4-q2',
        type: 'true_false',
        question: 'Un processo in attesa di I/O può non usare CPU in quel momento.',
        correctAnswer: true,
        explanation: 'Esatto: può essere sospeso in attesa di una risorsa o di un evento.',
      },
      {
        id: 'ch4-q3',
        type: 'multiple_choice',
        question: 'Perché serve lo scheduler?',
        options: [
          'Per assegnare tempo CPU ai processi in modo controllato',
          'Per sostituire il file system',
          'Per creare automaticamente utenti Linux',
          'Per eliminare la RAM',
        ],
        correctAnswer: 0,
        explanation: 'Lo scheduler distribuisce la CPU e rende possibile il multitasking pratico.',
      },
    ],
    glossary: ['process', 'thread', 'scheduler', 'cpu'],
  },
  {
    id: 5,
    slug: 'memory-filesystem',
    title: 'Memoria e File System',
    description: 'Come il sistema organizza dati e memoria: due pilastri che influenzano ogni attività su un computer.',
    duration: '2.5h',
    objectives: [
      'Capire la differenza tra memoria principale e memoria virtuale.',
      'Leggere file e directory come struttura gerarchica.',
      'Collegare file system e organizzazione pratica del sistema.',
    ],
    sections: [
      {
        id: 'memory-model',
        title: 'Memoria: spazio, isolamento e ordine',
        content:
          'La memoria non è solo “spazio libero”. È il luogo in cui i processi caricano codice e dati mentre lavorano.\n\nIl sistema operativo deve proteggerla, distribuirla e impedire che un processo invada il territorio di un altro.',
        keyPoints: [
          'La gestione memoria è una questione di sicurezza oltre che di prestazioni.',
          'L’isolamento impedisce corruzione e crash a catena.',
        ],
      },
      {
        id: 'virtual-memory',
        title: 'Memoria virtuale senza mito',
        content:
          'La memoria virtuale fa percepire a ogni processo uno spazio più ordinato e separato. Non significa “RAM infinita”, ma astrazione utile.\n\nPer uno studente junior basta capire due idee: isolamento e possibilità di appoggiarsi anche allo storage quando serve.',
        keyPoints: [
          'La memoria virtuale migliora protezione e flessibilità.',
          'Swap e storage possono aiutare, ma sono più lenti della RAM.',
        ],
      },
      {
        id: 'filesystem-tree',
        title: 'File system e struttura ad albero',
        content:
          'Un file system organizza i dati in directory e file, come una mappa gerarchica.\n\nQuesta struttura è ciò che rende possibile cercare, salvare, spostare e proteggere informazioni in modo coerente, soprattutto in Linux dove il file system è parte forte del ragionamento operativo.',
        keyPoints: [
          'File e directory non sono solo contenitori: hanno permessi e metadati.',
          'La gerarchia riduce il caos quando il sistema cresce.',
        ],
      },
    ],
    keyTakeaways: [
      'Memoria e file system sono due forme diverse di organizzazione delle risorse.',
      'La memoria virtuale serve soprattutto a isolare e coordinare.',
      'Capire la gerarchia dei file prepara bene alla pratica Linux.',
    ],
    discussionPrompts: [
      'Perché un sistema con poca RAM può comunque restare utilizzabile, anche se più lento?',
      'In che modo una buona struttura di directory aiuta davvero il lavoro tecnico?',
    ],
    quiz: [
      {
        id: 'ch5-q1',
        type: 'multiple_choice',
        question: 'La memoria virtuale serve soprattutto a…',
        options: [
          'Organizzare e isolare meglio lo spazio di memoria dei processi',
          'Sostituire completamente la RAM fisica',
          'Eliminare il file system',
          'Creare utenti Linux',
        ],
        correctAnswer: 0,
        explanation: 'La memoria virtuale è prima di tutto un meccanismo di organizzazione e protezione.',
      },
      {
        id: 'ch5-q2',
        type: 'true_false',
        question: 'Il file system organizza dati e directory in modo gerarchico.',
        correctAnswer: true,
        explanation: 'Sì: la struttura ad albero è una delle basi del ragionamento su file e cartelle.',
      },
      {
        id: 'ch5-q3',
        type: 'multiple_choice',
        question: 'Quale affermazione è più corretta?',
        options: [
          'RAM e storage hanno ruoli diversi ma collaborano nella vita del sistema',
          'RAM e storage sono la stessa cosa',
          'La RAM serve solo per salvare file a lungo termine',
          'Lo storage è sempre più veloce della RAM',
        ],
        correctAnswer: 0,
        explanation: 'La RAM gestisce il lavoro attivo, lo storage conserva i dati nel tempo.',
      },
    ],
    glossary: ['ram', 'virtual-memory', 'file-system'],
  },
  {
    id: 6,
    slug: 'linux-fundamentals',
    title: 'Fondamenti di Linux',
    description: 'Dalla filosofia generale fino al terminale: il punto in cui la teoria diventa ambiente reale di lavoro.',
    duration: '2h',
    objectives: [
      'Capire cos’è Linux e cosa significa parlare di distribuzioni.',
      'Orientarsi tra shell, terminale e struttura del file system Linux.',
      'Leggere le directory chiave senza impararle a memoria in modo cieco.',
    ],
    sections: [
      {
        id: 'linux-overview',
        title: 'Linux come ecosistema operativo',
        content:
          'Linux non è solo “schermo nero con testo”. È un ecosistema molto usato su server, cloud, embedded e anche desktop.\n\nIl suo valore didattico è enorme perché espone bene concetti di sistema: processi, file, permessi, utenti, configurazioni e strumenti testuali.',
        keyPoints: [
          'Linux è sia sistema reale di lavoro sia ottimo laboratorio mentale.',
          'Molti concetti OS diventano più concreti proprio qui.',
        ],
      },
      {
        id: 'shell-terminal',
        title: 'Shell e terminale: differenza pratica',
        content:
          'Il terminale è l’interfaccia in cui scrivi, la shell è il programma che interpreta. Distinguere i due evita confusione inutile.\n\nQuando usi Bash o Zsh, stai parlando con una shell attraverso il terminale.',
        keyPoints: [
          'Terminale = spazio di interazione.',
          'Shell = interprete dei comandi.',
        ],
        terminalCommands: [
          {
            command: 'echo $SHELL',
            output: '/bin/bash',
            explanation: 'Mostra quale shell stai usando nella sessione corrente.',
          },
        ],
      },
      {
        id: 'linux-tree',
        title: 'Le directory chiave da riconoscere',
        content:
          'In Linux quasi tutto parte dalla radice /. Da lì si sviluppano directory con ruoli distinti come /home, /etc, /usr e /var.\n\nL’obiettivo non è memorizzare tutto subito, ma capire che ogni cartella ha uno scopo operativo specifico.',
        keyPoints: [
          '/home contiene lo spazio utente.',
          '/etc ospita configurazioni di sistema.',
          '/var raccoglie dati variabili come log e cache.',
        ],
        terminalCommands: [
          {
            command: 'ls /',
            output: 'bin  boot  dev  etc  home  usr  var',
            explanation: 'Elenca le directory principali alla radice del file system Linux.',
          },
        ],
        commandReferences: [
          {
            command: 'pwd',
            syntax: 'pwd',
            description: 'Mostra il percorso assoluto della directory corrente.',
            examples: ['pwd', 'cd /etc && pwd'],
          },
        ],
      },
    ],
    keyTakeaways: [
      'Linux è un ambiente operativo concreto, non un esercizio astratto.',
      'Terminale e shell sono collegati ma non identici.',
      'La struttura del file system Linux diventa leggibile quando la associ a scopi reali.',
    ],
    discussionPrompts: [
      'Perché Linux è così presente su server e cloud?',
      'Quale vantaggio ti dà capire davvero /home, /etc e /var invece di ricordarli a memoria?',
    ],
    quiz: [
      {
        id: 'ch6-q1',
        type: 'multiple_choice',
        question: 'Qual è la differenza corretta tra terminale e shell?',
        options: [
          'Il terminale è l’interfaccia, la shell interpreta i comandi',
          'Sono sempre la stessa identica cosa',
          'La shell è hardware',
          'Il terminale esiste solo su Windows',
        ],
        correctAnswer: 0,
        explanation: 'Il terminale ospita l’interazione; la shell traduce ed esegue.',
      },
      {
        id: 'ch6-q2',
        type: 'true_false',
        question: 'In Linux la directory /etc contiene tipicamente file di configurazione.',
        correctAnswer: true,
        explanation: 'Corretto: è uno dei suoi ruoli principali.',
      },
      {
        id: 'ch6-q3',
        type: 'multiple_choice',
        question: 'Che cos’è una distribuzione Linux?',
        options: [
          'Un insieme coerente di kernel, pacchetti e strumenti',
          'Un singolo comando del terminale',
          'Un antivirus specifico',
          'Un file system temporaneo',
        ],
        correctAnswer: 0,
        explanation: 'Una distribuzione combina Linux con tool, package manager e scelte di configurazione.',
      },
    ],
    glossary: ['distribution', 'shell', 'terminal', 'file-system', 'operating-system'],
  },
  {
    id: 7,
    slug: 'linux-commands',
    title: 'Comandi Linux, Utenti, Gruppi e Permessi',
    description: 'Il capitolo più pratico: navigazione, gestione file, processi e sicurezza operativa di base.',
    duration: '4h',
    objectives: [
      'Usare comandi Linux di base in scenari reali e non solo a memoria.',
      'Capire utenti, gruppi e permessi in modo operativo.',
      'Leggere processi e file system con strumenti essenziali.',
    ],
    sections: [
      {
        id: 'navigation',
        title: 'Navigare senza perdersi',
        content:
          'I primi comandi utili non sono “da smanettoni”: servono a capire dove sei e cosa stai guardando.\n\nCon pwd, ls e cd costruisci orientamento. Senza orientamento, qualsiasi comando successivo diventa rischioso.',
        keyPoints: [
          'Prima di modificare, verifica sempre il contesto.',
          'Sapere dove sei evita errori banali ma costosi.',
        ],
        terminalCommands: [
          {
            command: 'pwd',
            output: '/home/studente/progetto-linux',
            explanation: 'Mostra la directory corrente: è il tuo punto di partenza operativo.',
          },
          {
            command: 'ls -la',
            output: 'drwxr-xr-x .\ndrwxr-xr-x ..\n-rw-r--r-- appunti.txt',
            explanation: 'Elenca file normali e nascosti con dettagli su permessi, owner e dimensioni.',
          },
        ],
        commandReferences: [
          {
            command: 'cd',
            syntax: 'cd <percorso>',
            description: 'Sposta la shell in un’altra directory.',
            examples: ['cd /etc', 'cd ..', 'cd ~/Documenti'],
          },
        ],
      },
      {
        id: 'files',
        title: 'Creare, copiare, spostare e leggere file',
        content:
          'touch, mkdir, cp, mv, rm e cat sono strumenti base ma potentissimi. La differenza la fa sempre lo scenario: stai creando un file? organizzando una cartella? spostando un output?\n\nL’errore classico è usare rm senza essere certi del percorso o del contenuto che stai cancellando.',
        keyPoints: [
          'I comandi file vanno sempre collegati a intenzione e percorso.',
          'rm è utile ma non perdona leggerezza.',
        ],
        terminalCommands: [
          {
            command: 'mkdir appunti-os && touch appunti-os/comandi.txt',
            output: '',
            explanation: 'Crea una cartella di lavoro e un file iniziale per raccogliere note o risultati.',
          },
          {
            command: 'cat appunti-os/comandi.txt',
            output: '',
            explanation: 'Legge il contenuto di un file testuale direttamente dal terminale.',
          },
          {
            command: 'rm -i appunti-os/comandi.txt',
            output: "rm: remove regular empty file 'appunti-os/comandi.txt'?",
            explanation: 'La flag -i aggiunge una conferma interattiva, utile quando vuoi evitare errori rapidi.',
            warning: 'Mai usare rm in modo impulsivo su percorsi che non hai verificato con pwd o ls.',
          },
        ],
        commandReferences: [
          {
            command: 'cp',
            syntax: 'cp <origine> <destinazione>',
            description: 'Copia file o directory con opzioni adeguate.',
            examples: ['cp note.txt backup-note.txt', 'cp -r progetto progetto-backup'],
          },
          {
            command: 'mv',
            syntax: 'mv <origine> <destinazione>',
            description: 'Sposta o rinomina file e cartelle.',
            examples: ['mv bozza.txt finale.txt', 'mv immagini ./backup/'],
          },
        ],
      },
      {
        id: 'users-permissions',
        title: 'Utenti, gruppi, permessi e processi base',
        content:
          'In Linux ogni file e ogni processo vive dentro un contesto di identità e regole. Sapere chi è il proprietario e quali permessi sono attivi è fondamentale.\n\nQui entra in gioco il trio owner, group e others. È la base per capire chmod, chown e anche comandi come ps o kill quando lavori con processi reali.',
        keyPoints: [
          'I permessi descrivono chi può leggere, scrivere o eseguire.',
          'ps e kill aiutano a osservare e governare processi in corso.',
        ],
        terminalCommands: [
          {
            command: 'chmod 755 script.sh',
            output: '',
            explanation: 'Assegna pieno accesso al proprietario e lettura/esecuzione a gruppo e altri.',
          },
          {
            command: 'ps aux | grep node',
            output: 'studente  1823 ... node server.js',
            explanation: 'Cerca processi Node attivi combinando lista processi e filtro testuale.',
          },
          {
            command: 'kill 1823',
            output: '',
            explanation: 'Invia un segnale di terminazione a un processo specifico tramite PID.',
            warning: 'Termina processi solo se sai cosa sono: potresti interrompere un servizio utile.',
          },
        ],
        commandReferences: [
          {
            command: 'chmod',
            syntax: 'chmod [opzioni] permessi file',
            description: 'Modifica i permessi di file e directory.',
            examples: ['chmod 644 note.txt', 'chmod u+x script.sh', 'chmod -R 755 public/'],
          },
          {
            command: 'chown',
            syntax: 'chown [utente][:gruppo] file',
            description: 'Cambia proprietario e gruppo di un file.',
            examples: ['chown michele note.txt', 'chown root:root config.yml'],
          },
        ],
      },
    ],
    keyTakeaways: [
      'Ogni comando ha senso solo se collegato a un problema concreto.',
      'Orientamento nel file system e lettura dei permessi vengono prima della velocità.',
      'Utenti, gruppi, processi e file fanno parte dello stesso ecosistema operativo.',
    ],
    discussionPrompts: [
      'Perché pwd e ls sono spesso più importanti di un comando avanzato?',
      'Quando un chmod sbagliato può creare un problema di sicurezza o di collaborazione?',
    ],
    quiz: [
      {
        id: 'ch7-q1',
        type: 'multiple_choice',
        question: 'Quale comando ti mostra la directory corrente?',
        options: ['pwd', 'ps', 'grep', 'kill'],
        correctAnswer: 0,
        explanation: 'pwd significa print working directory.',
      },
      {
        id: 'ch7-q2',
        type: 'multiple_choice',
        question: 'Cosa esprime chmod 755?',
        options: [
          'Owner con rwx, gruppo e altri con r-x',
          'Tutti con sola scrittura',
          'Nessun permesso per il proprietario',
          'Solo root può eseguire il file',
        ],
        correctAnswer: 0,
        explanation: '7 = rwx, 5 = r-x, 5 = r-x.',
      },
      {
        id: 'ch7-q3',
        type: 'true_false',
        question: 'ps può aiutarti a osservare i processi attivi nel sistema.',
        correctAnswer: true,
        explanation: 'Sì: è uno dei comandi base per leggere lo stato dei processi.',
      },
      {
        id: 'ch7-q4',
        type: 'multiple_choice',
        question: 'Perché usare rm -i può essere utile?',
        options: [
          'Per aggiungere una conferma prima della cancellazione',
          'Per rendere il file invisibile',
          'Per cambiare owner',
          'Per trasformare rm in comando di copia',
        ],
        correctAnswer: 0,
        explanation: 'La conferma interattiva riduce il rischio di cancellazioni impulsive.',
      },
    ],
    glossary: ['shell', 'terminal', 'permissions', 'chmod', 'chown', 'process', 'root', 'sudo'],
  },
  {
    id: 8,
    slug: 'security-best-practices',
    title: 'Sicurezza Base, Buone Pratiche e Uso Reale',
    description: 'Chiudere il percorso con il mindset corretto: prudenza, privilegi, errori comuni e comportamento professionale.',
    duration: '2h',
    objectives: [
      'Capire quando servono privilegi elevati e quando no.',
      'Riconoscere errori operativi comuni su Linux.',
      'Adottare un comportamento più professionale e sicuro sul sistema.',
    ],
    sections: [
      {
        id: 'root-sudo',
        title: 'Utente normale, root e sudo',
        content:
          'Lavorare sempre come root è comodo solo in apparenza. In realtà aumenta il rischio di fare danni con un singolo comando.\n\nIl flusso sano è: lavori come utente normale e usi sudo solo per l’operazione che richiede davvero privilegi elevati.',
        keyPoints: [
          'Più privilegio = più responsabilità.',
          'sudo riduce l’esposizione rispetto a sessioni root permanenti.',
        ],
        terminalCommands: [
          {
            command: 'sudo apt update',
            output: 'Hit:1 ...\nReading package lists... Done',
            explanation: 'Esegue un’operazione amministrativa mantenendo la sessione utente normale.',
            warning: 'Usa sudo solo se hai chiaro cosa stai per eseguire e perché.',
          },
        ],
      },
      {
        id: 'common-mistakes',
        title: 'Errori comuni da evitare',
        content:
          'I danni più frequenti non nascono da comandi “super avanzati”, ma da fretta, percorsi sbagliati e privilegi usati senza contesto.\n\nTre esempi classici: cancellare nella cartella sbagliata, modificare permessi in modo troppo permissivo, lanciare comandi con sudo senza averli capiti.',
        keyPoints: [
          'Controllare contesto e percorso è una forma di sicurezza.',
          'Permessi troppo aperti non sono comodità: sono rischio.',
        ],
      },
      {
        id: 'real-world',
        title: 'Uso reale e abitudini sane',
        content:
          'Nel lavoro vero conviene sviluppare piccole discipline: leggere l’output, usare la cronologia shell, testare prima in cartelle innocue, documentare i comandi utili.\n\nLa professionalità su Linux non significa ricordare cento comandi, ma saperli usare con attenzione e ragionamento.',
        keyPoints: [
          'Capire l’output conta quanto scrivere il comando.',
          'Le abitudini sane abbassano errori e stress operativo.',
        ],
      },
    ],
    keyTakeaways: [
      'La sicurezza base in Linux è fatta di privilegi minimi e attenzione al contesto.',
      'Root e sudo vanno usati con intenzione, non per abitudine.',
      'Il comportamento professionale nasce da metodo, verifica e cautela.',
    ],
    discussionPrompts: [
      'Quale differenza pratica c’è tra “sapere un comando” e “saperlo usare bene”?',
      'Perché la fretta è una delle principali cause di errore operativo su Linux?',
    ],
    quiz: [
      {
        id: 'ch8-q1',
        type: 'multiple_choice',
        question: 'Qual è l’approccio più sano ai privilegi elevati?',
        options: [
          'Usare l’utente normale e sudo solo quando serve',
          'Lavorare sempre come root',
          'Disattivare i permessi',
          'Evitare di leggere l’output',
        ],
        correctAnswer: 0,
        explanation: 'Il principio del privilegio minimo riduce errori e danni potenziali.',
      },
      {
        id: 'ch8-q2',
        type: 'true_false',
        question: 'Permessi troppo aperti possono creare un problema di sicurezza.',
        correctAnswer: true,
        explanation: 'Sì: concedere accessi inutili espone dati e script a modifiche indesiderate.',
      },
      {
        id: 'ch8-q3',
        type: 'multiple_choice',
        question: 'Quale abitudine è più professionale?',
        options: [
          'Verificare percorso e output prima di comandi delicati',
          'Saltare direttamente ai comandi più aggressivi',
          'Usare sempre root per comodità',
          'Ignorare gli errori di shell',
        ],
        correctAnswer: 0,
        explanation: 'Metodo e verifica fanno parte della sicurezza operativa quotidiana.',
      },
    ],
    glossary: ['sudo', 'root', 'permissions', 'shell', 'terminal'],
  },
];

export const chaptersBySlug = chapters.reduce<Record<string, Chapter>>((accumulator, chapter) => {
  accumulator[chapter.slug] = chapter;
  return accumulator;
}, {});
