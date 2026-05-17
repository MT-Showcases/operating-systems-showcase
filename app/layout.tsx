import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import TutorFloatingChat from '@/components/TutorFloatingChat';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://os-showcase.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sistemi Operativi - Corso di Formazione',
    template: '%s | Sistemi Operativi',
  },
  description:
    'Corso completo su Sistemi Operativi e Linux: dal kernel ai processi, dal file system ai permessi, fino alla pratica con il terminale.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sistemi Operativi - Corso di Formazione',
    description:
      'Corso completo su Sistemi Operativi e Linux: dal kernel ai processi, dal file system ai permessi, fino alla pratica con il terminale.',
    url: siteUrl,
    siteName: 'Sistemi Operativi',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistemi Operativi - Corso di Formazione',
    description:
      'Corso completo su Sistemi Operativi e Linux: dal kernel ai processi, dal file system ai permessi, fino alla pratica con il terminale.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d1117',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ServiceWorkerRegister />
        {children}
        <TutorFloatingChat />
      </body>
    </html>
  );
}
