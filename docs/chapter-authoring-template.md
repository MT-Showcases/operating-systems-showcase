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
- If `interactivePilot` already includes an equivalent guided task, hide duplicated `miniTask` content.

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

Interpretation:
- 9-10: ready
- 7-8: ready with small follow-ups
- <=6: revise before merge
