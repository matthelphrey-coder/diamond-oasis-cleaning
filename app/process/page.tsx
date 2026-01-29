import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import ProcessSteps from "@/components/process/ProcessSteps";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Cleaning Process",
  description:
    "Learn about Diamond Oasis Cleaning's 5-step cleaning process. From booking to final walkthrough, see how we deliver spotless results every single time.",
  alternates: {
    canonical: "/process",
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Our Process", href: "/process" },
];

export default function ProcessPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white text-center mb-4">
            Our Cleaning Process
          </h1>
          <p className="text-lg text-white/90 text-center max-w-3xl mx-auto">
            At Diamond Oasis Cleaning, we believe in transparency and
            consistency. Our proven 5-step process ensures exceptional results
            every time.
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
              The Diamond Oasis Methodology
            </h2>
            <p className="text-text-secondary leading-relaxed text-center">
              We understand that your home should be a haven, not a hassle. Our
              meticulous cleaning process is designed to ensure that every
              corner of your home is spotlessly maintained, so you can focus on
              what truly matters. Experience the serenity that comes with
              knowing everything is taken care of.
            </p>
          </div>

          {/* Process Steps */}
          <div className="max-w-2xl mx-auto">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
            Ready to Experience Our Process?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let Diamond Oasis Cleaning take care of your home. Book your
            cleaning service today and see the difference our professional
            approach makes.
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
