# Technical Implementation Plan: Spec-Driven Modularization

## Overview
Reorganize `@repo/convex-backend` into domain-bound module directories (`users/`, `requests/`, `messaging/`, `notifications/`, `admin/`) and extract Convex query/mutation calls in `@repo/lomoweb` into custom data hooks (`lib/hooks/`).

## Implementation Strategy & Dependency Order

### Phase A: Backend Domain Reorganization (`@repo/convex-backend`)
1. **Module `convex-users`**:
   - Create `convex/users/` containing user management queries, mutations, and helpers.
   - Maintain API entry point compatibility in `convex/users.ts` or `convex/users/index.ts`.
2. **Module `convex-requests`**:
   - Create `convex/requests/` containing help request lifecycle functions, matching, and geocoding.
   - Re-export or maintain API entry points for `helpRequests`.
3. **Module `convex-messaging`**:
   - Create `convex/messaging/` containing request messages, admin notes, and email relay handlers.
4. **Module `convex-notifications`**:
   - Create `convex/notifications/` containing recipient notification functions and CTA helpers.
5. **Module `convex-admin`**:
   - Create `convex/admin/` containing admin dashboard, settings, and redaction logic.

### Phase B: Frontend Custom Data Hooks (`@repo/lomoweb`)
1. **Module `lomoweb-hooks`**:
   - Create custom hooks in `apps/lomoweb/lib/hooks/`:
     - `use-home-dashboard.ts`
     - `use-help-requests.ts`
     - `use-request-messages.ts`
     - `use-notifications.ts`
     - `use-user-profile.ts`
     - `use-admin-dashboard.ts`
   - Refactor UI components in `apps/lomoweb/app/app/` to consume custom hooks instead of raw `useQuery` / `useMutation` calls.

## Verification Checkpoints
1. `bun --filter=@repo/convex-backend test` — Verify backend functions pass unit/integration tests.
2. `bun --filter=@repo/lomoweb test` — Verify frontend unit tests pass.
3. `bun run typecheck` — Verify monorepo-wide TypeScript types.
4. `bun run lint` — Verify linting compliance across packages.
5. `bun run build` — Verify production build across Turborepo workspace.
