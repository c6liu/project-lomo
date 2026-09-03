# Spec: Module `convex-requests`

## Objective
Provide domain-bound task/help request lifecycle operations, including request creation, status transitions (pending, assigned, in_progress, complete, cancelled), volunteer matching, geocoding, and filtering.

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
apps/convex-backend/convex/requests/
├── index.ts              # API endpoints for help requests
├── queries.ts            # Home dashboard, request lists, request details
├── mutations.ts          # Create, accept, assign, complete, cancel requests
└── helpers.ts            # Geocoding, location filters, urgency calculation
```

## Code Style
- Use tabs for indentation, double quotes for strings, and semicolons.
- Encapsulate status transition validations and permission checks in clear helper functions.

## Testing Strategy
- Unit and property tests using Bun test (`bun test`).
- Test request status state machine invariants and urgency calculations.

## Boundaries
- **Always**: Validate requester/helper ownership before status modifications.
- **Ask first**: Changing request status enum values in `schema.ts`.
- **Never**: Allow unauthorized users to update request statuses or helper assignments.

## Success Criteria
- [ ] Task/help request functions are located under `convex/requests/`.
- [ ] API routes (`api.helpRequests.*` or `api.requests.*`) pass all unit tests.
- [ ] All request status transitions execute correctly and cleanly.
