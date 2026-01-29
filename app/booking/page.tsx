import { Metadata } from "next";
import Script from "next/script";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Book Cleaning Las Vegas",
  description:
    "Book your house cleaning in Las Vegas online. Easy scheduling for residential cleaning, deep cleaning, and move-in/out services. Start booking today!",
  alternates: {
    canonical: "/booking",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Booking", href: "/booking" },
];

export default function BookingPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* BookingKoala embed script */}
      <Script
        src="https://diamondoasiscleaning.bookingkoala.com/resources/embed.js"
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Book Your Cleaning
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Schedule your professional house cleaning service in just a few
            clicks.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* BookingKoala Embed Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
            Use the form below to schedule your cleaning service. Select your
            preferred date, time, and service type to get started.
          </p>

          {/* BookingKoala iframe */}
          <iframe
            src="https://diamondoasiscleaning.bookingkoala.com/booknow?embed=true"
            style={{
              width: "100%",
              height: "3000px",
              border: "none",
            }}
            scrolling="no"
            title="Book Cleaning Service"
          />
        </div>
      </section>
    </>
  );
}
