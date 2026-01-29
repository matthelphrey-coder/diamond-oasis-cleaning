import { CheckIcon } from "@heroicons/react/24/outline";

export interface ChecklistSection {
  title: string;
  items: string[];
}

export interface ServiceChecklistProps {
  sections: ChecklistSection[];
  additionalServices?: string[];
}

export default function ServiceChecklist({
  sections,
  additionalServices,
}: ServiceChecklistProps) {
  return (
    <div className="space-y-12">
      {/* Room sections grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional services section */}
      {additionalServices && additionalServices.length > 0 && (
        <div className="bg-background-alt rounded-lg p-8">
          <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
            Additional Services (extra cost)
          </h3>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-text-secondary">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
