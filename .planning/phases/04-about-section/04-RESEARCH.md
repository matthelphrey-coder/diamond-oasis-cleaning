# Phase 04: About Section - Research

**Researched:** 2026-01-29
**Domain:** Static content pages with FAQ accordion and schema markup
**Confidence:** HIGH

## Summary

Phase 4 creates five "About" section pages: About, Why Choose Us, Process, Cleaning Tips, and FAQs. The technical complexity is low - these are primarily static content pages with the exception of the FAQs page which requires an accessible accordion component and FAQPage schema markup.

The project already has all required infrastructure in place:
- Headless UI `@headlessui/react@2.2.9` provides the `Disclosure` component for building accordions
- Heroicons `@heroicons/react@2.2.0` for icons (chevrons for accordion expand/collapse)
- `SchemaMarkup` component exists at `components/seo/SchemaMarkup.tsx` for injecting JSON-LD
- `Breadcrumbs` component exists at `components/layout/Breadcrumbs.tsx` and already has all about section paths mapped
- `lib/schema.ts` has utility functions for breadcrumb schema generation
- `data/faqs.json` contains all 16 FAQ items ready for rendering
- `data/reviews.json` contains testimonials for the About page

**Primary recommendation:** Build static Server Components for all pages, create a reusable `FAQAccordion` client component using Headless UI Disclosure, and add `generateFAQSchema` utility function to `lib/schema.ts`.

## Standard Stack

The established libraries/tools for this domain:

### Core (Already Installed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| @headlessui/react | 2.2.9 | Accessible Disclosure/accordion | Built by Tailwind Labs, unstyled, full a11y |
| @heroicons/react | 2.2.0 | Icons for UI elements | Official Tailwind companion icon set |
| Next.js | 16.1.6 | Page routing and SSG | Already project framework |
| Tailwind CSS | 4.x | Styling | Already project styling |

### Supporting (Already Installed)
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| clsx | 2.1.1 | Conditional class names | Accordion open/closed states |

### No Additional Dependencies Required
All functionality for Phase 4 can be achieved with existing dependencies.

## Architecture Patterns

### Recommended Project Structure
```
app/
├── about/
│   └── page.tsx              # About page (Server Component)
├── why-choose-us/
│   └── page.tsx              # Why Choose Us (Server Component)
├── process/
│   └── page.tsx              # Our Process (Server Component)
├── cleaning-tips/
│   └── page.tsx              # Cleaning Tips (Server Component)
└── faqs/
    └── page.tsx              # FAQs page (Server Component with client accordion)

components/
├── about/
│   ├── GuaranteesSection.tsx # 3 guarantee cards for About page
│   └── TestimonialsGrid.tsx  # Multiple testimonials grid
├── process/
│   └── ProcessSteps.tsx      # Step-by-step visual timeline
├── tips/
│   └── TipsGrid.tsx          # Categorized tips cards
└── faqs/
    └── FAQAccordion.tsx      # Client component using Headless UI Disclosure

lib/
└── schema.ts                 # Add generateFAQSchema function
```

### Pattern 1: Static Content Page with Metadata
**What:** Server Component page with exported metadata
**When to use:** All five about section pages
**Example:**
```typescript
// Source: Existing pattern from app/page.tsx
import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Diamond Oasis Cleaning | Las Vegas House Cleaning",
  description: "Learn about Diamond Oasis Cleaning...",
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <div className="container mx-auto px-4">
        <Breadcrumbs />
        {/* Page content */}
      </div>
    </>
  );
}
```

### Pattern 2: Headless UI Disclosure for FAQ Accordion
**What:** Accessible accordion using Disclosure component
**When to use:** FAQs page only
**Example:**
```typescript
// Source: https://headlessui.com/react/disclosure
"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq) => (
        <Disclosure key={faq.id}>
          <DisclosureButton className="group flex w-full justify-between py-4 text-left">
            <span className="text-lg font-heading font-medium text-primary">
              {faq.question}
            </span>
            <ChevronDownIcon
              className={clsx(
                "w-5 h-5 text-primary transition-transform duration-200",
                "group-data-[open]:rotate-180"
              )}
            />
          </DisclosureButton>
          <DisclosurePanel className="pb-4 text-text-secondary">
            {faq.answer}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  );
}
```

### Pattern 3: FAQPage Schema Generation
**What:** Utility function to generate FAQPage JSON-LD
**When to use:** FAQs page only
**Example:**
```typescript
// Source: https://developers.google.com/search/docs/appearance/structured-data/faqpage
interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
```

### Anti-Patterns to Avoid
- **Multiple Disclosure open states managed globally:** Let each Disclosure manage its own state (Headless UI default behavior allows multiple panels open simultaneously, which is fine for FAQs)
- **Custom accordion implementation:** Use Headless UI Disclosure - it handles all accessibility (aria-expanded, aria-controls, keyboard navigation)
- **Inline JSON-LD strings:** Use the existing SchemaMarkup component which sanitizes against XSS
- **Client components for static content:** Only FAQAccordion needs "use client" - keep pages as Server Components

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Accessible accordion | Custom useState toggle | Headless UI Disclosure | Handles aria-expanded, aria-controls, Enter/Space keyboard, focus management |
| Schema markup injection | Template literal in JSX | SchemaMarkup component | Sanitizes against XSS, proper script type |
| Breadcrumb schema | Manual object construction | generateBreadcrumbSchema | Consistent URL handling, tested utility |
| Conditional classes | String concatenation | clsx | Cleaner, handles undefined/false |
| Icons | SVG inline or custom icons | @heroicons/react | Consistent with project, tree-shakeable |

**Key insight:** The project already has all the infrastructure. Phase 4 is about using existing patterns consistently, not introducing new patterns.

## Common Pitfalls

### Pitfall 1: FAQ Schema Content Mismatch
**What goes wrong:** Schema markup contains different text than visible page content
**Why it happens:** Generating schema from data but displaying modified text
**How to avoid:** Use the same data source (faqs.json) for both rendering AND schema generation
**Warning signs:** Google Search Console warnings about schema/content mismatch

### Pitfall 2: Missing Breadcrumbs Component on Subpages
**What goes wrong:** Inconsistent navigation UX, missing breadcrumb schema
**Why it happens:** Forgetting to include Breadcrumbs component on new pages
**How to avoid:** Every non-home page MUST include:
1. `<Breadcrumbs />` component
2. `<SchemaMarkup schema={breadcrumbSchema} />` with generated schema
**Warning signs:** No breadcrumb visible below header

### Pitfall 3: Accordion Accessibility Missing
**What goes wrong:** Screen readers can't navigate FAQ items
**Why it happens:** Building custom accordion without ARIA attributes
**How to avoid:** Use Headless UI Disclosure which handles all a11y automatically:
- `aria-expanded` on button
- `aria-controls` linking button to panel
- `Enter` and `Space` key toggles
- Focus management
**Warning signs:** Can't navigate with Tab/Enter keys

### Pitfall 4: Forgetting Image Alt Text
**What goes wrong:** Accessibility issues, poor SEO
**Why it happens:** Quickly adding images without alt
**How to avoid:** Every `<Image>` or `<img>` MUST have descriptive alt text
**Warning signs:** ESLint a11y warnings

### Pitfall 5: Duplicate Schema on Pages with Multiple Components
**What goes wrong:** Multiple FAQPage schemas or conflicting schemas
**Why it happens:** Adding schema in multiple components
**How to avoid:** Schema markup belongs at the PAGE level, not component level. Only the page.tsx should render SchemaMarkup components.
**Warning signs:** Rich results test shows duplicate schemas

## Code Examples

Verified patterns from official sources:

### Page Hero Section Pattern
```typescript
// Source: Existing pattern from components/home/HeroSection.tsx
function PageHero({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
```

### Guarantee Card Pattern (for About page)
```typescript
// Source: Existing pattern from components/home/WhyChooseUs.tsx
interface GuaranteeCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function GuaranteeCard({ icon: Icon, title, description }: GuaranteeCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-secondary" />
      </div>
      <h3 className="text-xl font-heading font-bold text-primary mb-3">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
```

### Process Steps Pattern
```typescript
// Visual step-by-step timeline
const processSteps = [
  { number: 1, title: "Booking and Consultation", description: "..." },
  { number: 2, title: "Pre-Cleaning Preparation", description: "..." },
  // ...
];

function ProcessSteps() {
  return (
    <div className="space-y-8">
      {processSteps.map((step, index) => (
        <div key={step.number} className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl">
              {step.number}
            </div>
            {index < processSteps.length - 1 && (
              <div className="w-0.5 h-16 bg-secondary/30 mx-auto mt-2" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-text-secondary">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Testimonial Grid Pattern (for About page)
```typescript
// Source: Derived from data/reviews.json structure
import reviews from "@/data/reviews.json";

function TestimonialsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.reviews.map((review) => (
        <blockquote
          key={review.id}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          {/* Star rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: review.rating }).map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-secondary fill-secondary" />
            ))}
          </div>
          <p className="text-text-secondary italic mb-4">
            &ldquo;{review.text}&rdquo;
          </p>
          <footer className="font-medium text-primary">
            &mdash; {review.author}
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
```

### Tips Category Card Pattern
```typescript
// For Cleaning Tips page categorized sections
interface TipCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tips: string[];
}

function TipCategoryCard({ title, icon: Icon, tips }: TipCategory) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-secondary" />
        <h3 className="text-xl font-heading font-bold text-primary">{title}</h3>
      </div>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2 text-text-secondary">
            <span className="text-secondary font-bold">-</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| react-accessible-accordion | Headless UI Disclosure | 2023 | Headless UI is now standard for Tailwind projects |
| Manual aria attributes | Headless UI automatic | - | Zero a11y config needed |
| Page-level getStaticProps | App Router metadata export | Next.js 13+ | Simpler metadata API |
| Custom JSON-LD string | SchemaMarkup component | Project Phase 2 | XSS-safe, consistent |

**Deprecated/outdated:**
- `data-open` attribute: Headless UI 2.x uses `data-[open]` syntax for Tailwind CSS targeting

## Open Questions

1. **FAQ Rich Results Eligibility**
   - What we know: Google restricts FAQ rich results to "well-known, authoritative websites that are government-focused or health-focused"
   - What's unclear: Whether Diamond Oasis Cleaning will qualify for FAQ rich results
   - Recommendation: Implement FAQPage schema anyway - it helps Google understand content structure even without rich results, and eligibility may expand in the future

2. **Tips Page Content Structure**
   - What we know: FRAMEWORK.md provides category headings but not detailed tip content
   - What's unclear: How many tips per category, specific tip text
   - Recommendation: Use the category structure from FRAMEWORK.md (General Home, Specialty, Seasonal) and create 3-4 tips per subcategory based on the descriptions provided

## Sources

### Primary (HIGH confidence)
- Headless UI Disclosure docs - https://headlessui.com/react/disclosure
- Google FAQPage structured data - https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Project codebase - existing components and patterns

### Secondary (MEDIUM confidence)
- Web search results on FAQ schema best practices (multiple sources agree)

### Tertiary (LOW confidence)
- None required - this phase uses established project patterns

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - all dependencies already installed, verified versions
- Architecture: HIGH - follows existing project patterns exactly
- Pitfalls: HIGH - based on actual schema docs and a11y requirements

**Research date:** 2026-01-29
**Valid until:** 90 days (stable domain, no fast-moving APIs)
