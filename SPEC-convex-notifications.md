# Spec: Module `convex-notifications`

## Objective
Provide domain-bound notification generation, unread message tracking, and call-to-action navigation routing for users.

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
apps/convex-backend/convex/notifications/
├── index.ts              # API endpoints for user notifications
├── queries.ts            # List notifications, count unread
├── mutations.ts          # Mark as read, mark all read
└── helpers.ts            # Notification payload formatting
```

## Code Style
- Tabs for indentation, double quotes, semicolons.

## Testing Strategy
- Bun test suites for notification creation and read state queries.

## Boundaries
- **Always**: Scope notification queries strictly to the recipient user.
- **Ask first**: Adding new notification types or CTA actions to schema.
- **Never**: Mark notifications read for other users.

## Success Criteria
- [ ] Notification functions reside under `convex/notifications/`.
- [ ] Unread notification counters and read status updates function properly.
