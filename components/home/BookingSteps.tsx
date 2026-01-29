const steps = [
  {
    number: 1,
    title: "Book Online",
    description: "Contact us for a Free Estimate",
  },
  {
    number: 2,
    title: "Enjoy 5 Star Cleaning",
    description:
      "Be booked with one of our amazing professional cleaners!",
  },
  {
    number: 3,
    title: "Manage things online",
    description: "Keep Track of your cleaning and bookings online",
  },
];

export default function BookingSteps() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">
            Booking in a few easy steps!
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center flex-1"
            >
              {/* Numbered Circle */}
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold font-heading mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
