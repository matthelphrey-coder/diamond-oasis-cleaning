import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/schema";
import {
  ClockIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  HeartIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Commercial Cleaning Las Vegas",
  description:
    "Professional commercial cleaning services in Las Vegas. Office and retail cleaning, business janitorial services. Licensed and insured. Free quote today!",
  alternates: {
    canonical: "/commercial-cleaning",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Commercial Cleaning", href: "/commercial-cleaning" },
];

const serviceSchema = generateServiceSchema({
  name: "Commercial Cleaning",
  serviceType: "Commercial cleaning service",
  description:
    "Professional commercial cleaning services for businesses in Las Vegas. Office cleaning, retail cleaning, and janitorial services with customized plans.",
  url: "https://diamondoasiscleaning.com/commercial-cleaning",
});

const whyChooseUs = [
  {
    icon: ClockIcon,
    title: "Flexible Scheduling",
    description:
      "We understand that every business has unique needs. Our commercial cleaning services can be scheduled during off-hours, weekends, or whenever works best for your operations. We work around your schedule, not the other way around.",
  },
  {
    icon: UserGroupIcon,
    title: "Trained & Professional Staff",
    description:
      "All our commercial cleaning technicians are thoroughly vetted, trained, and insured. They understand the importance of discretion and professionalism in a business environment.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "Customized Cleaning Plans",
    description:
      "No two businesses are alike. We work with you to develop a cleaning plan that addresses your specific needs, whether that's daily maintenance, weekly deep cleaning, or specialized services.",
  },
  {
    icon: SparklesIcon,
    title: "Eco-Friendly Options",
    description:
      "We offer green cleaning solutions for businesses that prioritize environmental responsibility. Our eco-friendly products are effective and safe for your employees and customers.",
  },
];

const officeServices = [
  "Reception and common area cleaning",
  "Workstation and desk cleaning",
  "Break room and kitchen sanitization",
  "Restroom cleaning and restocking",
  "Trash removal and recycling",
  "Floor care (vacuuming, mopping, carpet care)",
  "Window and glass cleaning",
];

const retailServices = [
  "Sales floor maintenance",
  "Fitting room cleaning",
  "Display case and shelf dusting",
  "Entrance and storefront cleaning",
  "Back room and storage area cleaning",
];

const medicalServices = [
  "Waiting room sanitization",
  "Exam room cleaning",
  "Restroom disinfection",
  "High-touch surface sanitization",
  "OSHA-compliant cleaning protocols",
];

const additionalCommercialServices = [
  "Post-construction cleaning",
  "Event cleanup",
  "One-time deep cleaning",
  "Regular maintenance contracts",
];

const processSteps = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "We visit your facility to understand your needs and provide a customized quote.",
  },
  {
    step: 2,
    title: "Customized Plan",
    description:
      "We develop a cleaning schedule and checklist tailored to your business.",
  },
  {
    step: 3,
    title: "Professional Execution",
    description:
      "Our trained team delivers consistent, high-quality cleaning.",
  },
  {
    step: 4,
    title: "Quality Assurance",
    description:
      "Regular inspections ensure our work meets your standards.",
  },
  {
    step: 5,
    title: "Ongoing Communication",
    description: "We stay in touch to adapt to your changing needs.",
  },
];

const serviceAreas = [
  "Las Vegas",
  "Henderson",
  "North Las Vegas",
  "Summerlin",
  "Enterprise",
  "Spring Valley",
  "And surrounding areas",
];

export default function CommercialCleaningPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Commercial Cleaning Services in Las Vegas
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            Professional cleaning solutions for offices, retail spaces, and
            businesses throughout the Las Vegas Valley.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs />
      </div>

      {/* Intro Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Professional Commercial Cleaning for Las Vegas Businesses
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Diamond Oasis Cleaning provides comprehensive commercial cleaning
              services for businesses throughout the Las Vegas Valley. From
              small offices to retail spaces, we deliver the same attention to
              detail and commitment to excellence that has made us a trusted
              name in residential cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Why Choose Our Commercial Cleaning Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Commercial Cleaning Services We Offer
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Office Cleaning */}
            <div className="bg-background-alt rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BuildingOfficeIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-heading font-bold text-primary">
                  Office Cleaning
                </h3>
              </div>
              <ul className="space-y-2">
                {officeServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Retail Space Cleaning */}
            <div className="bg-background-alt rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BuildingStorefrontIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-heading font-bold text-primary">
                  Retail Space Cleaning
                </h3>
              </div>
              <ul className="space-y-2">
                {retailServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medical & Dental Cleaning */}
            <div className="bg-background-alt rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <HeartIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-heading font-bold text-primary">
                  Medical & Dental Office
                </h3>
              </div>
              <ul className="space-y-2">
                {medicalServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Commercial Services */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-primary text-center mb-6">
              Additional Commercial Services
            </h3>
            <div className="bg-primary/5 rounded-xl p-6">
              <ul className="grid md:grid-cols-2 gap-4">
                {additionalCommercialServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-text-secondary">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Our Commercial Cleaning Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
              Service Areas
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              We provide commercial cleaning services throughout the Las Vegas
              Valley, including:
            </p>
            <ul className="flex flex-wrap justify-center gap-4">
              {serviceAreas.map((area, index) => (
                <li
                  key={index}
                  className="bg-background-alt px-4 py-2 rounded-full text-text-secondary"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Get a Free Commercial Cleaning Quote
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to experience the Diamond Oasis difference for your business?
            Contact us today for a free, no-obligation quote. We&apos;ll work
            with you to create a cleaning plan that fits your needs and budget.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
