# Specification

## Summary
**Goal:** Refine desktop header dropdown hover behavior so menus open on hover, stay open without flicker while hovering the trigger or dropdown panel, and auto-switch cleanly between top-level items.

**Planned changes:**
- Update desktop header navigation hover handling so dropdowns remain open while the pointer is over either the top-level trigger item or anywhere within its dropdown panel (including portal-rendered content), and close only when the pointer is outside both areas.
- Ensure only one dropdown is open at a time by immediately switching the open dropdown when hovering a different top-level header item (no delayed close behavior or unstable transitions).
- Keep mobile navigation behavior unchanged aside from any necessary regression fixes.

**User-visible outcome:** On desktop, users can hover header items to open dropdowns that don’t flicker, remain open while interacting within the dropdown panel, and switch instantly to another dropdown when moving across the header.
