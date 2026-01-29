import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/schema";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Cleaning Services Las Vegas | Diamond Oasis Cleaning",
  description:
    "Explore Diamond Oasis Cleaning's services: residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, and more in Las Vegas.",
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              A clean home promotes relaxation, reduces stress, and boosts
              overall well-being. Regular cleaning helps prevent allergens,
              dust, and bacteria, ensuring a healthier living space for you and
              your family.
            </p>
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
            {services.services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  {service.name}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-secondary font-semibold group-hover:text-secondary-light transition-colors">
                  Learn More &rarr;
                </div>
              </Link>
            ))}
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
