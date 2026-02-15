# Specification

## Summary
**Goal:** Refine desktop header dropdown hover behavior so menus open on hover, close immediately when the pointer leaves the combined trigger + dropdown area (even with portal-rendered panels), and switch smoothly between items without flicker.

**Planned changes:**
- Update header dropdown hover handling to treat the top-level trigger area and the portal-rendered dropdown panel as a single combined hover region.
- Remove/replace the current timeout-based close logic and implement immediate close when the pointer is outside both trigger and panel.
- Ensure only one dropdown is open at a time and that hovering a different top-level item automatically closes the previous dropdown and opens the new one.
- Preserve existing navigation behavior so clicking dropdown links still routes correctly.

**User-visible outcome:** On desktop, hovering header items opens their dropdowns, moving between header items seamlessly switches dropdowns, and menus close instantly when the pointer leaves both the header item and dropdown—without flicker or needing clicks.
