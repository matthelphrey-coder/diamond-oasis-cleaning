---
phase: 04-about-section
plan: 03
subsystem: faq-page
tags: [headless-ui, accordion, seo, schema, faq]
dependency-graph:
  requires: [02-01, 02-02]
  provides: [faq-page, faq-accordion, faq-schema]
  affects: []
tech-stack:
  added: []
  patterns: [disclosure-accordion, faqpage-schema]
key-files:
  created:
    - app/faqs/page.tsx
    - components/faqs/FAQAccordion.tsx
  modified:
    - lib/schema.ts
decisions:
  - key: accordion-component
    choice: "Headless UI Disclosure"
    reason: "Consistent with existing Disclosure usage, accessible out of box"
metrics:
  duration: ~3 min
  completed: 2026-01-29
---

# Phase 04 Plan 03: FAQs Page Summary

FAQPage with Headless UI Disclosure accordion and FAQPage structured data schema for rich results eligibility.

## What Was Built

### generateFAQSchema Utility (lib/schema.ts)
- Added FAQItem interface with question/answer properties
- Added generateFAQSchema function returning schema.org FAQPage format
- Preserves existing organizationSchema, BreadcrumbItem, generateBreadcrumbSchema

### FAQAccordion Component (components/faqs/FAQAccordion.tsx)
- Client component using Headless UI 2.x Disclosure
- Props: faqs array with id, question, answer
- Expand/collapse with animated chevron rotation (180deg)
- Divider lines between items using divide-y
- Keyboard accessible via Headless UI

### FAQs Page (app/faqs/page.tsx)
- Server component with static metadata
- BreadcrumbList JSON-LD (Home > FAQs)
- FAQPage JSON-LD with all 16 questions
- Navy hero section with title and tagline
- Breadcrumbs navigation
- FAQAccordion with all 16 FAQs from data/faqs.json
- "Still Have Questions?" CTA linking to /contact-us

## Commits

| Hash | Type | Description |
|------|------|-------------|
| 6ae10de | feat | add generateFAQSchema utility to lib/schema.ts |
| 0a06519 | feat | create FAQAccordion client component |
| 63c6d20 | feat | create FAQs page with accordion and schema |

## Decisions Made

1. **Headless UI Disclosure for accordion** - Consistent with existing component patterns, provides accessibility automatically

## Deviations from Plan

None - plan executed exactly as written.

## Verification Results

- [x] npm run build succeeds
- [x] /faqs route generated in static build
- [x] npx tsc --noEmit passes
- [x] FAQAccordion component created with "use client"
- [x] lib/schema.ts exports generateFAQSchema
- [x] BreadcrumbList and FAQPage schemas generated

## Test Commands

```bash
# Verify TypeScript
npx tsc --noEmit

# Build and check routes
npm run build

# Start dev server and visit
npm run dev
# Navigate to http://localhost:3000/faqs
```

## Schema Output Example

FAQPage schema structure:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cost of your cleaning services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of cleaning services depend on..."
      }
    }
    // ... 15 more questions
  ]
}
```

## Next Phase Readiness

Phase 4 About Section complete. All 3 plans executed:
- 04-01: About page with differentiators
- 04-02: Why Choose Us, Process, Cleaning Tips pages
- 04-03: FAQs page with accordion

Ready for Phase 5 (Services Section) or remaining phases.
