"use client";

import InlineEstimateForm from "./InlineEstimateForm";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[800px] lg:min-h-[700px] flex items-center"
      style={{
        backgroundImage: "url('/images/hero-cleaning.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Welcome message */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              Welcome to Diamond Oasis Cleaning
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed opacity-95">
              We are so excited to have the opportunity to work with you and
              help keep your home or business sparkling clean. As a new local
              cleaning service in Las Vegas, we&apos;re committed to providing
              reliable, high-quality cleaning with a personal touch.
            </p>
          </div>

          {/* Right side - Estimate Form */}
          <div className="flex justify-center lg:justify-end">
            <InlineEstimateForm />
          </div>
        </div>
      </div>
    </section>
  );
}
