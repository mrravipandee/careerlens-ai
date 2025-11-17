import AIDemoPreview from "@/components/AIDemoPreview";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/Howitwork";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <AIDemoPreview />
      <WhyChooseUs />
      <Testimonials />
    </main>
  )
}