# AGENTS.md

Quick guide for any coding agent (Copilot, Claude, Gemini, OpenClaw, others).

## Project goal
Operating Systems Showcase is an interactive educational platform about operating systems.
Priorities: instructional clarity, verifiable content, readable UX, and zero regressions.

## Start here (5 minutes)
If the user request is generic (for example "review the structure and documentation"), read in this order:
1. `README.md`
2. `docs/README.md`
3. `docs/adr/ADR-001-project-architecture.md`
4. `docs/adr/ADR-002-common-mistakes-and-content-density.md`
5. `docs/chapter-authoring-template.md`
6. `data/chapters/index.ts` and `data/types.ts`
7. `app/chapters/[slug]/page.tsx` and `components/SectionCard.tsx`

## Established operating decisions
1. Keep `commonMistakes`: it does not replace quiz feedback, it complements it.
2. In dense chapters, use progressive disclosure for secondary blocks.
3. Avoid instructional duplication: if `interactivePilot` already covers the guided task, hide duplicated `miniTask` content.
4. Core blocks (section body, key points, key takeaways) stay always visible.

## Language directive
1. Documentation must be written in English.
2. Code comments and developer-facing text must be written in English.
3. User-facing UI text may stay in Italian for now.

## Quick code map
- Chapter routing and page orchestration: `app/chapters/[slug]/page.tsx`
- Section card and operational blocks: `components/SectionCard.tsx`
- Interactive pilot: `components/ChapterInteractivePilot.tsx`
- Quiz: `components/ChapterQuiz.tsx`
- Quiz score persistence and cross-tab sync: `components/QuizScoreDashboard.tsx`
- Glossary hover/tap interaction: `components/GlossaryTerm.tsx`, `components/GlossaryTooltip.tsx`
- Tutor chat UI (triggers via `nix:open` event): `components/TutorFloatingChat.tsx`
- Tutor prompt config and endpoint base URL: `lib/tutor-config.ts`
- Typed cross-component event bus: `lib/events.ts`
- Quiz question normalisation and prompt builder: `lib/quiz-factory.ts`
- Scroll-lock utility (used by modals): `lib/useBodyScrollLock.ts`
- Chapter dataset: `data/chapters/index.ts`
- Domain types: `data/types.ts`
- Architecture and policy decisions: `docs/adr/`

## Recommended workflow for changes
1. Identify whether the request affects content, UX, or logic.
2. Apply the smallest effective change.
3. Validate at least the touched files (`npm run lint -- <file>`).
4. If you change a cross-cutting rule or pattern, update an ADR.
5. Use `docs/chapter-authoring-template.md` when creating/updating chapters.
6. Do not introduce new UX variants without a clear rationale.

## Definition of done
- No lint errors in changed files.
- No hydration mismatch introduced.
- No obvious instructional duplication.
- Documentation updated if a project rule changes.

## Note for multi-provider agents
This file is the minimum shared contract. If provider-specific instructions are missing, follow these rules by default.
