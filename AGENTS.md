# AGENTS.md

This document helps agents work effectively in this portfolio codebase.

## Project Overview

A modern portfolio website built with the T3 Stack:
- **Next.js 15.5** - React framework with App Router
- **tRPC v11** - End-to-end typesafe APIs
- **TypeScript 5.8** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS
- **Bun** - Package manager and runtime
- **React 19** - Latest React version
- **Framer Motion** - Animation library for UI transitions
- **Lucide React** - Icon library

## Essential Commands

### Development
```bash
bun dev          # Start dev server with Turbo mode
```

### Building & Preview
```bash
bun run build    # Build for production
bun preview      # Build and start production server
bun start        # Start production server (must build first)
```

### Code Quality
```bash
bun check        # Run lint and typecheck together
bun lint         # Run ESLint
bun lint:fix     # Run ESLint with auto-fix
bun typecheck    # Run TypeScript compiler without emitting files
```

### Formatting
```bash
bun format:check # Check code formatting
bun format:write # Format code
```

## Code Organization

```
src/
├── app/                          # Next.js App Router
│   ├── _components/              # Private components (not routes)
│   │   └── home/                 # Home page components
│   │       ├── Hero.tsx
│   │       ├── Navigation.tsx
│   │       ├── Projects.tsx
│   │       ├── About.tsx
│   │       ├── Experience.tsx
│   │       ├── Contact.tsx
│   │       ├── Footer.tsx
│   │       ├── AIVersion.tsx
│   │       ├── WeatherWidget.tsx
│   │       ├── MusicWidget.tsx
│   │       ├── index.ts          # Barrel exports
│   │       └── types.ts          # Shared types for home feature
│   ├── projects/                 # Feature route
│   │   ├── page.tsx              # Projects page
│   │   ├── data.ts               # Static project data
│   │   ├── types.ts              # Types for projects
│   │   └── components/           # Project-specific components
│   │       ├── Navigation.tsx
│   │       ├── Hero.tsx
│   │       ├── FeaturedProjects.tsx
│   │       ├── OtherProjects.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── CTASection.tsx
│   │       ├── Footer.tsx
│   │       └── index.ts          # Barrel exports
│   ├── api/trpc/[trpc]/          # tRPC HTTP endpoint
│   │   └── route.ts
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page (direct implementation, no re-export)
├── server/api/                   # tRPC backend
│   ├── routers/                  # API routes (auto-registered)
│   │   └── post.ts               # Example router
│   ├── root.ts                   # Aggregates all routers
│   └── trpc.ts                   # tRPC initialization & middleware
├── trpc/                         # tRPC client & server utilities
│   ├── server.ts                 # Server-side tRPC helpers (RSC)
│   ├── react.tsx                 # Client-side tRPC provider
│   └── query-client.ts           # TanStack Query client config
├── env.js                        # Environment variable validation
└── styles/
    └── globals.css               # Global styles
```

## Key Patterns & Conventions

### Next.js App Router Best Practices

#### Page Organization
- **Root pages direct**: Route pages (e.g., `app/page.tsx`, `app/projects/page.tsx`) must implement content directly, never import and re-export from subdirectories
- **Anti-pattern to avoid**:
```typescript
// ❌ DON'T DO THIS
import Home from "./home/page";
export default Home;
```
- **Correct approach**:
```typescript
// ✅ DO THIS
export default function Home() {
  return <div>Home content</div>;
}
```

#### Private Components
- Prefix directories/files with underscore `_` to mark private (non-routing) components
- Example: `_components/home/` contains components used by pages but not accessible as routes

#### Internal Navigation
- **Always use `<Link />` from `next/link`** for internal navigation, never `<a>` tags
```typescript
// ✅ Correct
import Link from "next/link";
<Link href="/projects">Projects</Link>

// ❌ Avoid
<a href="/projects">Projects</a>  // ESLint will flag this
```

#### JSX Text Content
- **Escape apostrophes** in JSX text to avoid ESLint errors:
```typescript
// ✅ Correct
<p>Where I&apos;ve worked</p>

// ❌ Avoid
<p>Where I've worked</p>  // ESLint: no-unescaped-entities
```

### Path Aliases
- `~/*` → `./src/*`
- Always use `~` prefix for internal imports: `import { api } from "~/trpc/react"`
- Never use relative paths like `../trpc/react`

### Feature-Based Organization
- Components are organized by feature, not by type
- Feature folders contain all related files: components, types, data
- Barrel exports (`index.ts`) provide clean imports:
```typescript
import { Hero, Navigation, Footer } from "~/app/_components/home";
```

### TypeScript Configuration
- **Strict mode enabled**
- **noUncheckedIndexedAccess**: Array/object access returns `undefined` for possibly-undefined values
- Prefer `type` imports: `import type { AppRouter }`
- ESLint enforces inline type imports

### Type Co-location
- Types are defined alongside the components that use them
- Example: `src/app/_components/home/types.ts` contains types used by home components
- This keeps related code together and improves discoverability

### Environment Variables
- Defined/validated in `src/env.js` using `@t3-oss/env-nextjs`
- Use `SKIP_ENV_VALIDATION=1` to skip env validation (e.g., Docker builds)
- Client variables must be prefixed with `NEXT_PUBLIC_`
- Runtime env is destructured manually for Next.js edge compatibility

### tRPC Architecture

#### Server-Side (RSC/Server Components)
Import from `~/trpc/server`:
```typescript
import { api } from "~/trpc/server";

// Direct calls in server components
const result = await api.post.hello({ text: "test" });

// Prefetch for client components
void api.post.getLatest.prefetch();

// Wrap client components
<HydrateClient><MyClientComponent /></HydrateClient>
```

#### Client-Side (Client Components)
Import from `~/trpc/react`:
```typescript
"use client";
import { api } from "~/trpc/react";

// Queries with suspense
const [data] = api.post.getLatest.useSuspenseQuery();

// Mutations with invalidation
const utils = api.useUtils();
const createPost = api.post.create.useMutation({
  onSuccess: () => utils.post.invalidate(),
});
```

#### Creating New Routes
1. Create file in `src/server/api/routers/` (e.g., `user.ts`)
2. Import from `~/server/api/trpc`:
```typescript
export const userRouter = createTRPCRouter({
  greet: publicProcedure.input(z.object({ name: z.string() }))
    .query(({ input }) => ({ message: `Hello ${input.name}` })),
});
```
3. Add to `src/server/api/root.ts`:
```typescript
export const appRouter = createTRPCRouter({
  user: userRouter,
});
```

### Component Conventions
- **Server Components** (default): No "use client" directive, can use server-side tRPC
- **Client Components**: Must have `"use client"` at top, before all imports
- **Private Components**: Prefix directory with `_` (e.g., `_components/home/`)
- Use `server-only` imports to enforce boundaries: `import "server-only"`

### Animations with Framer Motion
- Client components using animations need `"use client"` directive
- Typical patterns:
```typescript
"use client";
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Icons with Lucide React
- Import specific icons from `lucide-react`:
```typescript
import { ArrowRight, Bot, User } from "lucide-react";

<ArrowRight className="h-4 w-4" />
```

### Naming Conventions
- **Directories**: kebab-case for features (`home/`, `projects/`)
- **Files**: PascalCase for components (`Hero.tsx`), kebab-case for utilities/data (`data.ts`, `types.ts`)
- **Components**: PascalCase (`export function Hero()`)
- **tRPC procedures**: camelCase (`hello`, `getLatest`, `create`)
- **Variables**: camelCase throughout

### Error Handling
- tRPC errors formatted with Zod validation details
- Development-only error logging at `/api/trpc/[trpc]/route.ts:26-30`
- TypeScript strict on errors (noUncheckedIndexedAccess)

## Important Gotchas

### Import Style
- ESLint enforces inline type imports:
```typescript
// Warning
import { type AppRouter } from "..."
// Preferred
import type { AppRouter } from "..."
```

### Imports in Client Components
- `"use client"` directive must be at **file top**, before all imports
- tRPC imports differ for server vs client components
- Never use server-side tRPC helpers in client components

### Path Alias Consistency
- All imports must use `~/` prefix
- Never use relative paths like `../trpc/react`
- Ensures proper TypeScript resolution

### Env Validation in Docker
- Build with `SKIP_ENV_VALIDATION` to avoid stalled builds:
```bash
SKIP_ENV_VALIDATION=1 bun run build
```

### Mutation Invalidations
- Always invalidate after mutations: `await utils.post.invalidate()`
- Use `api.useUtils()` to get utils reference
- Tags invalidate entire router namespace

### Server Component State
- Server components are re-executed on each request
- Use `cache` from React for expensive operations
- Prefetch data for client components to avoid network waterfalls

### Tailwind CSS v4
- Uses PostCSS plugin: `@tailwindcss/postcss`
- Prettier plugin sorts classes automatically
- No `@apply` directives needed (utility classes preferred)
- Use caching: `prettier --check "**/*.{ts,tsx}" --cache`

## File Creation Checklists

### Adding a New Page Route
- [ ] Create file in `src/app/[route]/page.tsx` (e.g., `src/app/about/page.tsx`)
- [ ] Implement content directly in the page file (no re-export from subdirectory)
- [ ] Server component by default (no "use client" needed)
- [ ] Import from server tRPC helpers for data fetching (if needed)
- [ ] Add to navigation links using `<Link href="/[route]">`
- [ ] Create `components/` subdirectory if multiple components needed
- [ ] Create `index.ts` for clean barrel exports

### Adding a New Feature Component
- [ ] Create component file in appropriate feature directory
- [ ] Server component by default
- [ ] Add `"use client"` at top if using hooks/animations
- [ ] Import from appropriate tRPC helpers (server vs client)
- [ ] Add to `index.ts` barrel export if in components directory
- [ ] Handle loading/error states (or use Suspense boundaries for client components)

### Adding a New tRPC Route
- [ ] Create router file in `src/server/api/routers/`
- [ ] Import `createTRPCRouter` and `publicProcedure` from `~/server/api/trpc`
- [ ] Define procedures with Zod validation
- [ ] Export router
- [ ] Import in `src/server/api/root.ts`
- [ ] Add to `appRouter` object
- [ ] Restart dev server to pick up new type exports

### Adding a New Type Definition
- [ ] Create `types.ts` in the feature directory if it doesn't exist
- [ ] Types should be co-located with the components that use them
- [ ] Import types in components using `import type { Type }`
- [ ] Export all types from `types.ts`

## Code Quality Tools

### ESLint (TypeScript ESLint)
- Config: Flat config with `typescript-eslint`
- Extends: `next/core-web-vitals`, `typescript-eslint` (recommended + type-checked + stylistic)
- Notable rules:
  - `@typescript-eslint/array-type`: Off
  - `@typescript-eslint/consistent-type-imports`: Warn (prefer inline)
  - `@typescript-eslint/no-misused-promises`: Error (but not on void-returning attributes)
  - `@typescript-eslint/no-unused-vars`: Warn (ignore `^_` pattern)
  - `react/no-unescaped-entities`: Error (escape apostrophes)
  - `@next/next/no-html-link-for-pages`: Error (use Link for internal navigation)
- Report unused disable directives: enabled
- Command: `bun lint` (deprecated but functional) or migrate to ESLint CLI

### Prettier
- Plugin: `prettier-plugin-tailwindcss` (sorts Tailwind classes)
- Checks: `**/*.{ts,tsx,js,jsx,mdx}`
- Uses caching for performance
- Command: `bun format:check` / `bun format:write`

### TypeScript
- Target: ES2022
- Module: ESNext with Bundler resolution
- Strict mode fully enabled
- Incremental compilation enabled
- Path alias configured in `tsconfig.json`
- Command: `bun typecheck` or `tsc --noEmit`

## Project Structure Details

### Home Page (`/`)
- Route: `src/app/page.tsx` - Direct implementation, human/AI version toggle
- Components: `src/app/_components/home/`
- Features: Navigation, Hero, Projects, About, Experience, Contact, Footer, AI version
- State management: Client-side (useState) for version toggle
- Animations: Framer Motion for transitions between versions

### Projects Page (`/projects`)
- Route: `src/app/projects/page.tsx`
- Components: `src/app/projects/components/`
- Data: `src/app/projects/data.ts` (static project data)
- Features: Dark theme, project showcase, CTA section

## Project Metadata

- Created with: `create-t3-app` v7.40.0
- Init version metadata in `package.json` under `ct3aMetadata`
- Not yet configured:
  - Database: Prisma or Drizzle (placeholders in .gitignore)
  - Authentication: NextAuth.js (mentioned in README but not configured)
  - Testing: No test setup currently (no test files or config)

## Common Issues & Solutions

### "Cannot find module" with `~/` alias
- Ensure path matches actual file location
- Restart TypeScript server in IDE
- Check `tsconfig.json` baseUrl and paths configuration

### tRPC type errors
- Make sure router is added to `src/server/api/root.ts`
- Restart dev server
- Ensure client and server are using same tRPC version

### Tailwind classes not applying
- Check `src/app/layout.tsx` imports `globals.css`
- Verify PostCSS config has `@tailwindcss/postcss` plugin
- Restart dev server

### Environment variables missing
- Check `src/env.js` for schema
- Ensure vars in `runtimeEnv` section
- Use `SKIP_ENV_VALIDATION` for Docker builds if needed

### Build errors with import re-exports
- Ensure `app/page.tsx` and other route files implement content directly
- Remove any import/re-export patterns from subdirectories
- Example fix: Move content from `app/home/page.tsx` into `app/page.tsx` directly, then delete `app/home/`

### ESLint no-unescaped-entities errors
- Replace all apostrophes in JSX with `&apos;`
- Example: "I've" → "I&apos;ve"

### ESLint no-html-link-for-pages errors
- Replace all `<a href="/path">` with `<Link href="/path">` from `next/link`
- Only use `<a>` for external links or anchors (`href="#section"`)