# Phase 03: Home Page - Research

**Researched:** 2026-01-28
**Domain:** Next.js 16 landing page / home page with inline forms, image optimization, testimonials
**Confidence:** HIGH

## Summary

This phase involves building the home page for Diamond Oasis Cleaning using Next.js 16 with React 19, Tailwind CSS 4, and existing global components from Phase 02. The home page must convert visitors with a clear value proposition, an inline GHL form in the hero section, services overview, value propositions, testimonials, and Organization schema markup.

The project already has critical infrastructure in place: SchemaMarkup component, EstimateModal with GHL iframe pattern, StickyCtaButton, Header/Footer, and brand theming in globals.css. The home page can leverage these existing patterns while adding page-specific sections.

**Primary recommendation:** Build the home page as a Server Component with client islands for interactive elements (inline form). Use Next.js 16 Image component with `preload={true}` for hero image, implement testimonials as a static grid (no carousel needed for 4 testimonials), and ensure the inline GHL form follows the established iframe pattern from EstimateModal.

## Standard Stack

The established libraries/tools for this domain:

### Core (Already Installed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | Framework with App Router | SSG, image optimization, metadata API |
| React | 19.2.3 | UI library | Server Components, React 19 features |
| Tailwind CSS | 4.x | Styling | CSS-based configuration via @theme |
| @headlessui/react | 2.2.9 | Accessible UI primitives | Used in existing modal/nav components |
| @heroicons/react | 2.2.0 | Icons | Consistent icon library |
| clsx | 2.1.1 | Conditional classnames | Standard pattern |

### Supporting (May Need for Testimonials)
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| embla-carousel-react | 8.6.0 | Carousel/slider | Only if >4 testimonials or auto-rotation needed |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Embla Carousel | Static grid | For 4 testimonials, static grid is simpler and more accessible |
| Custom form | GHL iframe | Iframe maintains GHL tracking/attribution; custom form loses features |
| CSS animations | Framer Motion | Not needed for this phase; adds bundle size |

**Installation (if carousel needed):**
```bash
npm install embla-carousel-react
```

## Architecture Patterns

### Recommended Component Structure
```
app/
  page.tsx                      # Home page (Server Component)
components/
  home/
    HeroSection.tsx             # Hero with inline form (Client Component)
    InlineEstimateForm.tsx      # GHL iframe wrapper (Client Component)
    ServicesOverview.tsx        # Services grid (Server Component)
    BookingSteps.tsx            # 3-step process (Server Component)
    WhyChooseUs.tsx             # Value propositions (Server Component)
    SatisfactionGuarantee.tsx   # Quote block (Server Component)
    Testimonials.tsx            # Reviews display (Server Component)
```

### Pattern 1: Server Component with Client Islands
**What:** Keep page-level component as Server Component, use "use client" only for interactive parts
**When to use:** Always for Next.js App Router pages
**Example:**
```typescript
// app/page.tsx - Server Component (default)
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
// ... other imports

export default function HomePage() {
  return (
    <>
      <HeroSection />           {/* Client - has inline form */}
      <ServicesOverview />      {/* Server - static content */}
      <BookingSteps />          {/* Server - static content */}
      <WhyChooseUs />           {/* Server - static content */}
      <SatisfactionGuarantee /> {/* Server - static content */}
      <Testimonials />          {/* Server - static content */}
    </>
  );
}
```

### Pattern 2: Next.js 16 Image for Hero
**What:** Use Image component with preload for LCP optimization
**When to use:** Hero images, above-the-fold content
**Example:**
```typescript
// Source: Next.js 16 official docs
import Image from 'next/image';

<div className="relative w-full h-[600px]">
  <Image
    src="/images/hero/clean-home.webp"
    alt="Professional house cleaning in Las Vegas"
    fill
    sizes="100vw"
    preload={true}        // Next.js 16: replaces 'priority'
    quality={85}
    className="object-cover"
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,..."
  />
</div>
```

### Pattern 3: GHL Inline Form (Reuse Modal Pattern)
**What:** Embed GHL form inline in hero section using same iframe approach as EstimateModal
**When to use:** Hero section inline form
**Example:**
```typescript
// components/home/InlineEstimateForm.tsx
"use client";

export default function InlineEstimateForm() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md">
      <h2 className="text-xl font-heading font-bold text-primary mb-4">
        Get a FREE Estimate
      </h2>
      <div className="min-h-[500px]">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/jjqVGQG6yKAgawF12waP"
          style={{ width: '100%', height: '500px', border: 'none' }}
          title="Free Estimate Form"
          loading="lazy"
        />
      </div>
    </div>
  );
}
```

### Pattern 4: Services Grid with Responsive Columns
**What:** CSS Grid with mobile-first responsive breakpoints
**When to use:** Services overview, value propositions
**Example:**
```typescript
// Source: Tailwind CSS docs
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map(service => (
    <ServiceCard key={service.id} {...service} />
  ))}
</div>
```

### Pattern 5: Booking Steps (Simple Visual Stepper)
**What:** Horizontal numbered steps with icons
**When to use:** Process explanation, not actual multi-step form
**Example:**
```typescript
const steps = [
  { number: 1, title: "Book Online", description: "Contact us for a Free Estimate" },
  { number: 2, title: "Enjoy 5 Star Cleaning", description: "Be booked with one of our amazing professional cleaners!" },
  { number: 3, title: "Manage things online", description: "Keep Track of your cleaning and bookings online" },
];

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
  {steps.map((step, index) => (
    <div key={step.number} className="flex flex-col items-center text-center flex-1">
      <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-4">
        {step.number}
      </div>
      <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
      <p className="text-text-secondary">{step.description}</p>
    </div>
  ))}
</div>
```

### Anti-Patterns to Avoid
- **Using "priority" prop in Next.js 16:** Use `preload={true}` instead (priority is deprecated)
- **Making entire page a Client Component:** Only interactive sections need "use client"
- **Building custom form instead of GHL iframe:** Loses GHL tracking, attribution, and CRM integration
- **Complex carousel for few testimonials:** Static grid is more accessible and performant for 4 items
- **Forgetting min-height on iframe containers:** Causes layout shift during load

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Form handling | Custom form + API routes | GHL iframe embed | GHL handles validation, CRM sync, notifications |
| Image optimization | Manual srcset, lazy loading | Next.js Image component | Automatic WebP, responsive sizes, LCP optimization |
| Icon system | Inline SVGs everywhere | @heroicons/react | Consistent sizing, accessibility, tree-shaking |
| Modal | DIV with z-index hacks | Headless UI Dialog | Focus trap, keyboard navigation, screen readers |
| Responsive grid | Custom breakpoint CSS | Tailwind grid utilities | Tested, consistent, mobile-first |

**Key insight:** The GHL form iframe is intentional - it maintains attribution tracking, handles form validation, integrates with GHL CRM, and sends notifications. Building a custom form would require recreating all this functionality.

## Common Pitfalls

### Pitfall 1: Using Deprecated Image Props
**What goes wrong:** Using `priority` instead of `preload` in Next.js 16
**Why it happens:** Tutorials and examples reference older Next.js versions
**How to avoid:** Always use `preload={true}` for above-the-fold images in Next.js 16
**Warning signs:** Deprecation warnings in console

### Pitfall 2: Iframe Layout Shift
**What goes wrong:** Page jumps when GHL form iframe loads
**Why it happens:** No explicit height set on iframe container
**How to avoid:** Set `min-height` on iframe container matching expected form height (622px for modal, ~500px for inline)
**Warning signs:** CLS (Cumulative Layout Shift) warnings in PageSpeed Insights

### Pitfall 3: Hero Image Not Preloading
**What goes wrong:** Hero image loads late, hurting LCP
**Why it happens:** Missing `preload` prop or lazy loading hero image
**How to avoid:** Add `preload={true}` to hero Image component, ensure it's not inside lazy-loaded section
**Warning signs:** LCP > 2.5s in Core Web Vitals

### Pitfall 4: GHL Form Not Receiving URL Parameters
**What goes wrong:** UTM parameters and attribution data not passed to GHL
**Why it happens:** Iframe isolation from parent page
**How to avoid:** Accept this limitation for inline forms; for critical attribution, use direct links to GHL pages
**Warning signs:** Missing source tracking in GHL contacts

### Pitfall 5: Testimonial Carousel Accessibility Issues
**What goes wrong:** Keyboard users can't navigate carousel, screen readers announce incorrectly
**Why it happens:** Custom carousel without proper ARIA attributes
**How to avoid:** For 4 testimonials, use static grid instead of carousel; if carousel needed, use Embla with proper accessibility setup
**Warning signs:** Tab key doesn't work, no focus indicators

### Pitfall 6: Inconsistent Section Spacing
**What goes wrong:** Sections have different padding, looks unprofessional
**Why it happens:** Ad-hoc spacing per section
**How to avoid:** Define consistent section wrapper: `py-16 lg:py-24` and container: `container mx-auto px-4`
**Warning signs:** Visual inconsistency between sections

## Code Examples

Verified patterns from official sources and project context:

### Hero Section with Inline Form
```typescript
// components/home/HeroSection.tsx
"use client";

import Image from 'next/image';
import InlineEstimateForm from './InlineEstimateForm';

export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero/clean-home.webp"
        alt="Sparkling clean Las Vegas home"
        fill
        sizes="100vw"
        preload={true}
        quality={85}
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Welcome to Diamond Oasis Cleaning
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-white/90">
              We are so excited to have the opportunity to work with you and help keep
              your home or business sparkling clean. As a new local cleaning service in
              Las Vegas, we&apos;re committed to providing reliable, high-quality cleaning
              with a personal touch.
            </p>
          </div>

          {/* Inline Form */}
          <InlineEstimateForm />
        </div>
      </div>
    </section>
  );
}
```

### Services Overview Section
```typescript
// components/home/ServicesOverview.tsx
import Link from 'next/link';
import services from '@/data/services.json';

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            House Cleaning Services You Can See And Feel
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            At Diamond Oasis Cleaning, we understand that your time is valuable,
            and we&apos;re here to give it back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {service.name}
              </h3>
              <p className="text-text-secondary">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Testimonials Section (Static Grid)
```typescript
// components/home/Testimonials.tsx
import reviews from '@/data/reviews.json';

export default function Testimonials() {
  // Get featured testimonial for home page
  const featuredReview = reviews.reviews.find(r => r.author === "Ashley B.");

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl lg:text-3xl font-heading text-primary italic mb-6">
            &ldquo;{featuredReview?.text}&rdquo;
          </blockquote>
          <cite className="text-lg text-text-secondary not-italic">
            &mdash; {featuredReview?.author}
          </cite>
        </div>
      </div>
    </section>
  );
}
```

### Organization Schema for Home Page
```typescript
// Note: organizationSchema already in lib/schema.ts and included via layout.tsx
// For home page, the Organization schema is already applied site-wide.
// No additional schema needed for HOME-06 requirement - it's already covered.
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `priority` prop on Image | `preload` prop on Image | Next.js 16 | Must update all hero images |
| Client Components everywhere | Server Components with client islands | Next.js 13+ App Router | Better performance, smaller bundles |
| Custom carousels | Embla Carousel or static grids | 2024-2025 | Better accessibility, performance |
| CSS-in-JS (styled-components) | Tailwind CSS utility classes | 2023-2024 | Zero runtime, better DX |

**Deprecated/outdated:**
- `priority` prop on next/image (use `preload` in Next.js 16)
- `next/legacy/image` component (use `next/image`)
- getServerSideProps/getStaticProps (use App Router patterns)

## Open Questions

Things that couldn't be fully resolved:

1. **GHL Form Height Variation**
   - What we know: Modal uses 622px height, works well
   - What's unclear: Optimal height for inline hero placement
   - Recommendation: Start with 500px min-height, adjust based on actual form rendering

2. **Hero Background Image Source**
   - What we know: Should use Unsplash images per FRAMEWORK.md
   - What's unclear: Exact image selected/downloaded
   - Recommendation: Use placeholder path, task should include image selection/download

3. **Testimonial Display Strategy**
   - What we know: FRAMEWORK.md shows one featured testimonial on home page
   - What's unclear: Whether to show grid of all 4 or just 1 featured
   - Recommendation: Show single featured testimonial per FRAMEWORK.md spec (Ashley B. quote)

## Sources

### Primary (HIGH confidence)
- Next.js 16 Image Component docs - preload property, responsive images
- EstimateModal.tsx (project) - GHL iframe pattern
- FRAMEWORK.md (project) - Content, structure, requirements
- lib/schema.ts (project) - Organization schema implementation
- data/services.json, data/reviews.json (project) - Data sources

### Secondary (MEDIUM confidence)
- [Next.js Image Component Docs](https://nextjs.org/docs/app/api-reference/components/image) - Verified preload vs priority
- [Embla Carousel React](https://www.embla-carousel.com/get-started/react/) - Installation, usage
- [GHL Embedding Forms](https://help.gohighlevel.com/support/solutions/articles/155000004524-embedding-highlevel-forms-on-non-highlevel-websites) - Iframe best practices

### Tertiary (LOW confidence)
- WebSearch results for hero section CTA patterns - General best practices, not Next.js specific

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Using project's existing dependencies
- Architecture: HIGH - Follows established patterns from Phase 02
- Image optimization: HIGH - Verified Next.js 16 docs
- GHL integration: HIGH - Existing EstimateModal provides working pattern
- Pitfalls: MEDIUM - Based on docs and community patterns

**Research date:** 2026-01-28
**Valid until:** 60 days (stable stack, no major version changes expected)
