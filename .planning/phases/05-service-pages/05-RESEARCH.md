# Phase 5: Service Pages - Research

**Researched:** 2026-01-29
**Domain:** Service pages with cleaning checklists and Service schema
**Confidence:** HIGH

## Summary

This phase creates service pages for Diamond Oasis Cleaning: a Services overview hub (/services) plus five individual service pages (residential, commercial, deep cleaning, move-in/move-out, additional services). Each service page requires a detailed cleaning checklist and proper Service schema markup for SEO.

The project already has foundational patterns in place from Phase 2 (Breadcrumbs, SchemaMarkup component) and Phase 4 (page structure patterns from About section). The existing `data/services.json` contains service definitions with slugs and descriptions. Service schema is NOT officially supported by Google Rich Results but remains valid for other search engines and AI systems.

**Primary recommendation:** Use static pages following the established About section patterns. Create a `generateServiceSchema()` utility in `lib/schema.ts`. Build reusable `ServiceChecklist` component for consistent checklist rendering across pages.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js 14 | ^14.x | App Router static pages with metadata API | Already installed, provides SSG and SEO features |
| TypeScript | ^5.x | Type safety for service data | Already configured |
| Tailwind CSS v4 | ^4.x | Styling with @theme variables | Already configured with brand colors |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @heroicons/react | ^2.x | Icons for checklists | Already installed, use CheckIcon for checklist items |
| clsx | ^2.x | Conditional class names | Already installed, for styling variants |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Static pages | Dynamic routes with generateStaticParams | Not needed - only 6 service pages, static is simpler |
| JSON checklist data | Hardcoded in components | JSON cleaner for future maintenance, but adds complexity for small dataset |

**Installation:**
No new packages required - all dependencies already installed.

## Architecture Patterns

### Recommended Project Structure
```
app/
├── services/
│   └── page.tsx             # Services overview hub
├── residential-cleaning/
│   └── page.tsx             # Note: NOT the legacy URL with numbers
├── commercial-cleaning/
│   └── page.tsx             # New page (not on current site)
├── deep-cleaning/
│   └── page.tsx
├── move-in-move-out-cleaning/
│   └── page.tsx             # Note: NOT the legacy URL with numbers
└── additional-services/
    └── page.tsx

components/
└── services/
    ├── ServiceChecklist.tsx  # Reusable checklist display
    └── ServiceHero.tsx       # Consistent hero for all service pages

lib/
└── schema.ts                # Add generateServiceSchema()
```

### Pattern 1: Service Page Template
**What:** Consistent structure for all service pages
**When to use:** Every individual service page
**Example:**
```typescript
// Source: Based on existing app/about/page.tsx pattern
import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Residential House Cleaning Las Vegas",
  description: "Professional residential cleaning in Las Vegas. Weekly, bi-weekly, monthly house cleaning. Licensed & bonded cleaners. Get your free estimate today!",
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Residential Cleaning", href: "/residential-cleaning" },
];

export default function ResidentialCleaningPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup schema={generateServiceSchema({
        name: "Residential Cleaning",
        serviceType: "House cleaning service",
        description: "Professional residential cleaning services...",
      })} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        {/* ... */}
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Content sections with checklists */}
      {/* ... */}
    </>
  );
}
```

### Pattern 2: Service Schema Generator
**What:** Utility function to generate Service schema markup
**When to use:** Each service page
**Example:**
```typescript
// Source: Based on schema.org/Service specification
export interface ServiceSchemaInput {
  name: string;
  serviceType: string;
  description: string;
  url?: string;
}

export function generateServiceSchema(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": input.name,
    "serviceType": input.serviceType,
    "description": input.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Diamond Oasis Cleaning",
      "@id": "https://diamondoasiscleaning.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Las Vegas"
    },
    "url": input.url || `${SITE_URL}/${input.name.toLowerCase().replace(/\s+/g, '-')}`
  };
}
```

### Pattern 3: Checklist Component
**What:** Reusable component for displaying cleaning checklists by room
**When to use:** Service pages with checklists (residential, deep, move-in/move-out)
**Example:**
```typescript
// Source: Based on Tailwind UI list patterns
import { CheckIcon } from "@heroicons/react/24/outline";

interface ChecklistSection {
  title: string;
  items: string[];
}

interface ServiceChecklistProps {
  sections: ChecklistSection[];
  additionalServices?: string[];
}

export default function ServiceChecklist({ sections, additionalServices }: ServiceChecklistProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {sections.map((section) => (
        <div key={section.title} className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-heading font-bold text-primary mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### Anti-Patterns to Avoid
- **Legacy URLs with numbers:** FRAMEWORK.md mentions `/residential-cleaning369987` and `/move-in-move-out-cleaning665245`, but `lib/navigation.ts` uses clean URLs. The navigation already uses clean URLs - we should follow that pattern and potentially add redirects later for the legacy URLs.
- **Dynamic routes for static content:** Using `[slug]` for 6 static service pages adds unnecessary complexity.
- **Inline checklists:** Hardcoding long checklist arrays in page components makes maintenance difficult. Extract to a data structure or component props.

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Checklist icons | Custom SVG icons | @heroicons/react CheckIcon | Consistent with rest of site, already installed |
| Schema markup injection | Custom script tags | Existing SchemaMarkup component | Already handles XSS sanitization |
| Breadcrumb generation | Manual breadcrumb objects | generateBreadcrumbSchema() | Already exists in lib/schema.ts |
| Accordion (if needed) | Custom disclosure | Headless UI Disclosure | Already used in FAQAccordion, consistent behavior |

**Key insight:** This phase has minimal "don't hand-roll" concerns because the infrastructure is already in place. Focus on reusing existing patterns from Phase 2 and Phase 4.

## Common Pitfalls

### Pitfall 1: URL Mismatch Between Navigation and Pages
**What goes wrong:** Creating pages with legacy URLs (/residential-cleaning369987) but navigation uses clean URLs (/residential-cleaning), causing 404s
**Why it happens:** FRAMEWORK.md specifies legacy URLs but lib/navigation.ts uses clean URLs
**How to avoid:** Follow the navigation structure that's already implemented. Create pages at clean URLs. If legacy URL support is needed, add Next.js redirects in next.config.js later.
**Warning signs:** Links in header/footer return 404

### Pitfall 2: Inconsistent Page Structure
**What goes wrong:** Service pages have different layouts, hero styles, or section ordering
**Why it happens:** Multiple pages built without a shared pattern
**How to avoid:** Create ServiceHero or use consistent section pattern from About pages. Follow the exact structure: Hero -> Breadcrumbs -> Content -> CTA
**Warning signs:** Visual inconsistency when navigating between service pages

### Pitfall 3: Service Schema Validation Confusion
**What goes wrong:** Expecting Google Rich Results Test to validate Service schema, reporting as "broken"
**Why it happens:** Service schema is NOT supported by Google Rich Results Test
**How to avoid:** Use Schema.org Validator (validator.schema.org) instead for Service schema. Validate breadcrumb schema with Google Rich Results Test.
**Warning signs:** "No structured data found" in Google Rich Results Test for Service type

### Pitfall 4: Duplicate Content for Similar Services
**What goes wrong:** Deep Cleaning and Move-In/Move-Out pages have nearly identical checklists, creating SEO issues
**Why it happens:** FRAMEWORK.md specifies same checklist for both
**How to avoid:** Add unique intro content, H1, and description for each. Keep checklists consistent if that reflects reality, but ensure meta descriptions and page introductions are distinct.
**Warning signs:** Google treating pages as duplicates

### Pitfall 5: Missing CTA on Service Pages
**What goes wrong:** Users browse service details but have no clear path to conversion
**Why it happens:** Focus on content, forgetting conversion
**How to avoid:** Every service page needs a prominent CTA section at the bottom. The sticky CTA button helps but a contextual "Get a Quote for [Service]" section improves conversion.
**Warning signs:** High bounce rate on service pages

## Code Examples

Verified patterns from official sources and existing codebase:

### Services Overview Grid (Extend Existing Pattern)
```typescript
// Source: Based on existing components/home/ServicesOverview.tsx
// For /services page - similar to existing but full-page layout
import Link from "next/link";
import services from "@/data/services.json";

export default function ServicesPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-primary-light">
                {service.name}
              </h2>
              <p className="text-text-secondary">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Metadata Export Pattern
```typescript
// Source: Next.js 14 App Router docs
export const metadata: Metadata = {
  title: "Residential House Cleaning Las Vegas", // Under 60 chars
  description: "Professional residential cleaning in Las Vegas. Weekly, bi-weekly, monthly house cleaning. Licensed & bonded cleaners. Get your free estimate today!", // 150-160 chars
};
```

### Checklist Data Structure
```typescript
// Recommended structure for checklist data
const residentialChecklist = {
  sections: [
    {
      title: "Kitchen",
      items: [
        "Sinks, faucets, and fixtures",
        "Dishes",
        "Microwave",
        "Countertops and back splash",
        "Cabinet exteriors",
        "Floors",
        // ... more items
      ]
    },
    {
      title: "Bathroom",
      items: [
        "Showers and bathtubs",
        "Disinfect toilets",
        // ... more items
      ]
    },
    // ... more sections
  ],
  additionalServices: [
    "Clean inside refrigerator",
    "Clean inside oven",
    "Clean inside windows",
    // ...
  ]
};
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| getStaticProps | Metadata export + server components | Next.js 13+ (2023) | Simpler metadata API |
| ProfessionalService schema | Service schema | 2022 | ProfessionalService deprecated by schema.org |
| Google-only structured data | Multi-engine structured data | 2024-2026 | Service schema valuable for AI/other engines even without Google support |

**Deprecated/outdated:**
- ProfessionalService: Use Service type instead
- getStaticProps/getStaticPaths: Use metadata export and server components

## Open Questions

Things that couldn't be fully resolved:

1. **Legacy URL Redirects**
   - What we know: FRAMEWORK.md specifies `/residential-cleaning369987` but navigation uses `/residential-cleaning`
   - What's unclear: Whether to support legacy URLs now or defer
   - Recommendation: Build with clean URLs matching navigation, add redirects in Phase 8 (SEO) if needed

2. **Services JSON Enhancement**
   - What we know: Current `data/services.json` has basic info (id, name, slug, description, href)
   - What's unclear: Whether to add checklists to JSON or keep hardcoded in pages
   - Recommendation: For 6 pages, keeping checklist data in components is acceptable. If maintenance becomes an issue, extract to JSON later.

3. **Commercial Cleaning Content**
   - What we know: This is a new page not on current site
   - What's unclear: Full content specifics beyond FRAMEWORK.md
   - Recommendation: Use FRAMEWORK.md content, which provides detailed structure

## Sources

### Primary (HIGH confidence)
- schema.org/Service - Official Service type documentation and cleaning services example
- Next.js App Router documentation - Metadata API and static page patterns
- Existing codebase - Phase 2 and Phase 4 patterns (SchemaMarkup, Breadcrumbs, page structure)
- FRAMEWORK.md - Page content, URL structure, and Service schema specification

### Secondary (MEDIUM confidence)
- WebSearch: Cleaning service website UX patterns (multiple sources agree on checklist importance)
- WebSearch: Next.js 14 generateStaticParams patterns (official docs verified)

### Tertiary (LOW confidence)
- WebSearch: Google schema support timeline for 2026 (sources mention cleanup but specifics unclear)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All tools already installed and proven in earlier phases
- Architecture: HIGH - Follows established patterns from About section pages
- Pitfalls: HIGH - Based on concrete codebase analysis (URL mismatch verified in lib/navigation.ts)

**Research date:** 2026-01-29
**Valid until:** 2026-02-28 (30 days - stable domain, minimal external dependencies)
