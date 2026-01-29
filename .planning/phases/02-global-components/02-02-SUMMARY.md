# Plan 02-02 Summary: Footer, Sticky CTA, Modal, Breadcrumbs, Schema

## What Was Built

Footer component, sticky CTA button with estimate modal, breadcrumbs navigation, and Organization schema markup.

## Files Created/Modified

| File | Action | Purpose |
|------|--------|---------|
| components/layout/Footer.tsx | Created | 4-column footer with contact, links, social |
| components/ui/StickyCtaButton.tsx | Created | Fixed CTA button that triggers modal |
| components/ui/EstimateModal.tsx | Created | Headless UI Dialog with GHL form iframe |
| components/layout/Breadcrumbs.tsx | Created | Dynamic breadcrumbs using usePathname |
| components/seo/SchemaMarkup.tsx | Created | JSON-LD injection component |
| lib/schema.ts | Created | Organization schema and breadcrumb generator |
| app/layout.tsx | Modified | Added Footer, StickyCtaButton, SchemaMarkup |

## Key Implementation Details

- **Footer**: 4-column grid on desktop (md:grid-cols-4), stacking on mobile, navy background with brand colors
- **Modal**: GHL form iframe (jjqVGQG6yKAgawF12waP), closes via X/Escape/backdrop
- **Z-index scale**: CTA button z-50, modal backdrop z-[60], modal panel z-[70]
- **Schema**: Organization schema with XSS protection (< escaped as \u003c)
- **Breadcrumbs**: Returns null on home, maps slugs to display names for all pages

## Verification Results

- [x] Footer renders with all 4 sections, phone/email clickable
- [x] Sticky CTA button visible at bottom-right on all pages
- [x] Modal opens on CTA click, displays GHL form
- [x] Modal closes via X button, Escape key, backdrop click
- [x] Organization JSON-LD present in page source
- [x] TypeScript compiles clean

## Commits

- `bc126e4` feat(02-02): create Footer component
- `f1b58fd` feat(02-02): create StickyCtaButton and EstimateModal components
- `c4c5633` feat(02-02): create Breadcrumbs, SchemaMarkup, and schema utilities

---
*Completed: 2026-01-28*
