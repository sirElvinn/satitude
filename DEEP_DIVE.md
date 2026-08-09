# SATitude — Codebase Deep-Dive

A review of the SATitude project (Digital SAT prep platform) and the remediation applied.

## Stack

- **Monorepo**: npm workspaces — `client` + `server` packages.
- **Client** (`satitude-client`): React 19, Vite, Tailwind (claymorphism UI), three.js + react-three-fiber/drei (3D satellite mascot), Clerk auth, framer-motion, react-router.
- **Server** (`satitude-server`): Express, Prisma 7 + Postgres, Clerk (Svix) webhooks, Zod validation, helmet + cors.

## Architecture

- Auth is fully delegated to **Clerk** (client-side `ClerkProvider`, protected routes).
- The server stores a `User` row keyed by Clerk's `clerkId`. Two sync paths:
  1. **Webhook** (`/api/webhooks/clerk`) — Clerk pushes `user.created` / `user.updated` server-side (signature verified with Svix).
  2. **Client sync** (`/api/users/sync`) — `useSync` hook posts the Clerk user on first authenticated load (belt-and-braces with the webhook).
- Landing page sections live in `components/sections/` with content in `lib/constants.ts`.

## Issues found (and status)

### Wiring / functional (fixed)
- **Port mismatch** — tracked `server/.env` forced `PORT=5000` while the client called `:3001`; client and server never connected. → `PORT=3001` now.
- **No database** — no `prisma/migrations`, no generated Prisma client, no `DATABASE_URL`. → pending Neon setup + `prisma migrate dev`.
- **Server had no `build` script** though `start` referenced `dist/index.js`. → added `build`.
- **`CLERK_WEBHOOK_SECRET` unset** → webhook always 500. → set.

### Security / hygiene
- `server/.env` was committed to git → untracked; `.env` now in `.gitignore`.
- `/api/users/profile` and `/api/users/sync` are unauthenticated (IDOR risk) → **deferred** (needs `@clerk/backend` JWT verification).
- Webhook handles only `user.created` / `user.updated`, not `user.deleted` → **deferred**.
- Rate limiter only guards `/profile`, not `/sync` → **deferred**.

### Dead code (removed)
- `client/src/contexts/AuthContext.tsx` — unused legacy password-auth context; targeted non-existent `/auth/*` endpoints; sole lint errors.
- `server/auth.js` + `server/db.js` — legacy SQLite/bcrypt/JWT auth, unused dependencies.
- `client/package-lock.json` — stale nested lockfile; single root lockfile kept.
- Client package renamed `satitude` → `satitude-client` (name clash with root).

### UX (fixed)
- 4 dashboard quick-actions (`/practice/test`, `/practice/questions`, `/tutor`, `/analytics`) 404'd → protected "coming soon" pages now exist.
- Hero "Start practicing free" / "See how it works" and CTA "View pricing" were inert → wired (sign-up / scroll).
- Navbar ignored auth state → shows "Dashboard" when signed in.
- Font mismatch (Inter vs Manrope) → unified on Manrope.
- `npm run dev` used POSIX `&` (flaky on Windows) → `concurrently`.

## Deferred follow-ups
1. Server-side Clerk JWT verification for `/api/users/*`.
2. `user.deleted` webhook handling.
3. Rate-limit `/api/users/sync`.
4. Real practice-test / question-bank / tutor / analytics features.
