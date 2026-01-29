# Requirements: Diamond Oasis Cleaning

**Defined:** 2026-01-28
**Core Value:** Convert website visitors into cleaning service leads through clear calls-to-action and strong local SEO presence across Las Vegas Valley.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Infrastructure

- [ ] **INFRA-01**: Next.js 14 project initialized with App Router, TypeScript, Tailwind CSS
- [ ] **INFRA-02**: Brand colors and typography configured in Tailwind
- [ ] **INFRA-03**: Data files created (locations.json, services.json, faqs.json, reviews.json)
- [ ] **INFRA-04**: Root layout with base HTML structure and analytics placeholders
- [ ] **INFRA-05**: Project file structure matches FRAMEWORK.md specification

### Global Components

- [ ] **COMP-01**: Header component with responsive navigation and dropdown menus
- [ ] **COMP-02**: Footer component with contact info, quick links, social links, legal links
- [ ] **COMP-03**: Sticky CTA button visible on all pages, opens estimate modal
- [ ] **COMP-04**: Estimate modal with GHL form embed
- [ ] **COMP-05**: Breadcrumbs component for all pages except home
- [ ] **COMP-06**: Schema markup component for structured data injection

### Home Page

- [ ] **HOME-01**: Hero section with welcome message and inline GHL estimate form
- [ ] **HOME-02**: Services overview section with booking steps
- [ ] **HOME-03**: Why Choose Us section with four value propositions
- [ ] **HOME-04**: Satisfaction guarantee section with quote block
- [ ] **HOME-05**: Testimonial section
- [ ] **HOME-06**: Organization schema markup

### About Section

- [ ] **ABOUT-01**: About page (/about) with guarantees and testimonials
- [ ] **ABOUT-02**: Why Choose Us page (/why-choose-us) with service offerings
- [ ] **ABOUT-03**: Our Process page (/process) with step-by-step cleaning process
- [ ] **ABOUT-04**: Cleaning Tips page (/cleaning-tips) with categorized tips
- [ ] **ABOUT-05**: FAQs page (/faqs) with accordion and FAQ schema markup

### Service Pages

- [ ] **SERV-01**: Services overview page (/services) with service grid
- [ ] **SERV-02**: Residential Cleaning page (/residential-cleaning369987) with checklist
- [ ] **SERV-03**: Commercial Cleaning page (/commercial-cleaning) - new page
- [ ] **SERV-04**: Deep Cleaning page (/deep-cleaning) with checklist
- [ ] **SERV-05**: Move-In/Move-Out page (/move-in-move-out-cleaning665245) with checklist
- [ ] **SERV-06**: Additional Services page (/additional-services) with service list and exclusions
- [ ] **SERV-07**: Service schema markup on each service page

### Utility Pages

- [ ] **UTIL-01**: Contact Us page (/contact-us) with contact form
- [ ] **UTIL-02**: Booking page (/booking) with BookingKoala embed
- [ ] **UTIL-03**: Privacy Policy page (/privacy-policy)
- [ ] **UTIL-04**: Terms and Conditions page (/terms-and-conditions)

### Location Pages

- [ ] **LOC-01**: Locations hub page (/locations) with location cards grid
- [ ] **LOC-02**: Dynamic location page template (/locations/[slug])
- [ ] **LOC-03**: All 8 location pages generated with Google Maps embeds
- [ ] **LOC-04**: LocalBusiness schema markup on each location page
- [ ] **LOC-05**: Service areas displayed per location

### SEO & Technical

- [ ] **SEO-01**: Meta titles following framework formulas (under 60 chars)
- [ ] **SEO-02**: Meta descriptions with keywords and CTAs (150-160 chars)
- [ ] **SEO-03**: One H1 per page with primary keyword
- [ ] **SEO-04**: BreadcrumbList schema on all pages except home
- [ ] **SEO-05**: Images optimized (WebP, lazy loading, alt text with keywords)
- [ ] **SEO-06**: XML sitemap generated
- [ ] **SEO-07**: robots.txt configured
- [ ] **SEO-08**: Mobile responsive across all breakpoints (375px, 768px, 1024px, 1440px)
- [ ] **SEO-09**: PageSpeed score > 90 on mobile
- [ ] **SEO-10**: All internal links work, no orphan pages

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Blog & Programmatic SEO

- **BLOG-01**: Blog infrastructure with MDX support
- **BLOG-02**: Blog index page (/blog)
- **BLOG-03**: Dynamic blog post pages (/blog/[slug])
- **BLOG-04**: Neighborhood landing pages (/house-cleaning-[neighborhood])
- **BLOG-05**: Service + location combination pages (/[service]-[location])

### Enhanced Features

- **ENH-01**: Google Reviews API integration
- **ENH-02**: Live chat widget
- **ENH-03**: Before/after photo gallery

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| User accounts/authentication | Not needed for service business |
| E-commerce/payments | Booking handled via BookingKoala |
| CMS/admin panel | Content managed via code, Claude Code maintains |
| Real-time chat | Adds complexity, defer to v2 |
| Google Reviews scraping | Violates Google ToS, manual reviews for now |
| GA/GTM actual setup | Placeholders only, configured post-launch |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| INFRA-01 | Phase 1 | Pending |
| INFRA-02 | Phase 1 | Pending |
| INFRA-03 | Phase 1 | Pending |
| INFRA-04 | Phase 1 | Pending |
| INFRA-05 | Phase 1 | Pending |
| COMP-01 | Phase 2 | Pending |
| COMP-02 | Phase 2 | Pending |
| COMP-03 | Phase 2 | Pending |
| COMP-04 | Phase 2 | Pending |
| COMP-05 | Phase 2 | Pending |
| COMP-06 | Phase 2 | Pending |
| HOME-01 | Phase 3 | Pending |
| HOME-02 | Phase 3 | Pending |
| HOME-03 | Phase 3 | Pending |
| HOME-04 | Phase 3 | Pending |
| HOME-05 | Phase 3 | Pending |
| HOME-06 | Phase 3 | Pending |
| ABOUT-01 | Phase 4 | Pending |
| ABOUT-02 | Phase 4 | Pending |
| ABOUT-03 | Phase 4 | Pending |
| ABOUT-04 | Phase 4 | Pending |
| ABOUT-05 | Phase 4 | Pending |
| SERV-01 | Phase 5 | Pending |
| SERV-02 | Phase 5 | Pending |
| SERV-03 | Phase 5 | Pending |
| SERV-04 | Phase 5 | Pending |
| SERV-05 | Phase 5 | Pending |
| SERV-06 | Phase 5 | Pending |
| SERV-07 | Phase 5 | Pending |
| UTIL-01 | Phase 6 | Pending |
| UTIL-02 | Phase 6 | Pending |
| UTIL-03 | Phase 6 | Pending |
| UTIL-04 | Phase 6 | Pending |
| LOC-01 | Phase 7 | Pending |
| LOC-02 | Phase 7 | Pending |
| LOC-03 | Phase 7 | Pending |
| LOC-04 | Phase 7 | Pending |
| LOC-05 | Phase 7 | Pending |
| SEO-01 | Phase 8 | Pending |
| SEO-02 | Phase 8 | Pending |
| SEO-03 | Phase 8 | Pending |
| SEO-04 | Phase 8 | Pending |
| SEO-05 | Phase 8 | Pending |
| SEO-06 | Phase 8 | Pending |
| SEO-07 | Phase 8 | Pending |
| SEO-08 | Phase 8 | Pending |
| SEO-09 | Phase 8 | Pending |
| SEO-10 | Phase 8 | Pending |

**Coverage:**
- v1 requirements: 43 total
- Mapped to phases: 43
- Unmapped: 0 ✓

---
*Requirements defined: 2026-01-28*
*Last updated: 2026-01-28 after initial definition*
