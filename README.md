# Shazil and Rayan Cargo Car Carrier Services

A fast, static website (React + Vite + Tailwind). No backend, no admin panel, no database.
All text lives in two files, so updating the site means editing text and redeploying.

## Edit your content

| To change...                          | Edit this file              |
| ------------------------------------- | --------------------------- |
| Phone, WhatsApp, email, address, map  | `src/config/site.js`        |
| Services, fleet, the three stat cards | `src/data/content.js`       |
| Page title / description (Google)     | `index.html`                |
| Colours and fonts                     | `tailwind.config.js`        |
| Logo image                            | `public/logo-seal.png`      |
| Truck photo (hero, fleet)             | `public/images/truck-photo.webp`  |
| Truck on the road band (transparent)  | `public/images/truck-cutout.webp` |

## Run locally

```bash
npm install
npm run dev        # live preview while you edit
npm run build      # production build into /dist
```

## Put it online (Vercel, free)

1. Create a free account at vercel.com and upload this project to a GitHub repository.
2. In Vercel: **Add New > Project**, pick the repository, click **Deploy**. Nothing else to configure.
3. Buy a domain (for example a `.pk` or `.com`), then in Vercel open **Settings > Domains**, add it and
   follow the DNS steps Vercel shows you.
4. In Vercel open **Settings > Environment Variables**, add `SITE_URL` with your domain
   (for example `https://www.yourdomain.com`), then **Redeploy**. This switches on the canonical link,
   the sitemap and the WhatsApp/Facebook share preview.

## Get found on Google

1. Go to search.google.com/search-console and add your domain as a property.
2. Verify it (Vercel makes the DNS step easy).
3. Open **Sitemaps** and submit `sitemap.xml`. Then use **URL Inspection > Request indexing** on your homepage.
4. Create a free Google Business Profile for your yard address. For a local transport company this
   matters more than anything else for showing up on Google Maps.

The page is pre-rendered at build time, so Google reads the full content on its first visit.
