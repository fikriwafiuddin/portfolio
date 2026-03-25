# AI Development Guidelines & Rules

## 0. Theme

- **professional and futuristic**

## 1. Environment & Constraints

- **Terminal Access:** PROHIBITED. Do not run any commands.
- **Dependencies:** If a new library is needed, provide the installation command and ask the user to run it.
- **Framework:** Next.js (App Router), Tailwind CSS, Shadcn UI.

## 2. Architecture & Patterns

- **SOLID Principles:** Mandatory implementation for all logic and components.
- **Component Naming:** Always use PascalCase (e.g., `ButtonPrimary.tsx`).
- **Standard:** Follow modern React and Next.js best practices.

## 3. Component Structure

- **Local Components:** Store in a `_components` folder within the specific route directory (e.g., `app/dashboard/_components/`).
- **Global Components:** Reusable components go in `components/[category]/`.
  - Group by type: `components/chat/`, `components/product/`, etc.
- **Shadcn UI:**
  - Directory `components/ui` is EXCLUSIVELY for Shadcn components.
  - DO NOT add custom or non-Shadcn components to `components/ui`.

## 4. TypeScript & Typing

- **Global Types:** Defined in `types/index.ts` using `interface`.
- **Component Props:** Use `type` declaration within the component file itself.
- **Strictness:** No `any` type. Ensure full type safety.

## 5. State Management & Logic

- Evaluate if a component needs `'use client'` based on hooks usage (useState, useEffect, etc.).
- Prefer Server Components for data fetching where possible.
