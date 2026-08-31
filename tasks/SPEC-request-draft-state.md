# Spec: request-draft-state

## Objective

Replace the large request-draft context with a state model that scales beyond the current set of category-specific setters and nested patch functions. The model should preserve current behavior while making state transitions easier to inspect, test, and extend.

This module is the direct response to the review finding that `request-draft-context.tsx` is carrying too much setter surface area for a growing request-flow system.

## Tech Stack

- React 19
- TypeScript
- Next.js app router
- Existing `RequestDraft` and `emptyDraft` model

## Commands

- Build: `bun --filter=@repo/lomoweb run build`
- Test: `bun --filter=@repo/lomoweb run test`
- Lint: `bun --filter=@repo/lomoweb run lint`

## Project Structure

- `apps/lomoweb/app/app/request/request-draft-context.tsx` → producer for draft state and access boundary
- `apps/lomoweb/app/app/request/` → route screens that consume the draft context
- `apps/lomoweb/lib/request-flow/types.ts` → request data contract used by the draft state

## Code Style

```ts
function updateFoodDetails(patch: Partial<FoodRequestDetails>) {
  setDraft(prev => ({
    ...prev,
    foodDetails: { ...prev.foodDetails, ...patch },
  }));
}
```

Conventions:

- Prefer a single reducer or a small state slice per category over dozens of independent setters.
- Keep the provider API narrow and descriptive.
- Avoid spreading large nested objects unnecessarily; update only the relevant branch of state.

## Testing Strategy

- Test the provider contract in isolation with a focused test harness.
- Cover resets, category changes, and sub-detail mutations.
- Validate that the reducer or state-slice logic preserves the current flow between category selection and preview serialization.

## Boundaries

- Always: preserve the public `useRequestDraft` contract unless intentionally migrating consumers in the same change set; maintain reset behavior; keep route preview serialization unchanged
- Ask first: remove or rename context accessors used across multiple screens; change store shape in a way that forces UI refactors beyond the request flow
- Never: keep a monolithic setter API simply because it is already used; silently break category transition paths

## Success Criteria

- The draft state can be reasoned about through a reducer or equivalent bounded state model rather than dozens of one-off setters.
- Route screens continue to work without major UI churn beyond the state refactor itself.
- Resetting the draft remains predictable and data-safe for fresh request creation.
- Focused tests cover core consumer actions and reset behavior before the change is considered complete.

## Open Questions

- Should the final state model remain context-based for compatibility while using a reducer internally, or should the refactor also move toward a more explicit route-local state ownership pattern?
- Does the team prefer route-by-route state slices or one shared reducer as the migration target?
