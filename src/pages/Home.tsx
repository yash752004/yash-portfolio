import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import DomainMarqueeSection from "@/components/sections/DomainMarqueeSection";
import BentoGrid from "@/components/sections/BentoGrid";
import HomeBenefitSection from "@/components/sections/HomeBenefitSection";
import HomeServiceSection from "@/components/sections/HomeServicesSection";
import HomeProjectSection from "@/components/sections/HomeProjectSection";
import InteractiveQuiz from "@/components/sections/InteractiveQuiz";
import ServiceTechStack from "@/components/sections/ServiceTechStack";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-slate-50">
      
      {/* Absolute Ambient spots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/10 rounded-full blur-3xl" />
        <div className="absolute top-[30%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/10 rounded-full blur-3xl" />
        <div className="absolute top-[60%] left-[10%] w-[30rem] h-[30rem] bg-cyan-100/10 rounded-full blur-3xl" />
      </div>

      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        
        {/* Domains Marquee Section */}
        <DomainMarqueeSection />
        
        {/* Modern Bento Overview grid */}
        <BentoGrid />
        
        <HomeBenefitSection />
        
        <HomeServiceSection />
        
        {/* Technology Stack We Rigorously Use marquee */}
        <ServiceTechStack />
        
        <HomeProjectSection />
        
        {/* Strategic lead generation quiz estimator */}
        <InteractiveQuiz />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
