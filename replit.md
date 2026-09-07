# Meiosis Genesis: Elucidator

Interactive browser-based simulator visualizing meiotic cell division, chromosome behavior, and genetic recombination — step-by-step through all stages of Meiosis I and II.

## Run & Operate

- `pnpm --filter @workspace/meiosis run dev` — run the Meiosis front-end (workflow: `artifacts/meiosis: web`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (workflow: `artifacts/api-server: API Server`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm install --filter @workspace/meiosis... --frozen-lockfile` — install the Meiosis front-end dependency closure without pulling unrelated workspace packages

## Stack

- pnpm workspaces, Node.js, TypeScript 5.9
- Front-end: React + Vite + Tailwind CSS + shadcn/ui components
- Animation: Framer Motion
- Routing: Wouter
- API: Express 5 (in `artifacts/api-server`)
- DB: PostgreSQL + Drizzle ORM (`lib/db`) — requires `DATABASE_URL`
- Validation: Zod

## Where things live

- `artifacts/meiosis/` — main React front-end (the simulator UI)
- `artifacts/api-server/` — Express API server
- `artifacts/mockup-sandbox/` — component preview server for design work
- `lib/` — shared libraries (api-client-react, api-spec, api-zod, db)
- `scripts/` — workspace-level scripts

## Architecture decisions

- Monorepo using pnpm workspaces; each artifact and lib is its own package.
- Front-end is purely client-side (no SSR); all meiosis simulation logic runs in the browser.
- shadcn/ui component library with Radix UI primitives for accessible UI components.

## Product

A scientific educational tool that walks users through every stage of meiosis interactively — Interphase through Gamete Maturation — with animated chromosome visualization.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The meiosis Vite dev server picks up the `PORT` env var; the managed workflow doesn't set it, so it auto-selects a free port (not 5000).
- `DATABASE_URL` is required for the API server / DB layer but not needed for the front-end simulator.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
