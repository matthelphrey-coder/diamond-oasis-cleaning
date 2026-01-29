import reviews from "@/data/reviews.json";

export default function Testimonials() {
  // Find Erin B. review
  const erinReview = reviews.reviews.find(
    (review) => review.author === "Erin B."
  );

  if (!erinReview) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Testimonial Quote */}
          <blockquote>
            <p className="text-2xl lg:text-3xl font-heading italic text-primary leading-relaxed mb-6">
              &ldquo;{erinReview.text}&rdquo;
            </p>
            <footer className="text-lg text-text-secondary font-medium">
              &mdash; {erinReview.author}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
