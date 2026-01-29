import Link from "next/link";
import {
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  TruckIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import services from "@/data/services.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: HomeIcon,
  building: BuildingOfficeIcon,
  sparkles: SparklesIcon,
  truck: TruckIcon,
  "plus-circle": PlusCircleIcon,
};

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

                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.name}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-4 flex items-center text-secondary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
  );
}
