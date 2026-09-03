# Spec: Module `convex-users`

## Objective
Provide domain-bound user management functions for Convex backend, including user profile syncing with Better Auth, volunteer availability toggling, helper preferences, and user status queries.

## Tech Stack
- Convex Serverless Functions (`convex/server`)
- TypeScript / Bun
- Better Auth (`@convex-dev/better-auth`)

## Commands
```bash
Build: bun --filter=@repo/convex-backend run build
Test: bun --filter=@repo/convex-backend run test
Typecheck: bun run typecheck
Lint: bun --filter=@repo/convex-backend run lint
```

## Project Structure
```
apps/convex-backend/convex/users/
├── index.ts              # Domain exports and API endpoints
├── queries.ts            # User profile and availability queries
├── mutations.ts          # User onboarding and profile mutations
└── helpers.ts            # Current user resolution & user data helpers
```

## Code Style
- Use tabs for indentation, double quotes for strings, explicit return types where applicable, and trailing semicolons.
- Always use Convex value validators (`v.string()`, `v.id("users")`, etc.).

## Testing Strategy
- Framework: Bun test (`bun test`)
- Unit tests in `apps/convex-backend/convex/users/*.test.ts` verifying user resolution, onboarding completeness, and status calculations.

## Boundaries
- **Always**: Enforce authenticated user checks using current user helpers.
- **Ask first**: Altering `schema.ts` `users` table field definitions.
- **Never**: Expose sensitive user authentication secret tokens or raw auth tables directly.

## Success Criteria
- [ ] User queries and mutations reside cleanly under `convex/users/`.
- [ ] API endpoints (`api.users.*`) remain functionally equivalent.
- [ ] Backend tests pass via `bun --filter=@repo/convex-backend run test`.
