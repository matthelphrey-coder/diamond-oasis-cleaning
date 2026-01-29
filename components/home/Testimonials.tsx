import { StarIcon } from "@heroicons/react/24/solid";
import reviews from "@/data/reviews.json";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function getAvatarColor(name: string): string {
  const colors = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-primary-light",
  ];
  const index = name.length % colors.length;
  return colors[index];
}

export default function Testimonials() {
  // Get up to 3 featured reviews
  const featuredReviews = reviews.reviews.slice(0, 3);

  if (featuredReviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-background-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about our cleaning services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-secondary" : "text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-secondary leading-relaxed flex-grow mb-4">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full ${getAvatarColor(
                    review.author
                  )} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {getInitials(review.author)}
                </div>
                <div>
                  <p className="font-heading font-bold text-primary">
                    {review.author}
                  </p>
                  <p className="text-xs text-text-secondary">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
