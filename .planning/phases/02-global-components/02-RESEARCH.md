# Phase 2: Global Components - Research

**Researched:** 2026-01-28
**Domain:** Next.js App Router shared components, responsive navigation, modals, breadcrumbs, schema markup
**Confidence:** HIGH

## Summary

This research covers the technical requirements for implementing six global components for the Diamond Oasis Cleaning website: Header (with responsive navigation and dropdowns), Footer, Sticky CTA Button, Estimate Modal (with GHL form embed), Breadcrumbs, and Schema Markup.

The project uses **Next.js 16** with **Tailwind CSS v4** (CSS-first configuration via `@theme` block). Phase 1 has established the foundation with brand colors, fonts, and data files already configured.

**Primary recommendation:** Use **Headless UI** (@headlessui/react) for accessible dropdown menus and dialog modals. This library is maintained by the Tailwind Labs team, designed to work seamlessly with Tailwind CSS, and provides battle-tested accessibility features out of the box.

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| @headlessui/react | ^2.x | Accessible dropdown menus and modals | Official Tailwind companion library; handles keyboard navigation, focus trapping, ARIA attributes automatically |
| next/navigation | (built-in) | usePathname for breadcrumbs | Official Next.js hook for client-side path access |
| schema-dts | ^1.x | TypeScript types for Schema.org | Provides type safety for JSON-LD structured data |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| clsx | ^2.x | Conditional class merging | When building components with many conditional Tailwind classes |
| tailwind-merge | ^2.x | Merge conflicting Tailwind classes | When component variants need to override base classes |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Headless UI | Radix UI | Radix is excellent but larger bundle; Headless UI integrates better with Tailwind ecosystem |
| Headless UI | Native `<dialog>` element | Limited browser support for modal patterns; requires more manual accessibility work |
| Headless UI | Custom implementation | High risk of accessibility bugs; keyboard navigation and focus trapping are complex |
| focus-trap-react | Headless UI Dialog | Headless UI Dialog includes focus trapping built-in; no need for separate library |

**Installation:**
```bash
npm install @headlessui/react schema-dts clsx
```

## Architecture Patterns

### Recommended Project Structure

```
components/
├── layout/                    # Layout-related components
│   ├── Header.tsx            # Responsive header with navigation
│   ├── MobileMenu.tsx        # Mobile hamburger menu (client component)
│   ├── DesktopNav.tsx        # Desktop navigation with dropdowns
│   ├── Footer.tsx            # Footer component
│   └── Breadcrumbs.tsx       # Dynamic breadcrumbs (client component)
├── ui/                        # Reusable UI primitives
│   ├── StickyCtaButton.tsx   # Floating CTA button (client component)
│   ├── EstimateModal.tsx     # Modal with GHL form embed (client component)
│   └── DropdownMenu.tsx      # Reusable dropdown (wraps Headless UI)
├── seo/                       # SEO-related components
│   └── SchemaMarkup.tsx      # JSON-LD injection component (server component)
└── index.ts                   # Barrel export file
```

### Pattern 1: Client vs Server Component Split

**What:** Separate interactive UI from static markup
**When to use:** Always, for components with interactivity (navigation, modals, breadcrumbs)
**Example:**

```typescript
// Source: Next.js App Router documentation
// components/layout/Header.tsx (Server Component - no directive needed)
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.png" alt="Diamond Oasis Cleaning" width={180} height={60} />
        </Link>
        <DesktopNav />     {/* Client component for dropdowns */}
        <MobileMenu />     {/* Client component for mobile menu */}
      </div>
    </header>
  );
}
```

### Pattern 2: Headless UI Menu for Dropdowns

**What:** Accessible dropdown navigation with keyboard support
**When to use:** For "Services" and "About" dropdowns in navigation
**Example:**

```typescript
// Source: Headless UI documentation (https://headlessui.com/react/menu)
'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

export function NavDropdown({ item }: { item: NavItem }) {
  if (!item.children) {
    return <Link href={item.href} className="px-4 py-2 hover:text-primary">{item.name}</Link>;
  }

  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center gap-1 px-4 py-2 hover:text-primary">
        {item.name}
        <ChevronDownIcon className="h-4 w-4" />
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        {item.children.map((child) => (
          <MenuItem key={child.href}>
            <Link
              href={child.href}
              className="block px-4 py-2 text-sm text-text-primary data-[focus]:bg-background-alt"
            >
              {child.name}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
```

### Pattern 3: Headless UI Dialog for Modal

**What:** Accessible modal with focus trapping and backdrop click handling
**When to use:** For the Estimate Modal component
**Example:**

```typescript
// Source: Headless UI documentation (https://headlessui.com/react/dialog)
'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg bg-white rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between p-4 border-b">
            <DialogTitle className="text-xl font-heading text-primary">
              Get Your FREE Estimate
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-2 hover:bg-background-alt rounded-full transition-colors"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4">
            {/* GHL Form iframe */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/jjqVGQG6yKAgawF12waP"
              style={{ width: '100%', height: '622px', border: 'none' }}
              title="Contact Information Form"
            />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
```

### Pattern 4: Breadcrumbs with usePathname

**What:** Dynamic breadcrumbs based on current route
**When to use:** All pages except home page
**Example:**

```typescript
// Source: Next.js + community patterns
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Map slugs to display names
const pathNameMap: Record<string, string> = {
  'about': 'About',
  'services': 'Services',
  'residential-cleaning': 'Residential Cleaning',
  'commercial-cleaning': 'Commercial Cleaning',
  'deep-cleaning': 'Deep Cleaning',
  'move-in-move-out-cleaning': 'Move-In/Move-Out Cleaning',
  'additional-services': 'Additional Services',
  'why-choose-us': 'Why Choose Us',
  'process': 'Our Process',
  'cleaning-tips': 'Cleaning Tips',
  'faqs': "FAQ's",
  'contact-us': 'Contact Us',
  'locations': 'Locations',
  'booking': 'Booking',
  'privacy-policy': 'Privacy Policy',
  'terms-and-conditions': 'Terms & Conditions',
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't render on home page
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link href="/" className="text-text-secondary hover:text-primary">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const isLast = index === segments.length - 1;
          const displayName = pathNameMap[segment] || segment.replace(/-/g, ' ');

          return (
            <li key={href} className="flex items-center gap-2">
              <span className="text-text-secondary">/</span>
              {isLast ? (
                <span className="text-text-primary font-medium">{displayName}</span>
              ) : (
                <Link href={href} className="text-text-secondary hover:text-primary">
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
```

### Pattern 5: Schema Markup Component

**What:** JSON-LD structured data injection with XSS prevention
**When to use:** For Organization schema (site-wide) and BreadcrumbList schema (per page)
**Example:**

```typescript
// Source: Next.js JSON-LD documentation
// components/seo/SchemaMarkup.tsx (Server Component)
import { Organization, BreadcrumbList, WithContext } from 'schema-dts';

interface SchemaMarkupProps {
  schema: WithContext<Organization | BreadcrumbList> | object;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}

// Usage in layout.tsx for Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://diamondoasiscleaning.com/#organization',
  name: 'Diamond Oasis Cleaning',
  description: 'Professional house cleaning services in Las Vegas Valley.',
  url: 'https://diamondoasiscleaning.com',
  telephone: '(725) 502-2820',
  email: 'diamondoasiscleaning@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  priceRange: '$$',
};
```

### Anti-Patterns to Avoid

- **Hand-rolling focus trap logic:** Use Headless UI Dialog which handles focus trapping, Escape key, and outside clicks automatically
- **Using CSS-only dropdowns:** They lack keyboard navigation; Headless UI Menu provides Arrow keys, Home/End, and character search
- **Inline JSON-LD without sanitization:** Always escape `<` to `\u003c` to prevent XSS injection
- **Mixing client/server concerns:** Don't add `'use client'` to components that don't need interactivity; keep Header as server component, only children that need state as client components
- **Complex scroll listeners for sticky buttons:** Use CSS `position: fixed` which is performant; no JavaScript needed

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Dropdown menus | Custom useState/useRef | Headless UI Menu | Keyboard navigation, ARIA, focus management are complex to get right |
| Modal dialogs | Custom div overlay | Headless UI Dialog | Focus trapping, portal rendering, scroll lock, Escape handling |
| Focus trapping | Custom focusTrap logic | Headless UI (built-in) | Edge cases with iframes, dynamic content, multiple focusables |
| JSON-LD types | Manual object typing | schema-dts | Ensures valid Schema.org structure with TypeScript |

**Key insight:** Accessibility is the #1 reason not to hand-roll navigation and modal components. Screen reader support, keyboard navigation, and focus management have many edge cases that are easy to miss.

## Common Pitfalls

### Pitfall 1: Iframe Focus Escape in Modal

**What goes wrong:** When the GHL form iframe is inside a modal, pressing Tab at the end of the iframe can escape the focus trap and move focus to browser UI elements.

**Why it happens:** Iframes have their own DOM; once focus enters, the parent document loses control of tab order.

**How to avoid:** Add a visually hidden, focusable element after the iframe that captures focus and redirects it back to the modal's first focusable element.

**Warning signs:** During testing, pressing Tab repeatedly causes focus to leave the modal while it's still open.

### Pitfall 2: Hydration Mismatch with Navigation State

**What goes wrong:** Mobile menu state (`isOpen`) causes hydration errors when server-rendered HTML doesn't match client state.

**Why it happens:** If mobile menu initializes as open on client but server renders it closed.

**How to avoid:** Always initialize `useState(false)` for menu state; never read from localStorage or window during initial render.

**Warning signs:** Console error: "Text content does not match server-rendered HTML"

### Pitfall 3: Schema Markup Duplication

**What goes wrong:** After navigation, JSON-LD scripts appear multiple times in the DOM.

**Why it happens:** App Router RSC payload can duplicate scripts during hydration in certain configurations.

**How to avoid:** Place Organization schema only in root layout; place page-specific schemas (BreadcrumbList, Service, LocalBusiness) in individual page.tsx files, not layouts.

**Warning signs:** Google Search Console shows duplicate structured data warnings.

### Pitfall 4: Sticky CTA Z-Index Conflicts

**What goes wrong:** Sticky CTA button appears behind modals or dropdowns.

**Why it happens:** Z-index stacking context conflicts.

**How to avoid:** Establish clear z-index scale:
- Header: z-40
- Sticky CTA: z-50
- Modal backdrop: z-[60]
- Modal content: z-[70]

**Warning signs:** CTA button visible through modal backdrop.

### Pitfall 5: Legacy URL Handling for Breadcrumbs

**What goes wrong:** Breadcrumbs show ugly paths like `/residential-cleaning369987` instead of "Residential Cleaning".

**Why it happens:** Path segments are displayed directly without mapping.

**How to avoid:** Create a `pathNameMap` object that maps URL slugs to display names. Handle both legacy URLs (with numbers) and clean URLs.

**Warning signs:** Breadcrumbs display raw URL segments instead of human-readable names.

## Code Examples

### Mobile Navigation Toggle

```typescript
// Source: Community patterns + Headless UI
'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Booking', href: '/booking' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-text-primary"
        aria-label="Open menu"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="md:hidden">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <span className="font-heading text-primary text-xl">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-6">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-lg text-text-primary hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8">
            <button className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-secondary-light transition-colors">
              Get FREE Estimate
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
```

### Footer Component Structure

```typescript
// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Booking', href: '/booking' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions' },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div>
            <Image src="/images/logo.png" alt="Diamond Oasis Cleaning" width={150} height={50} />
            <p className="mt-4 text-sm">Las Vegas, NV</p>
            <p className="text-sm">
              <a href="tel:+17255022820">(725) 502-2820</a>
            </p>
            <p className="text-sm">
              <a href="mailto:diamondoasiscleaning@gmail.com">diamondoasiscleaning@gmail.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-secondary-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-secondary-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-secondary-light"
                  aria-label={link.name}
                >
                  {/* Icon component here */}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          &copy; Diamond Oasis Cleaning 2025 All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
```

### Sticky CTA Button

```typescript
// components/ui/StickyCtaButton.tsx
'use client';

import { useState } from 'react';
import EstimateModal from './EstimateModal';

export default function StickyCtaButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        aria-label="Get Free Estimate"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Get FREE Estimate
      </button>
      <EstimateModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
```

### BreadcrumbList Schema Generator

```typescript
// lib/generateBreadcrumbSchema.ts
import { BreadcrumbList, WithContext } from 'schema-dts';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[]
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://diamondoasiscleaning.com${item.href}`,
    })),
  };
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Tailwind config.js for colors | @theme CSS block in globals.css | Tailwind v4 (2024) | Simpler configuration, native CSS variables |
| useRouter for pathname | usePathname from next/navigation | Next.js 13+ App Router | Cleaner API, client component only |
| Custom focus trap libraries | Headless UI built-in | Headless UI 2.x | Fewer dependencies, better integration |
| React.createPortal for modals | Headless UI Dialog (auto-portal) | Headless UI 2.x | Automatic portal handling |

**Deprecated/outdated:**
- `router.pathname` from `next/router` - Replaced by `usePathname()` from `next/navigation` in App Router
- `tailwind.config.js` color definitions - Still works but Tailwind v4 prefers `@theme` CSS block
- Manual scroll lock for modals - Headless UI Dialog handles automatically

## Open Questions

1. **Heroicons version**
   - What we know: Heroicons 2.x works with Tailwind; provides outline, solid, and mini variants
   - What's unclear: Whether to install as separate package or inline SVGs
   - Recommendation: Install `@heroicons/react` for consistency; smaller bundle if using many icons

2. **Logo as SVG vs PNG**
   - What we know: FRAMEWORK.md provides PNG URL
   - What's unclear: Whether SVG version is available for better scaling
   - Recommendation: Use PNG as specified; can be replaced with SVG later if brand provides one

3. **Tailwind v4 @theme and SSR**
   - What we know: CSS variables work with SSR
   - What's unclear: Any edge cases with CSS custom properties in server components
   - Recommendation: Test colors render correctly in production build; fallback values in @theme if needed

## Sources

### Primary (HIGH confidence)
- [Headless UI Menu documentation](https://headlessui.com/react/menu) - Dropdown patterns, accessibility
- [Headless UI Dialog documentation](https://headlessui.com/react/dialog) - Modal patterns, focus trapping
- [Next.js JSON-LD Guide](https://nextjs.org/docs/app/guides/json-ld) - Structured data injection
- [Next.js Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages) - Layout patterns
- [Tailwind CSS v4 Theme Variables](https://tailwindcss.com/docs/theme) - @theme configuration

### Secondary (MEDIUM confidence)
- [Tailwind CSS v4.0 Blog](https://tailwindcss.com/blog/tailwindcss-v4) - Overview of v4 changes
- [Next.js 16 Blog](https://nextjs.org/blog/next-16) - App Router improvements
- [Creating Dynamic Breadcrumbs in Next.js](https://medium.com/@kcabading/creating-a-breadcrumb-component-in-a-next-js-app-router-a0ea24cdb91a) - usePathname patterns

### Tertiary (LOW confidence)
- Community patterns for iframe focus trapping in modals - Needs validation during implementation

## Metadata

**Confidence breakdown:**
- Standard Stack: HIGH - Headless UI is well-documented, official Tailwind companion
- Architecture: HIGH - Patterns follow Next.js App Router conventions
- Pitfalls: MEDIUM - Some based on community reports, need validation during implementation

**Research date:** 2026-01-28
**Valid until:** 2026-02-28 (30 days - stable ecosystem)
