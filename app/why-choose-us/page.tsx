import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why Las Vegas homeowners trust Diamond Oasis Cleaning. Professional staff, comprehensive services, and a customer-first approach every visit.",
  alternates: {
    canonical: "/why-choose-us",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Why Choose Us", href: "/why-choose-us" },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Why Choose Diamond Oasis Cleaning?
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Quality service, trusted professionals, and a commitment to your
            complete satisfaction.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Section 1: Professional & Reliable */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Professional & Reliable
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Our cleaning professionals are the heart of Diamond Oasis
              Cleaning. Every team member undergoes thorough background checks
              and extensive training to ensure they meet our high standards of
              excellence.
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Fully trained and background-checked cleaning professionals
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>Licensed, bonded, and insured for your peace of mind</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Consistent quality with every visit through proven processes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>Punctual arrivals and respect for your time</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Comprehensive Services */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Comprehensive Services
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Whether you need regular maintenance cleaning, a thorough deep
              clean, or specialized move-in/move-out services, we have you
              covered. Our range of services is designed to meet every cleaning
              need.
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Residential cleaning for homes of all sizes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Commercial cleaning for offices and business spaces
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Deep cleaning for thorough, top-to-bottom refreshes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Move-in/move-out cleaning to help with transitions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Customer-First Approach */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Customer-First Approach
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Your satisfaction is our Diamond Standard. We go above and beyond
              to ensure every customer is completely happy with our service,
              backed by guarantees that give you confidence.
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Love It or Money Back satisfaction guarantee
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Flexible scheduling and free rescheduling up to 24 hours before
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Transparent pricing with no hidden fees or surprises
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">&#10003;</span>
                <span>
                  Quick online estimates and easy booking process
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
