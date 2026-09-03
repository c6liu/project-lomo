# Task List: Spec-Driven Modularization

- [ ] Task: Modularize `convex-users`
  - Acceptance: Reorganize user functions into `convex/users/`, re-exporting clean `api.users` functions.
  - Verify: `bun --filter=@repo/convex-backend run test`
  - Files: `apps/convex-backend/convex/users.ts`, `apps/convex-backend/convex/users/`

- [ ] Task: Modularize `convex-requests`
  - Acceptance: Reorganize help request functions into `convex/requests/`, maintaining `api.helpRequests` API signatures.
  - Verify: `bun --filter=@repo/convex-backend run test`
  - Files: `apps/convex-backend/convex/helpRequests.ts`, `apps/convex-backend/convex/requests/`

- [ ] Task: Modularize `convex-messaging`
  - Acceptance: Reorganize request messages and email relay into `convex/messaging/`.
  - Verify: `bun --filter=@repo/convex-backend run test`
  - Files: `apps/convex-backend/convex/requestMessages.ts`, `apps/convex-backend/convex/resendInboundHttp.ts`, `apps/convex-backend/convex/messaging/`

- [ ] Task: Modularize `convex-notifications`
  - Acceptance: Reorganize notification functions into `convex/notifications/`.
  - Verify: `bun --filter=@repo/convex-backend run test`
  - Files: `apps/convex-backend/convex/notifications.ts`, `apps/convex-backend/convex/notifications/`

- [ ] Task: Modularize `convex-admin`
  - Acceptance: Reorganize admin dashboard, admin settings, and redaction logic into `convex/admin/`.
  - Verify: `bun --filter=@repo/convex-backend run test`
  - Files: `apps/convex-backend/convex/adminDashboard.ts`, `apps/convex-backend/convex/adminSettings.ts`, `apps/convex-backend/convex/redactHelpRequest.ts`, `apps/convex-backend/convex/admin/`

- [ ] Task: Create `lomoweb-hooks` and refactor UI components
  - Acceptance: Create custom hooks in `apps/lomoweb/lib/hooks/` and update UI components in `apps/lomoweb/app/app/` to use them.
  - Verify: `bun --filter=@repo/lomoweb run test` & `bun run typecheck`
  - Files: `apps/lomoweb/lib/hooks/`, `apps/lomoweb/app/app/`
