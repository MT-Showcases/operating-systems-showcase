# Chapter Authoring Template

Standard template to create or refactor chapters with consistent pedagogy, UX density, and implementation quality.

## Purpose
Use this template when adding a new chapter or aligning an existing one to the Chapter 1 reference pattern.

## Required chapter structure
Use this order as the default flow:
1. Chapter header and objectives
2. Section cards (core learning content)
3. Key takeaways
4. Common mistakes
5. Real-world mapping
6. Deep-dive resources
7. Guided practice (`miniTask`) or interactive pilot
8. Quiz

## Pedagogy rules
- Keep `commonMistakes` in each chapter.
- `commonMistakes` does not replace quiz feedback; they are complementary.
- Include 4 to 6 `commonMistakes` items.
- At least one `commonMistakes` item must add value beyond quiz explanations.
- Avoid duplicating the same sentence between `commonMistakes` and quiz explanation text.

## Operational module pattern
- For command-heavy chapters, prefer a task-driven structure over flat command dumps.
- Use short concept framing, then move quickly to an operational workflow with explicit step goals.
- Reserve `terminalCommands` for quick references, spot checks, or contrasting examples.
- Use `labBlock.steps` as the primary pattern for sequences such as create/configure/verify/remove or inspect/observe/intervene.
- Every destructive or state-changing command should be followed by a verification step.
- Add a short `title` to command blocks when the goal is not already obvious from the command itself.
- Prefer workflows that produce observable output or artifacts (files, logs, IDs, changed state) instead of purely declarative examples.
- Start with the smallest safe workflow that can be validated manually before introducing more complex automation.

## Quiz quality rules
- Keep quiz options cognitively meaningful: avoid joke answers and obviously impossible distractors.
- Use plausible distractors that reflect common reasoning errors, not random wrong facts.
- Balance option length to avoid visual clues (for example, the correct answer being consistently the longest).
- Do not keep the correct option in a predictable position (for example, always first or always among the first two).
- Avoid deterministic ordering patterns across chapters (for example, fixed rotations that become guessable).
- Include at least one application-oriented question per chapter quiz (scenario, trade-off, or troubleshooting context).
- Explanations should justify why the correct answer is best and briefly clarify why nearby distractors are weaker.

## UX density rules
- Always visible by default:
  - section title
  - section body
  - key points
  - key takeaways
- Collapsible on dense chapters:
  - real-world mapping
  - deep-dive resources
  - `miniTask`
  - command-heavy support blocks
- For operational modules, command references may stay collapsible when the guided workflow already covers the main learning path.
- Comparative chapters with dense tables can keep `commonMistakes` and `real-world mapping` expanded in compact mode when readability benefits.
- If `interactivePilot` already includes an equivalent guided task, hide duplicated `miniTask` content.

## Glossary interaction rules
- Ensure chapter `description`, `objectives`, and section theory text include glossary-friendly wording for key terms.
- Prefer terms that map to existing glossary entries (or add missing entries before publishing content).
- Glossary term chips should open the modal on click/tap in all environments.
- Tooltip previews are optional and should be capability-based (`hover + fine pointer`), not mobile-vs-desktop only.

## Sandbox UX rules
- Do not rely on inline "execute sandbox" buttons inside guided labs unless explicitly requested for the chapter.
- Keep operational steps readable without embedded execution controls.
- If sandbox access is provided globally (floating trigger), avoid duplicate high-priority sandbox CTAs in chapter/home headers.

## Language rules
- Documentation and developer-facing comments must be in English.
- User-facing UI text may remain in Italian for now.

## Implementation checklist
- [ ] `data/types.ts` supports new chapter fields (if needed)
- [ ] `data/chapters/index.ts` chapter object is complete
- [ ] `app/chapters/[slug]/page.tsx` rendering logic follows established block order
- [ ] `components/SectionCard.tsx` behavior stays consistent with UX density policy
- [ ] No duplicate guided practice when `interactivePilot` is present
- [ ] No hydration mismatch introduced
- [ ] No lint errors in touched files
- [ ] Command-heavy sections use clear step goals or titled command cards
- [ ] Destructive commands include warning plus post-action verification

## Mobile Sidebar QA checklist
- [ ] Open chapter page on mobile viewport (for example `390x844`) and trigger hamburger sidebar.
- [ ] Open chapter page on tablet viewport (for example `1024x768`) and verify hamburger is present whenever desktop sidebar is hidden.
- [ ] Overlay is opaque enough to preserve readability of sidebar text over page content.
- [ ] Sidebar panel background is opaque (no bleed-through from page content while scrolling).
- [ ] Sticky roadmap header remains visible while scrolling the chapter list.
- [ ] Close action (`X`) stays visible and reachable at all times.
- [ ] No visible top/bottom gap appears behind sticky header during scroll.
- [ ] Bottom "Anchor del capitolo" block keeps horizontal and bottom padding.
- [ ] Capture QA screenshots for at least:
  - sidebar open at top
  - sidebar open after internal scroll

## Acceptance scorecard (quick review)
Score each area 0-2.

1. Pedagogical completeness:
0 = incomplete
1 = mostly complete
2 = complete and coherent

2. Misconception coverage (`commonMistakes` quality):
0 = weak/redundant
1 = adequate
2 = clear and high-value

3. Density and readability:
0 = overloaded
1 = acceptable
2 = balanced and scannable

4. Duplication control:
0 = repeated blocks
1 = minor repetition
2 = no meaningful duplication

5. Technical quality:
0 = errors/regressions
1 = minor issues
2 = clean and validated

6. Quiz robustness:
0 = predictable/obvious options
1 = partially robust (some clues remain)
2 = balanced, non-predictable, and reasoning-oriented

Interpretation:
- 11-12: ready
- 8-10: ready with small follow-ups
- <=7: revise before merge
