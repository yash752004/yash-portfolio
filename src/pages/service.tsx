import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import ServicesDetailsPage from "@/components/sections/ServicesDetailsPage";
import TechStackSection from "@/components/sections/TechStackSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/sections/FAQSection";
import ServiceDetailsPageUi1 from "@/components/sections/serviceDetailsPageUi1";
import ServiceDetailsPageUi2 from "@/components/sections/ServiceDetailsPageUi2";
import ServiceDetailsPageUi4 from "@/components/sections/ServiceDetailsPageUi4";
import ServiceDetailsPageUi3 from"@/components/sections/ServiceDetailsPageUi3"
const Service = () => {

  return (
    <div className="min-h-screen">
      <Header />
        <ServicesDetailsPage />
          <ServiceDetailsPageUi1 />
          <ServiceDetailsPageUi2/>
          <ServiceDetailsPageUi3/>
          <ServiceDetailsPageUi4/>
        <FAQSection />
      <Footer />
    </div>
  );
};

export default Service;
