# Pixado — Portfolio Website

A fast, lightweight, single-page portfolio for **Pixado** ([@pixadovisuals](https://www.instagram.com/pixadovisuals)) — a YouTube thumbnail designer. Built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step, no dependencies.

> **Live site:** _add your URL here after deploying_

---

## ✨ Features

- Responsive, mobile-first dark UI with electric-blue accents
- Thumbnail portfolio grid with lightbox preview
- Animated on-scroll reveals, back-to-top, active-section nav
- SEO-ready: meta tags, Open Graph, Twitter cards, JSON-LD, `sitemap.xml`, `robots.txt`
- PWA manifest + full favicon set
- Accessible: skip-to-content link, keyboard focus states, reduced-motion support
- Custom 404 page
- **Everything is edited from one file:** `assets/js/data.js`

---

## 🗂 Project structure

```
.
├── index.html            # the page
├── 404.html              # custom not-found page
├── robots.txt            # SEO
├── sitemap.xml           # SEO
├── site.webmanifest      # PWA metadata
├── .nojekyll             # tells GitHub Pages to serve files as-is
└── assets/
    ├── css/style.css     # all styling
    ├── js/data.js        # ← EDIT THIS: links, stats, thumbnails
    ├── js/main.js        # site logic (no need to touch)
    ├── img/              # logo, favicons
    └── work/             # your thumbnail images
```

---

## ✏️ Editing content

You only ever need to touch **`assets/js/data.js`**. It is fully commented.

1. **Links & email** — update the `SITE` object (Instagram, LinkedIn, email).
2. **Add thumbnails** — drop images into `assets/work/`, then add an entry to `WORK`:
   ```js
   { type:"thumbnail", title:"My Thumbnail", tag:"Gaming",
     img:"assets/work/my-thumb.jpg", link:"https://youtu.be/VIDEO_ID" },
   ```
   `link` is optional — set it to the YouTube video the thumbnail was made for
   (clicking opens it); leave it as `"#"` to just show a large preview.
3. **Stats & services** — edit the `stats` array and `SERVICES` list.

Tip: keep thumbnails around 1280×720 and compressed (< ~400 KB) for fast loading.

---

## 🚀 Deploy

### Option A — GitHub Pages (recommended)
1. Put these files at the **root** of your repo (so `index.html` is at the top, not in a subfolder).
2. **Settings → Pages → Source: Deploy from a branch → Branch: `main` / folder: `/ (root)` → Save**.
3. Wait ~1–2 minutes. Live at `https://<username>.github.io/<repo>/`.

### Option B — Netlify / Vercel
Drag the project folder onto [Netlify Drop](https://app.netlify.com/drop), or import the
repo in Vercel. Zero config.

---

## 🔧 After deploying (1 minute)
For full SEO, replace `YOUR-DOMAIN.com` with your live URL in:
`index.html` (canonical, og:url, JSON-LD), `robots.txt`, and `sitemap.xml`.
Find & Replace `https://YOUR-DOMAIN.com` → your URL.

---

## 🖥 Run locally
No build needed — just open `index.html`. If images act up over `file://`, run a tiny server:
```bash
python3 -m http.server
# then visit http://localhost:8000
```

---

## 📄 License
[MIT](LICENSE) © 2026 Pixado
