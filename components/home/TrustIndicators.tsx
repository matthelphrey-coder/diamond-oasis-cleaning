import {
  ShieldCheckIcon,
  CheckBadgeIcon,
  StarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const trustItems = [
  {
    icon: ShieldCheckIcon,
    title: "Licensed & Bonded",
    description: "Fully licensed cleaning professionals",
  },
  {
    icon: CheckBadgeIcon,
    title: "Background Checked",
    description: "Thoroughly vetted team members",
  },
  {
    icon: StarIcon,
    title: "100% Satisfaction",
    description: "Guaranteed quality service",
  },
  {
    icon: MapPinIcon,
    title: "Locally Owned",
    description: "Proudly serving Las Vegas Valley",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                  <IconComponent className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-white font-heading font-bold text-sm md:text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
