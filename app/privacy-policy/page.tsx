import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Diamond Oasis Cleaning",
  description:
    "Read Diamond Oasis Cleaning's privacy policy. Learn how we collect, use, and protect your personal information.",
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Content Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Diamond Oasis Cleaning LLC may disclose Personal Data and other
                information as follows:
              </p>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  Third Parties that Help Provide the Messaging Service
                </h2>
                <p>
                  We will not share your opt-in to an SMS short code campaign
                  with a third party for purposes unrelated to supporting you in
                  connection with that campaign. We may share your Personal Data
                  with third parties that help us provide the messaging service,
                  including, but not limited to, platform providers, phone
                  companies, and other vendors who assist us in the delivery of
                  text messages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-8">
                  Additional Disclosures
                </h2>
                <p>
                  <strong>Affiliates:</strong> We may disclose the Personal Data
                  to our affiliates or subsidiaries; however, if we do so, their
                  use and disclosure of your Personal Data will be subject to
                  this Policy. All the above categories exclude text messaging
                  originator opt-in data and consent; this information will not
                  be shared with any third parties.
                </p>
              </div>

              <p className="text-sm text-text-secondary/70 mt-12 pt-8 border-t border-gray-200">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
