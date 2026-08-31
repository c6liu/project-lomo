# Todo: Request flow refactor

## Phase 1: Foundation
- [ ] Task 1: Lock the request-flow model contract and define the refactor acceptance criteria
  - Acceptance: The shared request domain model remains the canonical source of category and draft defaults.
  - Verify: Review the domain contracts in `apps/lomoweb/lib/request-flow` and confirm no route UI owns the source of truth.
  - Files: `apps/lomoweb/lib/request-flow/types.ts`, `apps/lomoweb/lib/request-flow/categories.ts`

- [ ] Task 2: Add focused tests for draft reset, category navigation, and route metadata regression
  - Acceptance: Test coverage exists for draft reset behavior, category metadata mapping, and route selection logic.
  - Verify: `bun --filter=@repo/lomoweb run test`
  - Files: `apps/lomoweb/app/app/request/**`, `apps/lomoweb/lib/request-flow/**`

## Checkpoint: Foundation
- [ ] Shared flow contracts and draft behavior are testable before UI changes
- [ ] Route metadata and state assumptions are reviewed as the refactor foundation

## Phase 2: Core refactor
- [ ] Task 3: Replace the monolithic request draft setters with a reducer or slice-based model
  - Acceptance: `useRequestDraft` exposes a bounded, predictable state model that supports category-specific updates without a sprawling setter list.
  - Verify: Run the request-flow test suite and confirm draft resets and category updates still work.
  - Files: `apps/lomoweb/app/app/request/request-draft-context.tsx`

- [ ] Task 4: Centralize category route selection in one flow registry
  - Acceptance: The category step uses a shared flow registry rather than an inlined chain of conditionals.
  - Verify: Route selection remains consistent for food, items, other, support, paperwork, and ceremony categories.
  - Files: `apps/lomoweb/lib/request-flow/categories.ts`, `apps/lomoweb/app/app/request/category-step.tsx`

- [ ] Task 5: Split the dashboard screen into domain-scoped panels and hooks
  - Acceptance: `requests-home.tsx` no longer owns a large amount of unrelated UI state and list rendering logic.
  - Verify: Existing filter chips, request counts, and dashboard actions continue to work with no visible regression.
  - Files: `apps/lomoweb/app/app/requests-home.tsx`, `apps/lomoweb/app/app/status-filter-chips.tsx`

## Checkpoint: Core refactor
- [ ] Screens still render and route correctly through the request flow
- [ ] Draft state and filters behave consistently across request categories

## Phase 3: Validation
- [ ] Task 6: Run frontend validation
  - Acceptance: The LoMo web package passes its local lint, test, and build gates.
  - Verify: `bun --filter=@repo/lomoweb run lint && bun --filter=@repo/lomoweb run test && bun --filter=@repo/lomoweb run build`
  - Files: all touched frontend files

- [ ] Task 7: Review maintainability and scope boundaries
  - Acceptance: The resulting architecture matches the milestone review guidance: domain logic stays in `lib`, route screens stay thin, and the documentation app decision remains explicit.
  - Verify: Manual code review against the milestone assessment and capability map.
  - Files: `Project_Status.md`, `apps/lomoweb/**`

## Checkpoint: Complete
- [ ] Refactor passes focused validation
- [ ] No new screen complexity or route brittleness remains
- [ ] Ready for feature work beyond the current milestone
