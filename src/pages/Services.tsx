import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceContactSection from "@/components/sections/ServiceContactSection";
import ServiceTechStack from "@/components/sections/ServiceTechStack";
import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import { ServiceDetails } from "@/components/sections/ServiceDetailSection";

const Service = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHeroSection />
      <ServiceDetails />
      <ServiceTechStack />
      <ServiceContactSection />
      <Footer />
    </div>
  );
};

export default Service;
