export interface TermsPage {
  title: string;
  slug: string;
  lastUpdated: string;
  sections: TermsSection[];
}

export interface TermsSection {
  title: string;
  content: string;
}

export const termsPage: TermsPage = {
  title: 'Termini di Servizio',
  slug: 'terms',
  lastUpdated: '2026-05-17',
  sections: [
    {
      title: 'Accettazione dei Termini',
      content: `Accedendo a questo sito (Operating Systems Showcase), accetti di essere vincolato dai seguenti termini e condizioni. 
Se non accetti questi termini, non usare il sito.`,
    },
    {
      title: 'Uso Autorizzato',
      content: `Sei autorizzato a usare questo sito per scopi educativi e personali. Proibito:
- Riprodurre, duplicare o copiare contenuti senza autorizzazione
- Usare il sito per scopi commerciali senza permesso
- Accedere o tentare di accedere a dati non pubblici
- Disturbare il normale funzionamento del sito`,
    },
    {
      title: 'Contenuto e Disclaimer',
      content: `Il contenuto del sito è fornito "così com'è" a scopo didattico. Non garantiamo completezza, accuratezza o assenza di errori.
Michele Tornello e gli agenti AI che hanno creato il sito non sono responsabili di:
- Danni diretti o indiretti derivanti dall'uso del sito
- Perdita di dati o interruzione di servizio
- Errori nel contenuto didattico`,
    },
    {
      title: 'Proprietà Intellettuale',
      content: `I contenuti, i design, il codice e gli asset del sito sono proprietà intellettuale di Michele Tornello e MT-Showcases.
È concesso l'uso non commerciale per scopi didattici personali. Vietata la redistribuzione commerciale senza permesso.`,
    },
    {
      title: 'Limitazione di Responsabilità',
      content: `In nessun caso Michele Tornello, gli agenti AI o MT-Showcases saranno responsabili per danni incidentali, speciali o consequenziali
derivanti dall'uso o dall'impossibilità di usare il sito, anche se avvisati della possibilità di tali danni.`,
    },
    {
      title: 'Modifiche ai Termini',
      content: `Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. 
L'uso continuato del sito dopo le modifiche costituisce accettazione dei nuovi termini.`,
    },
    {
      title: 'Contatti',
      content: `Per domande riguardanti questi termini, contatta Michele Tornello tramite:
- LinkedIn: https://www.linkedin.com/in/michele-tornello-06a6341aa/
- GitHub: https://github.com/Flame0510`,
    },
  ],
};
