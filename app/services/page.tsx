import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  TruckIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/schema";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Cleaning Services Las Vegas",
  description:
    "Explore Diamond Oasis Cleaning services: residential, commercial, deep cleaning, and move-in/out services in Las Vegas. Get your free estimate today!",
  alternates: {
    canonical: "/services",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: HomeIcon,
  building: BuildingOfficeIcon,
  sparkles: SparklesIcon,
  truck: TruckIcon,
  "plus-circle": PlusCircleIcon,
};

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            At Diamond Oasis Cleaning, we provide a comprehensive range of
            cleaning services designed to meet the unique needs of every
            customer. Whether you&apos;re looking for a routine spruce-up or a
            deep cleaning, our expert team is equipped to deliver immaculate
            results.
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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Professional cleaning team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                  Professional Cleaning You Can Trust
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  A clean home promotes relaxation, reduces stress, and boosts
                  overall well-being. Regular cleaning helps prevent allergens,
                  dust, and bacteria, ensuring a healthier living space for you and
                  your family. Our professional team is trained to deliver
                  exceptional results every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary text-center mb-12">
            Our Professional Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.services.map((service) => {
              const IconComponent = iconMap[service.icon] || SparklesIcon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-secondary/20"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-secondary" />
                  </div>

                  <h2 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-secondary font-semibold group-hover:text-secondary-light transition-colors">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Cleaning Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Specialty Cleaning Services
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Each of these services plays a vital role in creating a healthier,
              more pleasant living or working environment. A clean space
              contributes to both physical and mental well-being, and we&apos;re
              here to make sure your space shines in every way!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our professional cleaning team transform your home or business.
            Contact us today for a free estimate and experience the Diamond
            Oasis difference.
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
