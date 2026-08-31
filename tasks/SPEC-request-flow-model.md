# Spec: request-flow-model

## Objective

Stabilize the request-flow domain model so the app has one shared source of truth for categories, default draft shape, urgency values, and request-specific payload metadata. This module is the foundation for the subsequent refactor of draft state, route mapping, and dashboard composition.

Success looks like: category metadata remains centralized, draft defaults are single-sourced, and the app can evolve new request types without scattering shape logic across UI screens.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Vitest + Testing Library
- Existing shared flow contracts in `apps/lomoweb/lib/request-flow/*`

## Commands

- Build: `bun --filter=@repo/lomoweb run build`
- Test: `bun --filter=@repo/lomoweb run test`
- Lint: `bun --filter=@repo/lomoweb run lint`
- Dev: `bun --filter=@repo/lomoweb run dev`

## Project Structure

- `apps/lomoweb/lib/request-flow/types.ts` → shared request domain types and empty-state factories
- `apps/lomoweb/lib/request-flow/categories.ts` → request category metadata and implemented-state gating
- `apps/lomoweb/app/app/request/` → flow screens and state consumers
- `apps/lomoweb/app/app/requests-home.tsx` → dashboard consumers of the shared model

## Code Style

```ts
export function emptyDraft(): RequestDraft {
  return {
    category: null,
    foodKind: null,
    foodDetails: emptyFoodDetails(),
    itemsDetails: emptyItemsDetails(),
    otherDetails: emptyOtherDetails(),
    publicWalkDetails: emptyPublicWalkDetails(),
    micrograntDetails: emptyMicrograntDetails(),
    ceremonyDetails: emptyCeremonyDetails(),
    urgency: null,
  };
}
```

Conventions:

- Keep request-shape defaults in `lib/request-flow` rather than route components.
- Prefer explicit typed unions for category and urgency identifiers.
- Use small factory helpers (`emptyFoodDetails`, `emptyDraft`) rather than inline object literals repeated across screens.

## Testing Strategy

- Primary framework: Vitest
- Coverage target: all request-domain helpers and category metadata encoding
- Test files: colocated or adjacent under the same `lib/request-flow` area when practical
- Test concerns:
  - empty draft shape is valid for all categories
  - category metadata includes all implemented flows and no hidden route-only values
  - field defaults stay stable across lifecycle resets

## Boundaries

- Always: keep shared types and defaults in the library layer; preserve existing request category ids; validate changes against the live route flow
- Ask first: add new category ids, broaden the draft type, or alter category gating semantics
- Never: duplicate request-shape defaults across each screen; commit secrets; edit generated backend files for this refactor

## Success Criteria

- The shared request domain model is the only canonical place for category and draft defaults.
- New request category or detail additions can be introduced without editing multiple unrelated screens.
- The shape remains stable enough for the draft reducer and route registry to consume without ad hoc UI logic.
- Existing tests pass and the refactor does not change the visible user flow.

## Open Questions

- Should the final refactor keep the current category ids exactly as-is, or do we want to rename a flow for clarity before widening the product scope?
- Is the documentation app a product dependency that needs governance, or should that be handled separately from this cleanup?
