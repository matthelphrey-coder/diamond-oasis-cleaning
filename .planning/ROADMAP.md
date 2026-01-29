# Roadmap: Diamond Oasis Cleaning Website

## Overview

This roadmap delivers a complete Next.js website rebuild for Diamond Oasis Cleaning, replacing their Go High Level template with a custom solution optimized for local SEO and lead conversion. We progress from infrastructure (project setup, data files) through global components (header, footer, CTAs), then build out all pages in logical groups (home, about, services, utility, locations), and finish with SEO polish and technical optimization. Each phase delivers verifiable functionality that builds toward the core value: converting visitors into cleaning service leads.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Infrastructure** - Project setup, data files, Tailwind configuration
- [ ] **Phase 2: Global Components** - Header, footer, sticky CTA, modal, breadcrumbs, schema
- [ ] **Phase 3: Home Page** - Hero with inline form, services overview, testimonials
- [ ] **Phase 4: About Section** - About, Why Choose Us, Process, Tips, FAQs pages
- [ ] **Phase 5: Service Pages** - All service pages with checklists and schema
- [ ] **Phase 6: Utility Pages** - Contact, booking, privacy, terms pages
- [ ] **Phase 7: Location Pages** - Locations hub and 8 individual location pages
- [ ] **Phase 8: SEO & Technical** - Meta tags, schema validation, performance optimization

## Phase Details

### Phase 1: Infrastructure
**Goal**: Project foundation is in place with all data and configuration ready for component development
**Depends on**: Nothing (first phase)
**Requirements**: INFRA-01, INFRA-02, INFRA-03, INFRA-04, INFRA-05
**Success Criteria** (what must be TRUE):
  1. Next.js 14 project runs locally with `npm run dev`
  2. Tailwind CSS renders brand colors (navy #1E3A5F, gold #D4AF37) correctly
  3. Data files (locations.json, services.json, faqs.json, reviews.json) are importable and contain valid JSON
  4. Root layout renders without errors and includes analytics placeholders
  5. File structure matches FRAMEWORK.md specification
**Plans**: TBD

Plans:
- [ ] 01-01: Project initialization and configuration

### Phase 2: Global Components
**Goal**: Reusable components are ready for use across all pages
**Depends on**: Phase 1
**Requirements**: COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06
**Success Criteria** (what must be TRUE):
  1. User can navigate between pages using header menu (desktop and mobile)
  2. Footer displays contact info, quick links, social links, and legal links on every page
  3. Sticky CTA button appears on all pages and opens estimate modal when clicked
  4. Modal displays GHL form embed and can be closed
  5. Breadcrumbs render correctly on subpages (not on home)
**Plans**: TBD

Plans:
- [ ] 02-01: Header and navigation component
- [ ] 02-02: Footer, CTA, modal, breadcrumbs, and schema components

### Phase 3: Home Page
**Goal**: Home page converts visitors with clear value proposition and inline estimate form
**Depends on**: Phase 2
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, HOME-06
**Success Criteria** (what must be TRUE):
  1. User sees hero section with welcome message and can fill out inline GHL form
  2. User can view booking steps and services overview
  3. Why Choose Us section displays four value propositions
  4. Testimonial section displays at least one review
  5. Organization schema validates in Google Rich Results Test
**Plans**: TBD

Plans:
- [ ] 03-01: Home page implementation

### Phase 4: About Section
**Goal**: About pages establish trust and answer common questions
**Depends on**: Phase 2
**Requirements**: ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, ABOUT-05
**Success Criteria** (what must be TRUE):
  1. User can navigate to /about and see guarantees and testimonials
  2. User can navigate to /why-choose-us and see service offerings
  3. User can navigate to /process and see step-by-step cleaning process
  4. User can navigate to /cleaning-tips and see categorized tips
  5. User can navigate to /faqs, expand accordion items, and FAQ schema validates
**Plans**: TBD

Plans:
- [ ] 04-01: About section pages

### Phase 5: Service Pages
**Goal**: Service pages describe offerings with detailed checklists and proper schema
**Depends on**: Phase 2
**Requirements**: SERV-01, SERV-02, SERV-03, SERV-04, SERV-05, SERV-06, SERV-07
**Success Criteria** (what must be TRUE):
  1. User can navigate to /services and see grid of all services
  2. User can navigate to /residential-cleaning with cleaning checklist
  3. User can navigate to /commercial-cleaning (new page not on current site)
  4. User can navigate to /deep-cleaning and /move-in-move-out-cleaning with checklists
  5. Service schema validates on each service page
**Plans**: TBD

Plans:
- [ ] 05-01: Services overview and residential/commercial pages
- [ ] 05-02: Deep cleaning, move-in/move-out, and additional services pages

### Phase 6: Utility Pages
**Goal**: Utility pages enable contact, booking, and legal compliance
**Depends on**: Phase 2
**Requirements**: UTIL-01, UTIL-02, UTIL-03, UTIL-04
**Success Criteria** (what must be TRUE):
  1. User can navigate to /contact-us and submit contact form
  2. User can navigate to /booking and interact with BookingKoala embed
  3. User can navigate to /privacy-policy and view privacy policy content
  4. User can navigate to /terms-and-conditions and view terms content
**Plans**: TBD

Plans:
- [ ] 06-01: Contact, booking, privacy, and terms pages

### Phase 7: Location Pages
**Goal**: Location pages enable local SEO presence across 8 Las Vegas Valley areas
**Depends on**: Phase 2
**Requirements**: LOC-01, LOC-02, LOC-03, LOC-04, LOC-05
**Success Criteria** (what must be TRUE):
  1. User can navigate to /locations and see cards for all 8 locations
  2. User can click through to any individual location page (/locations/[slug])
  3. Each location page displays Google Maps embed, contact info, and service areas
  4. LocalBusiness schema validates on each location page
  5. All 8 location pages render without errors
**Plans**: TBD

Plans:
- [ ] 07-01: Locations hub and dynamic location pages

### Phase 8: SEO & Technical
**Goal**: Site is optimized for search engines and performance
**Depends on**: Phases 3, 4, 5, 6, 7
**Requirements**: SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, SEO-07, SEO-08, SEO-09, SEO-10
**Success Criteria** (what must be TRUE):
  1. All pages have meta titles under 60 chars and descriptions 150-160 chars
  2. Each page has exactly one H1 with primary keyword
  3. BreadcrumbList schema validates on all pages except home
  4. XML sitemap is accessible at /sitemap.xml and robots.txt at /robots.txt
  5. Mobile PageSpeed score > 90 and all breakpoints (375px, 768px, 1024px, 1440px) render correctly
**Plans**: TBD

Plans:
- [ ] 08-01: Meta tags, schema validation, and sitemap/robots
- [ ] 08-02: Image optimization, performance, and final QA

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Infrastructure | 0/1 | Not started | - |
| 2. Global Components | 0/2 | Not started | - |
| 3. Home Page | 0/1 | Not started | - |
| 4. About Section | 0/1 | Not started | - |
| 5. Service Pages | 0/2 | Not started | - |
| 6. Utility Pages | 0/1 | Not started | - |
| 7. Location Pages | 0/1 | Not started | - |
| 8. SEO & Technical | 0/2 | Not started | - |

---
*Roadmap created: 2026-01-28*
*Last updated: 2026-01-28*
