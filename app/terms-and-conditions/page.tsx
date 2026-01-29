import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms and Conditions | Diamond Oasis Cleaning",
  description:
    "Review the terms and conditions for using Diamond Oasis Cleaning services and website.",
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Terms &amp; Conditions
          </h1>
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
              {/* Welcome Section */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  Welcome to Diamond Oasis Cleaning
                </h2>
                <p>
                  By accessing diamondoasiscleaning.com, you agree to be bound
                  by these terms and conditions, all applicable laws and
                  regulations, and agree that you are responsible for compliance
                  with any applicable local laws. If you do not agree with any
                  of these terms, you are prohibited from using or accessing
                  this site.
                </p>
              </div>

              {/* Use License Section */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-8">
                  Use License
                </h2>
                <p className="mb-4">
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Diamond Oasis Cleaning
                  website for personal, non-commercial transitory viewing only.
                  This is the grant of a license, not a transfer of title, and
                  under this license, you may not:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Modify or copy the materials;</li>
                  <li>
                    use the materials for any commercial purpose, or for any
                    public display (commercial or non-commercial);
                  </li>
                  <li>
                    attempt to decompile or reverse engineer any software
                    contained on Diamond Oasis Cleaning website;
                  </li>
                  <li>
                    remove any copyright or other proprietary notations from the
                    materials; or
                  </li>
                  <li>
                    transfer the materials to another person or
                    &ldquo;mirror&rdquo; the materials on any other server.
                  </li>
                </ul>
                <p className="mt-4">
                  This license shall automatically terminate if you violate any
                  of these restrictions and may be terminated by Diamond Oasis
                  Cleaning at any time. Upon terminating your viewing of these
                  materials or upon the termination of this license, you must
                  destroy any downloaded materials in your possession whether in
                  electronic or printed format.
                </p>
              </div>

              {/* Communications Section */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-8">
                  Communications
                </h2>
                <p>
                  By creating an account on diamondoasiscleaning.com, you agree
                  to subscribe to newsletters, marketing or promotional
                  materials, and other information we may send. However, you may
                  opt out of receiving any, or all, of these communications from
                  us by following the unsubscribe link or instructions provided
                  in any email we send.
                </p>
              </div>

              {/* SMS and Text Messages Section */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-8">
                  SMS and Text Messages
                </h2>
                <p className="mb-4">
                  You have the option to opt-in to receive SMS or text messages
                  from Diamond Oasis Cleaning regarding appointment reminders
                  and notifications by checking a specific box provided on our
                  website. If you choose to opt in, you agree to the following:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    You provide explicit consent to receive text messages from
                    Diamond Oasis Cleaning for the stated purposes via an
                    automatic telephone dialing system.
                  </li>
                  <li>Standard text message and data rates may apply.</li>
                  <li>
                    You can opt out at any time by replying &ldquo;STOP&rdquo;
                    to any message you receive.
                  </li>
                  <li>
                    Diamond Oasis Cleaning complies with all applicable
                    regulations, including the A2P protocol for commercial text
                    messages. We respect your privacy and commit to keeping your
                    personal information safe.
                  </li>
                </ul>
              </div>

              {/* Privacy Policy Section */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-8">
                  Privacy Policy
                </h2>
                <p>
                  Your privacy is important to us. It is Diamond Oasis Cleaning
                  policy to respect your privacy regarding any information we
                  may collect while operating our website. Please visit our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:text-primary/80 underline transition-colors"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for detailed information on how we handle user data.
                </p>
              </div>

              {/* Changes Section */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-8">
                  Changes
                </h2>
                <p>
                  Diamond Oasis Cleaning reserves the right, at our sole
                  discretion, to modify or replace these Terms at any time. What
                  constitutes a material change will be determined at our sole
                  discretion. By continuing to access or use our website after
                  those revisions become effective, you agree to be bound by the
                  revised terms.
                </p>
              </div>

              {/* Contact Us Section */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-8">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms, please{" "}
                  <Link
                    href="/contact-us"
                    className="text-primary hover:text-primary/80 underline transition-colors"
                  >
                    contact us
                  </Link>
                  .
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
