# Specification

## Summary
**Goal:** Apply distinct per-industry color themes to industry pages and ensure the site has a robust, non-breaking logo fallback (including a placeholder wordmark asset) when the real logo is missing.

**Planned changes:**
- Add a single centralized mapping of industry `pageId` to theme tokens (primary color, optional accent color, background color) using the provided hex values, with a safe default when no mapping exists.
- Update industry-specific pages so the top hero/banner uses the industry background color, and key UI highlights (e.g., title accent, headings, links/icon accents) use the industry primary color; use the optional accent color only as a secondary highlight where provided.
- Ensure non-industry pages keep the existing global styling and are not affected by the industry theme logic.
- Implement a resilient header/footer logo fallback so failed logo image loads display a readable brand fallback (using `BRAND.name` or a placeholder) without layout breakage on desktop or mobile.
- Add/regenerate a clean corporate placeholder wordmark logo asset at the configured logo path under `frontend/public`.

**User-visible outcome:** Each industry page has its own distinct, clean corporate color theme (hero background + primary highlights), while the header/footer always show a consistent brand mark even when the logo file is missing or fails to load.
