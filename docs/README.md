# Docs Index

Quick index to understand project structure, rules, and decisions without manual digging.

## Recommended reading order
1. `../README.md` - project overview and basic commands.
2. `../AGENTS.md` - operational onboarding for all agents.
3. `adr/ADR-001-project-architecture.md` - architecture and layering.
4. `adr/ADR-002-common-mistakes-and-content-density.md` - pedagogy and content-density policy.
5. `chapter-authoring-template.md` - chapter template, checklist, and acceptance scorecard.

## Language policy
- Documentation and developer-facing code comments must be in English.
- User-facing UI text may remain in Italian for now.

## When to update docs
Update an ADR when at least one of these areas changes:
- cross-cutting UX rules
- pedagogical content policy
- architecture structure or layer boundaries
- rendering pattern applied to multiple chapters

## Practical rule
If a decision appears repeatedly across PRs or discussions, it should become stable documentation in `docs/adr/`.
