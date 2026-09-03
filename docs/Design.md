# LoMo Design Documentation

## 1. Interview Summary

This design documentation was created from the current Figma exploration page and the active implementation patterns in the repo.

### Inputs captured
- Figma page: https://www.figma.com/design/PkhODp6MhS0iFGsGTfsrdA/LOMO---Prototype?node-id=351-464&t=cmbcL7HIpgaR06jO-1
- Scope: design system / component library
- Priority: visual design
- Output target: update this design doc in the repo

### Product intent
The primary goal of the design is to express LoMo as a calm, consent-based, community support platform. The visual language should feel warm, non-pressured, human, and practical rather than slick or gamified.

### Design goals
- Make help requests feel approachable and low-stakes
- Communicate trust, safety, and consent in every interaction
- Support a compact mobile-first flow without feeling crowded
- Maintain a tactile, hand-annotated design-system feel while still being technically implementable
- Keep the system reusable for multiple states and request types
- Ensure all user-facing surfaces share the same visual language and interaction rules
- Preserve clarity, hierarchy, and accessibility without overusing decoration

---

## 2. Design Direction

### Core visual mood
The page communicates a deliberately soft and grounded aesthetic:
- warm off-white and pale gray backgrounds
- earthy accent colors: terracotta, mustard, sage, and muted brown
- thick outlines and simple shapes rather than glassmorphism or polished neon styling
- card components that feel like physical note cards or paper forms
- low-contrast, calm contrast patterns rather than high-arousal color drama

### Brand behavior
This design language matches the project mission in the root README: LoMo is a calm, consent-based civic help platform designed to reduce social friction. The designs reinforce that by avoiding urgency cues, pressure-heavy layouts, and transactional visual language.

### Emotional signal
The overall design reads as:
- reassuring
- grounded
- community-centered
- gentle and practical
- high-trust, low-stress

This should be carried into the implementation: avoid making the app feel like a marketplace checkout flow or a social feed. The system should feel like “a safe community tool,” not a performance-centric app.

### Design principles to enforce
1. Buttons should have visible borders and clear focus treatment.
2. Links should read as links via underline or another clear text affordance, not color alone.
3. Primary actions should follow the strongest approved brand action, not a generic color rule — the current repo already favors terracotta for homepage CTA emphasis.
4. Clickable elements may use subtle elevation, but shadows should be selective and restrained so they do not overwhelm the content hierarchy.
5. Every user-facing page should share the same spacing, typography, button, and card language.
6. The product must be mobile-first, touch-friendly, and responsive across breakpoints.
7. Navigation should use a unified design grammar even when the homepage and app shell differ in structure.
8. The admin interface may have a distinct operating context, but it should still remain consistent with the same spacing, hierarchy, and interaction principles.

---

## 3. Design System Observations from the Figma Page

### A. Layout patterns
The board contains multiple repeated screen patterns, suggesting a reusable system built around a few core structures:

1. Mobile-first cards
   - stacked or grouped vertically
   - compact internal spacing
   - clear grouping between sections
   - content hierarchy driven by labels, headers, and callouts

2. Multi-step onboarding / request flow
   - screens move through question prompts, options, and confirmation states
   - each state is a self-contained panel with a clear top area and action area
   - there is a strong rhythm between content and actions

3. Option selection patterns
   - stacked choice tiles / chips
   - simple binary choices and multi-select prompts
   - each option uses a visible, distinct visual state when selected

4. Bottom action bars
   - action rows appear anchored at the bottom of the mobile surfaces
   - actions are compact and consistent, with a clear back/next pattern

### B. Typography and information hierarchy
The visual hierarchy is based more on form structure and spacing than on huge type changes.

- Bold labels and short headings dominate
- Body text is intentionally compact and easy to scan
- Layouts rely on strong grouping instead of dense textual content
- The interface reads like a guided questionnaire rather than a text-heavy feed

### C. Shape language
The design uses:
- rounded corners on data entry and control surfaces
- boxy but softened containers
- strong borders that create structure
- a handcrafted, slightly illustrated feel rather than minimal flat UI

This matches the design system package conventions in the repo, especially the emphasis on rounded tokens and component-driven consistency. The design should not become an overdecorated “AI aesthetic” with excessive gradients, over-rotation, or uniform glossy surfaces.

### D. Interaction and affordance rules
The Figma language implies a careful balance between visual warmth and functional clarity:
- button affordances must be unmistakable
- selected states should read clearly without relying on color alone
- links should visibly read as links in context
- shadows should elevate actions without cluttering low-priority UI
- primary actions should stand out, but the overall experience should remain calm rather than high-pressure

---

## 4. Pattern Library Breakdown

### 1. Request / question card
This is the most important reusable pattern in the Figma page.

Typical structure:
- small top label or screen title
- question prompt
- a set of possible responses or choice blocks
- one primary action and optionally secondary action(s)

Behavioral intent:
- reduce user anxiety
- keep the form obvious and low friction
- turn complex asks into checkboxes / prompts with clear progression

Implementation guidance:
- Use a card or section container with consistent padding
- Use a `Label` + `Text` + `Field` stack
- Use `Button` for primary actions and lightweight secondary actions
- Use `CheckboxCard`, `CheckboxGroup`, or option tiles for response choices

### 2. Choice and preference controls
The design repeatedly uses segmented question choices, including:
- pills
- small toggles
- cards with selected state treatment
- simple option rows

Recommended treatment:
- default state = neutral background with border
- selected state = accent border and deeper fill or emphasis
- focus = clear 2px ring matching the design-system contract
- hover / pressed states should feel subtle and calm, not flashy

### 3. Status and summary cards
The set includes request review and summary states. These likely represent a “confirm before send” or “review details” pattern.

Typical pieces:
- title
- summary text
- short metadata chips or tags
- review actions

These should be built with `Card`, `Text`, `Badge`, and simple field rows rather than rich layout scaffolding.

### 4. Bottom navigation / action row
The bottom area suggests a consistent mobile navigation pattern, likely:
- back
- next / continue
- save / cancel
- secondary actions in a tighter row

This should map well onto the repo’s shared controls and spacing conventions.

### 5. Navigation system patterns
The homepage navigation and in-app navigation should not be treated as the same component in structure, but they should share the same underlying visual grammar.

- homepage nav can be more brand-forward and welcoming
- app nav should be functional and calm, optimized for repeated use
- both should honor the same typography, border treatment, colors, and affordances
- the product shell should remain consistent even when the layout role differs

**App shell navigation (verified, see §11.7):** the in-app nav (`AppSidebar`) uses Material Design 3's adaptive layout as its explicit behavioral reference — three structural tiers, one shared pill-based visual grammar:
- phone (`<768px`): a floating bottom pill bar
- tablet (`768–1023px`): a floating navigation rail
- laptop/PC (`≥1024px`): the same rail styling, attached to the viewport edge instead of floating

All three tiers use the same terracotta-outlined active-item pill, warm solid surface, and restrained elevation — only the phone tier is structurally distinct (bottom-anchored, Material 3's own bottom-bar vs. rail/drawer distinction), not stylistically different.

---

## 5. Color and Visual Language

### Palette direction
The board makes good use of warm, earthy tones that align with the project’s community-first identity.

Likely palette family:
- warm neutrals: cream, stone, soft gray, parchment
- terracotta / rust tones for emphasis and action cues
- mustard / amber as confirmation or highlighted accents
- sage green for calm trust cues and softer selection states
- brown / dark charcoal for text and anchors

This aligns with the repo’s design system conventions, especially the expectation of themed color scales in the `packages/ui` package. The current implementation already leans toward terracotta for strong primary actions on the homepage, which should be treated as an approved product decision rather than a generic rule that every surface must use yellow.

### Contrast and clarity
The design is not a high-contrast “dark mode” aesthetic. Instead, it prioritizes readable separation between surfaces and content with border-weight emphasis, soft fills, and strong heading contrast.

Recommended implementation rules:
- text should be dark enough for readability on warm neutral surfaces
- only use accent color for selected states, key actions, and emphasis
- avoid heavy use of bright saturated colors on large surfaces
- use decorative color sparingly so the interface feels grounded rather than over-styled

---

## 6. Relationship to the Current Codebase

The repo already has a shared component system that is well aligned with this design direction.

### Relevant design system modules
From the current package structure:
- `packages/ui/src/button/`
- `packages/ui/src/card/`
- `packages/ui/src/text-field/`
- `packages/ui/src/field/`
- `packages/ui/src/text/`
- `packages/ui/src/heading/`
- `packages/ui/src/checkbox/`
- `packages/ui/src/modal/`

The package conventions in `packages/ui/AGENTS.md` emphasize:
- accessible primitives from React Aria
- Tailwind-based styling
- warm-tinted neutral palette
- rounded, consistent interaction tiers
- components that behave like a design system rather than one-off mobile screens

### Implementation fit
The Figma page maps well to the existing library:
- `Card` for panels and request summaries
- `Button` for primary/secondary actions
- `TextField` / `Input` / `TextArea` for form entry
- `Checkbox` or `CheckboxCard` for option selection
- `Label` and `Field` for accessible form structure
- `Heading` / `Text` for hierarchy and labels

The page is not a system that needs radically different CSS conventions; it needs a disciplined application of the current tokens and component patterns. Importantly, the design language should be shared across the app rather than reinventing the homepage, onboarding, and functional screens as separate aesthetics.

---

## 7. Design-to-Implementation Guidance

### Recommended naming and structure
When translating the design into code, keep the interactions organized around the actual user flows rather than screen-by-screen visual exploration. Suggested structures:
- onboarding flow
- request composition flow
- offer / help matching flow
- review and confirm flow
- request detail / status flow

### Token decisions to preserve
The patterns in the page suggest these design-system choices should stay stable:
- warm toned basics over cool-blue or highly saturated brand colors
- medium-large rounded corners for cards and input groups
- clear border separation between interactive surfaces
- limited accent use for selected/primary states
- mobile safety and readability over visual density
- selective shadow usage for important interactions, not blanket elevation everywhere

### Accessibility notes
The page should prioritize:
- visible focus state on all interactive elements
- clear labels and instructions for each question
- a single primary action path per step
- enough spacing for touch interactions
- underline or strong textual affordance for links
- no “hidden required action” patterns that rely on color alone
- consistent contrast and readability across every status, callout, and action state

---

## 8. Proposed Documentation Structure for Future Handoff

### Page / flow summary
- Purpose: onboarding and request/offer creation flow
- Audience: community members seeking or offering help
- Core task: answer a short series of guided questions
- Success metric: user completes the request with clarity and low friction

### User flow
1. Start with onboarding or welcome state
2. Answer the initial help / request questions
3. Choose category or context option
4. Add details or preferences
5. Review and confirm the submission
6. Return to the request list or status screen

### Content and interaction rules
- short, friendly prompts
- nonjudgmental and reassuring wording
- selection patterns that reduce decision fatigue
- visible progression and confirmation states

### Quality bar for future implementation
A screen is considered aligned with the design if it:
- feels calm and low-pressure
- maintains a consistent warm neutral palette
- clearly communicates the next step
- keeps inputs simple and actionable
- uses visible button borders and clear link affordances
- includes restrained, meaningful shadow treatment only where elevation helps
- is responsive and touch-friendly across devices
- does not feel like a checkout flow or a noisy social app

---

## 9. Recommended Next Step

The next implementation step should be converting this visual exploration into a consistent set of reusable patterns in the app-level flow and in the shared UI package. The strongest immediate candidates are:
- a reusable card-based question component
- a consistent choice tile pattern for help categories and preferences
- a compact mobile action row
- a review/confirmation layout for help requests

This will keep the product aligned with the design board while ensuring the repo’s component library remains the source of truth.

---

## 10. Final Design Positioning

LoMo’s product language should not feel like a marketplace, a social platform, or a performance-oriented productivity app. It should feel like a calm and trustworthy local support tool — one that makes asking for help feel emotionally safe and easy to act on.

That is the central design principle this Figma page is communicating, and it is the principle that should guide the implementation in the codebase.

---

## 11. Implementation Decisions Log (ADR-style)

This section records specific, verified decisions about color and border usage so future agents don't have to re-derive them from scratch — or worse, "fix" something that was already intentional. Each entry was written after reading the actual token file (`packages/ui/src/theme/theme.css`) and every current call site, not from assumption.

### 11.1 — Two CTA treatments exist on purpose: solid terracotta vs. solid yellow + terracotta border

> **Status: SUPERSEDED by §11.5.** Kept here for history — do not reintroduce the yellow CTA treatment described below.

**Context:** The app has two visually distinct primary-button treatments, and it's tempting to "fix" this into one for consistency.

- **Solid terracotta** (`variant="solid" color="terracotta"`) — used for navigational / marketing primary actions: homepage "Sign Up", app dashboard "New request", 404 "Back home", admin dashboard link.
- **Solid yellow + thick terracotta border** (`variant="solid" color="yellow" border="large" borderColor="terracotta"`) — used *only* for auth-form submission actions: Sign in, Sign up, Forgot password, Reset password, and the admin "Add Note" action. This is consistent across all four auth forms, not a one-off.

**Decision:** Keep both. This is an intentional two-tier system, not an inconsistency:
- Terracotta solid = "go somewhere / start something" (navigation-flavored primary action).
- Yellow + terracotta border = "submit this form" (a data-committing action, visually distinguished from navigation so a user pauses before submitting credentials or personal data).

This also matches Design.md §5's own note that mustard/amber reads as a "confirmation or highlighted accent" color family — the yellow submit button *is* that accent, scoped to confirmation-of-input moments.

**Rule going forward:** Don't introduce yellow solid buttons outside of auth-form submission and don't introduce sage/terracotta-only buttons inside auth forms. If a new form needs a submit CTA and it's a "commit data" moment (not simple navigation), reuse the yellow + terracotta-border pattern rather than inventing a third treatment. Any new usage should update this entry.

### 11.2 — Border color: use `terracotta-9`, not `border-black`

**Verified:** `--terracotta-9` resolves to the same ink tone (`#4a352f`-family) used as the "dark border" color in the reference Figma frame (node 351:466). Pure `black` was an approximation introduced during earlier iteration, not the actual token match.

**Rule:** Card, panel, and chrome borders that need a strong "ink" outline should use `border-terracotta-9` (or the design system's `borderColor="terracotta"` prop), not `border-black`. Reserve literal black only for one-off illustrative accents, if any — not structural UI borders.

### 11.3 — Border width hierarchy

Border width should signal enclosure hierarchy, not be chosen ad hoc per component:
- **2px** — outer enclosing containers: cards, section panels, sidebar/bottom-nav chrome edges. This is the "this is a distinct surface" signal.
- **1px hairline** — internal dividers and separators *within* an already-enclosed surface (e.g. a divider between list rows).
- **0 / none** — interactive elements nested inside an already-bordered container (e.g. nav items inside the sidebar) should not add their own competing border; use background fill and/or the focus ring for state instead.

**Rule:** Before adding a border, ask "is this establishing a new surface boundary, or is it inside one already?" — that answer picks the tier, not visual taste in the moment.

### 11.4 — Status/severity color mapping (verified against actual usage)

- `red` — used for two things today: the "Urgent" request badge (`isRequestUrgent`) and inline form validation error text. Both read as "needs attention now," so this overload is acceptable.
- `darkred` — used for the safety/emergency disclaimer footer in the auth layout (`(public)/layout.tsx`), **and** the admin "Mark Urgent" toggle button (`app/admin/requests/[id]/page.tsx`). Corrected from an earlier version of this entry, which claimed the disclaimer was the only use — it wasn't; the admin toggle was missed in that pass. Both remaining uses are singular, rare, high-consequence actions (never a default/ambient state), so the semantic stays coherent: don't reuse `darkred` for ordinary error states or as a third status color, that would dilute it.
- `amber` — "Pending" request status.
- `sage` — "Complete" request status, "Mark Complete" action, and success/confirmation messaging.
- `terracotta` — brand primary, selected/active state, and "Assigned" / "In progress" status. No longer the CTA color (see §11.6).
- `yellow` — the universal CTA color (see §11.6, supersedes the earlier "retired from CTA use" note), plus small, momentary, non-CTA indicators like the "Resting" status badge (`app/app/requests-home.tsx`).

**Correction to an earlier internal plan:** A prior pass assumed there was a "Blocked" status colliding with "Urgent" on `red`, and proposed moving it to `darkred`. There is no "Blocked" status in `HelpRequestStatus` (`apps/lomoweb/lib/help-request-status.ts` — the six values are `pending`, `assigned`, `awaiting_requester_acceptance`, `in_progress`, `complete`, `cancelled`). That fix does not apply and should not be made. This is recorded here specifically so it isn't reintroduced from a stale plan.

### 11.5 — Yellow CTA retired; solid terracotta is the single "important action" treatment

> **Status: SUPERSEDED by §11.6.** Kept here for history — do not reintroduce solid terracotta as the universal CTA color; see §11.6 for the current decision.

**Context:** The original design intent (per the product owner) was that every important CTA should use yellow to signal importance. In practice, individual contributors implemented this inconsistently over time — some primary actions ended up solid terracotta (homepage "Sign Up", app dashboard "New request", 404 back-link, admin dashboard link) while others used `color="yellow"` with a `border="large" borderColor="terracotta"` override (all four auth-form submits, plus three admin actions: "Edit Request", "Assign Helper", "Add Note"). Revisiting this with the actual token values rather than the color names:

- `--yellow-9` is `#ffce00` — a raw, highly saturated caution-yellow.
- `--terracotta-9` is `#4a352f` — despite the name, a dark, muted ink-brown, not an orange/warm accent.

Pairing `bg-yellow-9` with a 4px `border-terracotta-9` outline reads as hazard-stripe coloring (bright fill + thick dark border), which actively works against this project's "calm, non-pressured, low-arousal" design mandate (§2). The 4px border width was also the only 4px border anywhere in the app, breaking the 2px-max enclosure hierarchy in §11.3 independent of color.

**Decision:** Standardize on solid terracotta (`variant="solid" color="terracotta"`, default `border="small"`, no `borderColor` override) as the single treatment for every important/primary CTA, including the seven buttons that used the yellow treatment. `bg-terracotta-9 text-white` is the only solid-dark-fill block on an otherwise light, warm-neutral page, so it still reads as the unmistakable primary action without needing a heavy contrasting border to "shout." This also directly resolves the original inconsistency complaint: there is now exactly one CTA color, not two competing interpretations.

**What does NOT change:** `yellow` stays in the palette, scoped narrowly to small, momentary, non-CTA indicators (e.g. the existing "Resting" status badge). Selection/filter-chip use of `sage` (e.g. active status filter chips in `requests-home.tsx`) is a distinct "selected state" semantic, not a CTA, and is out of scope for this decision.

**Rule going forward:** Don't reintroduce `color="yellow"` on a `Button`. If a new primary action is needed, use solid terracotta with the default border. If you need a small non-actionable highlight (badge, dot, tag), yellow is available for that narrow purpose.

### 11.6 — Yellow CTA restored as the universal treatment (supersedes §11.5)

**Context:** §11.5 was reasoned from token hex values and general "calm design" theory, without checking what the Figma file actually specifies for the primary CTA. Pulling the real spec for the "Make a request" component (node 351:466, `Frame12`) shows it is unambiguously:

```
bg-[var(--highlight,#f3c600)] border-4 border-[var(--backgound-dark,#4a352f)] border-solid rounded-[90px]
text: black
```

That is exactly the yellow-fill + thick dark-ink-border pill the product owner originally specified ("every important CTA should use yellow") — not an approximation, not a deprecated pattern. §11.5's "hazard stripe" read was a plausible theory but was wrong once checked against the source of truth.

**Decision:** Restore `variant="solid" color="yellow" border="large" borderColor="terracotta"` as the single treatment for every primary/important CTA that this project's own flows control, reverting every button §11.5 had converted to solid terracotta:

- `app/app/home-dashboard-panel.tsx` — "New request" (home hero)
- `app/app/requests-home.tsx` — "New request" (My requests header), "Start a request" (empty state), "Update helper preferences" (resting panel)
- Auth forms — "Login", "Sign up", "Send reset link", "Update password"
- Admin — "Edit Request", "Assign Helper", "Add Note"

**What does NOT change:** The pre-existing homepage/marketing terracotta CTAs (hero "Sign Up", `home-nav.tsx`, `join-section.tsx`), the 404 "Back home" link, and the admin dashboard link were never part of either ADR — they predate this whole CTA-color investigation and are protected by §5's explicit carve-out ("terracotta on the homepage is an approved decision, not a rule every surface must follow"). They stay terracotta. `View all my/open requests` (outline terracotta, § badge/button contrast fix) are secondary actions, not primary CTAs, and are also unaffected.

**Rule going forward:** Yellow (`color="yellow" border="large" borderColor="terracotta"`) is the CTA treatment for every primary action inside the app shell and auth flows. Don't convert it back to solid terracotta based on abstract color-theory arguments — if the treatment is questioned again, check the actual Figma component first (as this entry does) before changing it.

### 11.7 — App shell nav: three Material 3 tiers, one shared pill grammar

**Context:** The app shell nav (`apps/lomoweb/app/app/app-sidebar.tsx`) originally had only two states — a full labelled sidebar at `lg+` and a bottom bar below it — which forced tablet widths into the phone-sized bottom bar. This was corrected to three tiers, explicitly using Material Design 3's adaptive layout as the behavioral reference (bottom bar / rail / drawer), not just a visual restyle.

**Decision:**
- Phone (`<768px`, `md:hidden`): floating bottom pill bar, fixed to the viewport bottom.
- Tablet (`768–1023px`, `md:flex lg:hidden`): floating navigation rail — `rounded-4xl`, `ml-3` offset, visible drop shadow.
- Laptop/PC (`≥1024px`, `lg:flex`): the *same* pill-item styling as the tablet rail (`RailTab`, rounded-full active indicator, rounded-full logo/admin/sign-out affordances), reused verbatim — but attached to the viewport edge (`border-r-2`, no margin, no rounding, no shadow) instead of floating.

Tablet and laptop deliberately share one inner-nav visual language; only the phone tier is allowed to diverge structurally, because bottom-bar vs. rail is a genuine Material 3 pattern distinction, not a stylistic one.

**Rule going forward:** Any new nav affordance (new tab, new admin action, new sign-out-adjacent control) must be added to all three tiers using the same pill treatment. Don't let the laptop and tablet tiers drift into different visual languages again — if one is restyled, restyle the other tier that shares its grammar in the same change.

### 11.8 — Minimum viewport width: 320px floor must be enforced on `fixed` elements explicitly

**Context:** `apps/lomoweb/app/layout.tsx`'s `<body>` carries `min-w-80` (320px) so the app never renders narrower than a standard small-phone width. This was insufficient on its own: the phone bottom nav uses `position: fixed`, which sizes against the true browser viewport, not the body's enforced minimum. Its inner pill also used `w-[min(92vw,32rem)]` — a `vw`-based width, which by definition ignores any ancestor's `min-width` and re-measures against the real (potentially sub-320px) viewport.

**Verified:** at a 250px real viewport, the body correctly held 320px (`scrollWidth: 320`), but the fixed bottom nav still measured only ~235px wide before the fix.

**Decision:** any `position: fixed` element must carry its own explicit `min-w-80` (or equivalent) rather than relying on the body's constraint, and must not size itself from `vw` units. The phone bottom nav's container now has `min-w-80` directly, and its inner pill sizes from `w-full max-w-lg` (relative to that constrained flex container) instead of `min(92vw, 32rem)`.

**Rule going forward:** Before adding any `fixed`- or `absolute`-positioned full-bleed element, check whether it needs to respect the 320px floor. If so, it needs its own `min-w-80` — the body's `min-w-80` alone does not propagate to elements taken out of normal flow.

### 11.9 — Gray `Card`/`Button` surface tint fixed at the token level, not per-instance

**Context:** Every default-gray `Card` (`variant="surface"`, `color="gray"` — the default) and every `Button` (`variant="soft" color="gray"`) rendered a visible light-gray fill (`bg-gray-3`) instead of a clean white surface — visible on empty-state cards, the profile page card, and the open-requests filter pills ("Status", "Categories", "Area", "Urgent").

**Decision:** fixed at the shared token level rather than patching each call site — `cardSurfaceColors.gray` (`packages/ui/src/variants/card-styles.ts`) and `softColors.gray` (`packages/ui/src/variants/color-styles.ts`) both changed their base fill from `bg-gray-3` to `bg-white`. Every current and future `Card`/`Button` consumer that relies on the default/explicit gray color inherits the fix automatically.

**Rule going forward:** Don't reintroduce `bg-gray-3` (or similar) as a default *fill* for gray surfaces — a light-gray fill on this palette reads as "disabled/inert," not "neutral," which conflicts with §2's calm-but-clear mandate. `gray-3`/`gray-4` remain correct for hover/pressed *states* layered on top of the white base (already how `softColors.gray`'s hover/press steps work) — the problem was only the resting-state fill.
