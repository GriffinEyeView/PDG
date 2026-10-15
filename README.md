# PDG — Derrick Griffin Portfolio

This repository contains a minimal static portfolio site for Derrick Griffin.

Files added:
- `index.html` — the site HTML
- `styles.css` — basic responsive styles
- `assets/.gitkeep` — placeholder directory for images or other assets

Preview locally

1. Clone the repo:
   ```bash
   git clone https://github.com/GriffinEyeView/PDG.git
   cd PDG
   ```
2. Start a simple HTTP server (Python):
   ```bash
   # Python 3
   python -m http.server 8000
   # then open http://localhost:8000
   ```

Publish

- GitHub Pages: Go to repository Settings → Pages and set the source to `main` branch / `/ (root)`.
- Vercel / Netlify: Connect the repository and deploy; both detect static sites automatically.

Next steps

- Replace placeholders (bio, projects, contact) with real content.
- Add images to the `assets/` folder.
- If you want a React or Next.js starter instead, I can add one.
