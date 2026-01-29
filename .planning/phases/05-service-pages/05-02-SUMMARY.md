---
phase: 05-service-pages
plan: 02
title: "Deep Cleaning, Move-In/Move-Out, Additional Services Pages"
status: complete
subsystem: service-pages
tags: ["deep-cleaning", "move-in-move-out", "additional-services", "schema", "seo"]

dependency-graph:
  requires: ["01-infrastructure", "02-global-components", "05-01"]
  provides: ["deep-cleaning-page", "move-in-move-out-page", "additional-services-page"]
  affects: ["06-utility-pages", "08-final-polish"]

tech-stack:
  added: []
  patterns: ["XMarkIcon for exclusions lists", "numbered list with visual styling"]

key-files:
  created:
    - app/deep-cleaning/page.tsx
    - app/move-in-move-out-cleaning/page.tsx
    - app/additional-services/page.tsx
  modified: []

decisions:
  - id: "05-02-01"
    context: "Deep cleaning and move-in/move-out pages have same checklist"
    choice: "Unique intro content per FRAMEWORK.md, shared checklist data"
    rationale: "FRAMEWORK.md specifies same cleaning scope, unique marketing content prevents SEO duplicate issues"

metrics:
  duration: "~4 min"
  completed: "2026-01-29"
---

# Phase 05 Plan 02: Deep Cleaning, Move-In/Move-Out, Additional Services Pages Summary

**One-liner:** Three service pages with comprehensive checklists, Service schema, and distinct exclusions list for additional services.

## What Was Built

### Task 1: Deep Cleaning and Move-In/Move-Out Pages
Created two service pages with comprehensive room-by-room checklists following FRAMEWORK.md specifications:

**Deep Cleaning Page (/deep-cleaning)**
- H1: "Deep Cleaning Service"
- Meta: "Professional deep cleaning services in Las Vegas. Thorough, detailed cleaning for your home. Licensed cleaners. Book your deep clean today!"
- Intro sections: "A Clean Home is a Peace of Mind" and "Why Is Deep Cleaning Necessary?"
- 5-room checklist: Kitchen (10 items), Bathroom (5 items), Bedrooms (6 items), Living Room (5 items), Laundry Room (5 items)
- Additional services section (5 items)
- Service schema and Breadcrumb schema

**Move-In/Move-Out Cleaning Page (/move-in-move-out-cleaning)**
- H1: "Move-In/Move-Out Cleaning"
- Meta: "Professional move-in and move-out cleaning in Las Vegas. Get your deposit back! Thorough cleaning for tenants and landlords. Free estimates."
- Intro sections: "Make Move In or Move Out Cleaning Simple!" and "Is Move-In/Move-Out Cleaning Necessary?" (UNIQUE from deep cleaning)
- Same checklist as deep cleaning per FRAMEWORK.md specification
- Service schema and Breadcrumb schema

### Task 2: Additional Services Page
Created page with extras list and exclusions list:

**Additional Services Page (/additional-services)**
- H1: "Additional Services"
- Meta: "Explore our additional cleaning services in Las Vegas. Oven cleaning, refrigerator cleaning, window cleaning, and more. Customize your clean!"
- Intro sections about additional services and health benefits
- 14 additional services with CheckIcon
- 11 exclusion items with numbered list and XMarkIcon (visually distinct)
- Service schema and Breadcrumb schema

## Key Implementation Details

### Duplicate Content Prevention
Deep cleaning and move-in/move-out pages share the same checklist (intentional per FRAMEWORK.md) but have:
- Unique H1 headings
- Unique meta descriptions
- Unique intro section content

### Exclusions List Styling
The exclusions section uses:
- `bg-background-alt` section with white card for contrast
- Numbered circles with red styling (bg-red-100, text-red-600)
- XMarkIcon in red-500 for visual distinction from CheckIcon
- Clear header "What We Don't Do" with explanatory subtext

### Schema Implementation
All pages include:
- Service schema with provider reference to organization @id
- Breadcrumb schema for navigation context

## Verification Results

1. **Build verification:** `npm run build` succeeds with all 3 pages in output
2. **Line counts:** deep-cleaning (199), move-in-move-out-cleaning (204), additional-services (201) - all exceed minimums
3. **TypeScript:** No compilation errors
4. **Schema:** Service and Breadcrumb schema present on all pages

## Files Created

| File | Lines | Purpose |
|------|-------|---------|
| app/deep-cleaning/page.tsx | 199 | Deep cleaning service page |
| app/move-in-move-out-cleaning/page.tsx | 204 | Move-in/move-out service page |
| app/additional-services/page.tsx | 201 | Additional services with exclusions |

## Commits

| Hash | Message |
|------|---------|
| f263bff | feat(05-02): create Deep Cleaning and Move-In/Move-Out Cleaning pages |
| 0c04899 | feat(05-02): create Additional Services page with extras and exclusions |

## Deviations from Plan

None - plan executed exactly as written.

## Next Phase Readiness

Phase 05 (Service Pages) is now complete:
- Plan 01: Services hub, Residential, Commercial pages
- Plan 02: Deep Cleaning, Move-In/Move-Out, Additional Services pages

Ready for Phase 06 (Utility Pages):
- Contact Us page
- Booking page (with BookingKoala embed)
- Privacy Policy page
- Terms and Conditions page
