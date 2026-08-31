# Spec: request-category-routing

## Objective

Centralize request category navigation logic so route selection is driven from metadata instead of a UI-side conditional block. This removes the brittle pattern where `CategoryStep` separately knows about each category and the exact destination page for each one.

## Tech Stack

- Next.js app router
- React 19
- TypeScript
- Existing metadata in `apps/lomoweb/lib/request-flow/categories.ts`

## Commands

- Build: `bun --filter=@repo/lomoweb run build`
- Test: `bun --filter=@repo/lomoweb run test`
- Lint: `bun --filter=@repo/lomoweb run lint`

## Project Structure

- `apps/lomoweb/lib/request-flow/categories.ts` → source of flow metadata and implementations
- `apps/lomoweb/app/app/request/category-step.tsx` → thin UI that reads registry metadata
- `apps/lomoweb/app/app/request/` → route pages selected by the registry

## Code Style

```ts
export const REQUEST_CATEGORY_FLOW: Record<RequestCategoryId, RequestFlowRoute> = {
  food: { nextRoute: "/app/request/food/kind", implemented: true },
  items: { nextRoute: "/app/request/items/details", implemented: true },
  other: { nextRoute: "/app/request/other/details", implemented: true },
};
```

Conventions:

- Route metadata belongs in shared configuration, not in view conditionals.
- Keep the registry declarative and easy to scan.
- If a category is not implemented, mark it as disabled in the metadata and stop route generation there.

## Testing Strategy

- Unit tests for route metadata: each implemented category resolves to a valid destination
- UI test for the category page: clicking an implemented category triggers the configured route
- Regression test for disabled items: unimplemented categories are not navigable

## Boundaries

- Always: preserve user-facing category labels and flow order; hide unimplemented flows behind metadata
- Ask first: rename existing request categories or change landing route semantics
- Never: add a new category-specific branch in the UI without also adding it to the registry

## Success Criteria

- The category decision tree is centralized in one registry or flow map.
- `CategoryStep` reduces to a thin selection screen driven by metadata.
- Adding a new implemented request type is a single metadata update instead of a UI conditional change.
- Existing category navigation flows keep working without regressions.

## Open Questions

- Should the registry live entirely in `lib/request-flow/categories.ts`, or should it live next to the route shell for clearer ownership?
- Is there a planned product expansion for additional request categories that would benefit from a more formal flow description schema?
