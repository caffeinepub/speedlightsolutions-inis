# Specification

## Summary
**Goal:** Make the “Our Solutions” header dropdown reflect the currently active solution category while the user scrolls the /solutions page.

**Planned changes:**
- Update the /solutions landing page to include 6 clearly separated, scrollable sections (one per existing solution category), each rendering a list/grid of its associated solution services as links sourced from the existing solutionServices registry.
- Add stable DOM anchors/ids for each category section on /solutions so the active category can be detected during scrolling.
- Implement scroll-sync on /solutions so the SiteHeader “Our Solutions” dropdown highlights the active category and shows that category’s service links while scrolling, without changing existing routes and without affecting other pages.

**User-visible outcome:** On /solutions, as a user scrolls through the six solution category sections, the “Our Solutions” dropdown updates/highlights the matching category and shows its relevant service links; elsewhere on the site the dropdown behaves normally.
