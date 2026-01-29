"use client";

import Image from "next/image";
import InlineEstimateForm from "./InlineEstimateForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero/clean-home.jpg"
        alt="Clean modern living room"
        fill
        priority={true}
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Welcome message */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Welcome to Diamond Oasis Cleaning
            </h1>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              We are so excited to have the opportunity to work with you and
              help keep your home or business sparkling clean. As a new local
              cleaning service in Las Vegas, we&apos;re committed to providing
              reliable, high-quality cleaning with a personal touch.
            </p>
          </div>

          {/* Right side - Estimate Form */}
          <div>
            <InlineEstimateForm />
          </div>
        </div>
      </div>
    </section>
  );
}
