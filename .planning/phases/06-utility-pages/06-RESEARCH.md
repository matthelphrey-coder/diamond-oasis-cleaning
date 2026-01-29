# Phase 6: Utility Pages - Research

**Researched:** 2026-01-29
**Domain:** Next.js static pages, iframe embeds, contact forms, legal pages
**Confidence:** HIGH

## Summary

Phase 6 covers four utility pages: Contact Us, Booking, Privacy Policy, and Terms & Conditions. These pages follow established patterns from the existing codebase and require minimal new technology.

The project already has working patterns for:
- GHL (Go High Level) iframe form embeds (see `InlineEstimateForm.tsx`, `EstimateModal.tsx`)
- Static content pages with hero sections (see `about/page.tsx`, `cleaning-tips/page.tsx`)
- Breadcrumb navigation and schema markup (see `lib/schema.ts`, `Breadcrumbs.tsx`)

Key implementation notes:
- Contact page uses existing GHL iframe pattern (same form already used in EstimateModal)
- Booking page uses BookingKoala iframe (simple embed, no form handling needed)
- Privacy Policy and Terms pages are static content with provided text from FRAMEWORK.md
- All pages follow the established hero + breadcrumbs + content pattern

**Primary recommendation:** Implement all four pages using existing codebase patterns. No new libraries or complex components needed.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 14+ | App Router, static pages | Already in project |
| Tailwind CSS | v4 | Styling | Already configured with brand theme |
| @headlessui/react | 2.x | Accessible components (if needed) | Already installed for modals |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| SchemaMarkup component | - | JSON-LD injection | All pages for breadcrumb schema |
| Breadcrumbs component | - | Navigation | All utility pages |
| InlineEstimateForm | - | GHL form embed | Contact page |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| iframe for GHL | Direct API integration | iframe is simpler, already working in project |
| Static privacy text | CMS/Markdown file | Static is sufficient for rarely-changed legal content |

**Installation:**
No new packages required - all dependencies already installed.

## Architecture Patterns

### Recommended Project Structure
```
app/
├── contact-us/
│   └── page.tsx           # Contact form page with GHL embed
├── booking/
│   └── page.tsx           # BookingKoala embed page
├── privacy-policy/
│   └── page.tsx           # Static privacy policy content
└── terms-and-conditions/
    └── page.tsx           # Static terms content
```

### Pattern 1: Static Content Page (Privacy/Terms)
**What:** Simple pages with hero section, breadcrumbs, and prose content
**When to use:** Legal pages, about-style pages with static text
**Example:**
```typescript
// Source: Established pattern from app/about/page.tsx
import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Diamond Oasis Cleaning",
  description: "Read Diamond Oasis Cleaning's privacy policy...",
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            {/* Static content here */}
          </div>
        </div>
      </section>
    </>
  );
}
```

### Pattern 2: GHL Form Embed Page (Contact)
**What:** Page with embedded GHL form using iframe
**When to use:** Contact page, lead capture pages
**Example:**
```typescript
// Source: Established pattern from components/home/InlineEstimateForm.tsx
"use client";

export default function ContactForm() {
  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/jjqVGQG6yKAgawF12waP"
      className="ghl-form-iframe"
      style={{
        width: "100%",
        height: "700px",
        border: "none",
        display: "block",
        overflow: "hidden",
      }}
      scrolling="no"
      id="contact-jjqVGQG6yKAgawF12waP"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-activation-type="alwaysActivated"
      data-deactivation-type="neverDeactivate"
      data-form-name="Contact Information"
      data-form-id="jjqVGQG6yKAgawF12waP"
      title="Contact Form"
    />
  );
}
```

### Pattern 3: Third-Party Booking Embed (Booking)
**What:** Full-page BookingKoala iframe embed
**When to use:** Booking page
**Example:**
```typescript
// Source: FRAMEWORK.md BookingKoala specification
"use client";

export default function BookingEmbed() {
  return (
    <iframe
      src="https://diamondoasiscleaning.bookingkoala.com/booknow?embed=true"
      style={{
        border: "none",
        height: "3000px",
        width: "100%",
      }}
      scrolling="no"
      title="Book Cleaning Service"
    />
  );
}
```

### Anti-Patterns to Avoid
- **Building custom contact forms:** GHL handles form submission, validation, and lead capture. Do not rebuild this functionality.
- **Storing legal content in database/CMS:** Privacy/Terms content rarely changes. Static text in page files is simpler.
- **Adding unnecessary interactivity:** These are primarily static/embed pages. Keep them simple server components where possible.
- **Skipping breadcrumb schema:** All pages need breadcrumb JSON-LD for SEO consistency.

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Contact form | Custom form with validation | GHL iframe embed | Form handling, validation, lead routing already handled |
| Booking system | Custom booking UI | BookingKoala embed | Complex scheduling, payments, availability already solved |
| Prose styling | Custom CSS for legal text | Tailwind Typography plugin OR manual prose classes | Consistent, readable long-form content |
| Schema generation | Manual JSON objects | Existing `generateBreadcrumbSchema()` | Type-safe, reusable |

**Key insight:** Utility pages are not feature-rich. The value is in correct implementation of existing patterns, not innovation.

## Common Pitfalls

### Pitfall 1: iframe Height Issues
**What goes wrong:** BookingKoala or GHL form gets cut off or shows scrollbars
**Why it happens:** Fixed heights don't account for form state changes
**How to avoid:**
- Use generous heights (700px for GHL, 3000px for BookingKoala as specified)
- Apply `.ghl-form-iframe` class (already in globals.css) to hide scrollbars
- Test with different form states (errors, success messages)
**Warning signs:** Scrollbars appearing, content cut off on mobile

### Pitfall 2: Missing Mobile Responsiveness
**What goes wrong:** iframes don't resize properly on mobile
**Why it happens:** Width set to fixed pixels instead of percentage
**How to avoid:**
- Always use `width: "100%"` for iframes
- Test on actual mobile devices (not just browser resize)
- Container should have appropriate padding
**Warning signs:** Horizontal scroll on mobile, form elements too small to tap

### Pitfall 3: Legal Content Formatting Issues
**What goes wrong:** Privacy/Terms text is hard to read (walls of text)
**Why it happens:** No prose styling applied
**How to avoid:**
- Use proper heading hierarchy (h2 for sections)
- Use Tailwind prose classes or manual spacing
- Break content into logical sections with visual separation
**Warning signs:** Very long paragraphs, no visual hierarchy

### Pitfall 4: Breadcrumbs Path Mismatch
**What goes wrong:** Breadcrumb component shows wrong path or errors
**Why it happens:** pathNameMap in Breadcrumbs.tsx missing new page slugs
**How to avoid:**
- Verify `contact-us`, `booking`, `privacy-policy`, `terms-and-conditions` are in pathNameMap
- They already are! (Checked in existing Breadcrumbs.tsx)
**Warning signs:** Breadcrumbs showing raw slugs instead of display names

### Pitfall 5: Missing Script for BookingKoala
**What goes wrong:** BookingKoala iframe doesn't load or function properly
**Why it happens:** Forgot to include the embed.js script
**How to avoid:**
- Include the script tag using next/script with `strategy="afterInteractive"`
- Script URL: `https://diamondoasiscleaning.bookingkoala.com/resources/embed.js`
**Warning signs:** Empty iframe, console errors about undefined functions

## Code Examples

Verified patterns from existing codebase:

### Hero Section (Standard Pattern)
```typescript
// Source: Existing pattern in app/about/page.tsx, app/faqs/page.tsx, etc.
<section className="bg-primary text-white py-16 lg:py-20">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
      {pageTitle}
    </h1>
    <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
      {pageSubtitle}
    </p>
  </div>
</section>
```

### Breadcrumbs Integration
```typescript
// Source: Consistent pattern across all existing pages
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact-us" },
];

// In component:
<SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
<div className="container mx-auto px-4">
  <Breadcrumbs />
</div>
```

### CTA Section (for Contact/Booking pages)
```typescript
// Source: Pattern from app/cleaning-tips/page.tsx
<section className="py-16 bg-background-alt">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
      CTA Heading
    </h2>
    <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
      CTA description text
    </p>
    <Link
      href="/booking"
      className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-8 rounded-full transition-colors"
    >
      Book Now
    </Link>
  </div>
</section>
```

### BookingKoala Script Loading
```typescript
// Source: FRAMEWORK.md specification, Next.js Script best practice
import Script from "next/script";

// In booking page:
<Script
  src="https://diamondoasiscleaning.bookingkoala.com/resources/embed.js"
  strategy="afterInteractive"
/>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Custom contact forms | Third-party embed (GHL) | Project decision | Eliminates form handling complexity |
| Server-rendered iframes | Client component with iframe | React 18+ | Cleaner hydration |

**Deprecated/outdated:**
- None relevant to this phase - using straightforward static pages and iframes

## Open Questions

Things that couldn't be fully resolved:

1. **BookingKoala iframe dynamic height**
   - What we know: FRAMEWORK.md specifies 3000px height, which is generous
   - What's unclear: Whether BookingKoala supports dynamic height via postMessage
   - Recommendation: Use fixed 3000px as specified; works reliably

2. **Privacy Policy legal completeness**
   - What we know: FRAMEWORK.md provides specific content to use
   - What's unclear: Whether content covers all 2026 state requirements (Kentucky, Indiana, Rhode Island)
   - Recommendation: Use provided content; legal review is business decision, not technical

## Sources

### Primary (HIGH confidence)
- Existing codebase patterns (`app/about/page.tsx`, `app/faqs/page.tsx`, `app/residential-cleaning/page.tsx`)
- `FRAMEWORK.md` - Exact specifications for all four pages
- `components/home/InlineEstimateForm.tsx` - GHL embed pattern
- `components/ui/EstimateModal.tsx` - GHL embed in modal context
- `lib/schema.ts` - Schema generation utilities
- `components/layout/Breadcrumbs.tsx` - Navigation component with pathNameMap

### Secondary (MEDIUM confidence)
- [Next.js Static Page Best Practices](https://nextjs.org/docs/app/building-your-application/rendering/static-site-generation)
- [BookingKoala Embed Documentation](https://help.bookingkoala.com/help/embed-the-forms-on-your-existing-website)
- [GHL Form Embedding Guide](https://help.gohighlevel.com/support/solutions/articles/155000004524-embedding-highlevel-forms-on-non-highlevel-websites)

### Tertiary (LOW confidence)
- [2026 Privacy Law Updates](https://termageddon.com/the-5-privacy-law-changes-coming-in-2026-heres-what-website-owners-need-to-know/) - For awareness only, legal content is provided

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Using existing project dependencies only
- Architecture: HIGH - Following established codebase patterns exactly
- Pitfalls: HIGH - Based on direct codebase analysis and iframe best practices

**Research date:** 2026-01-29
**Valid until:** 60 days (stable domain, no fast-moving dependencies)

---

## Page-Specific Implementation Notes

### UTIL-01: Contact Us Page (`/contact-us`)

**Content source:** FRAMEWORK.md "CONTACT US PAGE" section
**Title:** Contact Diamond Oasis Cleaning | Las Vegas House Cleaning
**Meta description:** Contact Diamond Oasis Cleaning for house cleaning services in Las Vegas. Call (725) 502-2820 or fill out our contact form for a free estimate.

**Structure:**
1. Hero section with "Leave Us a Message" heading
2. Breadcrumbs
3. Two-column layout: Contact info on left, GHL form iframe on right
4. Contact info includes: phone, email, hours
5. Optional: Map embed or directions

**Form:** Use same GHL form ID as EstimateModal: `jjqVGQG6yKAgawF12waP`

### UTIL-02: Booking Page (`/booking`)

**Content source:** FRAMEWORK.md "BOOKING PAGE" section
**Title:** Book House Cleaning Las Vegas | Diamond Oasis Cleaning
**Meta description:** Book your house cleaning in Las Vegas online. Easy scheduling for residential cleaning, deep cleaning, and move-in/move-out services.

**Structure:**
1. Minimal hero (just h1)
2. Breadcrumbs
3. Full-width BookingKoala iframe
4. Script tag for embed.js

**Note:** This is primarily the embed - minimal additional content needed.

### UTIL-03: Privacy Policy Page (`/privacy-policy`)

**Content source:** FRAMEWORK.md "PRIVACY POLICY PAGE" section
**Title:** Privacy Policy | Diamond Oasis Cleaning
**Meta description:** Read Diamond Oasis Cleaning's privacy policy. Learn how we collect, use, and protect your personal information.

**Structure:**
1. Hero section
2. Breadcrumbs
3. Prose content (exact text in FRAMEWORK.md)
4. Optional: Last updated date

**Content styling:** Use prose classes for readable long-form text with proper heading hierarchy.

### UTIL-04: Terms and Conditions Page (`/terms-and-conditions`)

**Content source:** FRAMEWORK.md "TERMS AND CONDITIONS PAGE" section
**Title:** Terms and Conditions | Diamond Oasis Cleaning
**Meta description:** Review the terms and conditions for using Diamond Oasis Cleaning services and website.

**Structure:**
1. Hero section
2. Breadcrumbs
3. Prose content with sections (exact text in FRAMEWORK.md):
   - Welcome intro
   - Use License
   - Communications
   - SMS and Text Messages
   - Privacy Policy link
   - Changes
   - Contact Us
4. Optional: Last updated date

**Content styling:** Use h2 for section headings, appropriate spacing between sections.
