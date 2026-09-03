# Spec: Module `lomoweb-hooks`

## Objective
Extract Convex queries (`useQuery`) and mutations (`useMutation`) out of Lomoweb UI presentation components into custom, reusable React hooks. This isolates data-fetching and mutation logic from presentation components while keeping real-time reactivity intact.

## Tech Stack
- Next.js 16 / React 19 Client Components
- Convex React Client (`convex/react`)
- TypeScript / Bun

## Commands
```bash
Build: bun --filter=@repo/lomoweb run build
Test: bun --filter=@repo/lomoweb run test
Typecheck: bun run typecheck
Lint: bun --filter=@repo/lomoweb run lint
```

## Project Structure
```
apps/lomoweb/lib/hooks/
├── use-home-dashboard.ts
├── use-help-requests.ts
├── use-request-messages.ts
├── use-notifications.ts
├── use-user-profile.ts
└── use-admin-dashboard.ts
```

## Code Style
- Follow React Hook naming conventions (`use*`).
- Tabs for indentation, double quotes, semicolons.
- Encapsulate `useQuery` / `useMutation` calls within typed hook return objects or functions.

## Testing Strategy
- Vitest tests in `apps/lomoweb` (`bun --filter=@repo/lomoweb run test`).

## Boundaries
- **Always**: Maintain Convex real-time subscription reactivity.
- **Ask first**: Major changes to UI component hierarchy or layout structure.
- **Never**: Mix raw `useQuery` calls directly inside presentation components when a custom domain hook exists.

## Success Criteria
- [ ] UI components consume custom hooks rather than calling raw `useQuery(api...)` directly.
- [ ] Lomoweb builds and tests pass cleanly (`bun --filter=@repo/lomoweb run build`, `bun --filter=@repo/lomoweb run test`).
