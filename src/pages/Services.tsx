import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceContactSection from "@/components/sections/ServiceContactSection";
// import ServiceTechStack from "@/components/sections/ServiceTechStack";
import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import { ServiceDetails } from "@/components/sections/ServiceDetailSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { Helmet } from "react-helmet-async";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-slate-50">
      <Helmet>
        <title>Our Services | Custom Web Application Development Company | Pinak Technology</title>
        <meta name="description" content="Explore our enterprise cloud architecture solutions and custom web application development services. Pinak Technology engineers solutions for modern enterprises." />
      </Helmet>
      
      {/* Decorative Glow background with Pinak branding colors (Green/Mint & Blue/Indigo) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <Header />
      
      <main className="relative z-10">
        <ServiceHeroSection />
        <ServiceDetails />
        {/* <ServiceTechStack /> */}
        <TestimonialSection />
        <ServiceContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
