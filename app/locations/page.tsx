import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/schema";
import locations from "@/data/locations.json";

export const metadata: Metadata = {
  title: "Locations | House Cleaning Las Vegas | Diamond Oasis Cleaning",
  description:
    "Find Diamond Oasis Cleaning locations across Las Vegas Valley. 8 locations serving Henderson, Summerlin, and all Las Vegas areas. Call for free estimate!",
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
];

export default function LocationsPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Our Las Vegas Valley Locations
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Diamond Oasis Cleaning proudly serves the entire Las Vegas Valley
            with 8 convenient locations. Find the location nearest you and
            experience our professional cleaning services.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              From Henderson to Summerlin, from Northwest Las Vegas to the
              Southwest valley, our professional cleaning teams are ready to
              serve you. Each location is staffed with licensed, insured, and
              background-checked cleaners committed to delivering exceptional
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Find a Location Near You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.locations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  {location.displayName}
                </h2>
                <p className="text-text-secondary text-sm mb-2">
                  {location.street}, {location.city}, {location.state}{" "}
                  {location.zip}
                </p>
                <p className="text-text-secondary text-sm mb-4">
                  {location.phone}
                </p>
                <div className="text-secondary font-semibold group-hover:text-secondary-light transition-colors">
                  View Location &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Ready for a Sparkling Clean Home?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            No matter which Las Vegas Valley location is closest to you, our
            professional cleaning team is ready to transform your space. Contact
            us today for a free estimate.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
