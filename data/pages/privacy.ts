export interface PrivacyPage {
  title: string;
  slug: string;
  lastUpdated: string;
  sections: PrivacySection[];
}

export interface PrivacySection {
  title: string;
  content: string;
}

export const privacyPage: PrivacyPage = {
  title: 'Privacy Policy',
  slug: 'privacy',
  lastUpdated: '2026-05-17',
  sections: [
    {
      title: 'Informazioni che Raccogliamo',
      content: `Operating Systems Showcase raccoglie dati minimali:
- Dati di accesso (IP, browser, pagina visitata) tramite log di Vercel
- Progresso nel quiz (se salvato localmente nel tuo browser)
- Nessun dato personale identificabile è richiesto per accedere al corso`,
    },
    {
      title: 'Come Usiamo le Informazioni',
      content: `I dati raccolti sono usati per:
- Migliorare l'esperienza di apprendimento
- Analizzare il traffico e il coinvolgimento con il corso
- Identificare problemi tecnici e bug
- Personalizzare il contenuto (se abilitato)

Non vendiamo, non affittiamo e non condividiamo i tuoi dati con terze parti senza il tuo consenso.`,
    },
    {
      title: 'Tecnologie di Tracciamento',
      content: `Questo sito usa:
- Cookie di sessione per mantenere lo stato di login (se applicabile)
- Analytics da Vercel per monitorare traffico (anonimizzato)
- Local Storage del browser per salvare preferenze e progresso locale
- Nessun tracciamento di terze parti (no Google Analytics, Facebook Pixel, etc.)`,
    },
    {
      title: 'Quiz e Dati di Apprendimento',
      content: `Il progresso nei quiz è salvato localmente nel tuo browser (Local Storage) per default.
Se decidi di sincronizzare il progresso su un server (funzionalità futura), ti chiederemo il consenso esplicito.
Il tuo progresso rimane privato e non è visibile ad altri utenti.`,
    },
    {
      title: 'Diritti Sulla Privacy',
      content: `Hai il diritto di:
- Accedere ai dati che abbiamo raccolto su di te
- Richiedere la cancellazione dei tuoi dati
- Optar out dal tracciamento (disabilitando i cookie)
- Richiedere una copia dei tuoi dati in formato leggibile

Contatta Michele Tornello per esercitare questi diritti.`,
    },
    {
      title: 'Sicurezza',
      content: `Questo sito è ospitato su Vercel con HTTPS attivato. I dati in transito sono crittografati.
Tuttavia, nessun metodo di trasmissione su Internet è 100% sicuro. Non possiamo garantire protezione assoluta.`,
    },
    {
      title: 'Conformità Normative',
      content: `Questo sito si impegna a rispettare:
- GDPR (General Data Protection Regulation) per gli utenti europei
- Privacy Laws locali dove applicabile
- Best practice di privacy by design`,
    },
    {
      title: 'Modifiche alla Privacy Policy',
      content: `Ci riserviamo il diritto di aggiornare questa policy. Notificheremo i cambiamenti significativi tramite il sito.
L'uso continuato del sito dopo le modifiche significa accettazione della nuova policy.`,
    },
    {
      title: 'Contatti sulla Privacy',
      content: `Per domande sulla privacy, contatta:
Michele Tornello
- LinkedIn: https://www.linkedin.com/in/michele-tornello-06a6341aa/
- GitHub: https://github.com/Flame0510

Data di ultimo aggiornamento: 2026-05-17`,
    },
  ],
};
