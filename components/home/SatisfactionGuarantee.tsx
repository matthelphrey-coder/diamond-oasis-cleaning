import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const guarantees = [
  {
    icon: CheckCircleIcon,
    title: "100% Satisfaction",
    description:
      "We promise complete satisfaction with every clean. If any aspect of our service doesn't meet your expectations, we'll work tirelessly to rectify it—no questions asked.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Love it, or Money Back",
    description:
      "If you're not completely satisfied with the cleaning we've provided, simply let us know within 24 hours. We'll either re-clean your space or offer you a full refund.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Quality Assurance",
    description:
      "We use a rigorous quality control system to ensure that every clean meets our high standards. Our supervisors perform regular inspections to guarantee consistency.",
  },
];

export default function SatisfactionGuarantee() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
              <svg
                className="w-8 h-8 text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Your Satisfaction Is Our Diamond Standard
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              At Diamond Oasis Cleaning, we&apos;re committed to making your
              space shine as brilliantly as a diamond. Your happiness is our
              priority.
            </p>
          </div>

          {/* Guarantee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((guarantee) => {
              const IconComponent = guarantee.icon;
              return (
                <div
                  key={guarantee.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {guarantee.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
