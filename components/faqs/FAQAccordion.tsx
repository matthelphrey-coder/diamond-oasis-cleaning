"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq) => (
        <Disclosure key={faq.id}>
          <DisclosureButton className="group flex w-full items-center justify-between py-4 text-left">
            <span className="text-lg font-heading font-medium text-primary">
              {faq.question}
            </span>
            <ChevronDownIcon
              className={clsx(
                "w-5 h-5 text-primary transition-transform duration-200",
                "group-data-[open]:rotate-180"
              )}
            />
          </DisclosureButton>
          <DisclosurePanel className="pb-4 text-text-secondary">
            {faq.answer}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  );
}
