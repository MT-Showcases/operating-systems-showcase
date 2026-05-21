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
        question: 'Quale affermazione è la più accurata sul ruolo del sistema operativo in un computer moderno?',
        options: [
          'Coincide con il desktop grafico che usi ogni giorno',
          'Serve quasi solo in avvio, poi contano soprattutto le app',
          'Coordina risorse hardware e fornisce servizi ai programmi',
          'È una raccolta di utility per semplificare i comandi',
        ],
        correctAnswer: 2,
        explanation: 'Corretto: l\'OS non è solo interfaccia o bootstrap, ma il livello che governa risorse e fornisce API/servizi ai processi durante tutta l\'esecuzione.',
      },
      {
        id: 'ch1-q2',
        type: 'multiple_choice',
        question: 'Salvi un file, riavvii il PC e lo ritrovi intatto il giorno dopo: quale sottosistema OS spiega meglio questo risultato?',
        options: [
          'Scheduler CPU: continuità del file tra riavvii',
          'RAM manager: conservazione del contenuto nel tempo',
          'Buffer I/O: persistenza garantita ad ogni scrittura',
          'File system: struttura, metadati e persistenza del dato',
        ],
        correctAnswer: 3,
        explanation: 'La persistenza è responsabilità del file system su storage non volatile. Scheduler, RAM e buffer sono importanti, ma non sono la causa principale del ritrovamento dopo riavvio.',
      },
      {
        id: 'ch1-q3',
        type: 'true_false',
        question: 'Vero o falso: in condizioni normali, un\'applicazione user space accede alle risorse sensibili tramite servizi del sistema operativo, non con accesso privilegiato diretto.',
        correctAnswer: true,
        explanation: 'Vero: il modello standard prevede mediazione dell\'OS per controllo dei permessi, isolamento e stabilità del sistema.',
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
        question: 'Quale componente è tipicamente volatile ma usato per il lavoro immediato dei programmi?',
        options: ['SSD NVMe', 'RAM', 'Cache su disco', 'Journal del file system'],
        correctAnswer: 1,
        explanation: 'La RAM è veloce e volatile: è ideale per lo stato temporaneo d\'esecuzione, ma non per conservazione a lungo termine.',
      },
      {
        id: 'ch2-q2',
        type: 'multiple_choice',
        question: 'Durante una videochiamata avvii anche copia file e molte tab browser: quale diagnosi è più robusta?',
        options: [
          'È quasi sempre solo CPU: storage e RAM contano poco',
          'Contesa tra risorse diverse: va misurato il vero collo di bottiglia',
          'È quasi sempre solo rete: le risorse locali incidono poco',
          'Con SSD moderno i rallentamenti percepibili sono improbabili',
        ],
        correctAnswer: 1,
        explanation: 'La risposta più corretta evita semplificazioni: in carichi misti il degrado può nascere da più risorse e va diagnosticato con metriche, non per intuizione singola.',
      },
      {
        id: 'ch2-q3',
        type: 'true_false',
        question: 'Vero o falso: aumentare solo la potenza CPU elimina sempre i colli di bottiglia percepiti dall\'utente.',
        correctAnswer: false,
        explanation: 'Falso: i colli di bottiglia possono stare in memoria, storage, rete o latenza I/O anche quando la CPU ha ampio margine.',
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
        question: 'Quale componente opera nel dominio privilegiato che può eseguire operazioni critiche di sistema?',
        options: ['Un processo user space molto complesso', 'La shell interattiva dell\'utente', 'Il package manager in esecuzione', 'Il kernel'],
        correctAnswer: 3,
        explanation: 'Solo il kernel gira in kernel space con privilegi pieni; shell e applicazioni, anche complesse, restano in user space.',
      },
      {
        id: 'ch3-q2',
        type: 'multiple_choice',
        question: 'Un processo deve aprire un file protetto: quale catena è architetturalmente corretta?',
        options: [
          'User space -> controller disco -> lettura diretta del file',
          'User space -> system call -> kernel -> risposta al processo',
          'User space -> privilege escalation -> accesso al file',
          'User space -> driver video -> accesso al file system',
        ],
        correctAnswer: 1,
        explanation: 'La system call è il passaggio formale verso il kernel, che applica policy e controlli prima di autorizzare o negare l\'operazione.',
      },
      {
        id: 'ch3-q3',
        type: 'true_false',
        question: 'Vero o falso: la separazione user space/kernel space contribuisce a confinare molti guasti applicativi senza compromettere subito l\'intero sistema.',
        correctAnswer: true,
        explanation: 'Vero: l\'isolamento limita la superficie d\'impatto degli errori in user space, migliorando robustezza complessiva.',
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
        `Un thread in un'app Web server gestisce una richiesta mentre altri thread aspettano connessioni: è il model che rende scalabile il servizio.`,
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
          'Il thread ha sempre uno spazio di memoria separato come un processo',
          'Il processo è più isolato; il thread condivide risorse del processo',
          'Processi e thread differiscono solo per priorità di esecuzione',
          'Il processo è un concetto logico senza memoria associata',
        ],
        correctAnswer: 1,
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
          'Per tradurre automaticamente il codice sorgente in binari eseguibili',
          'Per garantire che tutti i processi vadano sempre in parallelo reale',
          'Per assegnare tempo CPU ai processi in modo controllato',
          'Per rendere persistenti i file sul disco',
        ],
        correctAnswer: 2,
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
          'Organizzare e isolare lo spazio logico dei processi con mapping su RAM/storage',
          'Aumentare fisicamente la RAM installata nel sistema',
          'Evitare del tutto page fault e swap in ogni condizione',
          'Spostare la gestione file direttamente in user space',
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
          'RAM e storage sono equivalenti: cambia solo la capacità disponibile',
          'Lo storage è normalmente più veloce della RAM nel lavoro attivo',
          'La RAM è il luogo principale di persistenza a lungo termine',
          'RAM e storage hanno ruoli diversi ma collaborano nella vita del sistema',
        ],
        correctAnswer: 3,
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
    pilotContent: {
      whyItMatters: [
        'Linux è dove la teoria OS diventa pratica reale: ogni comando che digiti nel terminale è un\'interazione diretta con il kernel, il file system, i permessi — i concetti che hai imparato finora.',
        'Capire Linux non significa diventare sysadmin, significa imparare a leggere e interagire con un sistema operativo reale, cosa che sarà cruciale in qualsiasi carriera tecnica.',
        'Il terminale e la shell sono gli strumenti in cui i concetti OS diventano tangibili: processi visibili con ps, file con permessi in ls, memoria con top.',
      ],
      commonMistakes: [
        '**Terminale e shell sono la stessa cosa**: no — il terminale è il contenitore di interazione, la shell è il programma che interpreta; puoi avere lo stesso terminale con shell diverse.',
        '**Memorizzare tutte le directory /**: non serve — l\'obiettivo è capire che ogni cartella ha uno scopo (/home per utenti, /etc per config, /var per dati variabili).',
        '**Linux è difficile**: il terminale sembra intimidante, ma è solo un interfaccia diversa — meno clic, più logica.',
        '**Un comando "sbagliato" farà crashare il sistema**: raramente — la maggior parte dei comandi che vedi non rischiano danni; rm / senza permessi non funziona da utente normale.',
        '**Bash è l\'unica shell**: no — su macOS oggi è di default zsh, esiste fish, ksh, tcsh — tutte interpretano comandi simili.',
      ],
      realWorld: [
        'Quando dai comandi nel terminale, stai parlando con una shell che comunica con il kernel: echo $SHELL non è una query astratta, è una lettura della variabile d\'ambiente impostata al login.',
        'Quando usi ls /, vedi davvero la struttura del file system Linux — non in un diagramma, ma direttamente: ogni cartella ha un ruolo pratico in un sistema vero.',
        'I comandi che impari (pwd, cd, ls, cat) sono gli stessi che usi in produzione su server: non sono "esercizi scolastici", sono strumenti reali che milioni di sysadmin usano ogni giorno.',
      ],
      miniTask: [
        '**Passo 1 — Esplora**: apri un terminale (o usa KillerCoda) e digita `echo $SHELL` per vedere quale shell stai usando.',
        '**Passo 2 — Naviga**: digita `ls /` e riconosci le 3-5 directory principali che hai letto (home, etc, var, usr, bin).',
        '**Passo 3 — Mappa**: per ognuna, scrivi una frase su quale sia il suo ruolo (dove vivono i file? le config? i dati temporanei?).',
        '**Bonus**: digita `pwd` e `whoami` — sono comandi che confermano dove sei e chi sei nel sistema. È la base di ogni interazione.',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'Bash Manual — Basic Shell Features',
          description: 'Riferimento pratico su come la shell legge e esegue comandi.',
          url: 'https://www.gnu.org/software/bash/manual/html_node/Basic-Shell-Features.html',
        },
        {
          level: 'vai-oltre',
          title: 'The Linux Directory Structure — FHS (Filesystem Hierarchy Standard)',
          description: 'Standard ufficiale che spiega perché le directory hanno nomi e ruoli specifici.',
          url: 'https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html',
        },
        {
          level: 'deep-dive',
          title: 'Command Line Interface Design in Practice (Carnegie Mellon)',
          description: 'Articolo su come e perché il terminale è rimasto il modo più efficace di interagire con i sistemi.',
        },
      ],
    },
    quiz: [
      {
        id: 'ch6-q1',
        type: 'multiple_choice',
        question: 'Qual è la differenza corretta tra terminale e shell?',
        options: [
          'La shell è la finestra grafica che mostra l\'output dei comandi',
          'Il terminale è l’interfaccia, la shell interpreta i comandi',
          'Terminale e shell coincidono sempre nei sistemi Unix moderni',
          'La shell è un componente hardware della tastiera',
        ],
        correctAnswer: 1,
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
          'Un comando per cambiare shell nel terminale',
          'Un file system temporaneo usato in fase di boot',
          'Un insieme coerente di kernel, pacchetti e strumenti',
          'Un antivirus nativo del kernel Linux',
        ],
        correctAnswer: 2,
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
    pilotContent: {
      whyItMatters: [
        'Confrontare sistemi operativi ti evita scelte guidate da abitudine o marketing: impari a valutare in base a contesto, requisiti e trade-off reali.',
        'Capire perché Linux domina server e cloud, pur essendo minoritario sul desktop, è uno dei passaggi chiave per leggere il mercato IT in modo professionale.',
        'Sapere differenziare le distribuzioni Linux rende pratiche le scelte tecniche: ambiente di studio, sviluppo locale, infrastruttura e produzione non richiedono sempre la stessa distro.',
      ],
      commonMistakes: [
        '**Esiste un OS migliore in assoluto**: no, esiste l\'OS più adatto a un dominio specifico (desktop, server, mobile, embedded).',
        '**Linux è poco usato quindi è meno importante**: falso — nel server/cloud è dominante e in supercomputing è standard de facto.',
        '**Le distribuzioni cambiano solo grafica**: no — package manager, release model e supporto LTS cambiano davvero il lavoro operativo.',
        '**Android non c\'entra con Linux**: in realtà Android usa kernel Linux con stack applicativo diverso.',
        '**Windows/macOS/Linux si confrontano solo per preferenze personali**: il confronto corretto include costi, ecosistema tool, manutenzione e deploy.',
      ],
      realWorld: [
        'Un team backend sceglie Ubuntu LTS in cloud per stabilità, documentazione e supporto comunitario: non perché Linux sia "di moda", ma perché riduce rischio operativo.',
        'Uno sviluppatore usa macOS sul laptop ma deploya su Linux server: conoscere differenze shell/package evita bug da ambiente.',
        'Un progetto IoT usa Linux embedded su dispositivi e Linux su server di raccolta dati: stessa base kernel, esigenze operative diverse.',
      ],
      miniTask: [
        '**Passo 1 — Definisci scenario**: scegli 3 contesti (desktop personale, server web, laboratorio didattico).',
        '**Passo 2 — Scegli OS**: per ogni contesto proponi un sistema (o distro) e giustifica in 2 criteri concreti (stabilità, costo, ecosistema, tooling).',
        '**Passo 3 — Verifica trade-off**: aggiungi un limite per ogni scelta (compatibilità software, curva di apprendimento, lock-in).',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'Top500 Supercomputers Statistics',
          description: 'Panoramica aggiornata sull\'uso di Linux nel supercomputing.',
          url: 'https://www.top500.org/statistics/',
        },
        {
          level: 'vai-oltre',
          title: 'Linux Foundation - Open Source in Cloud Infrastructure',
          description: 'Contesto su perché Linux e open source dominano stack cloud e infrastruttura moderna.',
        },
        {
          level: 'deep-dive',
          title: 'DistroWatch: Distribution Release and Lifecycle Patterns',
          description: 'Confronto pratico tra release model (LTS, rolling, enterprise) e impatto operativo.',
          url: 'https://distrowatch.com/',
        },
      ],
    },
    quiz: [
      {
        id: 'ch7-q1',
        type: 'multiple_choice',
        question: 'Quale sistema operativo domina il mercato server e cloud?',
        options: ['Windows Server', 'Linux', 'macOS Server', 'FreeBSD'],
        correctAnswer: 1,
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
          'La quantità minima di RAM consigliata',
          'Il colore e il tema dell\'interfaccia grafica',
          'Package manager, stabilità e ciclo di rilascio',
          'La velocità della CPU richiesta dal sistema',
        ],
        correctAnswer: 2,
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
    pilotContent: {
      whyItMatters: [
        'Un ambiente Linux pronto riduce frizione: inizi a praticare subito invece di perdere tempo in setup improvvisati.',
        'Scegliere bene il contesto (browser, WSL2, VM) evita blocchi tecnici nei capitoli successivi.',
        'Capire persistenza e isolamento ti protegge da aspettative sbagliate su file, performance e sicurezza.',
      ],
      commonMistakes: [
        'KillerCoda non e un PC personale permanente: le sessioni possono scadere e i file non sono garantiti tra accessi.',
        'WSL2 non e una distro separata dal tuo workflow Windows: va integrato con percorso, editor e backup.',
        'VirtualBox e UTM non sono identici: su Apple Silicon devi verificare compatibilita ARM prima di partire.',
        'Piu RAM assegnata alla VM non significa sempre meglio: se saturi l\'host ottieni il risultato opposto.',
        'Installare Linux non equivale a saperlo usare: il valore arriva quando testi davvero comandi e flussi.',
      ],
      realWorld: [
        'Team di formazione usano browser lab temporanei per onboarding rapido senza toccare i laptop aziendali.',
        'Sviluppatori Windows lavorano con WSL2 + VS Code Remote per unire tool Linux e produttivita desktop.',
        'Ambienti VM isolati sono standard per test rischiosi, malware analysis e prove di hardening.',
      ],
      miniTask: [
        'Scegli un ambiente primario (KillerCoda, WSL2 o VM) e scrivi in due righe il motivo della scelta.',
        'Esegui whoami, pwd e cat /etc/os-release nel tuo ambiente e salva l\'output in un file note-setup.txt.',
        'Valuta persistenza: crea un file, chiudi la sessione, riapri e verifica se il file esiste ancora.',
        'Definisci un piano B: quale seconda opzione userai se il tuo ambiente principale non parte?',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'WSL official docs',
          description: 'Guida Microsoft per installazione, troubleshooting e best practice di WSL2.',
          url: 'https://learn.microsoft.com/windows/wsl/',
        },
        {
          level: 'vai-oltre',
          title: 'VirtualBox user manual',
          description: 'Riferimento completo su networking, storage e snapshot in ambienti VM.',
          url: 'https://www.virtualbox.org/manual/',
        },
        {
          level: 'deep-dive',
          title: 'UTM documentation',
          description: 'Approccio consigliato per virtualizzazione Linux su Mac Apple Silicon.',
          url: 'https://docs.getutm.app/',
        },
      ],
    },
    interactivePilot: {
      mission: {
        title: 'Missione 08 — Decisione setup con vincoli reali',
        intro:
          'Questa missione simula una scelta da mondo reale: devi proporre un setup Linux che parta subito, regga il lavoro dei prossimi capitoli e abbia un fallback se qualcosa va storto.',
        winCondition:
          'La missione e completata quando produci una decisione motivata con 3 vincoli tecnici, 1 rischio operativo esplicito e 1 piano B attivabile in meno di 10 minuti.',
        steps: [
          {
            title: 'Mappa i vincoli hard',
            instruction:
              'Rileva OS host, RAM, privilegi admin, qualita rete e bisogno di persistenza. Segna almeno 3 vincoli non negoziabili.',
            whyItMatters:
              'La stessa soluzione puo essere ottima o pessima a seconda dei vincoli: il contesto decide la qualita del setup.',
          },
          {
            title: 'Scegli primario con criterio',
            instruction:
              'Scegli tra KillerCoda, WSL2 e VM indicando due benefici concreti e un limite tecnico della tua scelta.',
            whyItMatters:
              'Una scelta robusta non nasconde i limiti: li rende espliciti e gestibili prima che blocchino lo studio.',
          },
          {
            title: 'Definisci fallback operativo',
            instruction:
              'Definisci un piano B con trigger chiaro (quando scatta) e procedura breve (massimo 3 passi) da eseguire subito.',
            whyItMatters:
              'Il fallback riduce downtime: non perdi la sessione anche se installazione o ambiente principale falliscono.',
          },
        ],
      },
    },
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
                output: 'Inserisci il nuovo nome utente UNIX: mike\nNuova password:',
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
          'Provisioning rapido nel browser senza installazione locale',
          'Prestazioni superiori a una VM nativa in ogni scenario',
          'Persistenza garantita tra tutte le sessioni',
          'Accesso diretto all\'hardware host con privilegi elevati',
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
        options: ['VirtualBox', 'Hyper-V', 'UTM', 'Parallels Desktop'],
        correctAnswer: 2,
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
    pilotContent: {
      whyItMatters: [
        'Questi comandi sono la grammatica minima del terminale: senza orientamento, ogni comando avanzato diventa fragile.',
        'Lavorare bene su file e directory riduce errori irreversibili e tempo perso in recovery.',
        'Capire chi sei nel sistema (utente e gruppi) e il primo passo per non rompere permessi e workflow condivisi.',
      ],
      commonMistakes: [
        'ls non sostituisce pwd: vedere i file non ti dice con certezza dove sei nella gerarchia.',
        'rm non e una funzione "annulla": in shell standard non esiste cestino automatico.',
        'cd relativo e cd assoluto non sono intercambiabili: confonderli sposta il contesto operativo.',
        'whoami mostra il nome, non i privilegi completi: per decisioni su accessi devi leggere id.',
        'Copiare comandi a memoria senza controllare il percorso e la causa principale di danni banali.',
      ],
      realWorld: [
        'Pipeline CI e script di deploy assumono sempre contesto directory corretto prima di build e release.',
        'Incident postmortem includono spesso cancellazioni in path sbagliati dovute a shell context non verificato.',
        'Runbook operativi maturi partono da check minimi: whoami, pwd, ls -la prima di ogni azione critica.',
      ],
      miniTask: [
        'Crea una cartella sandbox-linux e lavora solo li per tutta la sessione.',
        'Esegui un ciclo completo: mkdir, touch, cp, mv, cat, rm -i e documenta output e risultato atteso.',
        'Confronta whoami e id e annota differenza tra nome utente, UID e gruppi secondari.',
        'Scrivi tre regole personali anti-errore da usare prima di rm o mv in progetti reali.',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'GNU coreutils overview',
          description: 'Panoramica ufficiale degli strumenti base del terminale (cp, mv, rm, ls, cat).',
          url: 'https://www.gnu.org/software/coreutils/manual/coreutils.html',
        },
        {
          level: 'vai-oltre',
          title: 'The Linux command line basics',
          description: 'Approccio progressivo per consolidare navigazione, path e manipolazione file.',
          url: 'https://linuxcommand.org/',
        },
        {
          level: 'deep-dive',
          title: 'Filesystem hierarchy standard',
          description: 'Riferimento per capire struttura directory Linux in modo sistematico.',
          url: 'https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html',
        },
      ],
    },
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
                output: '/home/mike/progetto-linux',
                explanation: 'Mostra la **directory corrente**: è il tuo punto di partenza operativo. Eseguilo sempre prima di qualsiasi modifica.',
              },
            },
            {
              goal: 'Cosa c\'è qui dentro?',
              command: {
                command: 'ls -la',
                output: 'drwxr-xr-x  mike mike  .\ndrwxr-xr-x  mike mike  ..\n-rw-r--r--  mike mike  appunti.txt',
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
                output: 'mike',
                explanation: 'Risposta immediata: sei questo utente. Utile nei contesti in cui non sei sicuro di chi sta eseguendo lo script o il comando.',
              },
            },
            {
              goal: 'UID, GID e gruppi completi',
              command: {
                command: 'id',
                output: 'uid=1000(mike) gid=1000(mike) gruppi=1000(mike),27(sudo),1001(developers)',
                explanation: 'Mostra tutto: **UID**, gruppo primario e gruppi secondari. Se vedi **sudo** nell\'elenco, puoi usare sudo sul sistema.',
              },
            },
            {
              goal: 'Micro-test: verifica accesso reale tra utenti',
              command: {
                command: 'touch prova-accesso.txt && chmod 600 prova-accesso.txt && sudo -u mike2 cat prova-accesso.txt',
                output: 'cat: prova-accesso.txt: Permission denied',
                explanation: 'Colleghi identita e permessi con un test concreto: l\'utente diverso viene bloccato se non e owner o nel gruppo corretto.',
              },
            },
            {
              goal: 'Conferma motivo del blocco',
              command: {
                command: 'id mike2 && ls -l prova-accesso.txt',
                output: 'uid=1002(mike2) gid=1002(mike2) groups=1002(mike2)',
                explanation: 'Verifica sempre le due fonti della decisione: membership gruppi e bit attivi su file/directory.',
              },
            },
          ],
        },
        commandReferences: [
          {
            command: 'sudo -u',
            syntax: 'sudo -u <utente> <comando>',
            description: 'Esegue un singolo comando come un altro utente senza aprire una nuova sessione completa.',
            examples: ['sudo -u mike whoami', 'sudo -u mike cat /home/mike/file.txt'],
          },
          {
            command: 'sudo -iu',
            syntax: 'sudo -iu <utente>',
            description: 'Apre una shell login completa come un altro utente. Utile per più operazioni consecutive.',
            examples: ['sudo -iu mike', 'sudo -iu mike && whoami'],
          },
          {
            command: 'groups',
            syntax: 'groups <utente>',
            description: 'Mostra i gruppi di appartenenza dell\'utente in formato rapido.',
            examples: ['groups mike', 'groups'],
          },
        ],
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
        question: 'Stai per eseguire un comando distruttivo e vuoi verificare dove sei: quale comando è il controllo più diretto?',
        options: ['cd .', 'ls -la', 'pwd', 'dirname .'],
        correctAnswer: 2,
        explanation: 'pwd è il check più diretto perché stampa subito il percorso assoluto corrente. ls -la mostra contenuto (utile ma indiretto), cd . non produce informazione nuova e dirname . non è il comando operativo standard per questo controllo.',
      },
      {
        id: 'ch9-q2',
        type: 'multiple_choice',
        question: 'In quale scenario rm -i è più utile rispetto a rm "semplice"?',
        options: [
          'Quando vuoi una conferma esplicita prima di ogni cancellazione',
          'Quando vuoi spostare i file nel cestino senza prompt',
          'Quando vuoi cambiare owner prima della rimozione',
          'Quando vuoi cancellare ricorsivamente senza interazioni',
        ],
        correctAnswer: 0,
        explanation: 'La flag -i aggiunge conferma interattiva e riduce errori su percorsi sbagliati. Non sposta nel cestino, non cambia owner e non è pensata per esecuzioni non interattive.',
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
    pilotContent: {
      whyItMatters: [
        'Permessi e ownership sono il cuore della sicurezza Linux quotidiana: un bit sbagliato puo esporre dati e servizi.',
        'Sapere creare utenti e gruppi in modo ripetibile e un requisito base per ambienti multiutente e server.',
        'Verificare ogni modifica con id/getent evita stato inconsistente e debugging costoso.',
      ],
      commonMistakes: [
        'chmod 777 non e una scorciatoia innocua: apre tutto a tutti e aumenta la superficie di attacco.',
        'La notazione ottale non "aggiunge" permessi: riscrive completamente i tre blocchi owner/group/others.',
        'usermod -G senza -a non estende i gruppi: sovrascrive la lista e puo togliere accessi critici.',
        'userdel senza -r non pulisce automaticamente la home: lascia file orfani e confusione operativa.',
        'Cambiare owner con chown -R senza validare il path puo compromettere interi alberi applicativi.',
      ],
      realWorld: [
        'Deployment web standard usa owner applicativo dedicato e chmod minimi su directory esposte.',
        'Team DevOps creano gruppi per progetto per separare accessi write tra sviluppo, CI e produzione.',
        'Audit di sicurezza partono da permessi filesystem e membership gruppi prima di analizzare codice.',
      ],
      miniTask: [
        'Crea un utente test e un gruppo progetto, poi verifica mapping UID/GID con id e getent.',
        'Imposta un file di configurazione con chmod 640 e una directory script con chmod 750, spiegando la scelta.',
        'Simula errore controllato: usa chmod ottale e poi correggi con notazione simbolica su singolo bit.',
        'Documenta una checklist di 5 controlli da fare prima di qualsiasi chown -R in produzione.',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'GNU chmod and chown manual',
          description: 'Sintassi ufficiale e comportamento dettagliato di chmod/chown.',
          url: 'https://www.gnu.org/software/coreutils/manual/coreutils.html#File-permissions',
        },
        {
          level: 'vai-oltre',
          title: 'Linux users and groups administration',
          description: 'Riferimento pratico per useradd/usermod/userdel e gestione gruppi.',
          url: 'https://wiki.archlinux.org/title/Users_and_groups',
        },
        {
          level: 'deep-dive',
          title: 'Principle of least privilege',
          description: 'Fondamenti di sicurezza per minimizzare privilegi su sistemi reali.',
          url: 'https://csrc.nist.gov/glossary/term/least_privilege',
        },
      ],
    },
    interactivePilot: {
      mission: {
        title: 'Missione 10 — Applica permessi minimi senza rompere tutto',
        intro:
          'Questa missione simula un hardening reale su un file usato da persone e pipeline: devi correggere accessi senza introdurre regressioni.',
        winCondition:
          'La missione e completata quando scegli permessi coerenti, eviti scorciatoie pericolose e verifichi il risultato con comandi di controllo.',
        steps: [
          {
            title: 'Leggi stato iniziale',
            instruction:
              'Raccogli baseline con ls -l deploy.sh, id alice e getent group developers prima di qualsiasi modifica.',
            whyItMatters:
              'Senza baseline verificabile, ogni fix e potenzialmente cieco e difficile da giustificare in audit.',
          },
          {
            title: 'Applica modifica minima necessaria',
            instruction:
              'Se trovi mismatch, applica solo il delta necessario con chown/chmod (evita cambi blanket non richiesti).',
            whyItMatters:
              'Riduci superficie di attacco ed eviti effetti collaterali su team e servizi.',
          },
          {
            title: 'Verifica e documenta',
            instruction:
              'Riesegui gli stessi controlli e annota in 2 righe: stato iniziale, delta applicato, stato finale.',
            whyItMatters:
              'Verifica e tracciabilita rendono il processo ripetibile e auditabile.',
          },
        ],
      },
      scenario: {
        title: 'Scenario realistico — Hardening senza regressioni',
        situation:
          'deploy.sh e usato in CI e da un team misto. Policy target: owner alice, gruppo developers, permessi 750. Non sai se lo stato attuale e gia conforme e vuoi evitare cambiamenti inutili che possano rompere audit o pipeline.',
        question:
          'Qual e la strategia iniziale migliore per rispettare least privilege minimizzando rischio di regressione?',
        options: [
          {
            label: 'Verifica stato corrente, poi applica solo delta necessari (owner/gruppo/permessi)',
            feedback:
              'Scelta migliore: prima osservi, poi cambi solo cio che serve. Sequenza raccomandata: baseline, delta minimo, verifica finale.',
            isCorrect: true,
          },
          {
            label: 'chown alice:developers deploy.sh + chmod 750 deploy.sh',
            feedback:
              'Robusta ma meno conservativa: funziona, pero forza cambi anche quando non necessari e puo alterare metadati osservati da controlli/audit.',
          },
          {
            label: 'chmod 750 deploy.sh senza verificare owner e gruppo',
            feedback:
              'Parziale: se owner/gruppo non sono corretti, non soddisfa il requisito completo e lascia ambiguita sui responsabili del file.',
          },
          {
            label: 'Lascia stato attuale e compensa via policy esterna',
            feedback:
              'Debole: rimandi il problema. Il file resta potenzialmente incoerente e dipende da controlli indiretti piu fragili.',
          },
        ],
        takeaway:
          'Nel controllo accessi professionale la sequenza vincente e: osserva stato, applica delta minimi, verifica risultato. Correttezza e stabilita devono andare insieme.',
      },
    },
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
          intro: 'Il flusso corretto è sempre lo stesso: leggi lo stato attuale, poi agisci. Micro-test: accesso reale tra utenti in 3 step.',
          steps: [
            {
              goal: 'Leggi i permessi correnti del file',
              command: {
                command: 'ls -la script.sh',
                output: '-rw-r--r-- 1 mike developers 512 mag 20 10:00 script.sh',
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
                command: 'chown mike:developers progetto/',
                output: '',
                explanation: 'Assegna il file all\'utente **mike** e al gruppo **developers**. Richiede **sudo** se non sei il proprietario attuale.',
                warning: '**chown** su directory intere usa **-R** per ricorsività. Verifica sempre il percorso prima.',
              },
            },
            {
              goal: 'Micro-test 1/3: setup restrittivo e test negato',
              command: {
                command: 'touch segreto.txt && chmod 600 segreto.txt && sudo -u mike2 cat segreto.txt',
                output: 'cat: segreto.txt: Permission denied',
                explanation: 'Con **600** solo l\'owner accede. Se provi come altro utente, ottieni errore: è il test pratico più chiaro per validare i permessi.',
              },
            },
            {
              goal: 'Micro-test 2/3: abilita gruppo e ritesta',
              command: {
                command: 'sudo chown :progetto segreto.txt && chmod 660 segreto.txt && sudo -u mike2 cat segreto.txt',
                output: '',
                explanation: 'Con **660** l\'accesso passa dal gruppo. Il comando funziona solo se l\'utente è membro del gruppo corretto.',
              },
            },
            {
              goal: 'Micro-test 3/3: verifica finale policy',
              command: {
                command: 'id mike2 && ls -l segreto.txt',
                output: 'uid=1002(mike2) gid=1002(mike2) groups=1002(mike2),1005(progetto)',
                explanation: 'Controlla sempre **chi è l\'utente**, **a quali gruppi appartiene** e **quali bit sono attivi** prima di concludere che una policy funzioni.',
              },
            },
          ],
        },
        terminalCommands: [
          {
            command: 'stat -c "%A %a %U:%G %n" script.sh',
            output: '-rwxr-xr-x 755 mike:developers script.sh',
            explanation: 'Con **stat** leggi in una riga permessi simbolici, ottali, owner e gruppo: è un check rapido prima di chmod/chown.',
          },
          {
            command: 'namei -l /home/mike/progetto/deploy.sh',
            output: 'drwxr-xr-x root root /\ndrwxr-xr-x root root home\ndrwx------ mike mike mike\ndrwxr-x--- mike developers progetto\n-rwxr-x--- mike developers deploy.sh',
            explanation: 'Mostra i permessi di ogni segmento del percorso. Utile quando un file "sembra giusto" ma l\'accesso fallisce per colpa di una directory intermedia.',
            warning: 'Se una directory nel path non ha bit **x** per il tuo utente/gruppo, non puoi attraversarla anche se il file finale è leggibile.',
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
            examples: ['chown mike note.txt', 'chown mike:developers progetto/', 'sudo chown root:root /etc/config'],
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
          'Per test puntuali di accesso usa `sudo -u <utente> <comando>`; usa shell completa (`sudo -iu`) solo se devi fare più azioni come quell\'utente.',
        ],
        infoTables: [
          {
            title: 'Struttura di /etc/passwd — un campo per volta',
            headers: ['Campo', 'Esempio', 'Significato'],
            rows: [
              { cells: ['username', 'mike', 'nome di login, deve essere unico'] },
              { cells: ['password', 'x', 'x = hash in /etc/shadow (mai in chiaro qui)'] },
              { cells: ['UID', '1001', 'identificatore numerico utente (root = 0)'] },
              { cells: ['GID', '1001', 'gruppo primario dell\'utente'] },
              { cells: ['commento', 'Mike Rossi', 'nome completo o descrizione (GECOS)'] },
              { cells: ['home', '/home/mike', 'directory personale dell\'utente'] },
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
          intro: 'Il flusso reale di un amministratore: creare un utente funzionante, assegnarlo a un gruppo, verificare ogni passaggio e chiudere il ciclo con rimozione controllata.',
          steps: [
            {
              goal: 'Crea l\'utente in modo rapido con wizard interattivo',
              command: {
                title: 'Create utente',
                command: 'sudo adduser mike',
                output: 'Adding user `mike` ...\nNew password:\nRetype new password:\nFull Name []: Mike Rossi\n...\nIs the information correct? [Y/n] Y',
                explanation: 'Su Debian/Ubuntu, **adduser** è il percorso più veloce: crea home directory, imposta la password e raccoglie i metadati in un unico flusso guidato.',
              },
            },
            {
              goal: 'Fallback universale: usa useradd + passwd dove adduser non c\'è',
              command: {
                title: 'Fallback creazione account',
                command: 'sudo passwd mike',
                output: 'Nuova password:\nRipetere la nuova password:\npasswd: password aggiornata correttamente',
                explanation: 'Su distro dove **adduser** non è disponibile (o è diverso), crea l\'utente con **useradd** e poi imposta la password con **passwd**. L\'hash viene scritto in **/etc/shadow**, non in **/etc/passwd**.',
              },
            },
            {
              goal: 'Verifica che l\'utente sia stato creato correttamente',
              command: {
                title: 'Verify creazione utente',
                command: 'getent passwd mike',
                output: 'mike:x:1001:1001:Mike Rossi:/home/mike:/bin/bash',
                explanation: 'Tutti i campi in un colpo solo: **UID**, **GID**, commento, home, **shell**. Se il comando non restituisce nulla, l\'utente non esiste.',
              },
            },
            {
              goal: 'Crea un gruppo di progetto',
              command: {
                title: 'Create gruppo',
                command: 'sudo groupadd developers',
                output: '',
                explanation: 'Crea il gruppo con il primo **GID** disponibile. Puoi specificarne uno manuale con **-g \<numero\>** se hai bisogno di un GID fisso (utile in ambienti con NFS o condivisioni).',
              },
            },
            {
              goal: 'Aggiungi l\'utente al gruppo (senza rimuoverlo da quelli esistenti)',
              command: {
                title: 'Configure membership',
                command: 'sudo usermod -aG developers mike',
                output: '',
                explanation: '**-aG** significa "append to Groups": aggiunge **developers** ai gruppi secondari di mike senza toccare quelli già presenti. Senza **-a** sovrascriveresti tutti i gruppi secondari.',
                warning: 'La flag **-a** è obbligatoria insieme a **-G**. Dimenticarla rimuove mike da tutti gli altri gruppi secondari.',
              },
            },
            {
              goal: 'Verifica UID, GID e appartenenza ai gruppi',
              command: {
                title: 'Verify membership',
                command: 'id mike',
                output: 'uid=1001(mike) gid=1001(mike) gruppi=1001(mike),1002(developers)',
                explanation: 'Conferma che **mike** appartiene ora a entrambi i gruppi. Nota: questa modifica sarà visibile a mike solo dopo un nuovo login.',
              },
            },
            {
              goal: 'Modifica la shell o altri attributi in seguito',
              command: {
                title: 'Adjust attributi post-creazione',
                command: 'sudo usermod -s /bin/zsh mike',
                output: '',
                explanation: '**usermod** permette di cambiare qualsiasi attributo post-creazione: **shell** (**-s**), home (**-d**), commento (**-c**), nome di login (**-l**), account bloccato (**-L**) o sbloccato (**-U**).',
              },
            },
            {
              goal: 'Rimuovi l\'utente dal gruppo e valida il risultato',
              command: {
                title: 'Remove membership',
                command: 'sudo gpasswd -d mike developers',
                output: 'Rimozione dell\'utente mike dal gruppo developers',
                explanation: 'Prima di eliminare account o gruppi, sgancia l\'utente in modo esplicito dal gruppo secondario: semplifica teardown e verifica dello stato finale.',
              },
            },
            {
              goal: 'Verifica che il gruppo non includa più l\'utente',
              command: {
                title: 'Verify group state',
                command: 'getent group developers',
                output: 'developers:x:1002:',
                explanation: 'Conferma che la membership è stata rimossa: il gruppo esiste ancora ma non contiene più mike.',
              },
            },
            {
              goal: 'Rimuovi l\'utente e la home directory con cautela',
              command: {
                title: 'Remove user',
                command: 'sudo userdel -r mike',
                output: '',
                explanation: 'Esegue il teardown dell\'account e pulisce la home. Fallo solo quando hai già verificato backup e ownership dei file importanti.',
                warning: '**userdel -r** è irreversibile: la home e i file dell\'utente vengono eliminati. Verifica backup e ownership prima di procedere.',
              },
            },
            {
              goal: 'Verifica che l\'utente non esista più',
              command: {
                title: 'Verify user removal',
                command: 'getent passwd mike',
                output: '',
                explanation: 'Se il comando non produce output, l\'utente è stato rimosso dal database identità del sistema.',
              },
            },
            {
              goal: 'Rimuovi il gruppo di progetto se non più necessario',
              command: {
                title: 'Remove group',
                command: 'sudo groupdel developers',
                output: '',
                explanation: 'Chiude il ciclo completo: elimina il gruppo quando non è più usato da utenti o processi.',
              },
            },
            {
              goal: 'Verifica finale teardown completo',
              command: {
                title: 'Verify teardown completeness',
                command: 'getent group developers',
                output: '',
                explanation: 'Nessun output conferma che anche il gruppo è stato rimosso. A questo punto il ciclo create-configure-verify-remove è concluso.',
              },
            },
          ],
        },
        terminalCommands: [
          {
            title: 'Check stato gruppo',
            command: 'getent group developers',
            output: 'developers:x:1002:mike',
            explanation: 'Mostra il gruppo **developers** con **GID** e lista dei membri. Equivale a cercare la riga corrispondente in **/etc/group**.',
          },
          {
            title: 'Rimuovi membership specifica',
            command: 'sudo gpasswd -d mike developers',
            output: 'Rimozione dell\'utente mike dal gruppo developers',
            explanation: 'Rimuove **mike** dal gruppo senza toccare altri attributi. Alternativa a **usermod** quando devi rimuovere da un gruppo specifico.',
          },
          {
            title: 'Elimina account utente',
            command: 'sudo userdel -r mike',
            output: '',
            explanation: 'Rimuove l\'utente e cancella la **home directory** con tutto il contenuto.',
            warning: '**userdel -r** è irreversibile: la home e i file dell\'utente vengono eliminati. Fai sempre un backup prima.',
          },
          {
            title: 'Elimina gruppo di progetto',
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
              'sudo useradd -m -s /bin/bash mike',
              'sudo useradd -m -s /bin/bash -G sudo,developers mike',
              'sudo useradd -u 1500 -g staff -m mike',
            ],
          },
          {
            command: 'usermod',
            syntax: 'usermod [opzioni] <username>',
            description: 'Modifica gli attributi di un utente esistente. -aG è la combinazione più usata per aggiungere ai gruppi.',
            examples: [
              'sudo usermod -aG sudo mike',
              'sudo usermod -s /bin/zsh mike',
              'sudo usermod -l nuovonome mike',
              'sudo usermod -L mike',
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
          'Owner con rw-, gruppo con r-x, altri con r-x',
          'Owner con r-x, gruppo con r-x, altri con r-x',
          'Owner con rwx, gruppo e altri con r-x',
          'Owner e gruppo con rwx, altri con r-x',
        ],
        correctAnswer: 2,
        explanation: 'chmod 755 significa owner=7 (rwx), group=5 (r-x), others=5 (r-x). Le altre opzioni alterano almeno un blocco (owner o group) rispetto alla tripla 7-5-5.',
      },
      {
        id: 'ch10-q2',
        type: 'true_false',
        question: 'Vero o falso: ps mostra una fotografia istantanea dei processi, non un monitor live continuo come top.',
        correctAnswer: true,
        explanation: 'Vero: ps produce uno snapshot al momento del comando. Per monitoraggio continuo e aggiornamento in tempo reale servono top/htop o strumenti equivalenti.',
      },
      {
        id: 'ch10-q3',
        type: 'multiple_choice',
        question: 'Qual è il rischio di usare usermod -G developers mike (senza -a)?',
        options: [
          'Il comando fallisce perché -G richiede sempre -r',
          'Mike viene rimosso da tutti gli altri gruppi secondari',
          'Mike perde immediatamente la home directory',
          'Il gruppo developers viene eliminato dal sistema',
        ],
        correctAnswer: 1,
        explanation: 'Senza -a, usermod -G sostituisce la lista dei gruppi secondari con quelli specificati. Non elimina home o gruppo, e non esiste il vincolo "-G richiede -r".',
      },
      {
        id: 'ch10-q4',
        type: 'true_false',
        question: 'Vero o falso: dopo usermod -aG, la sessione già aperta eredita subito i nuovi gruppi senza nuovo login.',
        correctAnswer: false,
        explanation: 'Falso: la sessione corrente mantiene i token già acquisiti. Per vedere i nuovi gruppi serve nuovo login (o una nuova sessione equivalente).',
      },
      {
        id: 'ch10-q5',
        type: 'multiple_choice',
        question: 'Quale comando rimuove un utente E la sua home directory?',
        options: [
          'sudo userdel mike',
          'sudo usermod -d mike',
          'sudo userdel -r mike',
          'sudo rmuser mike',
        ],
        correctAnswer: 2,
        explanation: 'userdel -r rimuove account e home directory (oltre al mail spool dove previsto). userdel senza -r lascia la home, usermod -d cambia home path e rmuser non è il comando standard in questo contesto.',
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
    pilotContent: {
      whyItMatters: [
        'La maggior parte degli incidenti operativi nasce da abitudini, non da complessita tecnica estrema.',
        'Adottare principio di privilegio minimo riduce impatto di errori umani e comandi sbagliati.',
        'Un mindset professionale rende ripetibili le operazioni e migliora affidabilita del team.',
      ],
      commonMistakes: [
        'sudo non e un prefisso standard da aggiungere sempre: va usato solo con una motivazione esplicita.',
        'Leggere solo la prima riga dell\'errore porta a fix superficiali: serve interpretare tutto l\'output.',
        'Automatizzare prima di capire il flusso moltiplica errori: prima comprensione, poi script.',
        'Saltare backup e rollback su operazioni delicate non e velocita: e debito operativo immediato.',
        'Confondere familiarita con sicurezza porta a overconfidence e comandi lanciati senza verifica.',
      ],
      realWorld: [
        'SRE team usano checklist pre-change e post-change per ridurre incidenti durante manutenzione.',
        'Policy aziendali mature impongono account separati e tracciamento comandi privilegiati.',
        'Runbook efficaci descrivono anche cosa non fare, non solo la procedura ideale.',
      ],
      miniTask: [
        'Prendi un comando con sudo dal tuo storico e riscrivi il motivo tecnico per cui serviva davvero.',
        'Definisci una mini checklist personale pre-comando critico: contesto, target, impatto, rollback.',
        'Simula una review: scegli un comando rischioso e chiediti quali segnali d\'allarme avresti prima di inviarlo.',
        'Crea un file sicurezza-operativa.md con 5 regole pratiche che adotterai nei prossimi capitoli.',
      ],
      deepDive: [
        {
          level: 'essenziale',
          title: 'OWASP developer security principles',
          description: 'Principi generali utili anche per operazioni sysadmin quotidiane.',
          url: 'https://owasp.org/www-project-developer-guide/',
        },
        {
          level: 'vai-oltre',
          title: 'NIST least privilege guidance',
          description: 'Riferimenti formali su riduzione privilegi e controllo accessi.',
          url: 'https://csrc.nist.gov/glossary/term/least_privilege',
        },
        {
          level: 'deep-dive',
          title: 'Linux hardening checklist',
          description: 'Checklist operativa per trasformare buone pratiche in controlli ripetibili.',
          url: 'https://cheatsheetseries.owasp.org/cheatsheets/Linux_Hardening_Cheat_Sheet.html',
        },
      ],
    },
    sections: [
      {
        id: 'root-sudo',
        title: 'Utente normale, root e sudo',
        content:
          'Lavorare sempre come root è comodo solo in apparenza. In realtà aumenta il rischio di fare danni con un singolo comando.\n\nIl flusso sano è: lavori come utente normale e usi sudo solo per l’operazione che richiede davvero privilegi elevati.',
        keyPoints: [
          'Più privilegio = più responsabilità.',
          'sudo riduce l’esposizione rispetto a sessioni root permanenti.',
          'Preferisci `sudo -u <utente> <comando>` per test mirati; entra in shell con `sudo -iu` solo quando serve davvero una sessione completa.',
        ],
        labBlock: {
          title: 'Micro-check pre-sudo in 3 passi',
          intro: 'Prima di qualsiasi comando privilegiato, fai tre controlli veloci: contesto, target, impatto.',
          steps: [
            {
              goal: 'Contesto: chi sei e dove sei',
              command: {
                command: 'whoami && pwd',
                output: 'mike\n/home/mike/progetto',
                explanation: 'Eviti errori banali verificando utente e directory corrente prima di operazioni sensibili.',
              },
            },
            {
              goal: 'Target: cosa stai per toccare',
              command: {
                command: 'ls -la /etc/hosts',
                output: '-rw-r--r-- 1 root root 244 mag 21 09:10 /etc/hosts',
                explanation: 'Leggi owner, gruppo e permessi del target per capire se sudo serve davvero e quale rischio comporta.',
              },
            },
            {
              goal: 'Impatto: esegui solo dopo check esplicito',
              command: {
                command: 'sudo cp /etc/hosts /etc/hosts.bak',
                output: '',
                explanation: 'Prima azione privilegiata minima e reversibile: backup immediato per ridurre impatto e facilitare rollback.',
              },
            },
          ],
        },
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
          'Lavorare sempre come root per evitare errori di permesso',
          'Usare sudo in modo esteso anche quando non è strettamente necessario',
          'Usare l’utente normale e sudo solo quando serve',
          'Disattivare i controlli di permesso nelle sessioni locali',
        ],
        correctAnswer: 2,
        explanation: 'Il privilegio minimo riduce impatto di errori e abuso. Lavorare sempre come root o allargare sudo senza necessità aumenta la superficie di rischio.',
      },
      {
        id: 'ch11-q2',
        type: 'true_false',
        question: 'Vero o falso: su una macchina "solo interna" è accettabile lasciare permessi molto aperti per comodità operativa.',
        correctAnswer: false,
        explanation: 'Falso: "interno" non significa "sicuro". Permessi troppo aperti aumentano errori accidentali, escalation locali e impatti laterali anche senza esposizione Internet.',
      },
      {
        id: 'ch11-q3',
        type: 'multiple_choice',
        question: 'Quale abitudine è più professionale?',
        options: [
          'Saltare ai comandi più aggressivi per risparmiare tempo',
          'Usare sempre root per ridurre i controlli intermedi',
          'Ignorare warning minori quando il comando sembra riuscito',
          'Verificare percorso e output prima di comandi delicati',
        ],
        correctAnswer: 3,
        explanation: 'Verifica preventiva di percorso/output riduce errori irreversibili. Le alternative privilegiano velocità apparente ma aumentano rischio operativo.',
      },
    ],
    glossary: ['sudo', 'root', 'permissions', 'shell', 'terminal'],
  },
  {
    id: 12,
    slug: 'streams-pipes-redirection',
    title: 'Streams, Pipe e Redirection',
    description: 'Passare da comandi isolati a flussi reali: **stdin**, **stdout**, **stderr**, **redirection** e **pipe** operative.',
    duration: '2.5h',
    objectives: [
      'Distinguere **stdin**, **stdout** e **stderr** senza confonderli.',
      'Usare **redirection** con >, >>, 2> e 2>&1 in modo intenzionale.',
      'Comporre **pipe** utili con grep, wc, sort e uniq.',
    ],
    sections: [
      {
        id: 'streams-basics',
        title: 'I tre stream: stdin, stdout, stderr',
        content:
          'In shell non tutto l\'output è uguale: **stdout** è il risultato normale, **stderr** contiene errori o diagnostica, **stdin** è l\'ingresso che un comando può ricevere da tastiera o da un altro comando. È questa separazione che rende possibile costruire workflow affidabili invece di one-liner confusi.\n\nIl salto di qualità operativo arriva quando inizi a chiederti: questo comando sta producendo dati, errori, o entrambi? Da lì nasce la differenza tra debug casuale e troubleshooting ordinato.',
        keyPoints: [
          'stdout e stderr vanno trattati come canali diversi.',
          'stdin è il punto di aggancio tra un comando e il successivo.',
          'Separare i flussi riduce diagnosi sbagliate e output sporco.',
        ],
        terminalCommands: [
          {
            title: 'Osserva output normale',
            command: 'echo "deploy ok"',
            output: 'deploy ok',
            explanation: 'Produce solo **stdout**: è il caso più semplice, utile per capire cosa succede quando non ci sono errori o diagnostica separata.',
          },
          {
            title: 'Genera un errore controllato',
            command: 'ls /percorso-inesistente',
            output: 'ls: cannot access /percorso-inesistente: No such file or directory',
            explanation: 'Qui il contenuto va su **stderr**. È il caso base per capire perché salvare output e catturare errori non sono la stessa operazione.',
          },
        ],
      },
      {
        id: 'redirection-pipes',
        title: 'Redirection e pipe in pratica',
        content:
          'Con **>** sovrascrivi file, con **>>** appendi, con **2>** separi gli errori, con **2>&1** unisci stream diversi quando ti serve un log unico. Il carattere **|** collega stdout del primo comando allo stdin del secondo, cioè trasforma output grezzo in input elaborabile.\n\nIl punto non è memorizzare simboli: è saperli usare per costruire una procedura osservabile, verificabile e riusabile.',
        keyPoints: [
          '> sovrascrive, >> aggiunge, 2> isola stderr.',
          '2>&1 serve quando vuoi un log unico e ordinato.',
          'Le pipeline sono forti quando ogni step ha uno scopo leggibile.',
        ],
        labBlock: {
          title: 'Workflow operativo: raccogli, filtra, consolida',
          intro: 'Sequenza breve in stile runbook: prima osservi output e errori, poi li separi, poi li trasformi in informazione utile.',
          steps: [
            {
              goal: 'Salva output normale in file',
              command: {
                title: 'Capture stdout',
                command: 'ls -la > elenco.txt',
                output: '',
                explanation: 'Reindirizza **stdout** in elenco.txt. Se il file esiste viene sovrascritto.',
              },
            },
            {
              goal: 'Aggiungi contenuto senza sovrascrivere',
              command: {
                title: 'Append risultati',
                command: 'pwd >> elenco.txt',
                output: '',
                explanation: 'Con **>>** appendi al file esistente senza perdere il contenuto precedente.',
              },
            },
            {
              goal: 'Separa gli errori in un file dedicato',
              command: {
                title: 'Capture stderr',
                command: 'ls /cartella-che-non-esiste 2> errori.txt',
                output: '',
                explanation: 'L\'errore non va a schermo: finisce in errori.txt perché è stream **stderr**.',
              },
            },
            {
              goal: 'Filtra e conta con una pipeline',
              command: {
                title: 'Pipeline leggibile',
                command: 'cat /etc/passwd | grep bash | wc -l',
                output: '3',
                explanation: 'Prima filtri le righe, poi le conti. Tre comandi semplici collegati da pipe.',
              },
            },
            {
              goal: 'Consolida output ed errori in un log unico quando serve',
              command: {
                title: 'Unify streams',
                command: 'find /etc -maxdepth 1 -name "*.conf" > report.txt 2>&1',
                output: '',
                explanation: 'Quando vuoi un solo artefatto da condividere o allegare a un ticket, unisci stdout e stderr nello stesso file in modo esplicito.',
              },
            },
          ],
        },
      },
      {
        id: 'workflow-patterns',
        title: 'Pattern di workflow da riusare',
        content:
          'Quando una pipeline è chiara e ripetibile, hai già un runbook in miniatura. Non serve partire da script complessi: serve prima una procedura manuale che puoi spiegare a voce e verificare passo dopo passo.\n\nLa regola pratica è sempre la stessa: osserva output grezzo, isola errori, filtra il rumore, salva solo ciò che serve davvero.',
        keyPoints: [
          'Osserva -> filtra -> salva: sequenza base affidabile.',
          'Pipeline corte e leggibili battono one-liner opachi.',
          'Separare errori riduce diagnosi sbagliate.',
        ],
        terminalCommands: [
          {
            title: 'Conta gli shell user interattivi',
            command: 'grep bash /etc/passwd | cut -d: -f1 | sort',
            output: 'mike\nroot',
            explanation: 'Esempio semplice di pipeline con scopo chiaro: filtrare, estrarre un campo, ordinare il risultato finale.',
          },
        ],
      },
    ],
    keyTakeaways: [
      'Gli stream sono il fondamento dei workflow shell moderni.',
      'Pipe e redirection permettono composizione invece di comandi isolati.',
      'Separare stdout/stderr rende debug e automazione molto più robusti.',
    ],
    discussionPrompts: [
      'Quando conviene separare stderr in un file e quando no?',
      'Perché una pipeline leggibile è spesso meglio di un comando monolitico?',
    ],
    quiz: [
      {
        id: 'ch12-q1',
        type: 'multiple_choice',
        question: 'Stai costruendo un log incrementale di diagnostica. Quale operatore evita di perdere il contenuto precedente?',
        options: ['>', '2>', '>>', '|'],
        correctAnswer: 2,
        explanation: '>> fa append e conserva il contenuto precedente. > sovrascrive, 2> gestisce stderr e | collega l’output di un comando all’input del successivo.',
      },
      {
        id: 'ch12-q2',
        type: 'multiple_choice',
        question: 'Vuoi nascondere a schermo solo gli errori di un comando, senza toccare l’output normale. Quale sintassi è corretta?',
        options: [
          'ls /nope > errori.txt',
          'ls /nope 2> errori.txt',
          'ls /nope >> errori.txt',
          'ls /nope | errori.txt',
        ],
        correctAnswer: 1,
        explanation: '2> reindirizza solo stderr. Le altre forme o sovrascrivono stdout o non rappresentano una pipeline valida.',
      },
      {
        id: 'ch12-q3',
        type: 'multiple_choice',
        question: 'Quale pattern è più professionale quando inizi a costruire una pipeline nuova?',
        options: [
          'Scrivere subito un one-liner lungo per fare tutto in un colpo',
          'Provare prima output grezzo, poi aggiungere filtri uno step alla volta',
          'Unire sempre stdout e stderr fin dall’inizio senza distinguerli',
          'Saltare la verifica dei file generati se il comando non mostra errori',
        ],
        correctAnswer: 1,
        explanation: 'Partire da output grezzo e aggiungere filtri progressivamente rende la pipeline osservabile e molto più facile da correggere. Le alternative aumentano opacità o rischio di perdere segnali utili.',
      },
    ],
    glossary: ['shell', 'terminal', 'file-system', 'process', 'stdin', 'stdout', 'stderr', 'pipe', 'redirection', 'log'],
  },
  {
    id: 13,
    slug: 'process-logs-troubleshooting',
    title: 'Processi, Log e Troubleshooting',
    description: 'Osservabilità operativa Linux: leggere **processi**, seguire **log** e diagnosticare problemi senza andare a tentoni.',
    duration: '3h',
    objectives: [
      'Usare ps, top e pgrep per capire cosa sta succedendo nel sistema.',
      'Leggere **log** in modo progressivo con tail e journalctl.',
      'Applicare un flusso di troubleshooting ripetibile.',
    ],
    sections: [
      {
        id: 'process-visibility',
        title: 'Visibilità processi: snapshot vs live',
        content:
          '**ps** ti dà una fotografia istantanea, **top/htop** una vista continua, **pgrep** ti aiuta a trovare subito il PID giusto senza rumore inutile. Nessuno di questi comandi è "migliore in assoluto": diventano potenti quando li usi in sequenza.\n\nIl comportamento professionale non è partire da kill: è identificare, osservare, correlare e solo dopo decidere se intervenire.',
        keyPoints: [
          'ps = snapshot.',
          'top = monitor continuo.',
          'pgrep riduce rumore quando cerchi per nome processo.',
        ],
        terminalCommands: [
          {
            title: 'Fotografia rapida processi',
            command: 'ps aux | head',
            output: 'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND',
            explanation: 'Usa **ps** quando vuoi una fotografia veloce da leggere, salvare o condividere in un ticket.',
          },
          {
            title: 'Trova PID per nome',
            command: 'pgrep -a ssh',
            output: '912 /usr/sbin/sshd -D',
            explanation: 'Riduce il rumore rispetto a ps | grep e produce direttamente PID e comando completo.',
          },
        ],
      },
      {
        id: 'logs-reading',
        title: 'Leggere log senza annegare',
        content:
          'Log utility come **tail -f** e **journalctl** permettono di seguire eventi mentre accadono. Il punto però non è leggere tutto: è leggere abbastanza da collegare il sintomo a un evento reale, senza sommergerti di rumore.\n\nTroubleshooting efficace significa raccogliere evidenza prima di agire e lasciare una traccia chiara di ciò che hai osservato.',
        keyPoints: [
          'tail -f segue eventi in tempo reale.',
          'journalctl aiuta su sistemi con systemd.',
          'Prima evidenza, poi azione.',
        ],
        labBlock: {
          title: 'Workflow di diagnosi: identifica, osserva, intervieni',
          intro: 'Scenario realistico: un servizio sembra lento o bloccato. L’obiettivo non è “riavviare e sperare”, ma produrre evidenza prima di cambiare stato al sistema.',
          steps: [
            {
              goal: 'Trova processo e PID',
              command: {
                title: 'Identify process',
                command: 'pgrep -a node',
                output: '1823 node server.js',
                explanation: 'Recuperi PID e comando completo in modo più pulito di un grep generico.',
              },
            },
            {
              goal: 'Osserva carico live',
              command: {
                title: 'Observe live behavior',
                command: 'top',
                output: '',
                explanation: 'Verifica se CPU/memoria mostrano picchi coerenti con il problema riportato.',
              },
            },
            {
              goal: 'Segui log in tempo reale',
              command: {
                title: 'Correlate logs',
                command: 'tail -f /var/log/syslog',
                output: '',
                explanation: 'Correla errori o warning al momento in cui il servizio mostra il sintomo.',
              },
            },
            {
              goal: 'Controlla gli eventi recenti del servizio se usi systemd',
              command: {
                title: 'Inspect journal',
                command: 'journalctl -u nginx --since "10 minutes ago"',
                output: '',
                explanation: 'Su sistemi con systemd, **journalctl** permette di restringere il contesto e leggere solo l’intervallo temporale utile alla diagnosi.',
              },
            },
            {
              goal: 'Termina in modo controllato se necessario',
              command: {
                title: 'Controlled stop',
                command: 'kill 1823',
                output: '',
                explanation: 'Invia SIGTERM prima di usare approcci forzati. È la strada più sicura in produzione.',
                warning: 'Usa kill -9 solo come ultima risorsa e dopo aver verificato impatto sul servizio.',
              },
            },
          ],
        },
      },
      {
        id: 'troubleshooting-method',
        title: 'Metodo operativo: sintomo -> evidenza -> azione',
        content:
          'Quando qualcosa non funziona, evita il "riavvio riflesso". Parti dal sintomo, raccogli evidenza, formula un\'ipotesi, valida con comandi e solo dopo applica un cambiamento.\n\nQuesto approccio riduce fix casuali, aiuta i postmortem e rende il troubleshooting trasferibile a un altro membro del team.',
        keyPoints: [
          'No debug cieco: osserva prima di cambiare stato.',
          'Ogni comando deve rispondere a una domanda specifica.',
          'Documentare output chiave accelera i postmortem.',
        ],
        terminalCommands: [
          {
            title: 'Salva evidenza prima di agire',
            command: 'ps aux > baseline-processes.txt',
            output: '',
            explanation: 'Quando la situazione è instabile, salvare una baseline prima di intervenire ti permette di confrontare stato prima/dopo e condividere evidenza nel team.',
          },
        ],
      },
    ],
    keyTakeaways: [
      'Osservabilità è una competenza, non un comando singolo.',
      'Log e process inspection vanno usati insieme.',
      'Troubleshooting robusto segue un metodo ripetibile.',
    ],
    discussionPrompts: [
      'Qual è il rischio principale del "kill e poi vediamo"?',
      'Quando preferiresti pgrep rispetto a ps | grep?',
    ],
    quiz: [
      {
        id: 'ch13-q1',
        type: 'multiple_choice',
        question: 'Devi allegare lo stato attuale dei processi a un ticket. Quale strumento parte meglio dal requisito?',
        options: [
          'top, perché produce uno snapshot statico più condivisibile',
          'ps, perché produce una fotografia istantanea facile da salvare',
          'journalctl, perché mostra sempre tutti i processi attivi',
          'kill, perché chiude i processi rumorosi prima dell’analisi',
        ],
        correctAnswer: 1,
        explanation: 'ps è adatto a una fotografia istantanea da salvare o condividere. top è pensato per osservazione live, journalctl riguarda i log e kill non è uno strumento di osservazione.',
      },
      {
        id: 'ch13-q2',
        type: 'multiple_choice',
        question: 'Quale sequenza è più robusta per indagare un servizio lento?',
        options: [
          'kill -9 subito, poi guardare i log',
          'Trovare PID, osservare risorse, leggere log, poi decidere azione',
          'Riavviare il server e ignorare output temporanei',
          'Cambiare permessi random finché il servizio risponde',
        ],
        correctAnswer: 1,
        explanation: 'Prima osservi e raccogli evidenza, poi applichi azioni mirate. È il metodo più affidabile.',
      },
      {
        id: 'ch13-q3',
        type: 'multiple_choice',
        question: 'Quale comportamento è più pericoloso in troubleshooting?',
        options: [
          'Usare pgrep per trovare il PID corretto',
          'Salvare una baseline prima di intervenire',
          'Lanciare kill -9 come prima mossa senza evidenza',
          'Seguire i log mentre il problema si ripresenta',
        ],
        correctAnswer: 2,
        explanation: 'kill -9 come prima mossa distrugge contesto utile e può peggiorare l’impatto operativo. Le altre opzioni migliorano osservabilità e qualità della diagnosi.',
      },
    ],
    glossary: ['process', 'shell', 'terminal', 'sudo', 'log', 'pid'],
  },
  {
    id: 14,
    slug: 'inode-links-filesystem-ops',
    title: 'Inode, Link e Metadati del File System',
    description: 'Capire cosa c’è davvero dietro file e percorsi: **inode**, stat, namei, **hard link** e **symlink** in pratica.',
    duration: '2.5h',
    objectives: [
      'Leggere metadati di file e directory con stat e namei.',
      'Distinguere **inode**, **hard link** e **symlink** senza confonderli.',
      'Usare i link in modo operativo e sapere quando diventano fragili.',
    ],
    sections: [
      {
        id: 'inode-basics',
        title: 'Inode: il file dietro al nome',
        content:
          'Nel file system Unix-like il nome del file e il suo contenuto non sono la stessa cosa. Il nome è una voce di directory; i metadati reali del file stanno nell’**inode**: permessi, owner, timestamp, dimensione e puntatori ai blocchi dati.\n\nQuesto spiega perché puoi avere più nomi che puntano allo stesso contenuto e perché alcuni problemi di path non sono problemi “del file” ma del percorso che lo raggiunge.',
        keyPoints: [
          'Il nome del file non coincide con l’inode.',
          'I metadati stanno nell’inode, non nella directory come testo libero.',
          'Capire questa distinzione rende più chiari link, rename e troubleshooting del file system.',
        ],
        terminalCommands: [
          {
            title: 'Leggi inode e metadati principali',
            command: 'stat notes.txt',
            output: '  File: notes.txt\n  Size: 142       Blocks: 8   IO Block: 4096 regular file\nDevice: 802h/2050d Inode: 1234567   Links: 1',
            explanation: '**stat** è il punto di partenza più pratico per vedere inode, numero di link, permessi e timestamp senza interpretare output ambiguo.',
          },
        ],
      },
      {
        id: 'path-resolution',
        title: 'Leggere i percorsi con namei',
        content:
          'Quando un comando fallisce su un percorso, spesso il problema non è il file finale ma uno dei segmenti intermedi: una directory senza permessi, un symlink rotto, un mount inatteso. **namei** serve proprio a scomporre il path e farti vedere ogni passaggio.\n\nÈ uno strumento molto più utile di quanto sembri perché sposta l’attenzione dal solo file finale al percorso di risoluzione.',
        keyPoints: [
          'Un path è una catena di directory, non un blocco unico.',
          'namei mostra dove il percorso si spezza davvero.',
          'Permessi e symlink intermedi contano quanto il file finale.',
        ],
        labBlock: {
          title: 'Workflow: metadati e path resolution',
          intro: 'Mini laboratorio in stile operativo: prima leggi il file, poi scomponi il percorso e infine confronti i tipi di link.',
          steps: [
            {
              goal: 'Leggi inode e numero di link',
              command: {
                title: 'Inspect file metadata',
                command: 'stat /var/log/syslog',
                output: '',
                explanation: 'Osservi inode, numero di link, owner, gruppo e timestamp in una sola vista.',
              },
            },
            {
              goal: 'Scomponi il percorso passo passo',
              command: {
                title: 'Resolve path components',
                command: 'namei -l /var/log/syslog',
                output: 'f: /var/log/syslog\ndrwxr-xr-x root root /\ndrwxr-xr-x root root var\ndrwxr-xr-x root adm  log\n-rw-r----- syslog adm syslog',
                explanation: 'Mostra ogni segmento del path con relativi permessi e ownership. È perfetto quando “il file esiste ma non riesco ad aprirlo”.',
              },
            },
            {
              goal: 'Crea un hard link e confronta l’inode',
              command: {
                title: 'Compare hard link inode',
                command: 'ln notes.txt notes-hardlink.txt && stat notes.txt notes-hardlink.txt',
                output: '',
                explanation: 'Un hard link condivide lo stesso inode del file originale: cambiano i nomi, non l’identità del file.',
              },
            },
            {
              goal: 'Crea un symlink e verifica la differenza',
              command: {
                title: 'Compare symbolic link',
                command: 'ln -s notes.txt notes-link.txt && ls -l notes-link.txt',
                output: 'lrwxr-xr-x 1 mike staff 9 May 21 10:00 notes-link.txt -> notes.txt',
                explanation: 'Il symlink è un riferimento a un percorso, non allo stesso inode del file di partenza. Per questo può rompersi se il target cambia o sparisce.',
              },
            },
          ],
        },
      },
      {
        id: 'hard-vs-soft',
        title: 'Hard link vs symlink: quando usare cosa',
        content:
          'Gli **hard link** condividono lo stesso inode e funzionano solo sullo stesso file system; i **symlink** puntano a un percorso e sono più flessibili, ma anche più fragili se il target cambia.\n\nLa regola pratica è semplice: hard link quando ti serve la stessa identità del file, symlink quando ti serve un alias di percorso facile da leggere o spostare.',
        keyPoints: [
          'Hard link = stessa identità del file.',
          'Symlink = riferimento a un percorso.',
          'I symlink rotti sono un problema di path, non di inode condiviso.',
        ],
      },
    ],
    keyTakeaways: [
      'L’inode è l’identità tecnica del file, il nome è solo una voce di directory.',
      'stat e namei sono strumenti concreti per capire metadati e percorsi.',
      'Hard link e symlink risolvono problemi diversi e non vanno confusi.',
    ],
    discussionPrompts: [
      'Quando un symlink è una comodità e quando diventa una fonte di errori?',
      'Perché capire il path completo aiuta più di guardare solo il file finale?',
    ],
    quiz: [
      {
        id: 'ch14-q1',
        type: 'multiple_choice',
        question: 'Quale strumento è più adatto per vedere inode, numero di link e timestamp di un file?',
        options: ['grep', 'stat', 'wc', 'top'],
        correctAnswer: 1,
        explanation: 'stat mostra metadati strutturati del file, inclusi inode e link count. Gli altri strumenti hanno scopi diversi.',
      },
      {
        id: 'ch14-q2',
        type: 'multiple_choice',
        question: 'Qual è la differenza più importante tra hard link e symlink?',
        options: [
          'Il symlink condivide sempre lo stesso inode del target',
          'L’hard link punta a un percorso testuale, il symlink a un inode',
          'L’hard link condivide l’inode; il symlink punta a un percorso',
          'Non c’è differenza pratica in ambienti reali',
        ],
        correctAnswer: 2,
        explanation: 'L’hard link rappresenta un altro nome per lo stesso inode; il symlink è un riferimento a un percorso che può rompersi se il target cambia.',
      },
      {
        id: 'ch14-q3',
        type: 'multiple_choice',
        question: 'Hai un percorso che “esiste” ma non si apre correttamente. Quale comando aiuta di più a capire dove si spezza la risoluzione?',
        options: ['namei -l', 'pwd', 'echo', 'uniq'],
        correctAnswer: 0,
        explanation: 'namei -l scompone il path in tutti i suoi segmenti e mostra permessi e ownership intermedi. È lo strumento giusto per diagnosticare problemi di percorso.',
      },
    ],
    glossary: ['file-system', 'permissions', 'shell', 'terminal', 'inode', 'hard-link', 'symlink'],
  },
  {
    id: 15,
    slug: 'cron-jobs-automation-basics',
    title: 'Cron Jobs e Automazione di Base',
    description: 'Automatizzare senza perdere controllo: **crontab**, scheduling, verifica risultati ed errori comuni dei **cron job** periodici.',
    duration: '2.5h',
    objectives: [
      'Capire come ragiona **cron** e come leggere una schedule base.',
      'Creare **cron job** semplici in modo verificabile e prudente.',
      'Diagnosticare i problemi più comuni di automazione periodica.',
    ],
    sections: [
      {
        id: 'cron-basics',
        title: 'Come ragiona cron',
        content:
          'Cron esegue comandi a orari prefissati seguendo una sintassi compatta basata su minuti, ore, giorni e mesi. La difficoltà vera non è ricordare gli asterischi, ma sapere cosa succede quando il job parte senza la tua shell interattiva, senza il tuo PATH abituale e senza contesto visivo.\n\nPer questo i cron job affidabili sono sempre piccoli, espliciti e facili da verificare dopo l’esecuzione.',
        keyPoints: [
          'Cron gira senza la tua sessione interattiva.',
          'PATH e ambiente possono essere diversi da quelli della shell manuale.',
          'Un job periodico va sempre pensato insieme alla sua verifica.',
        ],
        terminalCommands: [
          {
            title: 'Visualizza i job attuali',
            command: 'crontab -l',
            output: '# nessun crontab per mike',
            explanation: 'È il primo controllo da fare prima di aggiungere o modificare automazioni: capire lo stato corrente evita duplicazioni o conflitti.',
          },
        ],
      },
      {
        id: 'create-verify-job',
        title: 'Creare e verificare un job semplice',
        content:
          'Il pattern giusto è sempre lo stesso: scrivi un comando banale, schedulalo a frequenza prevedibile, fai scrivere un output su file e verifica che il risultato compaia davvero.\n\nSe inizi con job complessi senza osservabilità, confonderai subito errori di schedule, permessi, path o redirection.',
        keyPoints: [
          'Prima job semplice, poi automazione reale.',
          'Scrivere output su file è il modo più rapido per verificare esecuzione.',
          'Usa percorsi assoluti nei job periodici.',
        ],
        labBlock: {
          title: 'Workflow: crea, osserva, correggi',
          intro: 'Mini laboratorio di automazione prudente: prima controlli lo stato, poi aggiungi un job semplice, infine verifichi l’effetto concreto.',
          steps: [
            {
              goal: 'Controlla i job attuali',
              command: {
                title: 'Inspect current crontab',
                command: 'crontab -l',
                output: '',
                explanation: 'Leggi il contesto corrente prima di aggiungere automazioni nuove o duplicate.',
              },
            },
            {
              goal: 'Aggiungi un job che scrive timestamp su file',
              command: {
                title: 'Create observable job',
                command: '(crontab -l 2>/dev/null; echo "*/5 * * * * date >> /tmp/cron-heartbeat.log") | crontab -',
                output: '',
                explanation: 'Job semplice e osservabile: ogni 5 minuti aggiunge una riga a un file. È il modo più pratico per verificare che la schedule funzioni davvero.',
              },
            },
            {
              goal: 'Verifica che il job sia presente',
              command: {
                title: 'Verify schedule',
                command: 'crontab -l',
                output: '*/5 * * * * date >> /tmp/cron-heartbeat.log',
                explanation: 'Prima verifichi la definizione, poi il suo effetto. Sono due check diversi e servono entrambi.',
              },
            },
            {
              goal: 'Controlla l’effetto concreto sul file di output',
              command: {
                title: 'Verify job output',
                command: 'tail -n 5 /tmp/cron-heartbeat.log',
                output: 'Thu May 21 10:00:00 CEST 2026',
                explanation: 'Il job non va considerato “funzionante” finché non vedi l’effetto osservabile che hai deciso di produrre.',
              },
            },
          ],
        },
      },
      {
        id: 'cron-failures',
        title: 'Errori comuni nei cron job',
        content:
          'I fallimenti più comuni non dipendono da cron “che non parte”, ma da script che funzionano solo nella shell interattiva, percorsi relativi, permessi mancanti o output che nessuno controlla.\n\nLa disciplina minima è: usare path assoluti, reindirizzare output o errori, e partire sempre da un job facile da osservare.',
        keyPoints: [
          'Path relativi e PATH implicito sono fonti classiche di errore.',
          'Senza output verificabile un cron job è opaco.',
          'Automazione prudente significa piccoli passi e conferme concrete.',
        ],
        terminalCommands: [
          {
            title: 'Rimuovi tutti i job quando chiudi il test',
            command: 'crontab -r',
            output: '',
            explanation: 'Serve per cleanup controllato dei test. Va usato con cautela perché elimina l’intero crontab dell’utente corrente.',
            warning: '**crontab -r** rimuove tutti i job dell’utente corrente. Prima salva uno snapshot con **crontab -l > backup-crontab.txt**.',
          },
        ],
      },
    ],
    keyTakeaways: [
      'Cron è utile solo quando la schedule è accompagnata da verifica reale.',
      'I job affidabili sono piccoli, espliciti e con percorsi assoluti.',
      'Automazione senza osservabilità crea più dubbi che valore.',
    ],
    discussionPrompts: [
      'Perché un job che “esiste nel crontab” non è ancora prova che funzioni?',
      'Qual è il rischio di schedulare subito script complessi senza log o output?',
    ],
    quiz: [
      {
        id: 'ch15-q1',
        type: 'multiple_choice',
        question: 'Qual è il primo controllo sano prima di modificare automazioni periodiche di un utente?',
        options: ['crontab -l', 'killall cron', 'sudo su', 'ls /tmp'],
        correctAnswer: 0,
        explanation: 'crontab -l mostra lo stato corrente e ti evita duplicazioni o modifiche cieche. Le altre azioni non danno il contesto giusto o sono fuori scala.',
      },
      {
        id: 'ch15-q2',
        type: 'multiple_choice',
        question: 'Quale approccio rende più verificabile un nuovo cron job?',
        options: [
          'Far girare subito uno script lungo e silenzioso senza output',
          'Usare un comando semplice che scrive timestamp su file',
          'Affidarsi al fatto che cron mostrerà sempre errori a schermo',
          'Usare percorsi relativi per rendere il job più portabile',
        ],
        correctAnswer: 1,
        explanation: 'Un job semplice con output osservabile è il punto di partenza migliore. Le alternative riducono visibilità o aumentano la probabilità di errore.',
      },
      {
        id: 'ch15-q3',
        type: 'multiple_choice',
        question: 'Perché i path assoluti sono raccomandati nei cron job?',
        options: [
          'Perché cron esegue sempre come root',
          'Perché cron usa un ambiente diverso e i path relativi possono rompersi',
          'Perché migliorano la velocità del job',
          'Perché sono obbligatori solo quando si usa tail',
        ],
        correctAnswer: 1,
        explanation: 'Cron gira spesso con un ambiente ridotto e senza il contesto della tua shell interattiva. I path assoluti riducono ambiguità e failure silenziose.',
      },
    ],
    glossary: ['shell', 'terminal', 'process', 'permissions', 'cron', 'crontab', 'scheduler', 'redirection', 'log'],
  },
];

export const chaptersBySlug = chapters.reduce<Record<string, Chapter>>((accumulator, chapter) => {
  accumulator[chapter.slug] = chapter;
  return accumulator;
}, {});
