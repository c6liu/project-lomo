# Spec: Module `convex-admin`

## Objective
Provide domain-bound admin management tools including request moderation dashboard queries, attention thresholds, global settings, and sensitive request redactions.

## Tech Stack
- Convex Serverless Functions (`convex/server`)
- TypeScript / Bun

## Commands
```bash
Build: bun --filter=@repo/convex-backend run build
Test: bun --filter=@repo/convex-backend run test
Typecheck: bun run typecheck
Lint: bun --filter=@repo/convex-backend run lint
```

## Project Structure
```
apps/convex-backend/convex/admin/
├── index.ts              # API endpoints for admin dashboard
├── dashboard.ts          # Moderation overview & metrics
├── settings.ts           # Global attention threshold & email settings
└── redaction.ts          # Help request PII redaction and purge
```

## Code Style
- Tabs for indentation, double quotes, semicolons.

## Testing Strategy
- Bun test suites for admin authorization checks and redaction logic.

## Boundaries
- **Always**: Verify admin authorization before executing admin mutations.
- **Ask first**: Deleting user account data or purging help requests.
- **Never**: Allow non-admin users to access admin functions.

## Success Criteria
- [ ] Admin functions reside under `convex/admin/`.
- [ ] Admin authorization checks block unauthorized access.
