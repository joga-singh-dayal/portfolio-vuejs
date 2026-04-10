# Portfolio Vue.js

[![Production CI](https://github.com/joga-singh-dayal/portfolio-vuejs/actions/workflows/main.yml/badge.svg)](https://github.com/joga-singh-dayal/portfolio-vuejs/actions/workflows/main.yml)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker&logoColor=white)](./Dockerfile)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

Personal portfolio website built with Vue 3, TypeScript, and Vite. Demonstrates a production-grade frontend setup including Docker containerisation, GitHub Actions CI/CD, and Vitest unit tests — not just a static page.

**Live:** https://portfolio-vuejs-two.vercel.app

---

## Tech stack

- **Framework:** Vue 3 (Composition API, `<script setup>`)
- **Language:** TypeScript 5.9
- **Build tool:** Vite 8
- **Styling:** Tailwind CSS v3 + PostCSS
- **Animation:** @vueuse/motion
- **Utilities:** @vueuse/core (composables)
- **Routing:** Vue Router 4
- **Testing:** Vitest + @vue/test-utils + jsdom
- **Linting:** ESLint 10 (flat config) + @typescript-eslint
- **Formatting:** Prettier
- **Container:** Docker (multi-stage) + Nginx
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel (primary) + Docker/Nginx (self-hosted)

---

## Getting started

### Prerequisites
- Node.js >= 20
- npm >= 9

### Local development

```bash
git clone https://github.com/joga-singh-dayal/portfolio-vuejs.git
cd portfolio-vuejs
npm install
npm run dev
```

Open http://localhost:5173

### Run tests

```bash
npm test
```

### Production build

```bash
npm run build
npm run preview
```

---

## Docker

Build and run the production image locally (Node build → Nginx serve):

```bash
docker build -t portfolio-vue .
docker run -p 8080:80 portfolio-vue
```

Open http://localhost:8080

The final image is ~25 MB (Alpine Nginx + compiled `/dist` only — no Node.js, no source).

---

## Project structure
src/
├── components/       # Section components (Hero, About, Projects, Skills, Contact, NavBar, Footer)
├── views/            # HomeView.vue — single page, composes all sections
├── router/           # Vue Router config (hash-based anchor navigation)
└── assets/           # Global CSS, fonts
tests/                # Vitest unit tests
.github/workflows/    # GitHub Actions CI pipeline
Dockerfile            # Multi-stage build

---

## CI/CD

The GitHub Actions pipeline runs on every push to `main`:

1. `npm ci` — reproducible install from lockfile
2. `npm run lint` — ESLint + TypeScript checks
3. `npm run build` — type check + Vite bundle
4. `npx vitest run` — unit tests

---

## Deployment

**Vercel (live):** auto-deploys on push to `main`. Vercel Analytics included.

**Self-hosted / Docker:**
```bash
docker build -t portfolio-vue .
docker run -p 80:80 portfolio-vue
```

---

## Author

**Joga Singh Dayal** — Frontend Developer, Radebeul, Germany

GitHub: [@joga-singh-dayal](https://github.com/joga-singh-dayal)