const steps = [
  {
    number: 1,
    title: "Booking and Consultation",
    description:
      "Use our website or call to schedule your cleaning service. We confirm the booking and discuss your specific needs and preferences to ensure we meet your expectations.",
  },
  {
    number: 2,
    title: "Pre-Cleaning Preparation",
    description:
      "Our team prepares the necessary equipment and eco-friendly cleaning supplies tailored to your home's requirements. We review our checklist to ensure nothing is missed.",
  },
  {
    number: 3,
    title: "The Cleaning Process",
    description:
      "Our team performs a thorough, systematic room-by-room cleaning based on the discussed plan, covering all agreed-upon areas including kitchens, bathrooms, living spaces, and bedrooms.",
  },
  {
    number: 4,
    title: "Quality Inspection",
    description:
      "We conduct a final walkthrough to ensure every detail meets our high standards. Any tweaks or additional touches are addressed to guarantee your satisfaction.",
  },
  {
    number: 5,
    title: "Feedback and Follow-Up",
    description:
      "We request your feedback to continuously improve our services. We'll also discuss scheduling recurring cleaning services to keep your home consistently sparkling.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="relative">
      {steps.map((step, index) => (
        <div key={step.number} className="flex gap-6 mb-8 last:mb-0">
          {/* Number circle and connecting line */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">{step.number}</span>
            </div>
            {/* Connecting line - hidden for last item */}
            {index < steps.length - 1 && (
              <div className="w-0.5 bg-secondary/30 flex-grow mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="pb-8 last:pb-0">
            <h3 className="text-xl font-heading font-bold text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
