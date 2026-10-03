# Portfolio

My personal site: a single page with an intro, skills, three selected projects
and contact links, plus a printable résumé at `/resume.html`.

## Stack

- React 19 + TypeScript, built with Vite
- Tailwind CSS v4 for styling, Framer Motion for the section animations
- `src/components/ParticleBackground.tsx`: the canvas particle field behind the page
- `src/components/Typewriter.tsx`: the typing effect in the hero
- `public/resume.html`: a standalone HTML résumé sized for US Letter, so it prints
  to a one-page PDF straight from the browser

## Projects linked from the site

| Project | Repo |
|---|---|
| High-altitude tiny object detection (DRDO internship) | [DRDO-Internship-Overview](https://github.com/Arnavdsp/DRDO-Internship-Overview) |
| Aura, a multimodal wellness coach (Gemma 3n hackathon) | [Aura-The-Mental-Wellness-Coach](https://github.com/Arnavdsp/Aura-The-Mental-Wellness-Coach) |
| Bridge detection over water with YOLOv8-OBB | [Water-Bridge-Detection-Through-Satellite-Imagery](https://github.com/Arnavdsp/Water-Bridge-Detection-Through-Satellite-Imagery) |

## Running it

```bash
npm ci
npm run dev       # local dev server
npm run build     # type-check and build to dist/
npm run lint      # oxlint
```
