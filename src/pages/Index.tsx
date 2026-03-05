import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBrands from "@/components/TrustedBrands";
import FeaturesSection from "@/components/FeaturesSection";
import AISection from "@/components/AISection";
import QuickFeatures from "@/components/QuickFeatures";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <FeaturesSection />
      <AISection />
      <QuickFeatures />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
