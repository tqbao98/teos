# Teos Landing Page

Marketing site for **Teos** — sovereign, on-premise-first industrial AI.

Built with Vite, React, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Quick start

```bash
npm install
cp .env.example .env
# Set VITE_FORMSPREE_ID in .env
npm run dev
```

Open [http://localhost:3005](http://localhost:3005).

## Environment

| Variable | Description |
|----------|-------------|
| `VITE_FORMSPREE_ID` | Formspree form ID for demo request submissions |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3005 |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Docker

```bash
docker build --build-arg VITE_FORMSPREE_ID=your_id -t teos-landing .
docker run -p 3005:3005 teos-landing
```

Or with Docker Compose:

```bash
VITE_FORMSPREE_ID=your_id docker compose up --build
```

## Project structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, Product, Impact, ContactCTA
│   ├── shared/       # Logo, SectionHeader
│   └── ui/           # shadcn/ui components
├── data/content.ts   # All site copy
└── lib/utils.ts
public/               # Static assets (logo, hero image)
```

## Content

Edit copy in [`src/data/content.ts`](src/data/content.ts).

## Acknowledgements

Built with Ouroboros — The next-generation of coding agent systems.
