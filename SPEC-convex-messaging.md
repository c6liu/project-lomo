# Spec: Module `convex-messaging`

## Objective
Provide domain-bound in-app request message threading, author attribution, message formatting, and inbound/outbound email relay masking.

## Tech Stack
- Convex Serverless Functions (`convex/server`)
- TypeScript / Bun
- Resend API / Webhook integration

## Commands
```bash
Build: bun --filter=@repo/convex-backend run build
Test: bun --filter=@repo/convex-backend run test
Typecheck: bun run typecheck
Lint: bun --filter=@repo/convex-backend run lint
```

## Project Structure
```
apps/convex-backend/convex/messaging/
├── index.ts              # API endpoints for request messages
├── queries.ts            # Message list and thread queries
├── mutations.ts          # Post message, admin note
└── emailRelay.ts         # Inbound Resend HTTP webhooks & reply stripping
```

## Code Style
- Tabs for indentation, double quotes for strings, semicolons.
- Pure functions for parsing and stripping email replies.

## Testing Strategy
- Bun test suite in `apps/convex-backend/convex/messaging/*.test.ts`.
- Mock Resend webhook signatures and test inbound email parsing idempotency.

## Boundaries
- **Always**: Verify that message authors belong to the request (requester, helper, or admin).
- **Ask first**: Changing email relay domain configuration or webhook secret keys.
- **Never**: Expose unmasked email addresses across participants.

## Success Criteria
- [ ] Messaging functions reside under `convex/messaging/`.
- [ ] Inbound webhook test suites pass (`resendInboundHttp.test.ts`).
