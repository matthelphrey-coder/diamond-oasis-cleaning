import {
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const valueProps = [
  {
    icon: HomeIcon,
    title: "Priority Home and Cleaning",
    description:
      "At Diamond Oasis Cleaning we know that your home is a sacred and we will make sure that your home is clean and well taken care of.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Licensed and Bonded",
    description:
      "We make sure that every professional cleaners are insured and bonded, so you can be confident that your home and personal belongings are in the correct hands.",
  },
  {
    icon: ClockIcon,
    title: "Quick Online Estimates",
    description:
      "Fill out the contact page and get a quick estimate in a few simple steps.",
  },
  {
    icon: StarIcon,
    title: "Amazing Customer Service",
    description:
      "Your satisfaction is our Diamond Standard. We are dedicated to providing an exceptional experience for our customers, always striving to exceed expectations and ensure complete satisfaction with every service we offer.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-background-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">
            Why Choose Diamond Oasis Cleaning?
          </h2>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {valueProps.map((prop) => {
            const IconComponent = prop.icon;
            return (
              <div
                key={prop.title}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
