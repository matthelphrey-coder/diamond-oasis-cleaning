import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import TipsGrid from "@/components/tips/TipsGrid";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cleaning Tips | Diamond Oasis Cleaning Las Vegas",
  description:
    "Expert cleaning tips from Diamond Oasis Cleaning. Daily tidying techniques, kitchen and bathroom care, and seasonal cleaning advice for your Las Vegas home.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Cleaning Tips", href: "/cleaning-tips" },
];

export default function CleaningTipsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white text-center mb-4">
            Cleaning Tips & Tricks
          </h1>
          <p className="text-lg text-white/90 text-center max-w-3xl mx-auto">
            At Diamond Oasis Cleaning, we believe in sharing our expertise. Use
            these professional tips to maintain a cleaner home between visits.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4 text-center">
              Maintain a Sparkling Home
            </h2>
            <p className="text-text-secondary leading-relaxed text-center">
              A clean home promotes relaxation, reduces stress, and boosts
              overall well-being. Between professional cleanings, these expert
              tips will help you maintain a healthier, more organized living
              space for you and your family.
            </p>
          </div>

          {/* Tips Grid */}
          <TipsGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
            Want Us to Handle the Cleaning?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            While these tips help maintain your home, nothing beats a
            professional deep clean. Let Diamond Oasis Cleaning take care of the
            hard work for you.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Book Your Cleaning
          </Link>
        </div>
      </section>
    </>
  );
}
