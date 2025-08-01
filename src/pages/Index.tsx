import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MovingBorder } from "@/components/ui/aceternity/moving-border";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Spline from '@splinetool/react-spline';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ServicesSection />
        <TechStackSection />


        <BackgroundBeamsWithCollision>
          <section className="py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12"
            >
              {/* LEFT - Text Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                    Ready to take your
                  </span>{" "}
                  <span className="text-white">project to the next level?</span>
                </h2>
                <p className="text-xl text-muted-foreground text-white mb-8 max-w-xl">
                  Let's discuss your project and bring your ideas to life with cutting-edge technology and exceptional quality.
                </p>
                <Link to="/contact">
                  <MovingBorder className="hover:scale-105 transition-all duration-300">
                    <span className="text-lg font-semibold text-primary px-4 py-2">
                      Contact Me
                    </span>
                  </MovingBorder>
                </Link>
              </div>

              {/* RIGHT - Spline Model */}
              <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px]">
                <Spline scene="https://prod.spline.design/R0GvWogs8d1MaeXK/scene.splinecode" />
              </div>
            </motion.div>
          </section>

        </BackgroundBeamsWithCollision>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
