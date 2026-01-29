export default function SatisfactionGuarantee() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            Your Satisfaction Is Our Diamond Standard
          </h2>

          {/* Description */}
          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            At Diamond Oasis Cleaning, we&apos;re committed to making your space
            shine as brilliantly as a diamond. If you&apos;re not completely
            satisfied with our service, we&apos;ll work tirelessly to make it
            right. Your happiness is our priority, and we guarantee a spotless
            experience every time.
          </p>

          {/* Quote Block */}
          <blockquote className="relative">
            <div className="text-secondary text-6xl font-serif leading-none absolute -top-4 -left-4 opacity-30">
              &ldquo;
            </div>
            <p className="text-2xl lg:text-3xl font-heading italic text-primary leading-relaxed px-8">
              A sound soul dwells within a clean space &amp; an organized
              pantry.
            </p>
            <footer className="mt-4 text-text-secondary font-medium">
              &mdash; Diamond Oasis Cleaning &mdash;
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
