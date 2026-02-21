# CURSOR.md

## How to build new screens, flows, and states

Always follow this order when building anything new:

1. **Start with the wireframe/UX reference** — I will provide this as an image or description. Treat it as the requirements document. Understand the flow, states, and interactions before touching any code.

2. **Reference existing built screens** — Look at the screens already built in this project (TicketFlowGuest, MemberPortalEntry, Current-member portal) to understand layout patterns, component composition, and interaction conventions. New screens should feel like a natural extension of these.

3. **Check the style guide** — Before creating any new component or style, check the design system style guide (mp-style route in this project). Reuse existing tokens, components, and patterns wherever possible. Only create new ones when something genuinely doesn't exist yet.

4. **Build the screen/state/flow** — Compose using existing components first, extend them if needed, create new ones only as a last resort. When you do create a new component, document it in the style guide (see step 5).

5. **Update the style guide** — Any new components, tokens, or patterns introduced must be documented in the style guide before the task is considered complete.

Always confirm your understanding of the wireframe requirements and outline which existing components you plan to reuse before building anything. Wait for approval.
