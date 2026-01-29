export default function QuoteBlock() {
  return (
    <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="mb-6">
            <svg
              className="w-12 h-12 mx-auto text-secondary opacity-80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Quote Text */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading italic text-white leading-relaxed mb-6">
            &ldquo;A sound soul dwells within a clean space &amp; an organized
            pantry.&rdquo;
          </blockquote>

          {/* Attribution */}
          <p className="text-secondary font-medium text-lg">
            — Diamond Oasis Cleaning —
          </p>
        </div>
      </div>
    </section>
  );
}
