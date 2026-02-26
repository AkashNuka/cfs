import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import LocationsSection from "@/components/home/LocationsSection";
import TransformationsSection from "@/components/home/TransformationsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WhyChooseSection />
      <LocationsSection />
      <TransformationsSection />
      <CTASection />
    </>
  );
}

