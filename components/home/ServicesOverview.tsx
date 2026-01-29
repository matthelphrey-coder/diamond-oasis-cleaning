import Link from "next/link";
import services from "@/data/services.json";

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-background-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            House Cleaning Services You Can See And Feel
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            At Diamond Oasis Cleaning, we understand that your time is valuable,
            and we&apos;re here to give it back to you. Whether you&apos;ve
            booked a specialty cleaning or a regular routine service, we treat
            your home with the utmost care and respect.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                {service.name}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
