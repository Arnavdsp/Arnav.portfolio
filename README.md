# arnav-portfolio

Static site. No build step.

- `index.html` — portfolio
- `Resume.dc.html` — résumé (also served at `/resume`)
- `vercel.json` — routing

## Deploy from Antigravity

1. Open this folder in Antigravity (File → Open Folder).
2. In the terminal:
   ```
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/Arnavdsp/arnav-portfolio.git
   git push -u origin main
   ```
3. On vercel.com → Add New → Project → import `arnav-portfolio`.
   Framework preset: **Other**. Build command: empty. Output directory: `./`. Deploy.

Or skip GitHub: `npm i -g vercel` then `vercel --prod` from this folder.

To keep the existing URL (arnav-portfolio-31di.vercel.app), push to the repo that project already deploys from instead of creating a new one.
