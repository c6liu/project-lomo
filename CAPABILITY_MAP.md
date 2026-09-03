# Capability Map: Spec-Driven Modularization of Convex Backend and Lomoweb Data Hooks

## Module Table

| Module id | Responsibility | Depends on |
|---|---|---|
| convex-users | User accounts, auth sync, volunteer availability, helper preferences | — |
| convex-requests | Task/help request management, status transitions, geocoding, filters | convex-users |
| convex-messaging | In-app request message threads, author attribution, masked email relay | convex-users, convex-requests |
| convex-notifications | Recipient notifications, unread tracking, CTA actions | convex-users, convex-requests |
| convex-admin | Admin moderation dashboard, global settings, request redactions | convex-users, convex-requests |
| lomoweb-hooks | Custom React hooks encapsulating Convex queries and mutations for Lomoweb UI | convex-users, convex-requests, convex-messaging, convex-notifications, convex-admin |

## Build Order

`convex-users` → `convex-requests` → `convex-messaging`, `convex-notifications` → `convex-admin` → `lomoweb-hooks`

## Module Boundaries

- **Stable Module IDs**: `convex-users`, `convex-requests`, `convex-messaging`, `convex-notifications`, `convex-admin`, `lomoweb-hooks`.
- **Dependency Direction**: Unidirectional (acyclic). Higher-level modules consume lower-level domain modules.
- **Data Hook Layer (`lomoweb-hooks`)**: Provides clean separation between Convex reactivity hooks (`useQuery`, `useMutation`) and Lomoweb UI presentation components.
