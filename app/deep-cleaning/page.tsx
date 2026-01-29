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
  title: "Deep Cleaning Las Vegas",
  description:
    "Professional deep cleaning services in Las Vegas. Thorough and detailed cleaning for your entire home. Licensed cleaners. Book your deep clean today!",
  alternates: {
    canonical: "/deep-cleaning",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Deep Cleaning", href: "/deep-cleaning" },
];

const serviceSchema = generateServiceSchema({
  name: "Deep Cleaning",
  serviceType: "Deep cleaning service",
  description:
    "Professional deep cleaning services in Las Vegas. Thorough, detailed cleaning targeting hard-to-reach areas and stubborn grime with licensed cleaners.",
  url: "https://diamondoasiscleaning.com/deep-cleaning",
});

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

export default function DeepCleaningPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Deep Cleaning Service
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            A thorough, detailed cleaning that targets hard-to-reach areas and
            stubborn grime for a healthier home environment.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* A Clean Home Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              A Clean Home is a Peace of Mind
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              A clean home offers numerous benefits, including improved physical
              and mental well-being. It reduces allergens, dust, and bacteria,
              leading to better air quality and fewer health issues. A tidy
              environment also promotes relaxation and reduces stress by
              creating a calm, organized space. It can boost productivity,
              enhance the aesthetic appeal of your home, and even improve sleep
              quality. Plus, maintaining a clean home helps preserve the
              condition of furniture and belongings, saving money in the long
              run.
            </p>
          </div>
        </div>
      </section>

      {/* Why Deep Cleaning Section */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Why Is Deep Cleaning Necessary?
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              A professional deep cleaning offers several advantages, including
              a more thorough cleaning than typical household efforts, targeting
              hard-to-reach areas and stubborn grime. It helps improve indoor
              air quality by removing dust, allergens, and bacteria, promoting a
              healthier environment. It also extends the life of furniture,
              carpets, and appliances by maintaining their condition.
              Additionally, deep cleaning can reduce odors and leave spaces
              looking and feeling fresher, contributing to overall well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Cleaning Comprehensive Checklist */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Deep Cleaning Comprehensive Checklist
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
            Ready for a Deep Clean?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our professional cleaning team give your home the thorough deep
            clean it deserves. Contact us today for a free estimate and
            experience the Diamond Oasis difference.
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
