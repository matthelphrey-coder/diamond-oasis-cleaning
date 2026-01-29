import { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Additional Services",
  description:
    "Explore our additional cleaning services in Las Vegas. Oven cleaning, refrigerator cleaning, window cleaning, and more. Customize your cleaning today!",
  alternates: {
    canonical: "/additional-services",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Additional Services", href: "/additional-services" },
];

const serviceSchema = generateServiceSchema({
  name: "Additional Services",
  serviceType: "Additional cleaning services",
  description:
    "Explore our additional cleaning services in Las Vegas including oven cleaning, refrigerator cleaning, window cleaning, and more to customize your clean.",
  url: "https://diamondoasiscleaning.com/additional-services",
});

const additionalServicesList = [
  "Clean Inside Oven",
  "Clean Inside Refrigerator",
  "Wipe Baseboards",
  "Hand Detail Blinds",
  "Interior Window Cleaning",
  "Patio Furniture Dust/Wipe",
  "Pets",
  "Organization Services",
  "Wall Cleaning",
  "Baseboard Wiping",
  "1 Sink full of Dishes",
  "Laundry and Folding Clothes (per load)",
  "Wipe Doors",
  "Eco Friendly Cleaning",
];

const exclusionsList = [
  "Lifting items weighing over 25lbs (including large furniture)",
  "Dusting and/or vacuuming of ceilings / windows / surfaces outside of normal reach",
  "Cleaning outside of windows",
  "Cleaning pet messes and/or heavily soiled areas",
  "Cleaning of mold and/or bio-hazardous material",
  "Steam cleaning",
  "Carpet cleaning",
  "Deep stain removal",
  "Landscaping and/or yard-work",
  "Garages and/or patios (aside from basic sweeping)",
  "Extermination (insects, etc)",
];

export default function AdditionalServicesPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Additional Services
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Beyond our regular cleaning packages, we offer a range of detailed
            cleaning services to give your home a fresh, thorough touch.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* We Offer Additional Services Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              We Offer Additional Services
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              There is always additional services and detailing that we need
              around our home. Beyond our regular cleaning packages, we offer a
              range of detailed cleaning services to give your home a fresh,
              thorough touch. Our ceiling fan dusting service ensures that even
              the highest corners of your home are free of dust, promoting
              cleaner air quality. We also provide wall cleaning to remove
              smudges, stains, and dust, restoring the fresh look of your
              interiors. Our interior window cleaning leaves your windows
              streak-free and sparkling, letting in more natural light and
              enhancing the beauty of your space. For outdoor areas, we offer
              patio dusting and sweeping, ensuring your exterior spaces are just
              as tidy and inviting as your interior. These added services help
              maintain every part of your home, leaving it looking and feeling
              its best.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services Are Important Section */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Additional Services Are Important for Health
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Additional Services are important for health because it helps
              eliminate accumulated dust, allergens, and bacteria that can cause
              respiratory issues, allergies, or other illnesses. By thoroughly
              cleaning carpets, furniture, and hard-to-reach areas, you reduce
              the buildup of mold, pet dander, and other irritants, which can
              improve indoor air quality. It also creates a more organized
              space, which can reduce stress and create a sense of well-being. A
              clean home promotes a healthier environment overall, supporting
              both physical and mental health.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services Checklist */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Additional Services Available
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {additionalServicesList.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckIcon className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-text-secondary">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Exclusion Services Section */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-4">
            What We Don&apos;t Do
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            To ensure we deliver the best possible service, the following items
            are outside our scope of service.
          </p>
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-md">
            <ol className="space-y-4">
              {exclusionsList.map((exclusion, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <XMarkIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{exclusion}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Need Extra Cleaning Services?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Customize your cleaning package with our additional services.
            Contact us today for a free estimate tailored to your specific
            needs.
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
