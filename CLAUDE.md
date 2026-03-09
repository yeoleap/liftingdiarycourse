# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (configured via `postcss.config.mjs`)
- **Geist** font family (sans + mono) via `next/font/google`

## Architecture

This is a Next.js App Router project. All routes and layouts live under `src/app/`. The root layout (`src/app/layout.tsx`) sets up fonts and global styles. Pages are `page.tsx` files within route directories.

No tests are configured yet.
