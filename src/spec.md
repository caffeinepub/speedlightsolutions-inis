# Specification

## Summary
**Goal:** Update the “Industries We Serve” navigation dropdown and replace the content of all 10 industry pages with the user-provided copy.

**Planned changes:**
- Update the header navigation “Industries We Serve” dropdown (desktop and mobile) to show exactly 10 items, in the exact order and wording provided, each linking to its existing `/industries/...` route.
- Replace the content registry entries for the 10 industry pageIds in `frontend/src/content/pages.ts` so each page title matches its dropdown label exactly and renders the provided sections in the required order (Headline, Subhead, CTA links to `/contact`, Overview, Core Services with Benefit lines, Our Delivery Approach, Typical Deployment Locations, industry-specific “Why Choose …” section title, and Next Steps with CTA links).

**User-visible outcome:** Visitors see an updated “Industries We Serve” dropdown (desktop/mobile) with the exact 10 labels, and each industry page displays the complete provided content with working “Request a consultation” and “Get a project proposal” links to the contact page.
