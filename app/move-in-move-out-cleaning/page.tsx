import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceChecklist from "@/components/services/ServiceChecklist";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Move-In Move-Out Cleaning",
  description:
    "Professional move-in and move-out cleaning in Las Vegas. Get your deposit back with thorough cleaning for tenants and landlords. Free estimates available.",
  alternates: {
    canonical: "/move-in-move-out-cleaning",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Move-In/Move-Out Cleaning", href: "/move-in-move-out-cleaning" },
];

const serviceSchema = generateServiceSchema({
  name: "Move-In/Move-Out Cleaning",
  serviceType: "Move-in move-out cleaning service",
  description:
    "Professional move-in and move-out cleaning services in Las Vegas. Thorough cleaning for tenants and landlords to ensure security deposit return.",
  url: "https://diamondoasiscleaning.com/move-in-move-out-cleaning",
});

// Same checklist as deep cleaning per FRAMEWORK.md specification
const checklistSections = [
  {
    title: "Kitchen",
    items: [
      "Dust reachable vents",
      "Dust and wipe all countertops",
      "Clean stove and oven exteriors",
      "Clean refrigerator exterior",
      "Clean hood and light switches",
      "Wipe all cabinets faces",
      "Dust baseboards",
      "Clean the interior and exterior of the microwave",
      "Wipe, clean and dry sink faucet",
      "Take out trash and recycle",
    ],
  },
  {
    title: "Bathroom",
    items: [
      "Scrubbing bathtubs and shower enclosures",
      "Disinfect toilets",
      "Clean bathrooms vanities",
      "Washing tiles and grout",
      "Take out trash",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dusting all surfaces, including shelves, picture frames, light fixtures, ceiling fans, windowsills, blinds, baseboards",
      "Vacuuming or sweeping floors",
      "Mopping and sweeping floors",
      "Wiping down all electronics",
      "Vacuuming carpets or rugs",
      "Make beds",
    ],
  },
  {
    title: "Living Room",
    items: [
      "Dusting all surfaces, including shelves, picture frames, light fixtures, ceiling fans, windowsills, blinds, baseboards",
      "Vacuuming or sweeping floors",
      "Mopping and sweeping floors",
      "Wiping down all electronics",
      "Vacuuming carpets or rugs",
    ],
  },
  {
    title: "Laundry Room",
    items: [
      "Wiping down appliances",
      "Cleaning the lint trap",
      "Dust baseboards and dry sink",
      "Vacuum and mop floors",
      "Remove trash",
    ],
  },
];

const additionalServices = [
  "Clean inside refrigerator",
  "Clean inside oven",
  "Clean inside windows",
  "Clean inside empty cabinets",
  "Detail clean blinds",
];

export default function MoveInMoveOutCleaningPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Move-In/Move-Out Cleaning
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Make your move smoother with a professionally cleaned space.
            Perfect for getting your security deposit back or starting fresh in
            your new home.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Make Move In or Move Out Cleaning Simple Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Make Move In or Move Out Cleaning Simple!
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              A move-in or move-out cleaning service is really important because
              it ensures that the new space is fresh, clean, and free of dirt,
              dust, and germs before you settle in or after you&apos;ve moved
              out. For a move-in, it gives you peace of mind knowing the place
              is sanitized and ready for you. For a move-out, it&apos;s
              typically a requirement in leases to leave the property in good
              condition for the next tenants or to get your security deposit
              back. It saves time and energy, and helps maintain the
              property&apos;s overall condition. Plus, it can make a great first
              impression for whoever is moving in next!
            </p>
          </div>
        </div>
      </section>

      {/* Is Move-In/Move-Out Cleaning Necessary Section */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Is Move-In/Move-Out Cleaning Necessary?
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              A move-in or move-out cleaning is necessary to ensure that a space
              is thoroughly cleaned and ready for the next occupants. For
              move-ins, it ensures a fresh, sanitized environment free from
              dust, allergens, and previous tenants&apos; mess, offering peace
              of mind when settling into a new home. For move-outs, it&apos;s
              often a requirement to leave the property in good condition,
              especially for securing a return of your security deposit. It
              saves time, improves the condition of the property, and leaves a
              positive impression, making the transition smoother for everyone
              involved.
            </p>
          </div>
        </div>
      </section>

      {/* Move-In/Move-Out Cleaning Comprehensive Checklist */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Move-In/Move-Out Cleaning Checklist
          </h2>
          <ServiceChecklist
            sections={checklistSections}
            additionalServices={additionalServices}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Moving Soon? We&apos;ve Got You Covered
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re moving in or moving out, our professional
            cleaning team will ensure your space is spotless. Contact us today
            for a free estimate.
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
