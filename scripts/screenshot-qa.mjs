import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const screenshots = [];
  const resolutions = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 }
  ];

  const pages = [
    { url: 'http://localhost:3456/', name: 'homepage' },
    { url: 'http://localhost:3456/chapters/what-is-os', name: 'chapter-1' },
    { url: 'http://localhost:3456/glossary', name: 'glossary' }
  ];

  try {
    for (const page_config of pages) {
      for (const res of resolutions) {
        const page = await browser.newPage();
        await page.setViewport({ width: res.width, height: res.height });
        
        console.log(`Capturing ${page_config.name} at ${res.name} (${res.width}x${res.height})...`);
        
        await page.goto(page_config.url, { waitUntil: 'networkidle2' });
        
        const filename = `screenshot-${page_config.name}-${res.name}.png`;
        const filepath = path.join(__dirname, '..', 'public', 'qa', filename);
        
        // Ensure qa directory exists
        const qaDir = path.join(__dirname, '..', 'public', 'qa');
        if (!fs.existsSync(qaDir)) {
          fs.mkdirSync(qaDir, { recursive: true });
        }
        
        await page.screenshot({ path: filepath, fullPage: false });
        screenshots.push({ resolution: res.name, page: page_config.name, filepath: filename });
        
        await page.close();
      }
    }

    console.log('\n✅ Screenshots complete:');
    screenshots.forEach(s => {
      console.log(`  - ${s.page} (${s.resolution}): public/qa/${s.filepath}`);
    });

    const mobileSidebarPage = await browser.newPage();
    await mobileSidebarPage.setViewport({ width: 390, height: 844 });
    await mobileSidebarPage.goto('http://localhost:3456/chapters/os-comparison', { waitUntil: 'networkidle2' });
    await mobileSidebarPage.waitForSelector('button[aria-label="Apri navigazione capitolo"]');
    await mobileSidebarPage.click('button[aria-label="Apri navigazione capitolo"]');
    await mobileSidebarPage.waitForSelector('button[aria-label="Chiudi navigazione"]');

    const mobileSidebarTop = 'qa-os-comparison-mobile-open-top.png';
    await mobileSidebarPage.screenshot({
      path: path.join(__dirname, '..', 'public', 'qa', mobileSidebarTop),
      fullPage: false,
    });
    screenshots.push({ resolution: 'mobile', page: 'os-comparison-sidebar-open-top', filepath: mobileSidebarTop });

    await mobileSidebarPage.evaluate(() => {
      const nav = document.querySelector('[aria-label="Capitoli"]');
      const container = nav?.parentElement;
      if (container instanceof HTMLElement) {
        container.scrollTop = container.scrollHeight;
      }
    });
    await new Promise((resolve) => setTimeout(resolve, 200));

    const mobileSidebarScrolled = 'qa-os-comparison-mobile-open-scrolled.png';
    await mobileSidebarPage.screenshot({
      path: path.join(__dirname, '..', 'public', 'qa', mobileSidebarScrolled),
      fullPage: false,
    });
    screenshots.push({ resolution: 'mobile', page: 'os-comparison-sidebar-open-scrolled', filepath: mobileSidebarScrolled });

    await mobileSidebarPage.close();

    console.log('\n✅ Sidebar QA complete:');
    console.log(`  - os-comparison sidebar (top): public/qa/${mobileSidebarTop}`);
    console.log(`  - os-comparison sidebar (scrolled): public/qa/${mobileSidebarScrolled}`);

  } finally {
    await browser.close();
  }
})();
