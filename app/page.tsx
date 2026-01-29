import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import ServicesOverview from "@/components/home/ServicesOverview";
import BookingSteps from "@/components/home/BookingSteps";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SatisfactionGuarantee from "@/components/home/SatisfactionGuarantee";
import QuoteBlock from "@/components/home/QuoteBlock";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "House Cleaning Las Vegas | Diamond Oasis Cleaning",
  description:
    "Professional house cleaning services in Las Vegas. Residential, deep cleaning, and move-in/out services. Licensed cleaners. Get a free estimate!",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <ServicesOverview />
      <BookingSteps />
      <WhyChooseUs />
      <SatisfactionGuarantee />
      <QuoteBlock />
      <Testimonials />
    </>
  );
}
