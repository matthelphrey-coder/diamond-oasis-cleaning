"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Map URL slugs to display names
const pathNameMap: Record<string, string> = {
  // Main pages
  about: "About",
  services: "Services",
  locations: "Locations",
  "contact-us": "Contact Us",
  booking: "Booking",
  // About section pages
  "why-choose-us": "Why Choose Us",
  process: "Our Process",
  "cleaning-tips": "Cleaning Tips",
  faqs: "FAQs",
  // Service pages
  "residential-cleaning369987": "Residential Cleaning",
  "commercial-cleaning": "Commercial Cleaning",
  "deep-cleaning": "Deep Cleaning",
  "move-in-move-out-cleaning665245": "Move-In/Move-Out Cleaning",
  "additional-services": "Additional Services",
  // Legal pages
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms & Conditions",
  // Blog (future)
  blog: "Blog",
};

/**
 * Get display name for a URL segment
 * Falls back to title-cased version if not in map
 */
function getDisplayName(segment: string): string {
  if (pathNameMap[segment]) {
    return pathNameMap[segment];
  }
  // Fallback: convert slug to title case
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't render breadcrumbs on home page
  if (pathname === "/") {
    return null;
  }

  // Split pathname into segments and filter empty strings
  const segments = pathname.split("/").filter(Boolean);

  // Build breadcrumb items with cumulative hrefs
  const breadcrumbItems = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const name = getDisplayName(segment);
    const isLast = index === segments.length - 1;

    return { segment, href, name, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm">
        {/* Home link */}
        <li>
          <Link
            href="/"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            Home
          </Link>
        </li>

        {breadcrumbItems.map(({ segment, href, name, isLast }) => (
          <li key={segment} className="flex items-center space-x-2">
            <span className="text-text-secondary" aria-hidden="true">
              /
            </span>
            {isLast ? (
              <span className="text-text-primary font-medium" aria-current="page">
                {name}
              </span>
            ) : (
              <Link
                href={href}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                {name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
