# Phase 8: SEO & Technical - Research

**Researched:** 2026-01-29
**Domain:** Next.js 16 SEO, sitemap/robots generation, metadata optimization, PageSpeed
**Confidence:** HIGH

## Summary

This phase focuses on SEO optimization and technical performance for a Next.js 16.1.6 site using the App Router with SSG. The site already has solid foundations: all pages have metadata exports, BreadcrumbList schema is implemented on all interior pages, and the SchemaMarkup component correctly injects JSON-LD. The primary work involves creating dynamic sitemap.ts and robots.ts files (replacing the static robots.txt), auditing all page metadata for character limits and keyword optimization, optimizing the hero image for LCP, and validating mobile responsiveness across breakpoints.

Next.js 16 provides built-in support for sitemap and robots file generation through special file conventions in the app directory. The `MetadataRoute.Sitemap` and `MetadataRoute.Robots` types provide full TypeScript support. The framework automatically handles format conversion, caching, and XML generation.

**Primary recommendation:** Replace static robots.txt with dynamic robots.ts and create sitemap.ts using Next.js built-in MetadataRoute types. Audit all 24 pages for metadata compliance, convert hero background-image to next/image with preload for LCP optimization.

## Standard Stack

The established libraries/tools for this domain:

### Core (Already in Project)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | Framework with built-in SEO features | Native sitemap.ts, robots.ts, metadata API |
| next/image | Built-in | Image optimization | Auto WebP/AVIF, lazy loading, responsive |
| Metadata API | Built-in | Meta title/description management | Type-safe, template support |

### Supporting (No Additional Dependencies Needed)
| Feature | Built-in | Purpose | Notes |
|---------|----------|---------|-------|
| MetadataRoute.Sitemap | Yes | Type-safe sitemap generation | Replaces next-sitemap |
| MetadataRoute.Robots | Yes | Type-safe robots.txt generation | Dynamic rules support |
| generateMetadata | Yes | Dynamic metadata per page | Already used for location pages |

### External Tools (For Validation)
| Tool | Purpose | URL |
|------|---------|-----|
| Google Rich Results Test | Validate schema markup | https://search.google.com/test/rich-results |
| PageSpeed Insights | Core Web Vitals testing | https://pagespeed.web.dev/ |
| Schema Validator | JSON-LD validation | https://validator.schema.org/ |

**No additional npm packages required.** Next.js 16 provides everything needed.

## Architecture Patterns

### Recommended File Structure for SEO
```
app/
├── sitemap.ts           # NEW: Dynamic sitemap generation
├── robots.ts            # NEW: Dynamic robots.txt generation
├── layout.tsx           # Existing: Root metadata template
├── page.tsx             # Existing: Home page with metadata
├── [page]/page.tsx      # Existing: All pages with metadata exports
└── locations/
    └── [slug]/page.tsx  # Existing: Uses generateMetadata for dynamic
```

### Pattern 1: Dynamic Sitemap Generation
**What:** Single sitemap.ts file that generates all site URLs with proper metadata
**When to use:** Sites under 50,000 URLs (this site has ~24 pages)
**Example:**
```typescript
// Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
import type { MetadataRoute } from 'next'
import locations from '@/data/locations.json'

const BASE_URL = 'https://diamondoasiscleaning.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with their priorities
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    // ... other static pages
  ]

  // Dynamic location pages
  const locationPages = locations.locations.map(loc => ({
    url: `/locations/${loc.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...locationPages].map(page => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
```

### Pattern 2: Dynamic Robots Generation
**What:** robots.ts file that generates robots.txt with sitemap reference
**When to use:** All sites needing robots.txt
**Example:**
```typescript
// Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/booking'], // Booking is external embed
    },
    sitemap: 'https://diamondoasiscleaning.com/sitemap.xml',
  }
}
```

### Pattern 3: Metadata Audit Checklist Structure
**What:** Systematic verification of all page metadata
**When to use:** Phase completion verification
```typescript
// Page metadata requirements
interface PageMetadataAudit {
  title: string;          // Under 60 chars, includes primary keyword
  description: string;    // 150-160 chars, includes CTA
  h1: string;             // Exactly one, matches page topic with keyword
  breadcrumbs: boolean;   // Present on all pages except home
  schema: string[];       // Types present (BreadcrumbList, Service, etc.)
}
```

### Anti-Patterns to Avoid
- **CSS background-image for LCP:** Use next/image with preload for above-fold images
- **Static robots.txt in public/:** Use dynamic robots.ts for flexibility
- **Hardcoded sitemap:** Use dynamic sitemap.ts to auto-include all pages
- **Duplicate H1 tags:** Exactly one H1 per page, others should be H2-H6
- **Missing canonical URLs:** Use metadata.alternates.canonical for all pages

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Sitemap XML | Custom XML generation | MetadataRoute.Sitemap | Handles namespaces, escaping, formatting |
| Robots.txt | Static file | MetadataRoute.Robots | Dynamic rules, type safety |
| Image optimization | Manual WebP conversion | next/image component | Auto format, lazy load, responsive |
| Meta tag injection | Manual head manipulation | Metadata API | Template support, streaming |
| Schema validation | Manual JSON construction | Existing lib/schema.ts | Already type-safe, tested |

**Key insight:** Next.js 16 has mature SEO tooling built-in. The existing codebase already follows best practices for schema markup. The gap is primarily in replacing static files with dynamic generation and optimizing the hero image.

## Common Pitfalls

### Pitfall 1: Hero Image LCP Issues
**What goes wrong:** Using CSS background-image instead of next/image causes slow LCP
**Why it happens:** CSS backgrounds cannot be preloaded, discovered late by browser
**How to avoid:** Convert to next/image with preload={true} (replaces deprecated priority)
**Warning signs:** PageSpeed shows "Largest Contentful Paint image was not preloaded"
**Current status:** HeroSection.tsx uses background-image - needs conversion

### Pitfall 2: Meta Title Length Overflow
**What goes wrong:** Titles over 60 characters get truncated in search results
**Why it happens:** Including too many keywords or brand name
**How to avoid:** Keep titles under 60 chars including spaces, use template for brand
**Warning signs:** Titles cut off with "..." in search results
**Current pattern:** Most titles are acceptable but need systematic audit

### Pitfall 3: BreadcrumbList Schema Errors
**What goes wrong:** Schema validation fails in Google Search Console
**Why it happens:** Missing required properties, relative URLs, position starting at 0
**How to avoid:** Use absolute URLs, positions start at 1, include name and item
**Warning signs:** "Missing field" or "Invalid URL" in Rich Results Test
**Current status:** generateBreadcrumbSchema looks correct, needs validation testing

### Pitfall 4: Missing Canonical URLs
**What goes wrong:** Duplicate content issues, page authority dilution
**Why it happens:** No canonical specified, multiple URLs serve same content
**How to avoid:** Add alternates.canonical to metadata on every page
**Warning signs:** Multiple URLs indexed for same content in Search Console
**Current status:** Only location pages have canonical - needs expansion

### Pitfall 5: Static Robots.txt Staleness
**What goes wrong:** robots.txt doesn't reflect site structure changes
**Why it happens:** Static file in public/ not updated with new routes
**How to avoid:** Use dynamic robots.ts that references actual routes
**Warning signs:** Old disallow rules, missing sitemap reference
**Current status:** Static robots.txt exists - needs migration to dynamic

### Pitfall 6: Iframe Content Not Indexed
**What goes wrong:** Booking page content not indexed by search engines
**Why it happens:** BookingKoala iframe content is third-party
**How to avoid:** Add descriptive content around iframe, proper meta description
**Warning signs:** Thin content warnings, low page rank
**Current status:** Booking page has minimal text, acceptable for booking UX

## Code Examples

Verified patterns from official sources:

### sitemap.ts - Complete Implementation
```typescript
// Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
import type { MetadataRoute } from 'next'
import locations from '@/data/locations.json'

const BASE_URL = 'https://diamondoasiscleaning.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Core pages with high priority
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = [
    'residential-cleaning',
    'commercial-cleaning',
    'deep-cleaning',
    'move-in-move-out-cleaning',
    'additional-services',
  ].map(slug => ({
    url: `${BASE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // About section
  const aboutPages: MetadataRoute.Sitemap = [
    'about',
    'why-choose-us',
    'process',
    'cleaning-tips',
    'faqs',
  ].map(slug => ({
    url: `${BASE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Utility pages
  const utilityPages: MetadataRoute.Sitemap = [
    'booking',
    'privacy-policy',
    'terms-and-conditions',
  ].map(slug => ({
    url: `${BASE_URL}/${slug}`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }))

  // Location pages (dynamic from data)
  const locationPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/locations`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...locations.locations.map(loc => ({
      url: `${BASE_URL}/locations/${loc.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return [
    ...corePages,
    ...servicePages,
    ...aboutPages,
    ...utilityPages,
    ...locationPages,
  ]
}
```

### robots.ts - Complete Implementation
```typescript
// Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://diamondoasiscleaning.com/sitemap.xml',
  }
}
```

### Hero Image Optimization with next/image
```typescript
// Source: https://nextjs.org/docs/app/api-reference/components/image
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-[800px] lg:min-h-[700px] flex items-center">
      {/* Optimized hero image with preload for LCP */}
      <Image
        src="/images/hero-cleaning.jpg"
        alt="Professional house cleaning service in Las Vegas"
        fill
        preload={true}  // Next.js 16 replaces priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Content */}
      <div className="relative z-10">...</div>
    </section>
  )
}
```

### Metadata with Canonical URL
```typescript
// Source: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Cleaning Las Vegas | Diamond Oasis',  // Under 60 chars
  description: 'Professional residential cleaning in Las Vegas. Weekly, bi-weekly, monthly house cleaning. Licensed cleaners. Get your free estimate today!',  // 150-160 chars
  alternates: {
    canonical: '/residential-cleaning',
  },
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Static robots.txt | Dynamic robots.ts | Next.js 13.3+ | Type safety, dynamic rules |
| next-sitemap package | Built-in sitemap.ts | Next.js 13.3+ | No external dependency |
| priority={true} on Image | preload={true} | Next.js 16 | Clearer API intent |
| FID (First Input Delay) | INP (Interaction to Next Paint) | Dec 2025 | Measures full session |
| CSS background-image | next/image fill | Always | Proper preloading, optimization |

**Deprecated/outdated:**
- `priority` prop on next/image: Use `preload` instead (Next.js 16)
- Static sitemap.xml in public/: Use dynamic sitemap.ts
- next-sitemap package: Use built-in MetadataRoute.Sitemap

## Audit Methodology

### Complete Page Inventory (24 pages)
```
Static Pages (15):
- / (home)
- /about
- /why-choose-us
- /process
- /cleaning-tips
- /faqs
- /services
- /residential-cleaning
- /commercial-cleaning
- /deep-cleaning
- /move-in-move-out-cleaning
- /additional-services
- /contact-us
- /booking
- /privacy-policy
- /terms-and-conditions
- /locations

Dynamic Pages (8 locations):
- /locations/las-vegas-south
- /locations/las-vegas-east
- /locations/las-vegas-west
- /locations/las-vegas-northwest
- /locations/las-vegas-central
- /locations/henderson
- /locations/las-vegas-southwest
- /locations/summerlin
```

### Per-Page Audit Checklist
For each page, verify:
1. **Meta Title:** Under 60 characters, includes primary keyword
2. **Meta Description:** 150-160 characters, includes CTA
3. **H1 Tag:** Exactly one, includes primary keyword, matches page topic
4. **BreadcrumbList Schema:** Present (except home), validates in Rich Results Test
5. **Canonical URL:** Set in metadata.alternates.canonical
6. **Images:** Using next/image, have descriptive alt text with keywords

### Validation Tools Workflow
1. **Build locally:** `npm run build` - check for metadata warnings
2. **Schema validation:** Google Rich Results Test for each page type
3. **PageSpeed Insights:** Test mobile at 375px, 768px, 1024px, 1440px
4. **Link checker:** Verify no 404s on internal links
5. **Sitemap verification:** Fetch /sitemap.xml, confirm all 24 pages listed

## Open Questions

Things that couldn't be fully resolved:

1. **Hero Image Format**
   - What we know: Current image is hero-cleaning.jpg (JPEG)
   - What's unclear: Whether WebP version exists or should be created
   - Recommendation: Let next/image handle format conversion automatically

2. **Booking Page INP**
   - What we know: BookingKoala iframe may have interaction delays
   - What's unclear: Third-party impact on INP score
   - Recommendation: Accept potential INP impact as trade-off for booking functionality

3. **Location Page Meta Description Length**
   - What we know: Dynamic descriptions include service areas
   - What's unclear: Whether all generated descriptions stay under 160 chars
   - Recommendation: Audit generated descriptions, truncate serviceAreas if needed

## Sources

### Primary (HIGH confidence)
- [Next.js Sitemap Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) - sitemap.ts patterns, MetadataRoute types
- [Next.js Robots Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) - robots.ts patterns, rule syntax
- [Next.js Image Documentation](https://nextjs.org/docs/app/api-reference/components/image) - preload prop, optimization
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) - title, description, alternates

### Secondary (MEDIUM confidence)
- [Google BreadcrumbList Documentation](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) - Schema requirements
- [Core Web Vitals 2026](https://www.neoseo.co.uk/core-web-vitals-2026/) - INP replaces FID, thresholds
- [Next.js SEO Checklist](https://dev.to/simplr_sh/nextjs-15-app-router-seo-comprehensive-checklist-3d3f) - Audit methodology

### Tertiary (LOW confidence)
- WebSearch results on PageSpeed optimization patterns

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Next.js 16 official documentation verified
- Architecture: HIGH - Patterns verified against official docs
- Pitfalls: MEDIUM - Based on current codebase analysis and best practices
- Audit methodology: HIGH - Based on site inventory and requirements

**Research date:** 2026-01-29
**Valid until:** 2026-03-01 (60 days - stable domain, well-documented)
