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
    "Professional house cleaning services in Las Vegas. Residential cleaning, deep cleaning, move-in/move-out services. Licensed & bonded cleaners. Get a FREE estimate today!",
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
