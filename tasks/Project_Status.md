# LoMo Project Status — Frontend Milestone Review

## 1. Review objective and scope

This review focuses on the web app layer in apps/lomoweb and the supporting design/documentation app in apps/documentation. The goal is to assess whether the repo is in a maintainable state for a milestone handoff and a deliberate pre-feature cleanup pass.

The review is intentionally limited to architecture, route structure, auth boundaries, request-flow design, UI composition, and operational clarity. It is not a product-market-fit review and does not attempt to validate every backend behavior in detail.

## 2. Methodology

The project was reviewed in three passes:

1. Structural review of the app shell and route map.
2. Review of the main user journeys and state ownership.
3. Review of maintainability risks, duplication, and scaling pressure.

Evidence reviewed includes:

- apps/lomoweb/app
- apps/lomoweb/lib
- apps/lomoweb/package.json
- apps/documentation/package.json and app files
- project-level guidance in AGENTS.md and README.md

## 3. Executive summary

The app is in a solid milestone state: the route structure is coherent, the app shell is organized around product intent, and the request-flow domain model is notably stronger than the average early-stage project. The strongest architectural signal is the centralization of logic in lib and the clear distinction between public-facing and authenticated experiences.

The main concerns are not failures of orientation; they are scaling risks that appear as the product grows:

- a few large client screens own too much behavior
- the request draft state is expanding into a large, monolithic context API
- category navigation logic is embedded in UI flow decisions rather than a single flow registry
- the documentation app looks like a prototype or design sandbox rather than a clearly governed runtime dependency

Overall assessment: healthy enough for a milestone review, but not yet clean enough to assume the current structure scales comfortably without a focused refactor pass.

## 4. Architecture snapshot

### Route map

The app uses clear route groups:

- app/(home): public marketing and landing experience
- app/(public): auth-related flows such as sign in and sign up
- app/app: protected workspace and request management experience
- app/api: route handlers, including address lookup

This split is a strong design decision. It keeps public and authenticated logic separated, which reduces the chance of cross-surface coupling.

### Library split

The lib folder is doing useful work:

- auth client/server boundary
- request-flow types and category metadata
- help request status and filtering logic
- home-mode context and preference logic

This is the kind of domain organization that keeps a product easier to evolve. It is a strength rather than a style preference.

### State model

The app combines server components, client interaction, Convex data access, and a request-draft context. That is a standard modern Next.js pattern and is appropriate for the current product scope.

## 5. Main file evidence

The project’s most important signals are in a small set of files:

- apps/lomoweb/app/app/requests-home.tsx: the busiest and most overloaded client screen in the app
- apps/lomoweb/app/app/request/request-draft-context.tsx: the largest and most fragile piece of request-flow state
- apps/lomoweb/app/app/request/category-step.tsx: a route decision tree encoded in UI code
- apps/lomoweb/lib/request-flow/categories.ts: central category metadata and implemented-vs-planned flow gating
- apps/lomoweb/lib/request-flow/types.ts: the strongest domain contract in the app
- apps/lomoweb/app/app/layout.tsx: authenticated route boundary
- apps/lomoweb/package.json: confirms a Next.js app with Convex, Better Auth, and Leaflet dependencies
- apps/documentation/package.json: confirms a separate Vite design/documentation app that is not clearly product-critical

## 6. Findings and risk assessment

### Strengths

1. Clear route separation

The app separates public, private, and app-shell concerns in a way that is easy to understand. That is a strong foundation for onboarding and future feature work.

2. Stronger domain model than UI shell

The request-flow types are well-defined and centralized. Default values, category metadata, and request detail contracts are contained in shared code rather than being scattered across view files. That is one of the best design decisions in the repo.

3. Shared logic is mostly central

Status filtering, request categories, and auth boundaries are defined in lib rather than repeated throughout the app. This is exactly the pattern that reduces product drift over time.

4. Tests and app-critical logic are already present

The repo is not empty of validation. There are tests in the app and domain logic footprint, which gives the project a useful foundation for future cleanup and refactor.

### Risks

1. requests-home.tsx is doing too much

This file is handling dashboard data, list rendering, filter state, expansion state, and card behaviors in one place. It remains readable, but it is already approaching a single-screen complexity ceiling. It would benefit from decomposition into smaller panels, section components, and more explicit state ownership.

2. Request draft context is not future-proof

The draft context has a large set of setters for each request subtype and nested object. That is workable today, but it is a clear sign that the state model will become brittle as more request categories and fields are added. A reducer or category-specific state slices would be a more durable approach.

3. Category navigation logic is too embedded in UI code

The category step uses a long conditional flow to decide which route to push. This works for the current set, but it creates a fragile navigation contract: adding a new request type requires touching route logic in the UI. That logic should be centralized as a flow registry or step map.

4. Documentation app ownership is unclear

The documentation app is a separate Vite/TanStack Router project that depends on the design system package. It reads more like a prototype or internal showcase than a clearly governed product dependency. Without an owner or maintenance plan, it will drift into a support burden without direct product value.

5. UI-derived state is starting to drift into anti-pattern territory

There are signs of local state being initialized from loaded dashboard content with guards and update behavior that is harder to reason about over time. This is not a blocker, but it is exactly the kind of subtle drift that appears once a screen becomes large and stateful.

## 7. Recommendation for the refactor pass

Priority 1: split the largest app shell and request-flow files.

- Break requests-home.tsx into smaller domain panels and sections.
- Replace the large draft context with reducer-based or category-scoped state.
- Centralize flow routing metadata instead of embedding route decisions in the category step UI.

Priority 2: keep the domain model in lib and leave route components thinner.

The project is already mostly following this pattern. The cleanup pass should tighten it rather than loosen it.

Priority 3: decide the role of the documentation app explicitly.

Either give it a real product/design-system mandate or retire the custom documentation app in favor of a lighter-weight, purpose-built tooling path.

Priority 4: leave the backend mostly alone unless a concrete issue emerges.

The Convex backend appears conventionally organized and not the primary refactor target at this milestone.

## 8. Final assessment

Status: strong foundation, but not yet clean enough for long-term scaling without a deliberate refactor pass.

Current state: good route separation, coherent product intent, useful central domain logic, and a promising but still maturing UI architecture.

Main action needed: reduce screen-level complexity, tighten the request-flow state model, and make an explicit choice about documentation ownership before continuing to heavy feature work.

This is a healthy point in the project lifecycle. The app is not chaotic; it is simply at the point where structural discipline matters more than feature velocity.
