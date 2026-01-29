import { StarIcon } from "@heroicons/react/24/solid";
import reviews from "@/data/reviews.json";

export default function TestimonialsGrid() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
          Real feedback from real customers across the Las Vegas Valley.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reviews.reviews.map((review) => (
          <blockquote
            key={review.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: review.rating }).map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-5 h-5 text-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-text-secondary italic leading-relaxed flex-grow">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Author */}
            <footer className="mt-4 pt-4 border-t border-gray-100">
              <cite className="not-italic font-medium text-primary">
                &mdash; {review.author}
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
