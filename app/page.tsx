import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import BookingSteps from "@/components/home/BookingSteps";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SatisfactionGuarantee from "@/components/home/SatisfactionGuarantee";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "House Cleaning Las Vegas | Diamond Oasis Cleaning",
  description:
    "Professional house cleaning services in Las Vegas. Residential, deep cleaning, and move-in/out services. Licensed cleaners. Get a free estimate!",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <BookingSteps />
      <WhyChooseUs />
      <SatisfactionGuarantee />
      <Testimonials />
    </main>
  );
}
