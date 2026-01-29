import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import ContactForm from "@/components/contact/ContactForm";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Diamond Oasis Cleaning | Las Vegas House Cleaning",
  description:
    "Contact Diamond Oasis Cleaning for house cleaning services in Las Vegas. Call (725) 502-2820 or fill out our contact form for a free estimate.",
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact-us" },
];

// Phone icon component
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

// Email icon component
function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

// Clock icon component
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default function ContactUsPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Leave Us a Message
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with Diamond Oasis Cleaning for a free estimate or to
            learn more about our services.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Two-Column Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Information */}
            <div className="bg-background-alt rounded-lg shadow-md p-6 lg:p-8 h-fit">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
                How to Reach Us
              </h2>
              <p className="text-text-secondary mb-6">
                We&apos;d love to hear from you! Whether you have questions about our
                cleaning services, need a custom quote, or want to schedule an
                appointment, our team is here to help.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+17255022820"
                      className="text-primary hover:text-primary-dark transition-colors text-lg font-medium"
                    >
                      (725) 502-2820
                    </a>
                    <p className="text-text-secondary text-sm mt-1">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:diamondoasiscleaning@gmail.com"
                      className="text-primary hover:text-primary-dark transition-colors break-all"
                    >
                      diamondoasiscleaning@gmail.com
                    </a>
                    <p className="text-text-secondary text-sm mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Business Hours
                    </h3>
                    <p className="text-text-secondary">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-text-secondary text-sm mt-1">
                      Closed on Sundays
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area Note */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-text-secondary text-sm">
                  <strong className="text-text-primary">Service Area:</strong>{" "}
                  We proudly serve the entire Las Vegas Valley, including
                  Henderson, North Las Vegas, Summerlin, and surrounding areas.
                </p>
              </div>
            </div>

            {/* Right Column - GHL Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
