import { Metadata } from "next";
import Link from "next/link";
import faqs from "@/data/faqs.json";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQAccordion from "@/components/faqs/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Diamond Oasis Cleaning",
  description:
    "Find answers to common questions about our Las Vegas cleaning services, pricing, scheduling, and policies. Get the information you need quickly.",
};

export default function FAQsPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "FAQs", href: "/faqs" },
  ]);

  // Generate FAQ schema from data
  const faqSchema = generateFAQSchema(
    faqs.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about our cleaning services,
            pricing, and policies.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* FAQ Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <p className="text-lg text-text-secondary mb-8">
              We have compiled answers to the most common questions our
              customers ask. If you cannot find what you are looking for, please
              do not hesitate to contact us directly.
            </p>

            {/* Accordion */}
            <FAQAccordion faqs={faqs.faqs} />

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-background-secondary rounded-lg text-center">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                Still Have Questions?
              </h2>
              <p className="text-text-secondary mb-6">
                We are here to help. Contact our friendly team and we will get
                back to you as soon as possible.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
