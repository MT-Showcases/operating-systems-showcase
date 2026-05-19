#!/usr/bin/env python3
import json
import os
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CHAPTERS_FILE = ROOT / "data" / "chapters" / "index.ts"
GLOSSARY_FILE = ROOT / "data" / "glossary.ts"
DOWNLOADS_DIR = ROOT / "public" / "downloads"
PAGES_DIR = ROOT / "data" / "pages"
OUT_DIR = ROOT / "public" / "rag"
OUT_DIR.mkdir(parents=True, exist_ok=True)


def clean_text(text: str) -> str:
    # Rimuove marker markdown bold/italic per testo pulito nel RAG
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    text = re.sub(r'\*([^*]+)\*', r'\1', text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def chunk_text(text: str, max_chars: int = 900, overlap: int = 120):
    text = clean_text(text)
    if len(text) <= max_chars:
        return [text]
    chunks = []
    i = 0
    while i < len(text):
        chunks.append(text[i:i + max_chars])
        i += max_chars - overlap
    return chunks


def extract_string_array(ts_block: str) -> list:
    """Estrae stringhe singole da un array TypeScript."""
    return re.findall(r"'([^']+)'", ts_block)


def parse_chapters_structured():
    """Estrae capitoli da index.ts in modo strutturato per Nix."""
    if not CHAPTERS_FILE.exists():
        return []

    raw = CHAPTERS_FILE.read_text(encoding="utf-8", errors="ignore")
    items = []

    # Split per capitolo usando id: N,
    chapter_blocks = re.split(r'(?=\{\s*\n\s*id:\s*\d+,)', raw)

    for block in chapter_blocks:
        slug_m = re.search(r"slug:\s*'([^']+)'", block)
        title_m = re.search(r"title:\s*'([^']+)'", block)
        desc_m = re.search(r"description:\s*'([^']+)'", block)
        if not slug_m:
            continue

        slug = slug_m.group(1)
        title = title_m.group(1) if title_m else slug
        description = desc_m.group(1) if desc_m else ''

        # Estrai sezioni
        section_blocks = re.findall(r'id:\s*\'([^\']+)\'[\s\S]*?(?=(?:id:\s*\'|keyTakeaways|\],\s*\n\s*\}))', block)
        sections_text = []

        # Estrai contenuto sezioni più robusto
        section_matches = list(re.finditer(r"title:\s*'([^']+)'[\s\S]*?content:\s*'([^']*(?:\\'[^']*)*)'[\s\S]*?keyPoints:\s*\[([^\]]*)", block))
        for sm in section_matches:
            sec_title = sm.group(1)
            sec_content = sm.group(2).replace("\\'" , "'")
            sec_content = clean_text(sec_content)
            key_points_raw = sm.group(3)
            key_points = re.findall(r"'([^']+)'", key_points_raw)
            sec_text = f"SEZIONE: {sec_title}\n{sec_content}"
            if key_points:
                sec_text += "\nPUNTI CHIAVE:\n- " + "\n- ".join(key_points)
            sections_text.append(sec_text)

        # Estrai pilotContent
        pilot_parts = []
        why_m = re.search(r'whyItMatters:\s*\[([\s\S]*?)\],', block)
        if why_m:
            items_list = re.findall(r"'([^']+)'", why_m.group(1))
            if items_list:
                pilot_parts.append("PERCHÉ CONTA:\n" + " ".join(items_list))

        mistakes_m = re.search(r'commonMistakes:\s*\[([\s\S]*?)\],', block)
        if mistakes_m:
            items_list = re.findall(r"'([^']+)'", mistakes_m.group(1))
            if items_list:
                pilot_parts.append("ERRORI COMUNI:\n- " + "\n- ".join(items_list))

        realworld_m = re.search(r'realWorld:\s*\[([\s\S]*?)\],', block)
        if realworld_m:
            items_list = re.findall(r"'([^']+)'", realworld_m.group(1))
            if items_list:
                pilot_parts.append("NEL MONDO REALE:\n- " + "\n- ".join(items_list))

        minitask_m = re.search(r'miniTask:\s*\[([\s\S]*?)\],', block)
        if minitask_m:
            items_list = re.findall(r"'([^']+)'", minitask_m.group(1))
            if items_list:
                pilot_parts.append("MINI TASK:\n" + " ".join(items_list))

        # Estrai keyTakeaways
        takeaways_m = re.search(r'keyTakeaways:\s*\[([\s\S]*?)\],', block)
        takeaways = []
        if takeaways_m:
            takeaways = re.findall(r"'([^']+)'", takeaways_m.group(1))

        # Costruisci il testo completo per questo capitolo
        full_text = f"CAPITOLO: {title}\nSLUG: {slug}\nDESCRIZIONE: {clean_text(description)}\n\n"
        if sections_text:
            full_text += "\n\n".join(sections_text) + "\n\n"
        if pilot_parts:
            full_text += "\n\n".join(pilot_parts) + "\n\n"
        if takeaways:
            full_text += "TAKEAWAY:\n- " + "\n- ".join(takeaways)

        for idx, chunk in enumerate(chunk_text(full_text, 1200, 160)):
            items.append({
                "id": f"chapter-{slug}-{idx}",
                "sourceType": "chapter",
                "chapterSlug": slug,
                "title": title,
                "url": f"/chapters/{slug}",
                "text": chunk,
            })

    return items


def parse_glossary_raw():
    raw = GLOSSARY_FILE.read_text(encoding="utf-8", errors="ignore")
    items = []
    for idx, chunk in enumerate(chunk_text(raw, 1200, 160)):
        items.append({
            "id": f"glossary-{idx}",
            "sourceType": "glossary",
            "chapterSlug": None,
            "title": "Glossario",
            "url": "/glossary",
            "text": chunk,
        })
    return items


def parse_zip(zip_path: Path):
    docs = []
    with zipfile.ZipFile(zip_path, "r") as zf:
        for name in zf.namelist():
            norm = name.replace("\\", "/")
            lower = norm.lower()
            row = {"path": norm, "included": False, "preview": ""}
            if any(lower.endswith(ext) for ext in [".md", ".txt", ".py", ".json", ".csv"]) or "requirement" in lower or lower.endswith(".env"):
                try:
                    raw = zf.read(name).decode("utf-8", errors="ignore")
                    row["included"] = True
                    row["preview"] = clean_text(raw)[:2000]
                    docs.append((norm, raw))
                except Exception:
                    pass
        return docs


def parse_labs():
    items = []
    manifest = []
    for zip_path in sorted(DOWNLOADS_DIR.glob("*.zip")):
        zip_name = zip_path.name
        files = []
        try:
            with zipfile.ZipFile(zip_path, "r") as zf:
                files = [n.replace("\\", "/") for n in zf.namelist()]
        except Exception:
            files = []

        docs = parse_zip(zip_path)
        manifest.append({
            "zipName": zip_name,
            "downloadUrl": f"/downloads/{zip_name}",
            "files": files,
        })
        if docs:
            for file_path, content in docs:
                for idx, chunk in enumerate(chunk_text(content, 1000, 120)):
                    items.append({
                        "id": f"lab-{zip_name}-{file_path}-{idx}".replace("/", "_").replace(" ", "_"),
                        "sourceType": "lab_zip",
                        "chapterSlug": None,
                        "title": f"{zip_name} · {file_path}",
                        "url": f"/downloads/{zip_name}",
                        "zipName": zip_name,
                        "filePath": file_path,
                        "text": chunk,
                    })
    return items, manifest


def parse_static_pages():
    items = []
    if not PAGES_DIR.exists():
        return items
    for file in sorted(PAGES_DIR.glob("*.txt")):
        meta_file = PAGES_DIR / (file.stem + ".meta.json")
        meta = {}
        if meta_file.exists():
            try:
                meta = json.loads(meta_file.read_text(encoding="utf-8"))
            except Exception:
                pass
        raw = file.read_text(encoding="utf-8", errors="ignore")
        title = meta.get("title", file.stem)
        url = meta.get("url", "/")
        for idx, chunk in enumerate(chunk_text(raw, 1200, 160)):
            items.append({
                "id": f"page-{file.stem}-{idx}",
                "sourceType": "page",
                "chapterSlug": None,
                "title": title,
                "url": url,
                "text": chunk,
            })
    return items


def main():
    chapters = parse_chapters_structured()
    glossary = parse_glossary_raw()
    labs, manifest = parse_labs()
    pages = parse_static_pages()
    corpus = chapters + glossary + labs + pages

    (OUT_DIR / "index.json").write_text(json.dumps(corpus, ensure_ascii=False, indent=2), encoding="utf-8")
    (OUT_DIR / "lab-manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Built RAG index: {len(corpus)} chunks (pages: {len(pages)})")
    print(f"Built lab manifest: {len(manifest)} zip files")


if __name__ == "__main__":
    main()
