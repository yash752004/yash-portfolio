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


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ServicesSection />
        <TechStackSection />






        {/* Contact Me Button Section */}
          <BackgroundBeamsWithCollision>
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life with cutting-edge technology and exceptional quality.
            </p>
            <Link to="/contact">
              <MovingBorder className="hover:scale-105 transition-all duration-300">
                <span className="text-lg font-semibold text-primary px-4 py-2">
                  Contact Me
                </span>
              </MovingBorder>
            </Link>
          </motion.div>
        </section>
          </BackgroundBeamsWithCollision>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
