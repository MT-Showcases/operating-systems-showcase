import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTopButton from '@/components/BackToTopButton';
import Card from '@/components/Card';
import { ChevronRight } from 'lucide-react';
import { openclawPage } from '@/data/pages/openclaw';

export const metadata: Metadata = {
  title: openclawPage.title,
  description: openclawPage.description,
  alternates: { canonical: '/openclaw' },
};

export default function OpenClawPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="sticky top-0 z-40 border-b border-border-subtle bg-bg-surface px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'OpenClaw', href: '/openclaw' },
            ]}
            className="bg-bg-surface px-0 py-3"
          />
        </div>
      </div>

      <header className="border-b border-border-subtle bg-[linear-gradient(135deg,rgba(13,17,23,1),rgba(22,27,34,1),rgba(13,17,23,1))] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="terminal-heading text-5xl md:text-6xl font-extrabold mb-3 leading-tight">{openclawPage.title}</h1>
          <p className="text-accent-green text-lg font-medium mb-2">{openclawPage.eyebrow}</p>
          <p className="text-text-secondary text-base max-w-3xl leading-8">{openclawPage.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10 transition-colors text-sm"
            >
              Vai ai capitoli <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-4 py-2 border border-accent-green/40 text-accent-green hover:bg-accent-green/10 transition-colors text-sm"
            >
              Apri glossario <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="py-8 px-6 border-b border-border-subtle bg-bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {openclawPage.metrics.map((metric) => (
            <Card key={metric.label} className="p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">{metric.label}</p>
              <p className="text-2xl font-extrabold text-accent-cyan mt-1">{metric.value}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-text-primary">{openclawPage.agentSystem.title}</h2>
            <p className="text-text-secondary mt-2 text-sm leading-7 max-w-3xl">{openclawPage.agentSystem.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {openclawPage.agentSystem.roles.map((agent) => (
              <Card key={agent.name}>
                <p className="terminal-heading text-xs uppercase tracking-[0.2em] text-accent-green">{agent.role}</p>
                <h3 className="text-lg font-bold text-text-primary mt-2 mb-2">{agent.name}</h3>
                <p className="text-text-secondary text-sm leading-7">{agent.output}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 border-y border-border-subtle bg-bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-text-primary">{openclawPage.workflow.title}</h2>
            <p className="text-text-secondary mt-2 text-sm leading-7 max-w-3xl">{openclawPage.workflow.intro}</p>
          </div>
          <ol className="space-y-4">
            {openclawPage.workflow.steps.map((step, index) => (
              <li key={step.title} className="border-l-2 border-accent-cyan/50 pl-4 py-1">
                <p className="terminal-heading text-xs uppercase tracking-[0.2em] text-accent-cyan">Step {index + 1}</p>
                <h3 className="text-base font-semibold text-text-primary mt-1">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-7 mt-1">{step.content}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="border-2 border-accent-cyan/60 bg-bg-surface p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-5">{openclawPage.stack.title}</h2>
            <div className="space-y-3">
              {openclawPage.stack.items.map((item) => (
                <div key={item.label} className="border border-border-subtle bg-black/20 p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent-cyan">{item.label}</p>
                  <p className="text-sm text-text-secondary leading-7 mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="border-2 border-accent-green/50 bg-bg-surface p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-5">{openclawPage.team.title}</h2>
            <div className="space-y-4">
              {openclawPage.team.members.map((member) => (
                <div key={member.name} className="border border-border-subtle bg-black/20 p-4">
                  <h3 className="text-base font-semibold text-text-primary">{member.name}</h3>
                  <p className="terminal-heading text-xs uppercase tracking-[0.2em] text-accent-green mt-1">{member.role}</p>
                  <p className="text-sm text-text-secondary leading-7 mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 px-6 border-t border-border-subtle bg-bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-5">{openclawPage.resources.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {openclawPage.resources.items.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-accent-cyan/40 bg-bg-primary p-4 hover:border-accent-green transition-colors"
              >
                <p className="text-base font-semibold text-text-primary">{resource.name}</p>
                <p className="text-sm text-text-secondary leading-7 mt-1">{resource.description}</p>
                <p className="text-xs text-accent-cyan mt-2 break-all">{resource.url}</p>
              </a>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link href="/" className="text-accent-cyan hover:text-accent-green text-sm">
              ← Torna alla homepage
            </Link>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </main>
  );
}
