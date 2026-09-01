# Navigation Follow-ups

## Share the tablet and laptop rail content

The tablet and laptop navigation wrappers render the same logo, destination list, admin link, and sign-out controls independently.

- Extract the shared inner rail content from `apps/lomoweb/app/app/app-sidebar.tsx` into one local component.
- Keep the outer wrappers distinct: tablet remains floating; laptop remains attached to the viewport edge.
- Preserve the existing phone bottom-navigation implementation.
- Verify that active-state styling and the Open Requests visibility rule remain identical across all three breakpoints.

## Provide an admin exit on tablet and phone

The laptop admin sidebar includes a visible "Back to app" control, but the tablet rail and phone bottom navigation do not.

- Add a consistent, keyboard-accessible path from admin navigation back to `/app` on tablet and phone.
- Reuse the established pill navigation grammar and avoid overcrowding the phone bottom bar.
- Confirm the control appears only on admin routes and that regular app navigation is unchanged.
- Add focused coverage for all three responsive navigation tiers.
