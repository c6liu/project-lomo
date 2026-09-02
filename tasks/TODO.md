# Navigation Follow-ups

## Share the tablet and laptop rail content (Completed)

The tablet and laptop navigation wrappers now render shared inner rail content (`RailContent`) extracted from `apps/lomoweb/app/app/app-sidebar.tsx`.

- Extracted `RailContent` containing logo, admin exit link, navigation tabs, admin link, and sign-out button.
- Kept laptop and tablet outer styling wrappers distinct.
- Preserved existing phone bottom-navigation implementation.
- Verified active-state styling and Open Requests visibility rules across all three breakpoints.

## Provide an admin exit on tablet and phone (Completed)

The laptop sidebar, tablet rail, and phone bottom navigation all render a visible, accessible "Back to app" control on admin routes.

- Added "Back to app" link to tablet rail and mobile bottom bar on admin routes.
- Reused established pill navigation grammar.
- Added focused unit tests in `apps/lomoweb/app/app/__tests__/sidebar-responsive-navigation.test.tsx` for all three responsive navigation tiers.
