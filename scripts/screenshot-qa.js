const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

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

  } finally {
    await browser.close();
  }
})();
