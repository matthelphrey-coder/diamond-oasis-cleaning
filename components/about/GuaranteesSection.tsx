import {
  ShieldCheckIcon,
  SparklesIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const guarantees = [
  {
    icon: ShieldCheckIcon,
    title: "Love It or Money Back",
    description:
      "Your satisfaction is our Diamond Standard. If you're not completely happy with our service, we'll re-clean the areas of concern at no extra charge or provide a full refund.",
  },
  {
    icon: SparklesIcon,
    title: "Eco-Friendly Cleaning",
    description:
      "We use environmentally safe products that are gentle on your home and safe for your family and pets. Clean home, clean conscience.",
  },
  {
    icon: CalendarIcon,
    title: "Flexible Rescheduling",
    description:
      "Life happens. Reschedule your cleaning appointment up to 24 hours in advance at no charge. We work around your schedule, not the other way around.",
  },
];

export default function GuaranteesSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">
          Our Guarantees
        </h2>
        <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
          We stand behind every cleaning with promises that put your
          satisfaction first.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {guarantees.map((guarantee) => {
          const IconComponent = guarantee.icon;
          return (
            <div
              key={guarantee.title}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                {guarantee.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
