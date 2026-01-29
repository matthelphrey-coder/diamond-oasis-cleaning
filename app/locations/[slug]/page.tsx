import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import GoogleMapEmbed from "@/components/locations/GoogleMapEmbed";
import CtaButton from "@/components/ui/CtaButton";
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema";
import locations from "@/data/locations.json";
import services from "@/data/services.json";
import {
  ShieldCheckIcon,
  CheckBadgeIcon,
  StarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export const dynamicParams = false; // Only pre-built routes

export function generateStaticParams() {
  return locations.locations.map((location) => ({
    slug: location.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.locations.find((loc) => loc.slug === slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  // Keep title under 60 chars total (template adds " | Diamond Oasis Cleaning" = 26 chars)
  // So base title must be under 34 chars
  const title = `House Cleaning in ${location.displayName} NV`;

  // Keep description 150-160 chars
  const areas = location.serviceAreas.slice(0, 2).join(", ");
  const description = `Professional house cleaning in ${location.displayName}, Las Vegas. Serving ${areas} and nearby areas. Licensed cleaners. Call ${location.phone} for free estimate!`;

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

const trustBadges = [
  {
    icon: ShieldCheckIcon,
    title: "Licensed & Bonded",
  },
  {
    icon: CheckBadgeIcon,
    title: "Background Checked",
  },
  {
    icon: StarIcon,
    title: "100% Satisfaction",
  },
  {
    icon: MapPinIcon,
    title: "Locally Owned",
  },
];

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.locations.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: location.displayName, href: `/locations/${location.slug}` },
  ];

  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup schema={generateLocalBusinessSchema(location)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            House Cleaning in {location.displayName}, Las Vegas
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Diamond Oasis Cleaning is proud to serve the {location.displayName}{" "}
            area with professional house cleaning services.
          </p>
          <CtaButton className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg text-lg">
            Get Your FREE Estimate
          </CtaButton>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Location Info + Map */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Card */}
            <div className="bg-background-alt rounded-xl p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary">{location.name}</h3>
                  <p className="text-text-secondary">
                    {location.street}
                    <br />
                    {location.city}, {location.state} {location.zip}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <a
                    href={location.phoneLink}
                    className="text-secondary hover:text-secondary-light"
                  >
                    {location.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <a
                    href={`mailto:${location.email}`}
                    className="text-secondary hover:text-secondary-light"
                  >
                    {location.email}
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  {trustBadges.map((badge) => {
                    const IconComponent = badge.icon;
                    return (
                      <div key={badge.title} className="flex items-center gap-2">
                        <IconComponent className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm font-medium text-text-secondary">
                          {badge.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Our Location
              </h2>
              <GoogleMapEmbed
                mapEmbed={location.mapEmbed}
                locationName={location.displayName}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-8">
            Service Areas in {location.displayName}
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-8">
            We proudly serve the following neighborhoods and surrounding areas:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {location.serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white px-4 py-2 rounded-full text-text-secondary shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Services Available in {location.displayName}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="bg-background-alt rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-semibold text-primary">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Ready for a Sparkling Clean Home in {location.displayName}?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our professional cleaning team transform your{" "}
            {location.displayName} home. Contact us today for a free estimate.
          </p>
          <CtaButton className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg">
            Get Your Free Estimate
          </CtaButton>
        </div>
      </section>
    </>
  );
}
