# Implementation Plan: Request flow refactor

## Overview

This plan is a direct response to the milestone review in Project_Status.md. It focuses on the architectural cleanup needed to reduce the complexity of the request dashboard, harden the draft-state model, and centralize category-based navigation before new feature work expands the request flow further.

## Architecture Decisions

- Keep the refactor centered on the request-flow and app-shell boundaries already established by the project, rather than broadening into backend or auth redesign.
- Move the category routing logic into shared metadata so UI code stays thin and easier to reason about.
- Replace the large monolithic `RequestDraftContext` with a reducer or a small slice-driven state model without changing the external request-flow semantics.
- Decompose the overloaded dashboard screen into smaller section components while keeping status filters and request lists functionally equivalent.

## Task List

### Phase 1: Foundation
- [ ] Task 1: Lock the request-flow model contract and define the refactor acceptance criteria
- [ ] Task 2: Add focused tests for draft reset, category navigation, and route metadata regression

### Checkpoint: Foundation
- [ ] Shared flow contracts and draft behavior are testable before UI changes
- [ ] Route metadata and state assumptions are reviewed as a reliable foundation

### Phase 2: Core refactor
- [ ] Task 3: Replace the monolithic request draft setters with a reducer or slice-based model
- [ ] Task 4: Centralize category route selection in one flow registry
- [ ] Task 5: Split the dashboard screen into domain-scoped panels and hooks

### Checkpoint: Core refactor
- [ ] Screens still render and route correctly through the request flow
- [ ] Draft state and filters behave consistently across request categories

### Phase 3: Validation
- [ ] Task 6: Run the package-level test, lint, and build commands for the frontend app
- [ ] Task 7: Review the refactor for maintainability, duplication, and design-system consistency

### Checkpoint: Complete
- [ ] Refactor passes focused validation
- [ ] No new screen complexity or route brittleness remains
- [ ] Ready for feature work beyond the current milestone

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Draft state API changes break route screens | High | Keep the public provider API intact until all consumer pages are migrated and tested |
| Category metadata diverges from route pages | High | Use a single registry as the source of truth and unit-test the mapping |
| Dashboard decomposition introduces subtle UI regressions | Medium | Split into small panels with the same status logic and validate against existing filters |
| Refactor scope drifts into backend work | Medium | Keep all changes inside the web app request-flow and dashboard boundaries |

## Open Questions

- Should the final refactor also cover the app's documentation ownership question, or keep that as a separate decision outside this cleanup pass?
- Does the team want to preserve the current context API shape until a later migration, or is a breaking provider refactor acceptable in this pass?
