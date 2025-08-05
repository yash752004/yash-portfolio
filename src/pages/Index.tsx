import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Index = () => {

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <IntroductionSection />
        <TechStackSection />


      </main>
      <Footer />
    </div>
  );
};

export default Index;
