---
phase: 06-utility-pages
plan: 01
subsystem: ui
tags: [nextjs, ghl-form, bookingkoala, iframe, contact-form, booking]

# Dependency graph
requires:
  - phase: 02-global-components
    provides: Breadcrumbs, SchemaMarkup components
  - phase: 01-infrastructure
    provides: Tailwind theme, schema utilities
provides:
  - Contact Us page with GHL form integration
  - Booking page with BookingKoala embed
  - ContactForm reusable client component
affects: [07-location-pages, 08-blog-seo]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Server component page with client component form embed
    - Third-party iframe integration pattern

key-files:
  created:
    - app/contact-us/page.tsx
    - app/booking/page.tsx
    - components/contact/ContactForm.tsx
  modified: []

key-decisions:
  - "Server component pages with client component for iframe embeds"
  - "Separate ContactForm component for reusability"
  - "3000px iframe height for BookingKoala to prevent cutoff"

patterns-established:
  - "Contact form pattern: server page + client form component"
  - "Third-party embed pattern: next/script with afterInteractive strategy"

# Metrics
duration: 4min
completed: 2026-01-29
---

# Phase 6 Plan 01: Contact Us and Booking Pages Summary

**Contact Us page with GHL form embed and Booking page with BookingKoala scheduling integration**

## Performance

- **Duration:** 4 min
- **Started:** 2026-01-29
- **Completed:** 2026-01-29
- **Tasks:** 2
- **Files created:** 3

## Accomplishments

- Contact Us page with two-column layout: contact info card + GHL form
- Booking page with BookingKoala iframe embed for online scheduling
- Reusable ContactForm client component for GHL iframe
- SEO metadata and breadcrumb schema on both pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Contact Us page with two-column layout** - `156c89b` (feat)
2. **Task 2: Create Booking page with BookingKoala embed** - `f0b7388` (feat)

## Files Created

- `app/contact-us/page.tsx` - Contact page with hero, contact info, and GHL form
- `app/booking/page.tsx` - Booking page with BookingKoala iframe embed
- `components/contact/ContactForm.tsx` - Client component for GHL iframe embed

## Decisions Made

- **Server component pages with client form component:** Used server component for page (enabling metadata export) with separate client component for GHL iframe. This follows Next.js best practices for SEO while supporting client-side embeds.
- **Separate ContactForm component:** Extracted GHL iframe into reusable component in case contact form needed elsewhere.
- **3000px iframe height for BookingKoala:** Used generous height as specified in FRAMEWORK.md to prevent form cutoff across different booking flows.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed metadata export in client component**
- **Found during:** Task 1 (Contact Us page creation)
- **Issue:** Initial implementation used "use client" directive on page.tsx with metadata export, which Next.js doesn't allow
- **Fix:** Separated page into server component (page.tsx) and client component (ContactForm.tsx)
- **Files created:** components/contact/ContactForm.tsx
- **Verification:** Build passes, metadata appears in HTML head
- **Committed in:** 156c89b (part of Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Bug fix improved architecture by creating reusable ContactForm component.

## Issues Encountered

None - build succeeded on first attempt after the server/client component separation.

## User Setup Required

None - no external service configuration required. GHL and BookingKoala embeds use existing account URLs.

## Next Phase Readiness

- Contact and booking pages ready for navigation linking
- Forms integrate with existing GHL and BookingKoala accounts
- Ready for Phase 7 (Location Pages) or 06-02 (Legal Pages)

---
*Phase: 06-utility-pages*
*Completed: 2026-01-29*
