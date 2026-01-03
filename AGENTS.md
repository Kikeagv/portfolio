# AGENTS.md

This document helps agents work effectively in this T3 Stack codebase.

## Project Overview

A modern full-stack web application built with the T3 Stack:
- **Next.js 15** - React framework with App Router
- **tRPC v11** - End-to-end typesafe APIs
- **TypeScript 5.8** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS
- **Bun** - Package manager and runtime
- **React 19** - Latest React version

## Essential Commands

### Development
```bash
bun dev          # Start dev server with Turbo mode
```

### Building & Preview
```bash
bun build        # Build for production
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
├── app/                     # Next.js App Router
│   ├── _components/         # Shared components for app directory
│   ├── api/trpc/[trpc]/     # tRPC HTTP endpoint
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── server/api/              # tRPC backend
│   ├── routers/             # API routes (auto-registered)
│   │   └── post.ts          # Example router
│   ├── root.ts              # Aggregates all routers
│   └── trpc.ts              # tRPC initialization & middleware
├── trpc/                    # tRPC client & server utilities
│   ├── server.ts            # Server-side tRPC helpers (RSC)
│   ├── react.tsx            # Client-side tRPC provider (client components)
│   └── query-client.ts      # TanStack Query client config
├── env.js                   # Environment variable validation
└── styles/
    └── globals.css          # Global styles
```

## Key Patterns & Conventions

### Path Aliases
- `~/*` → `./src/*`
- Use `~` prefix for all internal imports: `import { api } from "~/trpc/react"`

### TypeScript Configuration
- **Strict mode enabled**
- **noUncheckedIndexedAccess**: Array/object access returns `undefined` for possibly-undefined values
- Prefer `type` imports: `import type { AppRouter }`
- ESLint enforces inline type imports

### Environment Variables
- Defined/validated in `src/env.js` using `@t3-oss/env-nextjs`
- Use `skipValidation`: Run commands with `SKIP_ENV_VALIDATION=1` to skip validation (e.g., Docker builds)
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
- **Client Components**: Must have `"use client"` at top, use client-side tRPC
- **Private Components**: Prefix with underscore `_` (e.g., `_components/`) to prevent routing
- Use `server-only` imports to enforce boundaries: `import "server-only"`

### tRPC Middleware
- **Timing middleware** runs in dev mode (adds 100-500ms artificial delay)
- Logs execution time: `[TRPC] path took Xms to execute`
- Helps catch waterfalls in development

### Query Client Configuration
- **Stale time**: 30 seconds (avoids immediate refetch on client after SSR)
- **Hydration**: SuperJSON serialization for Date/Map/Set/etc.
- **Pending queries**: Hydrated (supports React Suspense)

### Naming Conventions
- **Files**: kebab-case for routes (`post.ts`, not Post.ts)
- **Components**: PascalCase (`export function LatestPost()`)
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
- All imports must use `~/` prefix, never relative paths like `../trpc/react`
- Ensures proper TypeScript resolution

### Env Validation in Docker
- Build with `SKIP_ENV_VALIDATION` to avoid stalled builds
- Example: `bun run build --help` (check specific skip flags)

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
- No @apply directives needed (utility classes preferred)

## File Creation Checklists

### Adding a New tRPC Route
- [ ] Create router file in `src/server/api/routers/`
- [ ] Import `createTRPCRouter` and `publicProcedure` from `~/server/api/trpc`
- [ ] Define procedures with Zod validation
- [ ] Export router
- [ ] Import in `src/server/api/root.ts`
- [ ] Add to `appRouter` object
- [ ] Restart dev server to pick up new type exports

### Adding a New Page
- [ ] Create file in `src/app/` (e.g., `src/app/about/page.tsx`)
- [ ] Server component by default (no "use client" needed)
- [ ] Import from server tRPC helpers for data fetching
- [ ] Wrap client components with `HydrateClient` if needed
- [ ] Add to navigation if applicable

### Adding a New Client Component
- [ ] Place in `_components/` or component directory
- [ ] Add `"use client"` at top
- [ ] Import client-side tRPC helpers from `~/trpc/react`
- [ ] Use `useSuspenseQuery` or `useMutation` hooks
- [ ] Handle loading/error states (or use Suspense boundaries)

## Code Quality Tools

### ESLint (TypeScript ESLint)
- Extends: `next/core-web-vitals`, `typescript-eslint` (recommended + type-checked + stylistic)
- Notable rules:
  - `@typescript-eslint/array-type`: Off
  - `@typescript-eslint/consistent-type-imports`: Warn (prefer inline)
  - `@typescript-eslint/no-misused-promises`: Error (but not on void-returning attributes)
  - Report unused disable directives: enabled

### Prettier
- Plugin: `prettier-plugin-tailwindcss` (sorts Tailwind classes)
- Checks: `**/*.{ts,tsx,js,jsx,mdx}`
- Uses caching for performance

### TypeScript
- Target: ES2022
- Module: ESNext with Bundler resolution
- Strict mode fully enabled
- Incremental compilation enabled
- Path alias configured in `tsconfig.json`

## Project Metadata

- Created with: `create-t3-app` v7.40.0
- Init version metadata in `package.json` under `ct3aMetadata`
- Potential future additions (not yet present, but .gitignore suggests):
  - Database: Prisma or Drizzle placeholders in .gitignore
  - Authentication: NextAuth.js mentioned in README but not configured
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