# 🎨 Operating Systems Showcase — Phase 4 Analysis

**Date:** 2026-05-16  
**Agent:** Showcaser 🎨  
**Task:** Replicate AI Fundamentals structure -> populate `public/sources/` + `data/pages/` + media structure

---

## 📊 Structure Comparison

### AI Fundamentals Template ✅
- **Chapters:** 15 (ch01 -> ch15)
- **Source files:** 15 JSON files (one per chapter)
- **`sources.json` schema:**
  ```json
  {
    "chapter": "chX",
    "slug": "[slug]",
    "title": "[title]",
    "policy": "[source policy description]",
    "sources": [
      { "id": "src-XXX", "title": "...", "origin": "URL", "type": "book|course|tutorial|documentation|paper" }
    ]
  }
  ```
- **Pages:** `data/pages/` exists with openclaw.ts, glossario.ts, terms.ts, privacy.ts
- **Media:** Folder structure created (`public/media/`)
- **Build:** Vercel auto-deploy

### Operating Systems Showcase 🎯
- **Chapters:** 8 (ch1 -> ch8)
- **Source files:** ❌ `public/sources/` missing
- **Chapters TypeScript:** ✅ Existing in `/data/chapters/index.ts` with complete structure
- **Pages:** ❌ `data/pages/` missing (not created)
- **Media:** ❌ Folder structure missing
- **Build:** Not tested

---

## 8️⃣ OS Chapter Mapping

| ID | Slug | Title | Theme | Sources Count |
|----|------|-------|-------|----------------|
| 1 | `what-is-os` | Cos'e un Sistema Operativo | Core theory | 3-4 |
| 2 | `hardware-cpu` | Architettura del Computer e CPU | Hardware -> OS decisions | 4-5 |
| 3 | `kernel` | Kernel, User Space e System Calls | Internal architecture | 3-4 |
| 4 | `processes` | Processi, Thread e Scheduling | Execution management | 4-5 |
| 5 | `memory-filesystem` | Memoria e File System | Persistent resources | 4-5 |
| 6 | `io-devices` | I/O e Periferiche | External communication | 3-4 |
| 7 | `linux-cli` | Linux da Riga di Comando | Operational practice | 3-4 |
| 8 | `security-best-practices` | Sicurezza Base e Buone Pratiche | Professional mindset | 3-4 |

**TOTAL:** 8 chapters x ~4 sources = **~32 real sources** to collect

---

## 📋 Execution Workflow

### 1️⃣ **public/sources/ — 8 JSON files**
✅ Create one file for each chapter  
✅ Real, verifiable sources only (no fabrication)  
✅ Mix: books, online courses, documentation, papers  
✅ MIN 3, MAX 8 per chapter (target ~4)

### 2️⃣ **data/pages/ — 4 TypeScript files**
✅ `openclaw.ts` — who the site-building agents are  
✅ `glossario.ts` — glossary extracted from chapters.glossary[]  
✅ `terms.ts` — generic terms of service  
✅ `privacy.ts` — generic privacy policy

### 3️⃣ **data/chapters/index.ts — Structure check**
✅ Verify each chapter has `glossary: [...]`  
✅ Verify sections, keyTakeaways, discussionPrompts  
✅ No content changes

### 4️⃣ **public/media/ — Folder structure**
✅ `public/media/os/` (course name)  
✅ `/infographics/`, `/videos/`, `/labs/`, `/openclaw/` (vuoti per ora)

### 5️⃣ **Build & Test Vercel**
✅ `npm install && npm run build` -> no errors  
✅ Test homepage + 1-2 chapter pages  
✅ Screenshots for Michele

### 6️⃣ **Git commit + push**
✅ `git add . && git commit -m "feat: populate sources, pages, media structure"`  
✅ Push to main (auto-deploy Vercel)

### 7️⃣ **Real-time Telegram update**
✅ After EACH milestone: update Michele with progress

---

## 🔍 Validation Rules

- **Sources:** Real and verifiable — no fabricated references
- **JSON:** Valido, conforme schema AI
- **Glossary:** Estratto da chapters.glossary[] — non nuovo
- **Build:** Zero TypeScript errors
- **Git:** Descriptive commit + push to main

---

## 🎯 Success Criteria

- ✅ `public/sources/` completed (8 JSON, 1 per chapter)
- ✅ `data/pages/` completed (4 TypeScript)
- ✅ `data/chapters/index.ts` verified
- ✅ `public/media/` structure created
- ✅ Build Vercel OK
- ✅ GitHub push main
- ✅ Telegram update sent to Michele with screenshots

---

## 📚 Implementation Notes

1. **Sources by category:**
   - **Ch1 (Teoria OS):** Tanenbaum, Silberschatz, corso MIT, Google Cloud
   - **Ch2 (Hardware):** Intel CPU docs, ARM, Raspberry Pi, datasheets
   - **Ch3 (Kernel):** Linux source code, OS design papers, Bell Labs
   - **Ch4 (Processes):** man pages, scheduling algorithms (RR, EDF, CFS)
   - **Ch5 (Memory+FS):** Ext4, BTRFS, Virtual Memory, Memory Management Units
   - **Ch6 (I/O):** Device drivers, kernel documentation, protocols
   - **Ch7 (CLI Linux):** man 1, tldr, GNU coreutils, Linux Academy
   - **Ch8 (Security):** UNIX philosophy, sudo, SELinux, capabilities

2. **Glossary integration:**
  - Each chapter has a `glossary: [...]` array in TypeScript
  - The `glossario.ts` page aggregates and deduplicates

3. **Media folder** (for next phase):
   - `/infographics/` — diagram PNG per concetti (CPU, memory, FS)
   - `/videos/` — link o embed video tutorial
  - `/labs/` — lab files (Bash, C, see Ch7)
  - `/openclaw/` — media for the "how the site is built" page

---

## ⏱️ Estimated Timeline

| Milestone | Time | Status |
|-----------|------|--------|
| Analysis | 10 min | ✅ In progress |
| public/sources/ | 30 min | ⏳ Next |
| data/pages/ | 20 min | ⏳ Next |
| Verification + media | 15 min | ⏳ Next |
| Build & test | 15 min | ⏳ Next |
| Git + Telegram | 10 min | ⏳ Next |
| **TOTALE** | **≈100 min** | |

---

**Next step:** Create JSON files for `public/sources/ch1` -> `ch8`
