# Diamond Oasis Cleaning Website

## What This Is

A professional house cleaning website for Diamond Oasis Cleaning, a local cleaning service in Las Vegas Valley. The site replaces an existing Go High Level template with a custom Next.js build optimized for local SEO, AI discoverability, and lead conversion. Serves 8 locations across the Las Vegas metro area.

## Core Value

Convert website visitors into cleaning service leads through clear calls-to-action and strong local SEO presence across Las Vegas Valley.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] All existing pages migrated with exact same URLs preserved
- [ ] Schema markup (Organization, Service, LocalBusiness, FAQ, Breadcrumb) validates on all pages
- [ ] Mobile PageSpeed score > 90
- [ ] Sticky "Get Free Estimate" CTA visible on every page
- [ ] Inline estimate form on home page hero + modal everywhere else
- [ ] 8 location pages with Google Maps embeds and LocalBusiness schema
- [ ] BookingKoala embed on /booking page
- [ ] GHL form integration for lead capture
- [ ] Responsive design across all breakpoints (375px, 768px, 1024px, 1440px)
- [ ] Commercial Cleaning page (new page not on current site)
- [ ] Privacy Policy and Terms pages (new)
- [ ] All internal links work, no orphan pages
- [ ] Images optimized with lazy loading
- [ ] XML sitemap and robots.txt configured

### Out of Scope

- Blog/pSEO infrastructure — deferred to Phase 2 after v1 launch
- Google Reviews API integration — manual reviews.json for now (ToS compliance)
- OAuth/user accounts — no user authentication needed
- Real-time chat — not part of current requirements
- Google Analytics/GTM setup — placeholders only, IDs added post-launch

## Context

**Current site:** https://diamondoasiscleaning.com (Go High Level template)

**Tech stack:** Next.js 14 with App Router, TypeScript, Tailwind CSS, deployed to Vercel

**Content source:** All page content, URLs, embed codes, location data, and schema requirements documented in FRAMEWORK.md

**URL preservation critical:** Several URLs have unusual suffixes (e.g., `/residential-cleaning369987`, `/move-in-move-out-cleaning665245`) that must be maintained exactly for SEO continuity.

**Third-party integrations:**
- GHL form embed for lead capture (modal + inline)
- BookingKoala embed for booking page
- Google Maps embeds for 8 locations

**8 service locations:**
- South Las Vegas
- East Las Vegas
- West Las Vegas
- Northwest Las Vegas
- Central Las Vegas
- Henderson
- Southwest Las Vegas
- Summerlin

## Constraints

- **URL structure**: Must preserve all existing URLs exactly — SEO equity at stake
- **Embeds**: Must use provided GHL and BookingKoala embed codes — business workflow depends on them
- **Images**: Use Unsplash stock images until brand photos provided
- **No backend**: Static site generation only — no database or server-side logic
- **Schema compliance**: All structured data must pass Google Rich Results Test

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js 14 App Router | SSG for speed, built-in image optimization, excellent SEO support, easy Claude Code maintenance | — Pending |
| Tailwind CSS | Rapid development, consistent styling, easy to maintain | — Pending |
| JSON data files | Simple maintenance, no database overhead, easy for Claude Code updates | — Pending |
| Modal + inline form | Home page gets inline form for immediate conversion, modal available everywhere else | — Pending |
| Stock images initially | No brand photos available, Unsplash provides quality placeholders | — Pending |

---
*Last updated: 2026-01-28 after initialization*
