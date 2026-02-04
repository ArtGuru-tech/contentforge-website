---
project_name: 'contentforge-website'
user_name: 'Melek'
date: '2026-02-04'
sections_completed: ['technology_stack', 'typescript_rules', 'nextjs_react_rules', 'testing_rules', 'code_quality_rules', 'workflow_rules', 'critical_rules']
status: 'complete'
rule_count: 42
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- **Next.js** 15.3.8 - App Router, Turbopack dev server
- **React** 18.3.1
- **TypeScript** 5.8.3 - strict mode enabled
- **Bun** - package manager and dev runtime
- **next-intl** 4.4.0 - i18n with `[locale]` dynamic segment
- **Tailwind CSS** 3.4.17 - CSS variables pattern (shadcn/ui)
- **Framer Motion** 12.23.24 - animations
- **Radix UI** - accessible primitives
- **Biome** 1.9.4 - formatting (double quotes, spaces)
- **ESLint** 9.27.0 - linting
- **Paddle.js** v2 - payment integration

## Critical Implementation Rules

### TypeScript Rules

- **Strict mode** - All code must pass strict TypeScript checks
- **Path aliases** - Always use `@/` for imports (e.g., `@/components/ui/button`)
- **JSX runtime** - Uses `same-runtime` custom JSX import source
- **Async params** - Next.js 15 params are Promises: `const { locale } = await params`
- **Type imports** - Use `import type` for type-only imports
- **No unused vars** - Rule disabled in ESLint, but keep code clean

### Next.js/React Rules

- **Client directive** - Add `"use client"` at top of interactive components
- **i18n Link** - ALWAYS use `import { Link } from "@/i18n/routing"` for internal links
- **Translation hooks** - Use `useTranslations('namespace')` in client components
- **Server translations** - Use `getTranslations({ locale, namespace })` in server components
- **Locale param** - Access via `const { locale } = await params` in layouts/pages
- **Component location** - UI primitives in `src/components/ui/`, features in `src/components/`
- **cn() utility** - Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- **Framer Motion** - Use for animations, not CSS transitions for complex effects

### Testing Rules

- **No testing setup** - Currently no test framework configured
- **If adding tests** - Consider Vitest for Next.js 15 compatibility
- **Component testing** - Use React Testing Library patterns
- **i18n mocking** - Mock `next-intl` providers in test setup

### Code Quality & Style Rules

- **Formatter** - Biome with double quotes, space indentation
- **Lint command** - `bun run lint` (runs tsc --noEmit + next lint)
- **Format command** - `bun run format` (runs biome format --write)
- **String quotes** - Always use double quotes `"string"`
- **Component files** - PascalCase naming (`MyComponent.tsx`)
- **img elements** - Allowed (no-img-element disabled), but prefer Next.js Image when optimization needed
- **Unescaped entities** - Allowed in JSX (use `'` directly, no need for `&apos;`)

### Development Workflow Rules

- **Package manager** - Either `bun` or `npm` works (scripts use `bunx` but npm compatible)
- **Dev server** - `bun run dev` or `npm run dev` starts on 0.0.0.0 with Turbopack
- **Before commit** - Run `lint` and `format` scripts
- **Git branching:**
  - `main` - Production (never commit directly)
  - `develop` - Staging (never commit directly)
  - Always checkout from `develop` for new work
  - Branch naming: `feature/description` or `fix/description`
  - Always PR to `develop`, never direct commits
- **API routes** - Supported (static export disabled for webhook support)
- **Environment vars** - Use `NEXT_PUBLIC_` prefix for client-side vars

### Critical Don't-Miss Rules

- **NEVER use `next/link`** - Always import `Link` from `@/i18n/routing`
- **NEVER use `<a href>` for internal links** - Use i18n Link component
- **NEVER commit to main/develop** - Always use feature/fix/chore branches and PRs
- **Branch types** - `feature/`, `fix/`, `chore/` prefixes
- **i18n strings** - All UI text must exist in both `messages/en.json` and `messages/fr.json`
- **Test both locales** - Run dev server and check both `/en` and `/fr` routes
- **Brand colors** - Primary `#003399`, Accent `#FFD700` (or use CSS vars)
- **Client components** - Any component with hooks, onClick, or interactivity needs `"use client"`
- **Paddle integration** - Never import Paddle SDK directly, always use `@/lib/paddle`
- **Environment vars** - Never put secrets in `NEXT_PUBLIC_*` vars (exposed to client)
- **API route security** - Always validate inputs and verify webhook signatures in `/api/` routes
- **Scroll pattern** - `document.getElementById('pricing')?.scrollIntoView()` for anchor navigation

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code
- Follow ALL rules exactly as documented
- When in doubt, prefer the more restrictive option
- Update this file if new patterns emerge

**For Humans:**

- Keep this file lean and focused on agent needs
- Update when technology stack changes
- Review quarterly for outdated rules
- Remove rules that become obvious over time

---

_Last Updated: 2026-02-04_
