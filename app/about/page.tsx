import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import GuaranteesSection from "@/components/about/GuaranteesSection";
import TestimonialsGrid from "@/components/about/TestimonialsGrid";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Diamond Oasis Cleaning, your trusted Las Vegas house cleaning service. We use eco-friendly products and guarantee your satisfaction every time.",
  alternates: {
    canonical: "/about",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            About Diamond Oasis Cleaning
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner for professional house cleaning services across
            the Las Vegas Valley.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Company Story Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Diamond Oasis Cleaning is a locally owned and operated cleaning
                service proudly serving the Las Vegas Valley. We understand that
                your home is your sanctuary, and we treat every space we clean
                with the respect and care it deserves.
              </p>
              <p>
                Our team of professional cleaners is thoroughly trained,
                background-checked, and committed to delivering exceptional
                results every time. We believe that a clean home is the
                foundation for a happy, healthy life, and we take pride in
                helping our customers achieve that peace of mind.
              </p>
              <p>
                From regular maintenance cleaning to deep cleans and move-in/out
                services, we offer flexible solutions tailored to your unique
                needs. Our commitment to using eco-friendly products ensures
                that your home is not only spotless but also safe for your
                family and pets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="bg-background-alt">
        <div className="container mx-auto px-4">
          <GuaranteesSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <TestimonialsGrid />
        </div>
      </section>
    </>
  );
}
