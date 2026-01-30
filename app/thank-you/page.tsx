import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  StarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
};

const trustBadges = [
  {
    icon: ShieldCheckIcon,
    title: "Licensed & Bonded",
  },
  {
    icon: CheckBadgeIcon,
    title: "Background Checked",
  },
  {
    icon: StarIcon,
    title: "100% Satisfaction",
  },
  {
    icon: MapPinIcon,
    title: "Locally Owned",
  },
];

export default function ThankYouPage() {
  return (
    <section className="py-20 lg:py-32 bg-background-alt min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Checkmark Icon */}
          <div className="mb-8">
            <CheckCircleIcon className="w-24 h-24 text-secondary mx-auto" />
          </div>

          {/* Headline & Message */}
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Thank You!
          </h1>
          <h2 className="text-xl lg:text-2xl font-heading font-semibold text-text-secondary mb-6">
            We&apos;ve Received Your Request
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            One of our team members will be in touch with you shortly to gather
            a few more details and provide your free estimate. Keep an eye on
            your phone for a text message from us!
          </p>

          {/* Contact Info Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-xl font-heading font-bold text-primary mb-6">
              Need to Reach Us Sooner?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+17255022820"
                className="flex items-center gap-3 text-secondary hover:text-secondary-light transition-colors"
              >
                <PhoneIcon className="w-6 h-6" />
                <span className="text-lg font-semibold">(725) 502-2820</span>
              </a>
              <a
                href="mailto:support@diamondoasiscleaning.com"
                className="flex items-center gap-3 text-secondary hover:text-secondary-light transition-colors"
              >
                <EnvelopeIcon className="w-6 h-6" />
                <span className="text-lg font-semibold">
                  support@diamondoasiscleaning.com
                </span>
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {trustBadges.map((badge) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={badge.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">
                    {badge.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Return Button */}
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
