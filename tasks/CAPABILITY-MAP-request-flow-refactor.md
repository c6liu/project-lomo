# Capability Map: Request flow refactor

This map captures the pre-refactor research in Project_Status.md and turns it into a structured cleanup pass before implementation.

| Module id | Responsibility | Depends on |
|---|---|---|
| request-flow-model | Keep the shared request category and draft contracts centralized and consistent | — |
| request-draft-state | Replace the large monolithic request-draft context with a more durable state model | request-flow-model |
| request-category-routing | Centralize category-to-route decisions in a single flow registry instead of route logic embedded in UI | request-flow-model |
| dashboard-shell | Split the overloaded requests dashboard into smaller, domain-scoped panels and state hooks | request-flow-model |

Build order: request-flow-model → request-draft-state, request-category-routing → dashboard-shell

## Why this map

The current pressure points are clear in the milestone review:

- `apps/lomoweb/app/app/requests-home.tsx` owns too much dashboard behavior in one screen.
- `apps/lomoweb/app/app/request/request-draft-context.tsx` exposes a large setter surface for category-specific nested objects.
- `apps/lomoweb/app/app/request/category-step.tsx` hard-codes route decisions inside UI conditional logic.

The capabilites above keep the refactor scoped to the core architectural issues without broadening into unrelated backend work.
