# Specification

## Summary
**Goal:** Restructure the Home page to display only the user-provided Speedlight Infosolutions Pvt Ltd Home page content, organized into clear sections without rewriting or altering any text.

**Planned changes:**
- Update `frontend/src/components/sections/HeroSection.tsx` to render the provided hero title, subtitle, two intro paragraphs, and the “🔹 Design. Integrate. Optimize. Support.” line verbatim while keeping the existing hero background image behavior.
- Refactor `frontend/src/pages/HomePage.tsx` to implement the remaining Home page sections using the provided content verbatim: Our Core Expertise (6 items), Why Speedlight Infosolutions? (✔ list + closing line), Our Technology Ecosystem (vendor lines), Industries We Serve (10 items), Our Approach (01–05), and the final CTA section with the two provided 🔹 CTAs.
- Remove/avoid any existing Home page copy, headings, solution cards, or CTA labels that are not part of the provided Home page text.

**User-visible outcome:** The Home page shows the exact provided Speedlight Infosolutions Home content (character-for-character) laid out in readable, clearly separated sections, with hero and final CTAs using only the provided CTA texts.
