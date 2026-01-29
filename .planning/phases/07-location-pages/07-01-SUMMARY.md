---
phase: 07-location-pages
plan: 01
status: complete
subsystem: frontend/seo
tags: [locations, schema, LocalBusiness, Next.js, static-pages]

dependency_graph:
  requires:
    - 01-infrastructure (Tailwind config, base components)
    - 02-global-components (SchemaMarkup, Breadcrumbs)
  provides:
    - generateLocalBusinessSchema function for location detail pages
    - /locations hub page with 8 location cards
    - LocationData TypeScript interface
  affects:
    - 07-02 (location detail pages will use generateLocalBusinessSchema)

tech_stack:
  added: []
  patterns:
    - Location card grid with Link wrapper for clickable cards
    - LocationData interface for typed location schema generation

key_files:
  created:
    - app/locations/page.tsx
  modified:
    - lib/schema.ts

decisions:
  - id: location-card-inline
    description: Location cards are inline JSX rather than separate component (simple enough, only used once)
    rationale: Follows services page pattern, avoids component overhead for single-use UI

metrics:
  duration: ~3 min
  completed: 2026-01-29
---

# Phase 7 Plan 01: Locations Hub Page Summary

**One-liner:** Created /locations hub page with 8 location cards and generateLocalBusinessSchema function for LocalBusiness JSON-LD.

## What Was Built

### Task 1: generateLocalBusinessSchema Function
Added to `lib/schema.ts`:
- `LocationData` interface with all location properties (slug, name, displayName, address fields, phone, email, coordinates, serviceAreas)
- `generateLocalBusinessSchema(location: LocationData)` function returning Schema.org LocalBusiness JSON-LD
- Includes address (PostalAddress), geo (GeoCoordinates), openingHoursSpecification, priceRange, and areaServed fields

### Task 2: Locations Hub Page
Created `app/locations/page.tsx` with:
- Hero section with "Our Las Vegas Valley Locations" heading
- Breadcrumbs (Home > Locations)
- Intro section describing service coverage
- Responsive grid of 8 location cards (1 col mobile, 2 cols tablet, 3 cols desktop)
- Each card displays: displayName, full address, phone number, "View Location" link indicator
- Cards link to `/locations/{slug}` for individual location pages
- CTA section with "Get Your Free Estimate" button

## Technical Details

**Schema Generator Pattern:**
```typescript
export function generateLocalBusinessSchema(location: LocationData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/locations/${location.slug}`,
    // ... full LocalBusiness properties
  };
}
```

**Location Card Pattern:**
```tsx
<Link
  href={`/locations/${location.slug}`}
  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
>
  <h2 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-primary-light">
    {location.displayName}
  </h2>
  {/* address, phone, arrow indicator */}
</Link>
```

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Removed onClick handler from server component**
- **Found during:** Task 2 verification
- **Issue:** Initial implementation had `onClick={(e) => e.stopPropagation()}` on phone link inside Link card, which is not allowed in server components
- **Fix:** Removed the phone link anchor tag, displaying phone as plain text (users can still click card to go to location page)
- **Files modified:** app/locations/page.tsx
- **Commit:** 6e7268f

## Commits

| Hash | Message |
|------|---------|
| 9bccc4f | feat(07-01): add generateLocalBusinessSchema function to lib/schema.ts |
| 6e7268f | feat(07-01): create locations hub page with grid of 8 locations |

## Verification Results

- [x] `npm run build` completes without errors
- [x] /locations page shows 8 location cards
- [x] Cards are responsive (1/2/3 columns at breakpoints)
- [x] Each card links to correct /locations/[slug] path
- [x] Breadcrumbs show Home > Locations
- [x] generateLocalBusinessSchema exports correctly
- [x] LocationData interface exports correctly

## Next Phase Readiness

**For 07-02 (Individual Location Pages):**
- generateLocalBusinessSchema function is ready for use
- LocationData interface matches locations.json structure
- /locations hub page links correctly to /locations/[slug] routes
- Build confirms all 8 location detail page routes exist
