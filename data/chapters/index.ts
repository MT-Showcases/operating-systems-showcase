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
          'Un **sistema operativo** è il software che rende un computer realmente utilizzabile. Coordina **CPU**, **memoria**, **file system** e dispositivi, offrendo ai programmi un ambiente stabile in cui lavorare.\n\nSenza questo livello intermedio ogni applicazione dovrebbe gestire da sola hardware, periferiche e conflitti. *Il sistema operativo trasforma componenti scollegati in un sistema coerente*: decide chi lavora, chi aspetta e chi può usare una risorsa.',
        keyPoints: [
          '**Senza OS**, usare l’hardware richiederebbe istruzioni molto più complesse.',
          'L’OS **media** tra utente, applicazioni e componenti fisici.',
          'La sua presenza è **continua** anche quando non lo noti.',
        ],
      },
      {
        id: 'core-functions',
        title: 'Le funzioni che non possono mancare',
        content:
          'Ogni OS deve fare quattro cose bene: gestire **processi**, **memoria**, **file** e **dispositivi I/O**. Queste quattro aree tengono insieme quasi tutto ciò che fai su un computer.\n\nL’OS decide quale programma usa la **CPU**, quanta **RAM** occupa, dove salvare i dati e come dialogare con tastiera, disco e rete. *Processi, memoria, file system e dispositivi non sono temi separati*: sono i pilastri dello stesso sistema.',
        keyPoints: [
          '**Gestione processi** = ordine nell’esecuzione dei programmi.',
          '**Gestione memoria** = isolamento e uso efficiente della RAM.',
          '**Gestione file** = organizzazione persistente dei dati.',
        ],
      },
      {
        id: 'examples',
        title: 'Dove lo incontri tutti i giorni',
        content:
          'Windows, macOS, Android, iOS e **Linux** sono tutti sistemi operativi con interfacce diverse, ma lo stesso compito: far collaborare software e hardware in modo **affidabile** e **sicuro**.\n\n**Linux** è particolarmente utile per studiare questi meccanismi perché espone ciò che succede sotto la superficie: **processi**, **permessi**, **file system** e **terminale** rendono visibile il lavoro del sistema operativo.',
        keyPoints: [
          'Desktop, server e smartphone usano **OS diversi** ma con principi simili.',
          '**Linux** espone bene i meccanismi di sistema: ideale per imparare.',
          'Cambia la forma esterna, ma il compito resta lo stesso: **coordinare hardware e software**.',
        ],
      },
    ],
    keyTakeaways: [
      'Il **sistema operativo** non è un optional: è il livello che rende il computer utilizzabile.',
      'Le responsabilità principali sono **risorse**, **isolamento** e **servizi ai programmi**.',
      'Capire l’OS significa capire cosa succede **dietro ogni app** che apri.',
    ],
    discussionPrompts: [
      'Quale differenza percepisci tra cambiare applicazione e cambiare sistema operativo?',
      'Perché uno smartphone ha comunque bisogno di un OS forte anche se l’utente vede solo icone e app?',
    ],
    pilotContent: {
      whyItMatters: [
        'Ogni volta che apri un’app, salvi un file, ascolti un audio o passi da una finestra all’altra, c’è un sistema che **coordina tutto dietro le quinte**. Quel sistema è il **sistema operativo**.',
        'Capire questo capitolo significa smettere di vedere il computer come una scatola che "fa cose" e iniziare a leggerlo come un *ambiente organizzato*: qualcuno decide come usare la **CPU**, dove tenere i dati, come parlare con i dispositivi e come far convivere **processi** diversi senza caos.',
      ],
      commonMistakes: [
        '**Sistema operativo ≠ computer**: il computer è l’insieme di hardware e software; il sistema operativo è uno dei componenti chiave che lo rende utilizzabile.',
        '**Kernel ≠ intero sistema operativo**: il **kernel** è il nucleo che controlla le risorse, ma non coincide con tutta l’esperienza che l’utente vede.',
        '**RAM ≠ spazio di archiviazione**: la **RAM** serve al lavoro immediato dei programmi; disco o SSD servono a conservare i dati nel tempo.',
        'Un’app *non dialoga direttamente* con ogni componente: passa attraverso il sistema operativo per ottenere accesso controllato alle risorse.',
        'Usare un computer non significa ancora capire chi coordina **processi**, **memoria**, **file** e dispositivi dietro ciò che vedi sullo schermo.',
      ],
      realWorld: [
        'Lanci un programma dal menu o dal **terminale** e il sistema crea un **processo**, prepara memoria e assegna tempo **CPU**.',
        'Apri, sposti o salvi un file e l’OS usa il **file system** per ritrovare dati, nomi, permessi e posizione logica.',
        'Colleghi una chiavetta USB o un dispositivo esterno e il sistema deve riconoscere l’hardware, gestire il driver e rendere la risorsa usabile.',
        'Cambi finestra mentre un download continua in background: l’OS *alterna attività visibili e invisibili* senza perdere controllo.',
        'Scrivi da tastiera o tocchi lo schermo e il sistema trasforma **input** fisici in eventi che i programmi possono capire.',
      ],
      miniTask: [
        '**Passo 1 — Osserva**: guarda il dispositivo che stai usando adesso e identifica almeno **4 attività** in corso simultaneamente (es. app aperta, file in uso, rete attiva, dispositivo collegato).',
        '**Passo 2 — Collega**: per ognuna delle 4 attività, scrivi quale funzione dell’OS la gestisce — **processo**, **memoria**, **file system** o **dispositivo I/O**.',
        '**Passo 3 — Ragiona**: prova a spiegare in una frase perché *senza sistema operativo* quelle 4 attività non potrebbero coesistere.',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'Crash Course Computer Science #18 — Operating Systems',
          description: 'Video breve ma solido per consolidare la differenza tra hardware, sistema operativo e programmi con un ritmo accessibile.',
          url: 'https://www.youtube.com/watch?v=26QPDBe-NB8',
        },
        {
          level: 'vai-oltre',
          title: 'Introduction to Linux — freeCodeCamp',
          description: 'Corso introduttivo lungo che aiuta a collegare il ruolo dell’OS con il mondo Linux reale, il terminale e l’uso quotidiano del sistema.',
          url: 'https://www.youtube.com/watch?v=sWbUDq4S6Y8',
        },
        {
          level: 'deep-dive',
          title: 'MIT OpenCourseWare — Operating System Engineering',
          description: 'Percorso universitario per chi vuole una base molto più completa su kernel, system call, processi, memoria e interazione hardware-software.',
          url: 'https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/',
        },
      ],
    },
    interactivePilot: {
      mission: {
        title: 'Missione 01 — Vedere l’OS dietro quello che fai',
        intro:
          'Questa prova serve a farti passare dalla teoria alla lettura del mondo reale. Non devi scrivere codice: devi osservare il tuo dispositivo e riconoscere quali funzioni del sistema operativo stanno lavorando davvero.',
        winCondition:
          'La missione è completata quando sai collegare almeno 4 attività reali a una funzione dell’OS e riesci a spiegare, in modo semplice, perché senza OS quelle attività andrebbero in conflitto.',
        steps: [
          {
            title: 'Mappa 4 attività reali',
            instruction:
              'Guarda il dispositivo che stai usando e annota 4 attività in corso: per esempio browser aperto, audio, rete attiva, file aperto, tastiera o touch in uso.',
            whyItMatters:
              'Serve a capire che il sistema operativo non è teoria astratta: coordina già adesso tutto ciò che stai facendo.',
          },
          {
            title: 'Assegna il reparto giusto',
            instruction:
              'Per ogni attività, chiediti quale funzione dell’OS la governa meglio: processi, memoria, file system o dispositivi I/O.',
            whyItMatters:
              'Qui costruisci il collegamento corretto tra azione visibile e meccanismo di sistema.',
          },
          {
            title: 'Spiega il caos senza OS',
            instruction:
              'Chiudi la prova scrivendo una frase: cosa andrebbe storto se tutte quelle attività provassero a usare hardware e risorse senza un sistema operativo a coordinarle?',
            whyItMatters:
              'Questo passaggio consolida il vero concetto del capitolo: l’OS serve per ordine, isolamento e servizi.',
          },
        ],
      },
      scenario: {
        title: 'Decisione rapida — Chi sta lavorando qui?',
        situation:
          'Hai il browser aperto con questa lezione, la tastiera risponde, il Wi-Fi è attivo e hai appena salvato un file. Tutto sembra normale, ma dietro stanno lavorando più parti del sistema operativo nello stesso momento.',
        question:
          'Se devi spiegare quale funzione dell’OS rende possibile salvare il file e ritrovarlo dopo, quale scegli come risposta principale?',
        options: [
          {
            label: 'Gestione processi',
            feedback:
              'Non è la risposta principale. I processi gestiscono l’esecuzione dei programmi, ma non organizzano la persistenza dei dati sul disco.',
          },
          {
            label: 'Gestione memoria',
            feedback:
              'Non basta. La memoria aiuta il lavoro immediato, ma da sola non garantisce dove e come i dati restano salvati.',
          },
          {
            label: 'Gestione file system',
            feedback:
              'Corretto. Il file system organizza nomi, struttura, posizione logica e persistenza dei dati nel tempo.',
            isCorrect: true,
          },
          {
            label: 'Gestione dispositivi I/O',
            feedback:
              'È coinvolta nel dialogo con il disco, ma la risposta più corretta qui è il file system, perché il focus è il salvataggio persistente e l’organizzazione dei file.',
          },
        ],
        takeaway:
          'Il punto non è indovinare una parola, ma imparare a leggere un’azione quotidiana come risultato di più funzioni coordinate dall’OS.',
      },
    },
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
    pilotContent: {
      whyItMatters: [
        'Quando un computer sembra "lento", quasi mai il problema è una sola parte. CPU, RAM, storage e I/O hanno tempi diversi e il sistema operativo deve orchestrare tutto in modo continuo.',
        'Capire questo capitolo ti aiuta a leggere i colli di bottiglia reali: non solo quanta potenza hai, ma come le risorse vengono coordinate mentre usi app, rete e file nello stesso momento.',
      ],
      commonMistakes: [
        '**CPU veloce ≠ sistema sempre veloce**: se storage o I/O sono il collo di bottiglia, la CPU da sola non risolve.',
        '**RAM ≠ storage**: la RAM serve al lavoro immediato, SSD/HDD servono alla persistenza.',
        '**Multitasking ≠ esecuzione infinita in parallelo**: spesso è alternanza intelligente del tempo CPU.',
        '**I/O non è “secondario”**: tastiera, rete, disco e periferiche influenzano direttamente la reattività percepita.',
        'Valutare le prestazioni guardando una sola metrica porta a diagnosi sbagliate: serve una vista di insieme delle risorse.',
      ],
      realWorld: [
        'Apri molte tab del browser: la RAM cresce, la CPU schedula più processi, e il sistema può iniziare a usare swap se la memoria si satura.',
        'Salvi un file grande durante una videochiamata: storage, rete e CPU competono per attenzione, e la latenza percepita può aumentare.',
        'Avvii un programma da disco lento: anche con CPU potente, il caricamento resta vincolato alla velocità di I/O.',
      ],
      miniTask: [
        '**Passo 1 — Osserva**: apri monitor risorse o task manager e identifica CPU, RAM e disco mentre usi 2-3 app insieme.',
        '**Passo 2 — Collega**: annota quale risorsa sale di più in ogni attività (apertura app, salvataggio file, navigazione web).',
        '**Passo 3 — Concludi**: scrivi una frase su quale collo di bottiglia stai vedendo e perché non dipende solo dalla CPU.',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'Computer Architecture Course - Princeton (overview)',
          description: 'Panoramica chiara su CPU, memoria e I/O per collegare hardware e comportamento del sistema operativo.',
          url: 'https://www.coursera.org/learn/comparch',
        },
        {
          level: 'vai-oltre',
          title: 'Nand2Tetris - Part I',
          description: 'Percorso pratico per capire come le componenti hardware si combinano e perché il software di sistema deve coordinarle.',
          url: 'https://www.coursera.org/learn/build-a-computer',
        },
        {
          level: 'deep-dive',
          title: 'Computer Architecture: A Quantitative Approach',
          description: 'Riferimento avanzato per analizzare trade-off reali tra CPU, memoria e I/O.',
        },
      ],
    },
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
          'Quando un programma deve aprire un file, creare un processo o inviare dati in rete, passa tramite una system call.\n\nÈ come fare una richiesta formale al kernel: "ho bisogno di questa operazione, puoi eseguirla per me in modo sicuro?"',
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
    pilotContent: {
      whyItMatters: [
        'Capire kernel, user space e system call ti permette di leggere il sistema operativo come un modello di controllo, non come una "scatola nera".',
        'Questa distinzione spiega perché un bug in un’app di solito non distrugge tutta la macchina: i privilegi sono separati e le richieste passano da canali controllati.',
      ],
      commonMistakes: [
        '**Kernel ≠ intero sistema operativo**: il kernel è il nucleo privilegiato, ma non coincide con tutta l’esperienza utente.',
        '**User space non è “inutile” o “debole”**: è uno spazio intenzionalmente limitato per proteggere stabilità e sicurezza.',
        '**System call ≠ funzione qualsiasi**: è l’interfaccia ufficiale per chiedere servizi privilegiati al kernel.',
        'Un programma non dovrebbe accedere direttamente all’hardware: bypassare il kernel rompe isolamento e controllo.',
        'Più privilegi non significa automaticamente “migliore”: significa più rischio se il codice è fragile o malevolo.',
      ],
      realWorld: [
        'Un editor apre un file: l’app invoca una system call, il kernel valida permessi e risorse, poi restituisce il risultato in modo controllato.',
        'Un browser in crash non manda giù tutto il sistema: gira in user space e resta confinato nel suo dominio.',
        'Una richiesta di rete passa da API utente a system call e poi a componenti kernel per la gestione reale del dispositivo.',
      ],
      miniTask: [
        '**Passo 1 — Mappa**: scegli 3 azioni comuni (aprire file, avviare app, inviare dati in rete).',
        '**Passo 2 — Classifica**: per ogni azione, separa cosa avviene in user space e cosa richiede intervento del kernel.',
        '**Passo 3 — Spiega**: scrivi una frase su perché usare system call è più sicuro dell’accesso diretto alle risorse.',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'Linux man-pages project',
          description: 'Riferimento pratico per osservare il comportamento reale delle system call e delle API utente.',
          url: 'https://www.kernel.org/doc/man-pages/',
        },
        {
          level: 'vai-oltre',
          title: 'Operating Systems: Three Easy Pieces - Interlude on System Calls',
          description: 'Approfondimento didattico molto chiaro sul passaggio da user space a kernel space.',
          url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/',
        },
        {
          level: 'deep-dive',
          title: 'The Linux Programming Interface',
          description: 'Riferimento avanzato per comprendere in dettaglio processi, syscall e interfaccia kernel-utente.',
        },
      ],
    },
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
          'Lo scheduler decide quale processo ottiene tempo CPU e per quanto. L’obiettivo non è solo "essere giusto", ma mantenere il sistema reattivo e utile per l’utente.\n\nQui nasce il multitasking percepito: l’illusione efficace di molte cose che accadono insieme.',
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
      'Perché un processo in attesa non è per forza "bloccato male"?',
    ],
    pilotContent: {
      whyItMatters: [
        'Capire processi, thread e scheduling ti permette di leggere il sistema come un atto di coordinamento intelligente, non come magia.',
        'Quando un programma rallenta o blocca, il problema spesso non è il programma ma come il sistema sta allocando o escludendo tempo CPU — e qui lo scheduler è il protagonista.',
      ],
      commonMistakes: [
        '**Processo e thread sono sinonimi**: no — il processo è il contenitore, il thread è il flusso di lavoro dentro quel contenitore.',
        '**Più processi = sempre meglio**: falso — il sovraccarico di context switching aumenta, e i processi non condividono dati facilmente.',
        '**Un processo "in attesa" è bloccato male**: spesso no — è normal esperare I/O; lo scheduler lo sospende temporaneamente.',
        '**Lo scheduler sceglie il processo più veloce**: non sempre — il goal è reattività percepita e throughput equilibrato, non solo velocità pura.',
        'Confondere gli stati di un processo porta a diagnosi sbagliate quando si legge un tool come top o ps.',
      ],
      realWorld: [
        'Apri Visual Studio Code e Slack nello stesso momento: ogni app è un processo, lo scheduler alterna tempo CPU e mantiene entrambe reattive.',
        'Un download in background rallenta la compilazione di codice: sono stati di attesa e processamento che competono per I/O e CPU.',
        'Un thread in un\'app Web server gestisce una richiesta mentre altri thread aspettano connessioni: è il model che rende scalabile il servizio.',
      ],
      miniTask: [
        '**Passo 1 — Osserva**: apri un task manager (o top in Linux) e identifica almeno 3 processi in esecuzione e 3 in attesa.',
        '**Passo 2 — Leggi**: per uno dei processi, cerca di capire se è in esecuzione, in attesa di I/O o sospeso.',
        '**Passo 3 — Concludi**: scrivi una frase su perché il multitasking fluido dipende da uno scheduler intelligente, non solo da processori veloci.',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'Linux man pages: ps, top, htop',
          description: 'Riferimento pratico per osservare processi e stati in tempo reale.',
          url: 'https://man7.org/linux/man-pages/man1/ps.1.html',
        },
        {
          level: 'vai-oltre',
          title: 'Operating Systems: Three Easy Pieces - Scheduling',
          description: 'Approfondimento didattico chiaro su come e perché lo scheduler prende decisioni.',
          url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/',
        },
        {
          level: 'deep-dive',
          title: 'Linux Kernel Scheduler Documentation',
          description: 'Riferimento tecnico avanzato su algoritmi e policy dello scheduler Linux moderno.',
        },
      ],
    },
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
    media: [
      {
        type: 'infographic',
        title: 'Infografica Capitolo 4',
        description: 'Sintesi visiva: processi, thread e scheduling.',
        placeholderPath: 'media/ch04-processes/infographic.webp',
        notes: 'ready',
      },
      {
        type: 'video',
        title: 'Video Capitolo 4',
        description: 'Spiegazione video: processi, thread e scheduling.',
        placeholderPath: 'media/ch04-processes/video.mp4',
        notes: 'ready',
      },
    ],
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
          'La memoria non è solo "spazio libero". È il luogo in cui i processi caricano codice e dati mentre lavorano.\n\nIl sistema operativo deve proteggerla, distribuirla e impedire che un processo invada il territorio di un altro.',
        keyPoints: [
          'La gestione memoria è una questione di sicurezza oltre che di prestazioni.',
          'L’isolamento impedisce corruzione e crash a catena.',
        ],
      },
      {
        id: 'virtual-memory',
        title: 'Memoria virtuale senza mito',
        content:
          'La memoria virtuale fa percepire a ogni processo uno spazio più ordinato e separato. Non significa "RAM infinita", ma astrazione utile.\n\nPer uno studente junior basta capire due idee: isolamento e possibilità di appoggiarsi anche allo storage quando serve.',
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
    pilotContent: {
      whyItMatters: [
        'Memoria e file system sono i due pilastri su cui poggia tutto il resto: senza buona gestione, il sistema opera a scatti e perde dati.',
        'Capire come il sistema operativo organizza memoria e archiviazione ti permette di leggere perché un PC con poca RAM rallenta, come si salvano i file e perché i backup contano.',
      ],
      commonMistakes: [
        '**Memoria virtuale = RAM infinita**: no, è un meccanismo di isolamento e protezione; lo swap lo aiuta ma è più lento.',
        '**RAM perca dati quando spegni**: sì, è la natura della RAM — è per questo che il file system esiste.',
        '**File system è solo un "contenitore neutro"**: no, ha permessi, metadati, gerarchia — non è magazzino passivo.',
        '**Una volta salvato un file, è al sicuro**: non sempre — dipende dal file system, da backup e da come il sistema gestisce i crash.',
        'Confondere memoria con storage porta a decisioni di design fragili (pensare che tutto resti in RAM, per es.).',
      ],
      realWorld: [
        'Quando usi un app mobile con poca memoria, il sistema muove processi inattivi su storage lento e la app diventare lenta: è memoria virtuale in azione.',
        'Salvi un file: prima va in RAM del processo, poi il sistema operativo lo scritto sul file system del disco, con metadati e permessi.',
        'Il file system Linux ha una gerarchia forte (/home, /etc, /var): è esattamente quello che rende possibile capire dove cercare configurazioni o log.',
      ],
      miniTask: [
        '**Passo 1 — Mappa**: scegli 3 attività (aprire una foto grande, salvare un documento, navigare cartelle).',
        '**Passo 2 — Traccia**: per ogni attività, distingui cosa passa per memoria e cosa per file system.',
        '**Passo 3 — Rifletti**: scrivi una frase su perché entrambi i livelli sono necessari (non si potrebbe usare solo uno).',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'Linux man page: ls, stat, file',
          description: 'Comandi pratici per esplorare file system, permessi e metadati.',
          url: 'https://man7.org/linux/man-pages/man1/ls.1.html',
        },
        {
          level: 'vai-oltre',
          title: 'The Linux Programming Interface - Chapter 3 (File System)',
          description: 'Approfondimento su file, directory e struttura gerarchica del file system Linux.',
        },
        {
          level: 'deep-dive',
          title: 'Understanding Memory Management',
          description: 'Riferimento tecnico su virtual memory, paging e swap nei sistemi Unix-like.',
        },
      ],
    },
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
    media: [
      {
        type: 'infographic',
        title: 'Infografica Capitolo 5',
        description: 'Sintesi visiva: memoria, file system e organizzazione dei dati.',
        placeholderPath: 'media/ch05-memory-filesystem/infographic.webp',
        notes: 'ready',
      },
    ],
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
          'Linux non è solo "schermo nero con testo". È un ecosistema molto usato su server, cloud, embedded e anche desktop.\n\nIl suo valore didattico è enorme perché espone bene concetti di sistema: processi, file, permessi, utenti, configurazioni e strumenti testuali.',
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
            explanation: 'Mostra quale **shell** stai usando nella sessione corrente.',
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
            explanation: 'Elenca le directory principali alla radice del **file system** Linux.',
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
    slug: 'os-comparison',
    title: 'Sistemi Operativi a Confronto',
    description: 'Windows, macOS, Linux e oltre: capire le differenze reali tra sistemi per scegliere con consapevolezza.',
    duration: '1.5h',
    objectives: [
      'Distinguere i principali sistemi operativi per caratteristiche e contesto d\'uso.',
      'Capire perché Linux domina server, cloud ed embedded.',
      'Orientarsi tra le distribuzioni Linux principali.',
    ],
    sections: [
      {
        id: 'desktop-os-comparison',
        title: 'Windows, macOS e Linux Desktop',
        content:
          'I tre sistemi dominanti sul desktop hanno origini e filosofie molto diverse.\n\n**Windows** è il più diffuso sul desktop consumer e aziendale: ecosistema software ampio, compatibilità hardware quasi universale, architettura chiusa.\n\n**macOS** è il sistema Apple: ottimizzato per hardware Apple, stabile, con Unix sotto. Ideale per ambienti creativi o di sviluppo, ma ecosistema chiuso.\n\n**Linux Desktop** (Ubuntu, Fedora, Mint...) è libero, configurabile e gratuito. Meno diffuso sul desktop consumer ma dominante ovunque conti davvero: server, cloud e sviluppo professionale.',
        keyPoints: [
          'Windows: max compatibilità hardware, ecosistema software ampio, architettura chiusa.',
          'macOS: integrazione hardware-software eccellente, base Unix, ecosistema Apple.',
          'Linux: libertà, trasparenza, costo zero — e il sistema che fa girare il mondo.',
        ],
        infoTables: [
          {
            title: 'Confronto desktop — i punti che contano davvero',
            headers: ['Criterio', 'Windows', 'macOS', 'Linux'],
            rows: [
              { cells: ['Licenza', 'Commerciale', 'Commerciale', 'Aperta (GPL)'] },
              { cells: ['Hardware', 'Qualsiasi PC', 'Solo Apple', 'Qualsiasi PC/server'] },
              { cells: ['Terminale', 'PowerShell / WSL2', 'zsh (Unix)', 'bash/zsh nativi'] },
              { cells: ['Diffusione desktop', '~72%', '~15%', '~4%'], highlight: true },
              { cells: ['Server/Cloud', 'Presente', 'Assente', 'Dominante (~96%)'], highlight: true },
              { cells: ['Costo', 'Licenza', 'Incluso (hardware Apple)', 'Gratuito'] },
              { cells: ['Personalizzazione', 'Limitata', 'Molto limitata', 'Totale'] },
            ],
          },
        ],
      },
      {
        id: 'server-mobile-embedded',
        title: 'Oltre il desktop: server, mobile ed embedded',
        content:
          'Il desktop è solo una piccola parte del panorama dei sistemi operativi. La maggior parte dei sistemi che usiamo quotidianamente gira su hardware che non vediamo mai.\n\n**Server e cloud**: Linux è il sistema operativo della quasi totalità dei server web, dei container Docker e delle macchine virtuali cloud. Non è una coincidenza: è il risultato di decenni di ottimizzazione per ambienti headless, multiutente e ad alta disponibilità.\n\n**Mobile**: Android (basato su kernel Linux) e iOS/iPadOS (basato su Darwin/XNU, derivato da Unix) coprono quasi tutti i dispositivi mobili.\n\n**Embedded**: router, smartTV, sistemi industriali, auto, elettrodomestici connessi — qui Linux è ubiquo.',
        keyPoints: [
          'Linux occupa ~96% dei server web e domina il cloud computing.',
          'Android è Linux: kernel Linux con stack applicativo Google.',
          'Embedded e IoT: Linux quasi ovunque.',
        ],
        infoTables: [
          {
            title: 'Sistemi operativi per dominio',
            headers: ['Dominio', 'OS dominante', 'Quota', 'Note'],
            rows: [
              { cells: ['Server web', 'Linux', '~96%', 'Ubuntu, Debian, RHEL, Alpine'] },
              { cells: ['Cloud (VM)', 'Linux', '>90%', 'AWS, GCP, Azure image di default'] },
              { cells: ['Supercomputer', 'Linux', '100%', 'Top500: 100% Linux da anni'], highlight: true },
              { cells: ['Mobile', 'Android + iOS', '~99%', 'Android = kernel Linux'] },
              { cells: ['Desktop', 'Windows', '~72%', 'macOS ~15%, Linux ~4%'] },
              { cells: ['Embedded/IoT', 'Linux', '>80%', 'Router, TV, auto, industriale'] },
            ],
          },
        ],
      },
      {
        id: 'linux-distributions',
        title: 'Le distribuzioni Linux principali',
        content:
          'Linux non è un unico sistema monolitico: è un kernel attorno a cui esistono centinaia di **distribuzioni** (distro), ognuna con scelte diverse di package manager, configurazione predefinita e ciclo di rilascio.\n\nLe differenze superficiali (interfaccia grafica, colori) contano meno di quelle strutturali: package manager (apt vs dnf vs pacman), stabilità vs rolling release, supporto a lungo termine (LTS).\n\nPer uno studente che vuole imparare, **Ubuntu LTS** è la scelta più sicura: documentazione enorme, community attiva, comportamento prevedibile.',
        keyPoints: [
          'Tutte le distro condividono lo stesso kernel Linux — le differenze sono nello stack sopra.',
          'Ubuntu LTS = scelta sicura per imparare (supporto 5 anni, community enorme).',
          'Il package manager (apt, dnf, pacman) è una delle differenze operative più concrete.',
        ],
        infoTables: [
          {
            title: 'Distribuzioni principali — dove usarle',
            headers: ['Distro', 'Base', 'Package Manager', 'Target', 'Note'],
            rows: [
              { cells: ['Ubuntu LTS', 'Debian', 'apt', 'Desktop, server, cloud, studenti', 'Consigliata per iniziare'], highlight: true },
              { cells: ['Debian', '—', 'apt', 'Server stabili, base per altre distro', 'Massima stabilità'] },
              { cells: ['Fedora', '—', 'dnf', 'Desktop sviluppatori', 'Novità upstream'] },
              { cells: ['Rocky Linux', 'RHEL', 'dnf', 'Enterprise server', 'Alternativa RHEL gratuita'] },
              { cells: ['Arch Linux', '—', 'pacman', 'Utenti avanzati', 'Rolling release, pieno controllo'] },
              { cells: ['Alpine', '—', 'apk', 'Container Docker, embedded', 'Minimalismo estremo'] },
              { cells: ['Linux Mint', 'Ubuntu', 'apt', 'Desktop per utenti Windows', 'Approccio familiare'] },
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      'Non esiste un OS migliore in assoluto: conta il contesto — desktop, server, mobile, embedded.',
      'Linux è minoritario sul desktop ma dominante ovunque conti davvero: server, cloud, supercomputer.',
      'Le distribuzioni Linux differiscono in package manager e stabilità — il kernel è lo stesso.',
    ],
    discussionPrompts: [
      'Perché Linux domina il server nonostante sia così poco usato sul desktop consumer?',
      'Cosa cambieresti nella scelta di OS se lavorassi come amministratore di sistema?',
    ],
    quiz: [
      {
        id: 'ch7-q1',
        type: 'multiple_choice',
        question: 'Quale sistema operativo domina il mercato server e cloud?',
        options: ['Linux', 'Windows Server', 'macOS Server', 'FreeBSD'],
        correctAnswer: 0,
        explanation: 'Linux occupa circa il 96% dei server web e la grande maggioranza delle istanze cloud.',
      },
      {
        id: 'ch7-q2',
        type: 'true_false',
        question: 'Android è basato sul kernel Linux.',
        correctAnswer: true,
        explanation: 'Sì: Android usa il kernel Linux con uno stack applicativo proprietario Google sopra.',
      },
      {
        id: 'ch7-q3',
        type: 'multiple_choice',
        question: 'Qual è la differenza pratica più importante tra distribuzioni Linux?',
        options: [
          'Package manager, stabilità e ciclo di rilascio',
          'Il colore dell\'interfaccia grafica',
          'Il kernel utilizzato',
          'La velocità della CPU richiesta',
        ],
        correctAnswer: 0,
        explanation: 'Il kernel è lo stesso per tutte le distro — le differenze reali sono nel package manager e nella filosofia di stabilità.',
      },
    ],
    glossary: ['operating-system', 'distribution', 'kernel', 'shell'],
  },
  {
    id: 8,
    slug: 'linux-environment-setup',
    title: 'Il Tuo Ambiente Linux',
    description: 'Tre modi concreti per avere Linux funzionante: nel browser senza installare nulla, dentro Windows con WSL2, o in una macchina virtuale completa.',
    duration: '1.5h',
    objectives: [
      'Scegliere l\'opzione di ambiente più adatta al proprio hardware e obiettivo.',
      'Avviare una sessione Linux funzionante con almeno uno dei metodi.',
      'Capire limiti e vantaggi di ogni approccio.',
    ],
    sections: [
      {
        id: 'killercoda-browser',
        title: 'KillerCoda — Linux nel browser, zero install',
        content:
          'La via più rapida per iniziare è **KillerCoda** (killercoda.com): ambienti Linux completi che girano nel browser, senza installare nulla. Funziona su qualsiasi sistema operativo, anche Chromebook.\n\nOgni scenario mette a disposizione uno o più terminali Ubuntu/Debian con accesso root, connessione a internet e strumenti preinstallati. Puoi esercitarti con tutti i comandi del corso.\n\n**Limite principale**: la sessione scade dopo inattività e i dati non persistono tra sessioni. Ideale per esercitarsi, non per lavorare su progetti reali.',
        keyPoints: [
          'Nessuna installazione richiesta — funziona da qualsiasi browser.',
          'Ambienti Ubuntu/Debian con accesso root completo.',
          'Sessioni temporanee: ideale per esercizi, non per dati persistenti.',
        ],
        labBlock: {
          title: 'Prima sessione su KillerCoda',
          intro: 'Avvia il tuo primo ambiente Linux nel browser in meno di un minuto.',
          steps: [
            {
              goal: 'Apri un ambiente Ubuntu',
              command: {
                command: '# Vai su killercoda.com → Ubuntu Playground',
                output: '',
                explanation: 'Scegli Ubuntu Playground dalla home di KillerCoda. Il terminale si apre in pochi secondi — nessuna registrazione richiesta.',
              },
            },
            {
              goal: 'Verifica chi sei e dove ti trovi',
              command: {
                command: 'whoami && pwd',
                output: 'root\n/root',
                explanation: 'In KillerCoda sei root per default. pwd conferma che sei nella home di root. Puoi usare tutti i comandi del corso senza sudo.',
              },
            },
            {
              goal: 'Identifica la distribuzione',
              command: {
                command: 'cat /etc/os-release | grep PRETTY',
                output: 'PRETTY_NAME="Ubuntu 22.04.3 LTS"',
                explanation: 'Conferma che stai usando Ubuntu 22.04 LTS — la stessa versione su milioni di server in produzione.',
              },
            },
          ],
        },
      },
      {
        id: 'wsl2-windows',
        title: 'WSL2 — Linux dentro Windows',
        content:
          '**Windows Subsystem for Linux 2** (WSL2) integra un vero kernel Linux dentro Windows 10/11. Non è emulazione: è un kernel Linux in un ambiente virtualizzato leggero, con accesso al file system Windows e alle porte di rete.\n\nWSL2 è ideale per chi vuole Linux disponibile stabilmente senza riavviare il computer o gestire una VM separata. VS Code con l\'estensione Remote - WSL si connette direttamente all\'ambiente.\n\n**Requisiti**: Windows 10 versione 2004+ o Windows 11. La virtualizzazione deve essere abilitata nel BIOS.',
        keyPoints: [
          'Kernel Linux reale, non emulazione — prestazioni quasi native.',
          'Accesso ai file Windows da Linux: /mnt/c/ punta al disco C:.',
          'Si installa in una sola riga da PowerShell con privilegi amministrativi.',
        ],
        labBlock: {
          title: 'Installare WSL2 con Ubuntu',
          intro: 'Installazione completa in pochi minuti da PowerShell come amministratore.',
          steps: [
            {
              goal: 'Abilita e installa WSL2 con Ubuntu',
              command: {
                command: 'wsl --install',
                output: 'Installazione in corso...\nRiavvio necessario.',
                explanation: 'Esegui in PowerShell come Amministratore. Installa WSL2 e Ubuntu di default. Richiede riavvio del sistema.',
                warning: 'Esegui PowerShell come Amministratore (click destro → Esegui come amministratore). La virtualizzazione deve essere abilitata nel BIOS.',
              },
            },
            {
              goal: 'Configura utente Ubuntu al primo avvio',
              command: {
                command: '# Ubuntu chiede username e password al primo avvio',
                output: 'Inserisci il nuovo nome utente UNIX: studente\nNuova password:',
                explanation: 'Crea un utente Linux separato dall\'account Windows. Questa password viene usata per sudo.',
              },
            },
            {
              goal: 'Verifica l\'installazione',
              command: {
                command: 'wsl --list --verbose',
                output: '  NAME      STATE    VERSION\n* Ubuntu    Running  2',
                explanation: 'Esegui in PowerShell per verificare che Ubuntu usi WSL2 (Version 2). Poi dentro Ubuntu: sudo apt update && sudo apt upgrade -y',
              },
            },
          ],
        },
      },
      {
        id: 'virtualbox-utm',
        title: 'Macchina Virtuale — VirtualBox e UTM',
        content:
          'Una **macchina virtuale** (VM) è un computer completo simulato dentro il tuo sistema operativo. Hai Linux con desktop grafico, filesystem persistente e isolamento totale dall\'host — ideale per esperimenti rischiosi o ambienti server reali.\n\n**VirtualBox** (gratuito, Oracle) funziona su Windows, Linux e Intel Mac. **UTM** (gratuito, open source) è la scelta su Mac Apple Silicon (M1/M2/M3) perché supporta la virtualizzazione ARM nativa.\n\nL\'immagine Ubuntu da scaricare è un file **.iso** di circa 2GB da ubuntu.com.',
        keyPoints: [
          'VirtualBox: Windows, Linux, Intel Mac — scarica da virtualbox.org.',
          'UTM: Mac Apple Silicon (M1/M2/M3) — scarica da mac.getutm.app.',
          'Ubuntu LTS ISO: ubuntu.com/download/desktop — versione 22.04 o 24.04.',
        ],
        infoTables: [
          {
            title: 'Confronto opzioni ambiente Linux',
            headers: ['Opzione', 'Piattaforma', 'Persistenza', 'Isolamento', 'Difficoltà'],
            rows: [
              { cells: ['KillerCoda', 'Qualsiasi browser', 'No (sessione)', 'Totale', 'Minima'] },
              { cells: ['WSL2', 'Windows 10/11', 'Sì', 'Parziale', 'Bassa'] },
              { cells: ['VirtualBox', 'Win/Linux/Intel Mac', 'Sì', 'Totale', 'Media'], highlight: true },
              { cells: ['UTM', 'Mac Apple Silicon', 'Sì', 'Totale', 'Media'] },
              { cells: ['Dual boot', 'Qualsiasi', 'Sì', 'Totale', 'Alta'] },
            ],
          },
        ],
        labBlock: {
          title: 'Creare una VM Ubuntu con VirtualBox',
          intro: 'Da zero a Ubuntu funzionante in VirtualBox.',
          steps: [
            {
              goal: 'Scarica VirtualBox e l\'ISO Ubuntu',
              command: {
                command: '# virtualbox.org → Downloads  |  ubuntu.com/download/desktop → 24.04 LTS',
                output: '',
                explanation: 'Scarica VirtualBox per il tuo OS e l\'ISO Ubuntu LTS (circa 2GB). Tieni entrambi i file pronti prima di iniziare.',
              },
            },
            {
              goal: 'Crea una nuova VM in VirtualBox',
              command: {
                command: '# VirtualBox → Nuova → Nome: Ubuntu → Tipo: Linux 64-bit',
                output: '',
                explanation: 'Assegna almeno 2GB RAM (consigliati 4GB) e 25GB di disco. VirtualBox crea un disco virtuale VDI — è un file sul tuo disco, non partiziona nulla.',
              },
            },
            {
              goal: 'Collega l\'ISO e avvia l\'installazione',
              command: {
                command: '# Impostazioni → Archiviazione → Controller IDE → Scegli ISO',
                output: '',
                explanation: 'Collega l\'ISO come CD virtuale. Al primo avvio parte l\'installer Ubuntu. Scegli installazione normale e lascia le opzioni predefinite.',
                warning: 'Seleziona Cancella disco e installa Ubuntu — opera solo sul disco virtuale della VM, non tocca il tuo disco reale.',
              },
            },
          ],
        },
      },
    ],
    keyTakeaways: [
      'KillerCoda per esercitarsi subito senza installare nulla — perfetto per seguire i prossimi capitoli.',
      'WSL2 per chi usa Windows e vuole Linux integrato nel workflow quotidiano.',
      'VirtualBox/UTM per un ambiente Linux completo, persistente e isolato.',
    ],
    discussionPrompts: [
      'Quale opzione sceglieresti per seguire questo corso e perché?',
      'In che situazioni una macchina virtuale è preferibile a WSL2?',
    ],
    quiz: [
      {
        id: 'ch8-q1',
        type: 'multiple_choice',
        question: 'Qual è il vantaggio principale di KillerCoda rispetto alle altre opzioni?',
        options: [
          'Funziona nel browser senza installare nulla',
          'Ha prestazioni migliori di una macchina virtuale',
          'Permette di salvare dati permanentemente',
          'È disponibile solo su Linux',
        ],
        correctAnswer: 0,
        explanation: 'KillerCoda non richiede installazione: basta un browser. Il limite è che le sessioni sono temporanee.',
      },
      {
        id: 'ch8-q2',
        type: 'true_false',
        question: 'WSL2 usa un kernel Linux reale, non un emulatore.',
        correctAnswer: true,
        explanation: 'Esatto: WSL2 virtualizza un kernel Linux vero, garantendo compatibilità e prestazioni molto più alte di WSL1.',
      },
      {
        id: 'ch8-q3',
        type: 'multiple_choice',
        question: 'Su un Mac con chip Apple Silicon (M1/M2/M3), quale software è consigliato per le VM?',
        options: ['UTM', 'VirtualBox', 'Hyper-V', 'Parallels Desktop'],
        correctAnswer: 0,
        explanation: 'VirtualBox non supporta ancora pienamente Apple Silicon. UTM è la scelta gratuita e matura per ARM.',
      },
    ],
    glossary: ['operating-system', 'distribution', 'shell', 'terminal'],
  },
  {
    id: 9,
    slug: 'linux-commands',
    title: 'Comandi Linux Pratici',
    description: 'Navigazione, gestione file e identità utente: i comandi essenziali per lavorare sul terminale.',
    duration: '2h',
    objectives: [
      'Usare pwd, ls, cd per orientarsi nel file system senza perdersi.',
      'Creare, leggere, spostare e cancellare file con consapevolezza.',
      'Capire la propria identità di sistema con whoami e id.',
    ],
    sections: [
      {
        id: 'navigation',
        title: 'Navigare senza perdersi',
        content:
          'I primi comandi utili non sono "da smanettoni": servono a capire dove sei e cosa stai guardando.\n\nCon pwd, ls e cd costruisci orientamento. Senza orientamento, qualsiasi comando successivo diventa rischioso.',
        keyPoints: [
          'Prima di modificare, verifica sempre il contesto.',
          'Sapere dove sei evita errori banali ma costosi.',
        ],
        labBlock: {
          title: 'Orientarsi nel file system',
          intro: 'Due comandi, un solo obiettivo: sapere dove sei e cosa c\'è intorno.',
          steps: [
            {
              goal: 'Dove sono adesso?',
              command: {
                command: 'pwd',
                output: '/home/studente/progetto-linux',
                explanation: 'Mostra la **directory corrente**: è il tuo punto di partenza operativo. Eseguilo sempre prima di qualsiasi modifica.',
              },
            },
            {
              goal: 'Cosa c\'è qui dentro?',
              command: {
                command: 'ls -la',
                output: 'drwxr-xr-x  studente studente  .\ndrwxr-xr-x  studente studente  ..\n-rw-r--r--  studente studente  appunti.txt',
                explanation: 'Elenca file normali e nascosti con permessi, owner e dimensioni. Il formato lungo (**-l**) rende leggibile tutto in colonne.',
              },
            },
          ],
        },
        commandReferences: [
          {
            command: 'cd',
            syntax: 'cd <percorso>',
            description: 'Sposta la shell in un\'altra directory.',
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
        labBlock: {
          title: 'Flusso pratico di gestione file',
          intro: 'Un ciclo completo: crea, leggi, rimuovi con cautela.',
          steps: [
            {
              goal: 'Crea una directory di lavoro e un file iniziale',
              command: {
                command: 'mkdir appunti-os && touch appunti-os/comandi.txt',
                output: '',
                explanation: '**mkdir** crea la cartella, **touch** crea il file vuoto. Il **&&** esegue il secondo comando solo se il primo riesce.',
              },
            },
            {
              goal: 'Leggi il contenuto del file',
              command: {
                command: 'cat appunti-os/comandi.txt',
                output: '',
                explanation: '**cat** stampa il contenuto nel terminale. Su file grandi usa **less** per scorrere senza riempire lo schermo.',
              },
            },
            {
              goal: 'Rimuovi con conferma interattiva',
              command: {
                command: 'rm -i appunti-os/comandi.txt',
                output: "rm: remove regular empty file 'appunti-os/comandi.txt'?",
                explanation: 'La flag **-i** chiede conferma prima di cancellare. Prenditi un secondo per leggere il percorso che stai per eliminare.',
                warning: 'Mai usare **rm** su percorsi che non hai verificato con **pwd** o **ls**. Non c\'è cestino.',
              },
            },
          ],
        },
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
        id: 'user-context',
        title: 'Chi sei per il sistema: utente, UID e gruppi',
        content:
          'In Linux ogni file e ogni processo appartiene a un **utente** e a un **gruppo**. Prima di toccare permessi o processi, il punto di partenza è sempre uno: capire chi è il tuo utente agli occhi del sistema.\n\n`whoami` restituisce il nome, ma è `id` il comando che ti dà il quadro completo: **UID** (identificatore numerico), **GID** (gruppo primario) e tutti i gruppi secondari a cui appartieni. Questi determinano cosa puoi fare su ogni file.',
        keyPoints: [
          '**UID e GID** sono i valori numerici che il kernel usa internamente, non i nomi leggibili.',
          'Appartenere al gruppo **sudo** significa poter usare privilegi elevati.',
          'Controllare la tua identità prima di chmod o chown evita errori difficili da correggere.',
        ],
        labBlock: {
          title: 'Scopri la tua identità di sistema',
          steps: [
            {
              goal: 'Nome utente corrente',
              command: {
                command: 'whoami',
                output: 'studente',
                explanation: 'Risposta immediata: sei questo utente. Utile nei contesti in cui non sei sicuro di chi sta eseguendo lo script o il comando.',
              },
            },
            {
              goal: 'UID, GID e gruppi completi',
              command: {
                command: 'id',
                output: 'uid=1000(studente) gid=1000(studente) gruppi=1000(studente),27(sudo),1001(developers)',
                explanation: 'Mostra tutto: **UID**, gruppo primario e gruppi secondari. Se vedi **sudo** nell\'elenco, puoi usare sudo sul sistema.',
              },
            },
          ],
        },
      },
    ],
    keyTakeaways: [
      'Ogni comando ha senso solo se collegato a un problema concreto.',
      'Orientarsi nel file system viene prima di qualsiasi operazione più avanzata.',
      'Conoscere la propria identità di sistema (whoami, id) evita errori su permessi e accessi.',
    ],
    discussionPrompts: [
      'Perché pwd e ls sono spesso più importanti di un comando avanzato?',
      'Quando conviene usare cat, less o head per leggere un file?',
    ],
    quiz: [
      {
        id: 'ch9-q1',
        type: 'multiple_choice',
        question: 'Quale comando ti mostra la directory corrente?',
        options: ['pwd', 'ps', 'grep', 'kill'],
        correctAnswer: 0,
        explanation: 'pwd significa print working directory.',
      },
      {
        id: 'ch9-q2',
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
    glossary: ['shell', 'terminal', 'process', 'file-system', 'root', 'sudo'],
  },
  {
    id: 10,
    slug: 'permissions-users',
    title: 'Permessi, Utenti e Gruppi',
    description: 'Controllo degli accessi in Linux: permessi file, chmod, chown e gestione completa di utenti e gruppi.',
    duration: '3h',
    objectives: [
      'Leggere e modificare permessi con chmod in notazione ottale e simbolica.',
      'Cambiare proprietario e gruppo con chown.',
      'Creare, configurare e rimuovere utenti e gruppi in modo operativo.',
    ],
    sections: [
      {
        id: 'permissions-chmod',
        title: 'Permessi, chmod e chown',
        content:
          'Ogni file ha tre livelli di accesso: **owner**, **group** e **others**. Per ognuno il sistema controlla tre operazioni: **r** (read), **w** (write), **x** (execute).\n\nI permessi si esprimono in **notazione ottale**: r=4, w=2, x=1 — le tre cifre si sommano per formare un valore da 0 a 7. `chmod 755` significa owner=7 (rwx), group=5 (r-x), others=5 (r-x). La **notazione simbolica** (`chmod u+x`) modifica un singolo bit senza toccare gli altri.',
        keyPoints: [
          '**Leggi prima, cambia dopo**: `ls -la` ti mostra i permessi attuali prima di qualsiasi chmod.',
          'La notazione ottale riscrive tutti i permessi; quella simbolica (`u+x`, `g-w`) agisce su uno solo.',
          'Usare permessi **troppo aperti** (777) non è comodità: è un rischio di sicurezza reale.',
        ],
        infoTables: [
          {
            title: 'Valori dei bit — come si calcola ogni cifra ottale',
            headers: ['Ottale', 'Simbolico', 'r', 'w', 'x', 'Permessi attivi'],
            rows: [
              { cells: ['0', '---', '—', '—', '—', 'nessun accesso'] },
              { cells: ['1', '--x', '—', '—', '✓', 'solo esecuzione'] },
              { cells: ['2', '-w-', '—', '✓', '—', 'solo scrittura'] },
              { cells: ['3', '-wx', '—', '✓', '✓', 'scrittura + esecuzione'] },
              { cells: ['4', 'r--', '✓', '—', '—', 'solo lettura'] },
              { cells: ['5', 'r-x', '✓', '—', '✓', 'lettura + esecuzione'] },
              { cells: ['6', 'rw-', '✓', '✓', '—', 'lettura + scrittura'] },
              { cells: ['7', 'rwx', '✓', '✓', '✓', 'accesso completo'] },
            ],
          },
          {
            title: 'Pattern comuni — owner / group / others',
            headers: ['chmod', 'Owner', 'Group', 'Others', 'Uso tipico'],
            rows: [
              { cells: ['600', 'rw-', '---', '---', 'file privati, chiavi SSH (~/.ssh/id_rsa)'] },
              { cells: ['644', 'rw-', 'r--', 'r--', 'file di testo, configurazioni, HTML'], highlight: true },
              { cells: ['700', 'rwx', '---', '---', 'script e directory strettamente personali'] },
              { cells: ['755', 'rwx', 'r-x', 'r-x', 'script eseguibili, directory pubbliche'], highlight: true },
              { cells: ['775', 'rwx', 'rwx', 'r-x', 'directory condivise nello stesso gruppo'] },
              { cells: ['777', 'rwx', 'rwx', 'rwx', 'pericoloso — evitare in produzione'] },
            ],
          },
        ],
        labBlock: {
          title: 'Leggere e modificare i permessi',
          intro: 'Il flusso corretto è sempre lo stesso: leggi lo stato attuale, poi agisci.',
          steps: [
            {
              goal: 'Leggi i permessi correnti del file',
              command: {
                command: 'ls -la script.sh',
                output: '-rw-r--r-- 1 studente developers 512 mag 20 10:00 script.sh',
                explanation: 'Il primo campo mostra: tipo file (**-**), poi 3 bit **owner** (rw-), 3 bit **group** (r--), 3 bit **others** (r--). Owner e gruppo sono nella terza e quarta colonna.',
              },
            },
            {
              goal: 'Assegna permessi con notazione ottale',
              command: {
                command: 'chmod 755 script.sh',
                output: '',
                explanation: 'Riscrive tutti i permessi in una volta: **owner** ottiene **rwx** (7), **group** e **others** ottengono **r-x** (5). Pattern standard per script eseguibili.',
              },
            },
            {
              goal: 'Aggiungi un bit senza toccare gli altri',
              command: {
                command: 'chmod u+x deploy.sh',
                output: '',
                explanation: '**u** = user/owner, **+** = aggiungi, **x** = execute. Solo il bit execute dell\'owner cambia — group e others restano invariati.',
              },
            },
            {
              goal: 'Cambia proprietario e gruppo',
              command: {
                command: 'chown michele:developers progetto/',
                output: '',
                explanation: 'Assegna il file all\'utente **michele** e al gruppo **developers**. Richiede **sudo** se non sei il proprietario attuale.',
                warning: '**chown** su directory intere usa **-R** per ricorsività. Verifica sempre il percorso prima.',
              },
            },
          ],
        },
        terminalCommands: [
          {
            command: 'ps aux | grep node',
            output: 'studente  1823 ... node server.js',
            explanation: 'Cerca processi Node attivi: **ps aux** elenca tutto, **grep** filtra per nome. Il **PID** (1823) è l\'identificatore del processo.',
          },
          {
            command: 'kill 1823',
            output: '',
            explanation: 'Invia **SIGTERM** al processo con quel **PID**. Il processo riceve il segnale e può terminare in modo controllato.',
            warning: 'Termina processi solo se sai cosa sono. Per processi che non rispondono: **kill -9 \<PID\>**, ma è l\'ultima risorsa.',
          },
        ],
        commandReferences: [
          {
            command: 'chmod',
            syntax: 'chmod [opzioni] permessi file',
            description: 'Modifica i permessi di file e directory. Accetta notazione ottale (755) o simbolica (u+x, g-w, o=r).',
            examples: ['chmod 644 note.txt', 'chmod u+x script.sh', 'chmod g-w config.yml', 'chmod -R 755 public/'],
          },
          {
            command: 'chown',
            syntax: 'chown [utente][:gruppo] file',
            description: 'Cambia proprietario e gruppo di un file. Richiede sudo se non sei il proprietario attuale.',
            examples: ['chown michele note.txt', 'chown michele:developers progetto/', 'sudo chown root:root /etc/config'],
          },
        ],
      },
      {
        id: 'user-group-management',
        title: 'Creare e gestire utenti e gruppi',
        content:
          'In Linux ogni utente ha un **UID** (identificatore numerico), una **home directory**, una **shell** di default e appartiene a uno o più **gruppi**. Queste informazioni sono registrate in due file di sistema: `/etc/passwd` (utenti) e `/etc/group` (gruppi).\n\nIl modo corretto per interrogarli non è leggerli direttamente con cat, ma usare **`getent`** — che funziona anche con directory di rete come LDAP o NIS, non solo con i file locali.\n\nSu sistemi **Debian/Ubuntu** coesistono due comandi per creare utenti: `useradd` (basso livello, richiede tutte le opzioni esplicite) e `adduser` (script interattivo che guida il processo). Su **RHEL/Fedora/Arch** esiste solo `useradd`. Per gli esempi usiamo `useradd` perché è universale e rende esplicito ogni parametro.',
        keyPoints: [
          'Le modifiche ai gruppi di un utente **richiedono un nuovo login** per essere attive nella sessione.',
          '`userdel` senza `-r` **non rimuove** la home directory — i file restano orfani nel sistema.',
          'Verifica sempre con `id` o `getent` dopo ogni operazione: è l\'unico modo per confermare che la modifica sia andata a buon fine.',
          '`getent` è preferibile a `cat /etc/passwd` perché interroga tutte le sorgenti di identità configurate.',
        ],
        infoTables: [
          {
            title: 'Struttura di /etc/passwd — un campo per volta',
            headers: ['Campo', 'Esempio', 'Significato'],
            rows: [
              { cells: ['username', 'mario', 'nome di login, deve essere unico'] },
              { cells: ['password', 'x', 'x = hash in /etc/shadow (mai in chiaro qui)'] },
              { cells: ['UID', '1001', 'identificatore numerico utente (root = 0)'] },
              { cells: ['GID', '1001', 'gruppo primario dell\'utente'] },
              { cells: ['commento', 'Mario Rossi', 'nome completo o descrizione (GECOS)'] },
              { cells: ['home', '/home/mario', 'directory personale dell\'utente'] },
              { cells: ['shell', '/bin/bash', 'shell di default al login'] },
            ],
          },
          {
            title: 'Comandi di gestione — riferimento rapido',
            headers: ['Comando', 'Scopo', 'Sudo'],
            rows: [
              { cells: ['useradd', 'crea utente (parametrico, universale)', 'sì'] },
              { cells: ['adduser', 'crea utente (interattivo, Debian/Ubuntu)', 'sì'] },
              { cells: ['usermod', 'modifica attributi di un utente esistente', 'sì'] },
              { cells: ['userdel', 'rimuove utente (con -r anche la home)', 'sì'] },
              { cells: ['passwd', 'imposta o cambia la password', 'sì (per altri)'] },
              { cells: ['groupadd', 'crea un nuovo gruppo', 'sì'] },
              { cells: ['groupdel', 'elimina un gruppo (non rimuove i file)', 'sì'] },
              { cells: ['gpasswd -a/-d', 'aggiunge (-a) o rimuove (-d) utente da gruppo', 'sì'] },
              { cells: ['getent passwd', 'interroga il database utenti', 'no'], highlight: true },
              { cells: ['getent group', 'interroga il database gruppi', 'no'], highlight: true },
            ],
          },
        ],
        labBlock: {
          title: 'Ciclo completo: crea, configura, verifica, rimuovi',
          intro: 'Il flusso reale di un amministratore: creare un utente funzionante, assegnarlo a un gruppo, verificare ogni passaggio.',
          steps: [
            {
              goal: 'Crea l\'utente con home directory e shell esplicita',
              command: {
                command: 'sudo useradd -m -s /bin/bash -c "Mario Rossi" mario',
                output: '',
                explanation: '**-m** crea la home directory (/home/mario), **-s** imposta la shell di default, **-c** aggiunge un commento leggibile (nome completo). Senza **-m** la home non viene creata.',
              },
            },
            {
              goal: 'Imposta la password',
              command: {
                command: 'sudo passwd mario',
                output: 'Nuova password:\nRipetere la nuova password:\npasswd: password aggiornata correttamente',
                explanation: 'L\'hash della password viene scritto in **/etc/shadow**, non in **/etc/passwd**. Solo **root** può impostare password per altri utenti.',
              },
            },
            {
              goal: 'Verifica che l\'utente sia stato creato correttamente',
              command: {
                command: 'getent passwd mario',
                output: 'mario:x:1001:1001:Mario Rossi:/home/mario:/bin/bash',
                explanation: 'Tutti i campi in un colpo solo: **UID**, **GID**, commento, home, **shell**. Se il comando non restituisce nulla, l\'utente non esiste.',
              },
            },
            {
              goal: 'Crea un gruppo di progetto',
              command: {
                command: 'sudo groupadd developers',
                output: '',
                explanation: 'Crea il gruppo con il primo **GID** disponibile. Puoi specificarne uno manuale con **-g \<numero\>** se hai bisogno di un GID fisso (utile in ambienti con NFS o condivisioni).',
              },
            },
            {
              goal: 'Aggiungi l\'utente al gruppo (senza rimuoverlo da quelli esistenti)',
              command: {
                command: 'sudo usermod -aG developers mario',
                output: '',
                explanation: '**-aG** significa "append to Groups": aggiunge **developers** ai gruppi secondari di mario senza toccare quelli già presenti. Senza **-a** sovrascriveresti tutti i gruppi secondari.',
                warning: 'La flag **-a** è obbligatoria insieme a **-G**. Dimenticarla rimuove mario da tutti gli altri gruppi secondari.',
              },
            },
            {
              goal: 'Verifica UID, GID e appartenenza ai gruppi',
              command: {
                command: 'id mario',
                output: 'uid=1001(mario) gid=1001(mario) gruppi=1001(mario),1002(developers)',
                explanation: 'Conferma che **mario** appartiene ora a entrambi i gruppi. Nota: questa modifica sarà visibile a mario solo dopo un nuovo login.',
              },
            },
            {
              goal: 'Modifica la shell o altri attributi in seguito',
              command: {
                command: 'sudo usermod -s /bin/zsh mario',
                output: '',
                explanation: '**usermod** permette di cambiare qualsiasi attributo post-creazione: **shell** (**-s**), home (**-d**), commento (**-c**), nome di login (**-l**), account bloccato (**-L**) o sbloccato (**-U**).',
              },
            },
          ],
        },
        terminalCommands: [
          {
            command: 'getent group developers',
            output: 'developers:x:1002:mario',
            explanation: 'Mostra il gruppo **developers** con **GID** e lista dei membri. Equivale a cercare la riga corrispondente in **/etc/group**.',
          },
          {
            command: 'sudo gpasswd -d mario developers',
            output: 'Rimozione dell\'utente mario dal gruppo developers',
            explanation: 'Rimuove **mario** dal gruppo senza toccare altri attributi. Alternativa a **usermod** quando devi rimuovere da un gruppo specifico.',
          },
          {
            command: 'sudo userdel -r mario',
            output: '',
            explanation: 'Rimuove l\'utente e cancella la **home directory** con tutto il contenuto.',
            warning: '**userdel -r** è irreversibile: la home e i file dell\'utente vengono eliminati. Fai sempre un backup prima.',
          },
          {
            command: 'sudo groupdel developers',
            output: '',
            explanation: 'Elimina il gruppo. I file che appartenevano al gruppo restano nel sistema ma il **GID** diventa un numero senza nome associato.',
          },
        ],
        commandReferences: [
          {
            command: 'useradd',
            syntax: 'useradd [opzioni] <username>',
            description: 'Crea un nuovo utente. Senza opzioni crea l\'utente senza home, shell di default /bin/sh e senza password.',
            examples: [
              'sudo useradd -m -s /bin/bash mario',
              'sudo useradd -m -s /bin/bash -G sudo,developers mario',
              'sudo useradd -u 1500 -g staff -m mario',
            ],
          },
          {
            command: 'usermod',
            syntax: 'usermod [opzioni] <username>',
            description: 'Modifica gli attributi di un utente esistente. -aG è la combinazione più usata per aggiungere ai gruppi.',
            examples: [
              'sudo usermod -aG sudo mario',
              'sudo usermod -s /bin/zsh mario',
              'sudo usermod -l nuovonome mario',
              'sudo usermod -L mario',
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      'I permessi Linux sono tre livelli (owner/group/others) con tre operazioni (r/w/x).',
      'La notazione ottale riscrive tutto; quella simbolica modifica un bit alla volta.',
      'Ogni modifica a utenti o gruppi va verificata con id o getent.',
    ],
    discussionPrompts: [
      'Quando un chmod sbagliato crea un problema di sicurezza o di collaborazione?',
      'Perché assegnare a ogni servizio un utente dedicato invece di usare root?',
    ],
    quiz: [
      {
        id: 'ch10-q1',
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
        id: 'ch10-q2',
        type: 'true_false',
        question: 'ps può aiutarti a osservare i processi attivi nel sistema.',
        correctAnswer: true,
        explanation: 'Sì: è uno dei comandi base per leggere lo stato dei processi.',
      },
      {
        id: 'ch10-q3',
        type: 'multiple_choice',
        question: 'Qual è il rischio di usare usermod -G developers mario (senza -a)?',
        options: [
          'Mario viene rimosso da tutti gli altri gruppi secondari',
          'Il comando fallisce senza -a',
          'Mario perde la home directory',
          'Il gruppo developers viene eliminato',
        ],
        correctAnswer: 0,
        explanation: 'Senza -a, -G sovrascrive l\'elenco completo dei gruppi secondari con solo quello indicato.',
      },
      {
        id: 'ch10-q4',
        type: 'true_false',
        question: 'Dopo aver aggiunto un utente a un gruppo con usermod -aG, le modifiche sono visibili immediatamente nella sessione corrente.',
        correctAnswer: false,
        explanation: 'Le modifiche ai gruppi richiedono un nuovo login. La sessione attiva mantiene i token di gruppo precedenti.',
      },
      {
        id: 'ch10-q5',
        type: 'multiple_choice',
        question: 'Quale comando rimuove un utente E la sua home directory?',
        options: [
          'sudo userdel -r mario',
          'sudo userdel mario',
          'sudo usermod -d mario',
          'sudo rmuser mario',
        ],
        correctAnswer: 0,
        explanation: 'userdel senza -r rimuove solo l\'utente dal database; -r elimina anche home e mail spool.',
      },
    ],
    glossary: ['permissions', 'chmod', 'chown', 'root', 'sudo', 'shell', 'process'],
  },
  {
    id: 11,
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
            explanation: 'Esegue un’operazione amministrativa mantenendo la sessione **utente normale**.',
            warning: 'Usa **sudo** solo se hai chiaro cosa stai per eseguire e perché.',
          },
        ],
      },
      {
        id: 'common-mistakes',
        title: 'Errori comuni da evitare',
        content:
          'I danni più frequenti non nascono da comandi "super avanzati", ma da fretta, percorsi sbagliati e privilegi usati senza contesto.\n\nTre esempi classici: cancellare nella cartella sbagliata, modificare permessi in modo troppo permissivo, lanciare comandi con sudo senza averli capiti.',
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
      'Quale differenza pratica c’è tra "sapere un comando" e "saperlo usare bene"?',
      'Perché la fretta è una delle principali cause di errore operativo su Linux?',
    ],
    quiz: [
      {
        id: 'ch11-q1',
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
        id: 'ch11-q2',
        type: 'true_false',
        question: 'Permessi troppo aperti possono creare un problema di sicurezza.',
        correctAnswer: true,
        explanation: 'Sì: concedere accessi inutili espone dati e script a modifiche indesiderate.',
      },
      {
        id: 'ch11-q3',
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
