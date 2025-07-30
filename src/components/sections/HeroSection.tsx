import { motion } from "framer-motion";
import { ArrowDown, Code, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { FloatingDock } from "@/components/ui/aceternity/floating-dock";
import { MovingBorder } from "@/components/ui/aceternity/moving-border";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("introduction");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Spotlight className="opacity-80" />
        <BackgroundBeams />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi There!
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
             className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-gradient">I'M</span>{" "}
            <span className="text-white">Yash Patel</span>
          </motion.h1>

          {/* Animated subtitle */}
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            <TypewriterEffect
              words={["End to End Web Service Provider", "Full Stack Developer", "Creative Problem Solver"]}
              className="text-gradient"
            />
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
          >
            {[
              { icon: Zap, text: "Faster", color: "text-yellow-400" },
              { icon: Shield, text: "Reliable", color: "text-green-400" },
              { icon: Globe, text: "Secure", color: "text-blue-400" },
              { icon: Code, text: "Scalable", color: "text-purple-400" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-glass p-6 rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex justify-center mb-16"
          >
            {/* <MovingBorder duration={2000} className="hover:scale-105 transition-all duration-300">
              <Button
                onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })}
                variant="ghost"
                size="lg"
                className="text-lg font-semibold text-primary hover:text-primary"
              >
                Learn More
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
            </MovingBorder> */}
          </motion.div>

          {/* Floating Dock Scroll indicator
          <FloatingDock onClick={scrollToNext} /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;