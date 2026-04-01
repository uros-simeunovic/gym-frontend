# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `tsc && vite build`)
- **Lint:** `npm run lint`
- **Deploy:** `npm run deploy` (builds then deploys to Firebase Hosting)
- **Preview production build:** `npm run preview`

## Architecture

This is a gym/fitness training platform frontend ("gaingrlz") built with React 18 + TypeScript + Vite, deployed to Firebase Hosting.

### Backend & Data

- **Firebase** is the entire backend: Firestore for data, Firebase Auth (Google sign-in) for authentication, Firebase Storage for uploads.
- Firebase config is loaded from `VITE_*` env vars (see `src/firebase.ts`).
- Firestore collections: `users`, `plans`, `plans/{planId}/exercises` (subcollection).

### State & Data Fetching

- **TanStack React Query** for server state (all Firestore reads). Query functions live in `src/queries/` and are wrapped by hooks in `src/hooks/`.
- **Zustand** for UI state (sidebar open/close stores in hooks like `useMainSidebarMobile`, `useWorkoutSidebarMobile`).
- **React Context** for auth (`src/Providers/AuthProvider.tsx` exports `useAuth` hook).

### Routing & Auth

- React Router v6 with layout routes. Three layout layers:
  - `HomeLayout` - public landing page
  - `TrainingsLayout` - authenticated user training views (wrapped by `PrivateRoutes`)
  - `AdminLayout` - admin dashboard (wrapped by `PrivateAdminRoutes`, checks `userDetails.isAdmin`)
- Key routes: `/` (home), `/plans/:planId` (exercises list), `/plans/:planId/exercises/:exerciseId` (single exercise), `/admin/dashboard/users`, `/admin/dashboard/plans`, `/auth/login`

### UI

- **shadcn/ui** components in `src/components/ui/` (Radix primitives + Tailwind). Add new components via `npx shadcn-ui@latest add <component>`.
- **Tailwind CSS v3** with CSS variables for theming (configured in `tailwind.config.js`, variables in `src/index.css`).
- **Framer Motion** for animations. **Mux Player** for video playback. **Sonner** for toast notifications.
- Path alias: `@` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.json`).

### Conventions

- The app's UI text is in Serbian (e.g., toast messages, labels).
- Forms use `react-hook-form` + `zod` for validation.
- Images are optimized at build time via `vite-plugin-image-optimizer`.
