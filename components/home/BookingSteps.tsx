import {
  CalendarDaysIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    number: 1,
    title: "Book Online",
    description: "Contact us for a Free Estimate",
    icon: CalendarDaysIcon,
  },
  {
    number: 2,
    title: "Enjoy 5 Star Cleaning",
    description: "Be booked with one of our amazing professional cleaners!",
    icon: SparklesIcon,
  },
  {
    number: 3,
    title: "Manage things online",
    description: "Keep Track of your cleaning and bookings online",
    icon: DevicePhoneMobileIcon,
  },
];

export default function BookingSteps() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">
            Booking in a few easy steps!
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center flex-1 relative"
              >
                {/* Connector Line (hidden on mobile, visible between items on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-secondary to-secondary/30" />
                )}

                {/* Step Circle with Icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary max-w-xs">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
