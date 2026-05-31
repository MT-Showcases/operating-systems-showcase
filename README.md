# Operating Systems Showcase

Interactive educational showcase about Operating Systems for Steve Jobs Academy Catania.

## Stack
- Next.js 15
- TypeScript
- Tailwind CSS v4
- Vercel

## Initial structure
- `app/` — layout, homepage, and chapter route rendering
- `components/` — reusable components
- `data/` — chapter types and datasets
- `lib/` — utilities and tutor/quiz configuration
- `scripts/` — automation scripts for RAG index build and visual QA screenshots
- `docs/adr/` — architecture and policy decisions

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Visual QA screenshots
```bash
npm run build
npm run start -- -p 3456
node scripts/screenshot-qa.mjs
```

## Quick onboarding (humans and agents)
- `AGENTS.md` - cross-agent operational guide.
- `docs/README.md` - documentation index.
- `docs/adr/` - stable project decisions.

## Language policy
- Documentation, code comments, and internal developer-facing text must be in English.
- User-facing UI text is currently allowed in Italian.
