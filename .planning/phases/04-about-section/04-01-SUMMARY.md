---
phase: 04-about-section
plan: 01
subsystem: pages
tags: [about, testimonials, guarantees, trust-building]

dependency_graph:
  requires:
    - 02-02 (SchemaMarkup, Breadcrumbs components)
  provides:
    - About page with guarantees and testimonials
    - Why Choose Us page with service offerings
    - GuaranteesSection and TestimonialsGrid components
  affects:
    - 04-02 (Process page may link from About)
    - 04-03 (FAQs page may reference guarantees)

tech_stack:
  added: []
  patterns:
    - Server Components for static pages
    - JSON data import for testimonials
    - Responsive grid layouts with Tailwind

key_files:
  created:
    - app/about/page.tsx
    - app/why-choose-us/page.tsx
    - components/about/GuaranteesSection.tsx
    - components/about/TestimonialsGrid.tsx
  modified: []

decisions:
  - id: "04-01-01"
    choice: "Center-aligned guarantee cards with icon above text"
    reason: "Better visual hierarchy for marketing content"

metrics:
  duration: "4 min"
  completed: "2026-01-29"
---

# Phase 04 Plan 01: About & Why Choose Us Pages Summary

**One-liner:** About page with 3 guarantee cards and 4 testimonials, Why Choose Us page with professional/services/customer sections.

## What Was Built

### About Page (`/about`)
- Hero section with navy background and company introduction
- Company story section with 3 paragraphs about local ownership and commitment
- GuaranteesSection component displaying 3 guarantee cards:
  1. Love It or Money Back (ShieldCheckIcon)
  2. Eco-Friendly Cleaning (SparklesIcon)
  3. Flexible Rescheduling (CalendarIcon)
- TestimonialsGrid displaying all 4 reviews from reviews.json with star ratings
- Breadcrumb schema (Home > About)

### Why Choose Us Page (`/why-choose-us`)
- Hero section with tagline about quality service
- Three content sections with alternating backgrounds:
  1. Professional & Reliable (staff, background checks, quality)
  2. Comprehensive Services (residential, commercial, deep, move-in/out)
  3. Customer-First Approach (guarantees, scheduling, pricing)
- Each section includes heading, description, and bullet list
- Breadcrumb schema (Home > Why Choose Us)

### Reusable Components
- `GuaranteesSection.tsx`: Responsive 1/3 col grid with centered icons
- `TestimonialsGrid.tsx`: Responsive 1/2/3/4 col grid with star ratings and quotes

## Commits

| Hash | Type | Description |
|------|------|-------------|
| 8292190 | feat | Create GuaranteesSection and TestimonialsGrid components |
| 7c8bed0 | feat | Create About and Why Choose Us pages |

## Verification Results

- [x] `npm run build` succeeds - both pages generated as static content
- [x] `npx tsc --noEmit` passes with no type errors
- [x] Both pages listed in build output: /about, /why-choose-us
- [x] Breadcrumb schema included via SchemaMarkup component
- [x] Proper metadata exported on both pages

## Deviations from Plan

None - plan executed exactly as written.

## Next Phase Readiness

**Ready for 04-02 (Process page):**
- About section components established
- Card styling patterns documented
- Schema and breadcrumb utilities in place
