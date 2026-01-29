import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceChecklist from "@/components/services/ServiceChecklist";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Residential Cleaning Las Vegas",
  description:
    "Professional residential cleaning in Las Vegas. Weekly, bi-weekly, and monthly house cleaning. Licensed and bonded cleaners. Get a free estimate today!",
  alternates: {
    canonical: "/residential-cleaning",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Residential Cleaning", href: "/residential-cleaning" },
];

const serviceSchema = generateServiceSchema({
  name: "Residential Cleaning",
  serviceType: "House cleaning service",
  description:
    "Professional residential house cleaning services in Las Vegas. Weekly, bi-weekly, and monthly cleaning options with licensed and bonded cleaners.",
  url: "https://diamondoasiscleaning.com/residential-cleaning",
});

const checklistSections = [
  {
    title: "Kitchen",
    items: [
      "Sinks, faucets, and fixtures",
      "Dishes",
      "Microwave",
      "Countertops and back splash",
      "Cabinet exteriors",
      "Floors",
      "Furniture and visible surfaces",
      "Dust baseboards",
      "Reachable vents",
      "Take out trash and recycle",
    ],
  },
  {
    title: "Bathroom",
    items: [
      "Showers and bathtubs",
      "Disinfect toilets",
      "Countertops",
      "Mirrors",
      "Floors",
      "Baseboards",
      "Cabinet exteriors",
      "Towels",
      "Take out trash",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dusting all surfaces, including shelves, picture frames, light fixtures, ceiling fans, windowsills, blinds, baseboards",
      "Vacuuming or sweeping floors",
      "Mopping and sweeping floors",
      "Baseboards dusted",
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

export default function ResidentialCleaningPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Residential Cleaning
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Transform your living space into a pristine haven with our
            professional residential cleaning services.
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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                  A Clean Home is a Peace of Mind
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Regular house cleaning offers a range of benefits, including a
                  healthier living environment by reducing dust, allergens, and
                  germs that can cause illness. It also helps maintain the
                  cleanliness and longevity of furniture and surfaces, preventing
                  the buildup of dirt and grime. Regular cleaning reduces clutter,
                  creating a more organized and calming space, which can improve
                  mental well-being. Plus, it saves time in the long run by avoiding
                  the need for intensive cleaning sessions and keeps your home
                  looking fresh and welcoming at all times.
                </p>
              </div>
              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Clean modern living room with natural light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Residential Cleaning Section */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Why Is Residential House/Apartment Cleaning Important?
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                At Diamond Oasis Cleaning, we understand that your time is
                valuable, and we&apos;re here to give it back to you.
              </p>
              <p>
                Whether you&apos;ve booked a specialty cleaning or a regular
                routine service, we treat your home with the utmost care and
                respect.
              </p>
              <p>
                Residential Cleaning Consistent house cleaning provides numerous
                benefits, such as promoting a healthier living space by
                eliminating dust, allergens, and germs that can lead to illness.
                It also helps preserve the condition of your furniture and
                surfaces, preventing the accumulation of dirt and grime. Regular
                cleaning creates a more organized and serene environment,
                contributing to improved mental well-being. Additionally, it
                saves time over time by reducing the need for deep cleaning and
                ensures your home always looks fresh and inviting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Comprehensive Checklist */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Standard Comprehensive Checklist
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
            Ready for a Sparkling Clean Home?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our professional cleaning team transform your home. Contact us
            today for a free estimate and experience the Diamond Oasis
            difference.
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
