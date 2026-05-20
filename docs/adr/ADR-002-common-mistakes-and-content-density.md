# ADR-002: Common mistakes block and chapter content density policy

## Status
Decided

## Context
Chapter 1 introduced richer instructional blocks (why it matters, common mistakes, real-world mapping, mini-task, quiz, and interactive pilot). This improved pedagogy, but also increased visual density and duplicated some learning flows.

The team needs a stable rule that future contributors and agents can apply consistently across chapters.

## Decision
Keep the `commonMistakes` block as a standard part of chapter pedagogy.

Do not remove it as a replacement for quiz explanations. Quiz explanations and common mistakes serve different jobs:
- Quiz explanation is corrective feedback after a specific answer.
- Common mistakes is preventive guidance before and during study.

For dense chapters, allow progressive disclosure (accordion/details) on secondary blocks. Keep core learning flow always visible.

## Rationale
- Preventive + corrective learning together reduce misconception persistence.
- A dedicated misconception list gives a quicker mental model than scattered per-question feedback.
- Accordion on secondary blocks lowers cognitive load without losing material.

## Consequences
- Positive: better conceptual clarity, especially for beginners.
- Positive: reusable chapter authoring pattern for future content.
- Risk: content bloat if common mistakes duplicate quiz wording.
- Mitigation: add authoring constraints and checklist.

## Authoring rules
- Include 4 to 6 `commonMistakes` items per chapter.
- Each item should state a misconception clearly, preferably in contrast form (X is not Y).
- At least one misconception must add value beyond quiz explanations.
- Avoid copy/paste from quiz explanation text.
- Keep each item short and concrete.

## Chapter UI density policy
- Always visible by default: section title, section body, key points, key takeaways.
- Collapsible on dense chapters: real-world examples, deep-dive resources, mini-task, command-heavy support blocks.
- Comparative chapters with dense tables (for example OS comparison chapters) may keep `commonMistakes` and `realWorld` expanded in compact mode when this improves scanability.
- If an interactive pilot already includes an equivalent guided task, hide duplicated mini-task content for that chapter.

## Language policy
- Documentation and developer-facing comments must be written in English.
- User-facing UI text is currently allowed in Italian.

## Implementation notes
- Chapter 1 (`what-is-os`) is the pilot reference for this policy.
- Reuse the same decision logic when applying to other chapters to avoid UI drift.
