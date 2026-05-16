# 🎨 Operating Systems Showcase — Phase 4 Analysis

**Data:** 2026-05-16  
**Agente:** Showcaser 🎨  
**Task:** Replica struttura AI Fundamentals → popola `public/sources/` + `data/pages/` + media structure

---

## 📊 Struttura Confronto

### AI Fundamentals Template ✅
- **Capitoli:** 15 (ch01 → ch15)
- **File sources:** 15 JSON (uno per chapter)
- **Schema sources.json:**
  ```json
  {
    "chapter": "chX",
    "slug": "[slug]",
    "title": "[title]",
    "policy": "[descrizione tipo fonti]",
    "sources": [
      { "id": "src-XXX", "title": "...", "origin": "URL", "type": "book|course|tutorial|documentation|paper" }
    ]
  }
  ```
- **Pages:** `data/pages/` esiste con openclaw.ts, glossario.ts, terms.ts, privacy.ts
- **Media:** Struttura cartellas creata (`public/media/`)
- **Build:** Vercel auto-deploy

### Operating Systems Showcase 🎯
- **Capitoli:** 8 (ch1 → ch8)
- **File sources:** ❌ MANCA `public/sources/`
- **Chapters TypeScript:** ✅ Esistono in `/data/chapters/index.ts` con struttura completa
- **Pages:** ❌ MANCA `data/pages/` (non creato)
- **Media:** ❌ MANCA struttura cartelle
- **Build:** Non testato

---

## 8️⃣ Mapping Capitoli OS

| ID | Slug | Title | Theme | Sources Count |
|----|------|-------|-------|----------------|
| 1 | `what-is-os` | Cos'è un Sistema Operativo | Teoria di base | 3-4 |
| 2 | `hardware-cpu` | Architettura del Computer e CPU | Hardware → OS decisions | 4-5 |
| 3 | `kernel` | Kernel, User Space e System Calls | Architettura interna | 3-4 |
| 4 | `processes` | Processi, Thread e Scheduling | Gestione esecuzione | 4-5 |
| 5 | `memory-filesystem` | Memoria e File System | Risorse persistenti | 4-5 |
| 6 | `io-devices` | I/O e Periferiche | Comunicazione esterna | 3-4 |
| 7 | `linux-cli` | Linux da Riga di Comando | Pratica operativa | 3-4 |
| 8 | `security-best-practices` | Sicurezza Base e Buone Pratiche | Mindset professionale | 3-4 |

**TOTALE:** 8 capitoli × ~4 fonti = **~32 fonti reali** da ricercare

---

## 📋 Workflow Esecuzione

### 1️⃣ **public/sources/ — 8 JSON files**
✅ Creazione file per OGNI capitolo  
✅ Fonte reali verificabili (niente invenzioni)  
✅ Mix: libri, corsi online, documentation, paper  
✅ MIN 3, MAX 8 per capitolo (target ~4)

### 2️⃣ **data/pages/ — 4 TypeScript files**
✅ `openclaw.ts` — Chi sono gli agenti che creano il sito  
✅ `glossario.ts` — Glossario estratto da chapters.glossary[]  
✅ `terms.ts` — Termini di servizio (generico)  
✅ `privacy.ts` — Privacy policy (generico)

### 3️⃣ **data/chapters/index.ts — Check struttura**
✅ Verifica ogni capitolo ha `glossary: [...]`  
✅ Verifica sections, keyTakeaways, discussionPrompts  
✅ NO modifiche contenuto

### 4️⃣ **public/media/ — Folder structure**
✅ `public/media/os/` (nome corso)  
✅ `/infographics/`, `/videos/`, `/labs/`, `/openclaw/` (vuoti per ora)

### 5️⃣ **Build & Test Vercel**
✅ `npm install && npm run build` → nessun errore  
✅ Test homepage + 1-2 chapter pages  
✅ Screenshot per Michele

### 6️⃣ **Git commit + push**
✅ `git add . && git commit -m "feat: populate sources, pages, media structure"`  
✅ Push to main (auto-deploy Vercel)

### 7️⃣ **Telegram Update realtime**
✅ Dopo OGNI milestone: update a Michele con progresso

---

## 🔍 Validation Rules

- **Fonti:** Reali e verificabili — niente inventato
- **JSON:** Valido, conforme schema AI
- **Glossary:** Estratto da chapters.glossary[] — non nuovo
- **Build:** Zero errori TypeScript
- **Git:** Commit descrittivo + push main

---

## 🎯 Success Criteria

- ✅ `public/sources/` completato (8 JSON, 1 per chapter)
- ✅ `data/pages/` completato (4 TypeScript)
- ✅ `data/chapters/index.ts` verificato
- ✅ `public/media/` struttura creato
- ✅ Build Vercel OK
- ✅ GitHub push main
- ✅ Telegram update Michele con screenshot

---

## 📚 Note Implementazione

1. **Fonti per categoria:**
   - **Ch1 (Teoria OS):** Tanenbaum, Silberschatz, corso MIT, Google Cloud
   - **Ch2 (Hardware):** Intel CPU docs, ARM, Raspberry Pi, datasheets
   - **Ch3 (Kernel):** Linux source code, OS design papers, Bell Labs
   - **Ch4 (Processes):** man pages, scheduling algorithms (RR, EDF, CFS)
   - **Ch5 (Memory+FS):** Ext4, BTRFS, Virtual Memory, Memory Management Units
   - **Ch6 (I/O):** Device drivers, kernel documentation, protocols
   - **Ch7 (CLI Linux):** man 1, tldr, GNU coreutils, Linux Academy
   - **Ch8 (Security):** UNIX philosophy, sudo, SELinux, capabilities

2. **Glossary integration:**
   - Ogni capitolo ha `glossary: [...]` array in TypeScript
   - Il `glossario.ts` page aggrega e deduplica

3. **Media folder** (per fase successiva):
   - `/infographics/` — diagram PNG per concetti (CPU, memory, FS)
   - `/videos/` — link o embed video tutorial
   - `/labs/` — file esercitazioni (Bash, C, vedi Ch7)
   - `/openclaw/` — media pagina "come nasce il sito"

---

## ⏱️ Timeline Stimato

| Milestone | Time | Status |
|-----------|------|--------|
| Analisi | 10 min | ✅ In progress |
| public/sources/ | 30 min | ⏳ Next |
| data/pages/ | 20 min | ⏳ Next |
| Verifiche + media | 15 min | ⏳ Next |
| Build & test | 15 min | ⏳ Next |
| Git + Telegram | 10 min | ⏳ Next |
| **TOTALE** | **≈100 min** | |

---

**Prossimo passo:** Creare i file JSON per `public/sources/ch1` → `ch8`
