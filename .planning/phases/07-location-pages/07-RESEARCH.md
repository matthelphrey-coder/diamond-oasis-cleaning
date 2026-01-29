# Phase 7: Location Pages - Research

**Researched:** 2026-01-29
**Domain:** Next.js Dynamic Routes, LocalBusiness Schema, Google Maps Embeds
**Confidence:** HIGH

## Summary

This phase creates a locations hub page (`/locations`) with cards for all 8 Las Vegas Valley locations, plus individual dynamic location pages (`/locations/[slug]`) with Google Maps embeds, contact info, service areas, and LocalBusiness schema markup.

The codebase already has established patterns for:
- Static page layouts with Hero + Breadcrumbs + Content sections
- Schema markup injection via `SchemaMarkup` component
- JSON data files for content (locations.json already exists with all required data)
- Grid card layouts (services/page.tsx, cleaning-tips/page.tsx patterns)
- iframe embeds for external content (booking page, contact forms)

**Primary recommendation:** Use `generateStaticParams` to statically generate all 8 location pages at build time, with a client component wrapper for Google Maps iframe rendering. Follow existing page patterns exactly for consistency.

## Standard Stack

The established libraries/patterns for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js App Router | 16.1.6 | Static generation with `generateStaticParams` | Already in use, SSG for all 8 pages |
| TypeScript | 5.x | Type safety for location data | Already configured |
| Tailwind CSS | 4.x | Styling consistency | Already configured |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @heroicons/react | 2.2.0 | Icons for location cards | Map pin, phone, email icons |
| clsx | 2.1.1 | Conditional class names | Card hover states, responsive classes |

### No New Dependencies Needed
All requirements can be met with existing stack. No new packages required.

## Architecture Patterns

### Recommended Project Structure
```
app/
├── locations/
│   ├── page.tsx              # Hub page with location cards grid
│   └── [slug]/
│       └── page.tsx          # Dynamic location page template
components/
├── locations/
│   ├── LocationCard.tsx      # Card for hub page grid
│   └── GoogleMapEmbed.tsx    # Client component for map iframe
lib/
├── schema.ts                  # Add generateLocalBusinessSchema function
data/
└── locations.json            # Already exists with all 8 locations
```

### Pattern 1: generateStaticParams for Location Pages
**What:** Static generation of all 8 location pages at build time
**When to use:** Fixed set of locations known in advance
**Example:**
```typescript
// Source: Next.js official docs
// app/locations/[slug]/page.tsx
import locations from '@/data/locations.json';

export function generateStaticParams() {
  return locations.locations.map((location) => ({
    slug: location.slug,
  }));
}

// TypeScript typing for params (Next.js 15+ pattern)
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.locations.find((loc) => loc.slug === slug);
  // ...
}
```

### Pattern 2: generateMetadata for Dynamic SEO
**What:** Generate unique title/description for each location page
**When to use:** All dynamic route pages that need SEO
**Example:**
```typescript
// Source: Next.js official docs
import type { Metadata } from 'next';
import locations from '@/data/locations.json';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.locations.find((loc) => loc.slug === slug);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `House Cleaning in ${location.displayName} Las Vegas | Diamond Oasis Cleaning`,
    description: `Professional house cleaning services in ${location.displayName}, Las Vegas NV. Serving ${location.serviceAreas.slice(0, 3).join(', ')}. Licensed & insured cleaners. Call ${location.phone} for free estimate!`,
  };
}
```

### Pattern 3: Client Component for Google Maps Iframe
**What:** Wrap iframe in client component to handle HTML content safely
**When to use:** Any iframe that contains raw HTML from data source
**Example:**
```typescript
// Source: Codebase pattern from booking/page.tsx, EstimateModal.tsx
// components/locations/GoogleMapEmbed.tsx
"use client";

interface GoogleMapEmbedProps {
  mapEmbed: string;
  locationName: string;
}

export default function GoogleMapEmbed({ mapEmbed, locationName }: GoogleMapEmbedProps) {
  return (
    <div
      className="w-full h-[450px] rounded-lg overflow-hidden shadow-md"
      dangerouslySetInnerHTML={{ __html: mapEmbed }}
      aria-label={`Google Maps showing ${locationName} location`}
    />
  );
}
```

### Pattern 4: Existing Page Layout Structure
**What:** Hero + Breadcrumbs + Content sections
**When to use:** All pages for consistency
**Example from services/page.tsx:**
```typescript
export default function Page() {
  return (
    <>
      <SchemaMarkup schema={...} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">...</h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">...</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Content Sections */}
      <section className="py-16 lg:py-20 bg-white">...</section>
      <section className="py-16 lg:py-20 bg-background-alt">...</section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">...</section>
    </>
  );
}
```

### Anti-Patterns to Avoid
- **Server-side iframe rendering:** Don't render iframes in server components with dynamic content; use client components
- **Not awaiting params:** In Next.js 15+, params is a Promise and must be awaited
- **Duplicate metadata exports:** Cannot have both `metadata` object and `generateMetadata` function in same file
- **Missing 404 handling:** Always check if location exists before rendering

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Schema injection | Manual script tags | Existing `SchemaMarkup` component | XSS sanitization already handled |
| Breadcrumb schema | Custom JSON-LD builder | Existing `generateBreadcrumbSchema` | Pattern established, DRY |
| Grid card layouts | Custom grid CSS | Copy from services/page.tsx | Responsive pattern already tested |
| iframe embedding | Raw innerHTML | Client component wrapper | Security, React hydration issues |
| Location data access | Direct file reads | Import from `@/data/locations.json` | Type inference, bundling |

**Key insight:** The codebase already has all the building blocks. This phase is primarily composition of existing patterns with one new schema generator function for LocalBusiness.

## Common Pitfalls

### Pitfall 1: Iframe Hydration Mismatch
**What goes wrong:** Server HTML differs from client HTML with iframes
**Why it happens:** iframes render differently on server vs client
**How to avoid:** Use client component (`"use client"`) for GoogleMapEmbed
**Warning signs:** React hydration warnings in console, flickering maps

### Pitfall 2: Missing dynamicParams Configuration
**What goes wrong:** 404 for valid slugs during development, or unwanted ISR
**Why it happens:** Default `dynamicParams = true` allows runtime generation
**How to avoid:** Set `export const dynamicParams = false` to enforce only pre-built routes
**Warning signs:** Pages rendering on-demand instead of statically

### Pitfall 3: params Not Awaited (Next.js 15+)
**What goes wrong:** TypeScript errors, runtime crashes
**Why it happens:** Breaking change in Next.js 15 - params is now a Promise
**How to avoid:** Always `const { slug } = await params;` in page components and generateMetadata
**Warning signs:** Type errors about `Promise<{ slug: string }>` vs `{ slug: string }`

### Pitfall 4: LocalBusiness Schema Missing Required Fields
**What goes wrong:** Schema validation fails, no rich results
**Why it happens:** Incomplete schema without address or name
**How to avoid:** Include all required fields: @type, name, address (with PostalAddress type)
**Warning signs:** Google Rich Results Test shows errors

### Pitfall 5: Duplicate Content Without Canonical URLs
**What goes wrong:** SEO penalties, confused search engines
**Why it happens:** Similar content across location pages
**How to avoid:** Set canonical URL in metadata for each location page
**Warning signs:** Google Search Console duplicate content warnings

### Pitfall 6: 404 Page Not Handling Missing Locations
**What goes wrong:** Server error instead of 404
**Why it happens:** Accessing slug that doesn't exist in data
**How to avoid:** Check if location exists, call `notFound()` from `next/navigation`
**Warning signs:** Unhandled undefined errors when slug doesn't match

## Code Examples

Verified patterns from official sources and codebase:

### LocalBusiness Schema Generator Function
```typescript
// Source: Schema.org LocalBusiness spec + Google structured data docs
// Add to lib/schema.ts

const SITE_URL = "https://diamondoasiscleaning.com";

export interface LocationData {
  slug: string;
  name: string;
  displayName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
  serviceAreas: string[];
}

export function generateLocalBusinessSchema(location: LocationData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/locations/${location.slug}`,
    name: location.name,
    image: `${SITE_URL}/images/logo.png`,
    url: `${SITE_URL}/locations/${location.slug}`,
    telephone: location.phone,
    email: location.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.street,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: location.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };
}
```

### Location Hub Page Grid Pattern
```typescript
// Source: services/page.tsx pattern
// app/locations/page.tsx structure

import Link from "next/link";
import locations from "@/data/locations.json";

// ... metadata, breadcrumbs setup ...

export default function LocationsPage() {
  return (
    <>
      {/* ... Hero, Breadcrumbs ... */}

      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.locations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  {location.displayName}
                </h2>
                <p className="text-text-secondary text-sm mb-2">
                  {location.street}, {location.city}, {location.state} {location.zip}
                </p>
                <p className="text-text-secondary text-sm mb-4">
                  <a href={location.phoneLink} className="hover:text-secondary">
                    {location.phone}
                  </a>
                </p>
                <div className="text-secondary font-semibold group-hover:text-secondary-light transition-colors">
                  View Location &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

### Complete Dynamic Location Page Template
```typescript
// Source: residential-cleaning/page.tsx pattern + Next.js docs
// app/locations/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import GoogleMapEmbed from "@/components/locations/GoogleMapEmbed";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/schema";
import locations from "@/data/locations.json";
import services from "@/data/services.json";

export const dynamicParams = false; // Only pre-built routes

export function generateStaticParams() {
  return locations.locations.map((location) => ({
    slug: location.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.locations.find((loc) => loc.slug === slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: `House Cleaning in ${location.displayName} Las Vegas | Diamond Oasis Cleaning`,
    description: `Professional house cleaning services in ${location.displayName}, Las Vegas NV. Serving ${location.serviceAreas.slice(0, 3).join(", ")} and more. Licensed & insured cleaners. Call ${location.phone} for free estimate!`,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.locations.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: location.displayName, href: `/locations/${location.slug}` },
  ];

  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup schema={generateLocalBusinessSchema(location)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            House Cleaning in {location.displayName}, Las Vegas
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Diamond Oasis Cleaning is proud to serve the {location.displayName} area
            with professional house cleaning services.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Location Info + Map */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Card */}
            <div className="bg-background-alt rounded-xl p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary">{location.name}</h3>
                  <p className="text-text-secondary">
                    {location.street}<br />
                    {location.city}, {location.state} {location.zip}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <a href={location.phoneLink} className="text-secondary hover:text-secondary-light">
                    {location.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <a href={`mailto:${location.email}`} className="text-secondary hover:text-secondary-light">
                    {location.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Our Location
              </h2>
              <GoogleMapEmbed
                mapEmbed={location.mapEmbed}
                locationName={location.displayName}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-8">
            Service Areas in {location.displayName}
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-8">
            We proudly serve the following neighborhoods and surrounding areas:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {location.serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white px-4 py-2 rounded-full text-text-secondary shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Services Available in {location.displayName}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="bg-background-alt rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-semibold text-primary">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Ready for a Sparkling Clean Home?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our professional cleaning team transform your {location.displayName} home.
            Contact us today for a free estimate.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `getStaticPaths` (Pages Router) | `generateStaticParams` (App Router) | Next.js 13+ | Simpler syntax, co-located with page |
| Sync params access | Async params (Promise) | Next.js 15 | Must await params in all handlers |
| Static `metadata` export | `generateMetadata` function | When dynamic data needed | Required for slug-based SEO |

**Deprecated/outdated:**
- `getStaticProps` / `getStaticPaths`: Replaced by App Router patterns
- Sync params in generateMetadata: Deprecated in Next.js 15+

## Open Questions

Things that couldn't be fully resolved:

1. **Google Maps Embed Performance**
   - What we know: Iframes with `loading="lazy"` are supported
   - What's unclear: Whether additional performance optimization (intersection observer) is needed
   - Recommendation: Start with native lazy loading in iframe, optimize if metrics show issues

2. **Service Areas as Separate Schema**
   - What we know: LocalBusiness can have `areaServed` property
   - What's unclear: Whether individual neighborhood pages would provide more SEO value
   - Recommendation: Use `areaServed` array for now; defer neighborhood pages to future pSEO phase

## Sources

### Primary (HIGH confidence)
- [Next.js generateStaticParams docs](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) - Dynamic route generation syntax
- [Next.js generateMetadata docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) - Dynamic metadata generation
- [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) - Required/recommended properties
- Codebase: `lib/schema.ts`, `app/services/page.tsx`, `app/residential-cleaning/page.tsx` - Existing patterns

### Secondary (MEDIUM confidence)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness) - Full property definitions
- [Next.js dynamic routes](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) - File conventions

### Tertiary (LOW confidence)
- WebSearch results for iframe best practices - General guidance, verify with testing

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All patterns exist in codebase
- Architecture: HIGH - Official Next.js documentation verified
- Pitfalls: HIGH - Known Next.js 15 breaking changes documented
- Schema: HIGH - Google's official structured data docs

**Research date:** 2026-01-29
**Valid until:** 60 days (stable patterns, no expected breaking changes)
