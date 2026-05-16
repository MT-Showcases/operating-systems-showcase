# ADR-001: Initial frontend architecture for Operating Systems Showcase

## Status
Decided

## Context
The Operating Systems Showcase is a new educational frontend project for Steve Jobs Academy Catania. The expected team size is small (1–3 contributors), but the project needs clear boundaries because content chapters, reusable teaching components, and tutor integration will grow over time.

## Decision
Use Next.js 15 with the App Router, TypeScript, and Tailwind CSS v4. Organize the repository with dedicated top-level layers:
- `app/` for routing and layout
- `components/` for reusable UI blocks
- `data/` for chapter datasets and domain types
- `lib/` for infrastructure helpers and runtime config
- `public/` for media and static assets
- `scripts/` for content/RAG automation

Add ESLint import restrictions so `data/` stays presentation-free and `lib/` does not depend on `app/` or `components/`.

## Rationale
- Next.js App Router gives route-based code splitting by default and matches the reference `ai-fundamentals-showcase` project.
- TypeScript enforces consistency across chapter datasets and quiz structures.
- Tailwind v4 with theme tokens allows a terminal-style design system without a separate Tailwind config.
- Layered folders are enough for the current scale and avoid premature feature-package complexity.

## Consequences
- Positive: fast bootstrap, predictable structure, easy reuse from the AI Fundamentals showcase.
- Positive: future chapter agents can add content without reshaping the repo.
- Negative: some shared components will be added later, so the current project is intentionally skeletal.
- Mitigation: keep architecture rules documented here and evolve components incrementally.

## Code splitting strategy
- Route-level splitting: automatic per Next.js route (`/` and `/chapters/[slug]`).
- Heavy interactive components (e.g. tutor chat, Monaco, media viewers) should be dynamically imported later.
- Chapter-specific datasets stay separate so future chapters can be loaded or indexed independently.
