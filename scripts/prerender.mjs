// Runs after `vite build`. Writes the fully rendered page into dist/index.html so Google and
// social apps see real content immediately, then creates sitemap.xml and robots.txt.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

// Your public address. On Vercel this is filled in automatically; set SITE_URL once you own a domain.
// let siteUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '');
let siteUrl = process.env.SITE_URL || 'https://www.shazilandrayan.com';
siteUrl = siteUrl.replace(/\/+$/, '');

let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);

if (siteUrl) {
  html = html.replaceAll('%SITE_URL%', siteUrl);
} else {
  // No domain yet: drop tags that need an absolute address instead of shipping a wrong one.
  html = html.split('\n').filter((line) => !line.includes('%SITE_URL%')).join('\n');
  console.warn('\n[prerender] SITE_URL is not set, so canonical, og:url, og:image and sitemap.xml were skipped.\n');
}
fs.writeFileSync(path.join(dist, 'index.html'), html);

if (siteUrl) {
  const today = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n`
  );
}
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ''}`
);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`[prerender] done${siteUrl ? ` for ${siteUrl}` : ''}`);
