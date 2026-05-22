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

## Mobile chapter navigation guardrail
- The chapter sidebar opened from the hamburger menu must use an opaque overlay and an opaque panel background to preserve text readability over page content.
- The roadmap header block (title, close action, and progress) should stay sticky within the sidebar scroll area so close/navigation controls remain immediately reachable.
- Avoid sticky layouts that depend on negative margins when they introduce visible gaps during scroll.
- Show the hamburger trigger whenever the desktop sidebar is not visible (including tablet breakpoints), not only on narrow phone widths.

## Desktop chapter sidebar sizing guardrail
- On desktop, prefer natural sidebar height with a viewport-based `max-height` cap instead of forcing a fixed height at all times.
- Avoid layouts that stretch the chapter-list area and create large empty gaps before the anchor section on tall screens.
- Keep overflow behavior local to the chapter-list container when content exceeds the max-height, so the roadmap header and anchor block remain stable.

## Glossary interaction guardrail
- Glossary-linked terms should always open the glossary modal on click/tap.
- Lightweight tooltip previews may be shown only on devices that report hover + fine pointer capability.
- Do not force tooltip-only interaction patterns on touch-first devices.

## Sandbox entrypoint guardrail
- The primary sandbox access pattern is a modal launched from the floating sandbox trigger.
- Avoid duplicating prominent sandbox CTAs in the home header when the floating trigger is already present.

## Chapter scroll progress guardrail
- The scroll progress bar (`ChapterScrollProgress`) must be scoped inside the `<main>` content column, not placed as a full-width sibling of the flex container that holds both sidebar and main.
- Placing it outside that flex container causes the bar to visually overlap the sidebar column at all viewport widths.
- The progress bar uses `sticky` positioning relative to `--chapter-breadcrumb-height` (currently `2.75rem`). The sidebar `sticky top` must reference the same variable so both elements align horizontally when fixed.
- Do not introduce additional sticky-stack CSS variables unless a new independently-sticky element is added above the progress bar.
