// Schema.org structured data utilities for SEO

const SITE_URL = "https://diamondoasiscleaning.com";

/**
 * Organization/LocalBusiness schema for site-wide use
 * Based on FRAMEWORK.md Organization Schema specification
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Diamond Oasis Cleaning",
  description:
    "Professional house cleaning services in Las Vegas Valley. Residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning services.",
  url: SITE_URL,
  telephone: "(725) 502-2820",
  email: "diamondoasiscleaning@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://facebook.com/diamondoasiscleaning",
    "https://instagram.com/diamondoasiscleaning",
  ],
};

/**
 * Generate BreadcrumbList schema from an array of breadcrumb items
 */
export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

/**
 * FAQ item interface for schema generation
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate FAQPage schema from an array of FAQ items
 * https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
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
