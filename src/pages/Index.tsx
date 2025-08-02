import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MovingBorder } from "@/components/ui/aceternity/moving-border";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Spline from '@splinetool/react-spline';
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import ProfileCard from "@/components/ui/ProfileCard";
import { useNavigate } from 'react-router-dom';
const Index = () => {
  const navigate = useNavigate();

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
