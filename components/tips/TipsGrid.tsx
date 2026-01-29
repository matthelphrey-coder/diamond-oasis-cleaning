import {
  HomeIcon,
  FireIcon,
  BeakerIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const tipCategories = [
  {
    title: "General Home Tips",
    icon: HomeIcon,
    tips: [
      "Tidy up daily for 10-15 minutes to prevent clutter buildup",
      "Declutter one room at a time for efficient organizing",
      "Open windows regularly for better ventilation and air quality",
      "Focus on high-traffic areas like entryways and living rooms",
    ],
  },
  {
    title: "Kitchen Tips",
    icon: FireIcon,
    tips: [
      "Wipe down appliances after each use to prevent buildup",
      "Clean countertops daily with appropriate surface cleaners",
      "Sanitize your sink weekly to eliminate bacteria",
      "Empty and clean the refrigerator before it gets full",
    ],
  },
  {
    title: "Bathroom Tips",
    icon: BeakerIcon,
    tips: [
      "Run the exhaust fan during and after showers to reduce moisture",
      "Clean grout monthly to prevent mold and mildew",
      "Polish fixtures weekly for a sparkling finish",
      "Keep surfaces dry to prevent water stains",
    ],
  },
  {
    title: "Seasonal Tips",
    icon: SunIcon,
    tips: [
      "Spring: Deep clean carpets and wash windows inside and out",
      "Summer: Clean window screens and air conditioning vents",
      "Fall: Prepare heating systems and clean out gutters",
      "Winter: Focus on indoor air quality and dust accumulation",
    ],
  },
];

export default function TipsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tipCategories.map((category) => {
        const IconComponent = category.icon;
        return (
          <div
            key={category.title}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary">
                {category.title}
              </h3>
            </div>

            {/* Tips list */}
            <ul className="space-y-2">
              {category.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-secondary mt-1.5 flex-shrink-0">
                    <svg
                      className="w-2 h-2 fill-current"
                      viewBox="0 0 8 8"
                      aria-hidden="true"
                    >
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                  </span>
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
