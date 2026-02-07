import { Metadata } from "next";
import Script from "next/script";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Join Our Team - Cleaner Survey",
  description:
    "Interested in working with Diamond Oasis Cleaning? Take our quick survey to get started. We're looking for passionate cleaners to join our team in Las Vegas.",
  alternates: {
    canonical: "/survey",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Join Our Team", href: "/survey" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const highlights = [
  "We provide world-class customer service.",
  "We make it easy for our customers to do business with us.",
  "We provide fast, friendly and expert house cleaning services.",
];

export default function SurveyPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            We Want to Work With You!
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Thanks for your interest in joining the Diamond Oasis Cleaning team.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Next Steps Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-secondary font-heading font-semibold text-lg mb-4">
                Next steps for you...
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Before we chat, please take a moment to answer a brief survey.
                This is a requirement as we want to make sure you are the right
                fit as our partner in this cleaning business.
              </p>
            </div>

            {/* About Section */}
            <div className="bg-background-alt rounded-lg shadow-md p-6 lg:p-8 mb-10">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4 text-center">
                A Bit About Diamond Oasis Cleaning
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We&apos;re a cleaning company based in Las Vegas, Nevada, and
                we&apos;re thrilled to start this exciting adventure with you.
                Our team is passionate about providing top-quality cleaning
                services with a personal touch.
              </p>

              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Survey CTA & Embed */}
            <div className="text-center mb-8">
              <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-text-secondary text-lg leading-relaxed">
                Please spare a few minutes to answer this short questionnaire.
                Afterwards you will have an opportunity to book a call with
                someone from our team. Thanks!
              </p>
            </div>

            {/* Survey Iframe */}
            <div className="bg-background-alt rounded-lg shadow-md p-4 lg:p-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/TvD32pBH7A9g46geP0za"
                className="ghl-form-iframe"
                style={{ border: "none", width: "100%", minHeight: "500px" }}
                scrolling="no"
                id="TvD32pBH7A9g46geP0za"
                title="Diamond Oasis Cleaning Team Survey"
              ></iframe>
              <Script
                src="https://link.msgsndr.com/js/form_embed.js"
                strategy="afterInteractive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
