import { motion } from "framer-motion";
import { Sparkles, ArrowDown, Code, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
// import FeatureSlider from "./FeatureSection";

const HeroSection = () => {



  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Spotlight fill="purple" />
        {/* <BackgroundBeams /> */}
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/4 "
          >



            {/* badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#57ebde]/10 via-[#85f0a9]/10 to-[#aefb2a]/10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_4px_2px_#22c55e]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#57ebde] via-[#85f0a9] to-[#aefb2a] text-transparent bg-clip-text">
                  Available for projects
                </span>
              </div>
              {/* Badge 2: Open to collaborate */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#a78bfa]/10 via-[#c084fc]/10 to-[#f472b6]/10">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_4px_2px_#c084fc]" />
                <span className="text-sm font-medium bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#f472b6] text-transparent bg-clip-text">
                  Open to collaborate
                </span>
              </div>
            </div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center  gap-2 text-lg  md:text-xl text-muted-foreground mb-4 text-left"
            >
              <Sparkles className=" h-6 w-6 animate-glow" />
              Hi There!
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-left"
            >
              <span className="">I'M</span>{" "}
              <span className="text-gradient">Yash Patel</span>
            </motion.h1>

            {/* Animated subtitle */}
            <div className="text-xl md:text-4xl lg:text-5xl font-semibold mb-8 text-left">
              <TypewriterEffect
                words={[
                  "End to End Web Service",
                  "Creative Problem Solver",
                ]}
              // className="text-gradient"
              />
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 "
            >
              {[
                { icon: Zap, text: "Faster", color: "text-yellow-400", highlight: "group-hover:text-yellow-300" },
                { icon: Shield, text: "Reliable", color: "text-green-400", highlight: "group-hover:text-green-300" },
                { icon: Globe, text: "Secure", color: "text-blue-400", highlight: "group-hover:text-blue-300" },
                { icon: Code, text: "Scalable", color: "text-purple-400", highlight: "group-hover:text-purple-300" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 cursor-pointer">
                    <item.icon
                      className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <p
                      className={`text-sm font-medium transition-all duration-300 transform group-hover:scale-105 ${item.highlight}`}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/4 flex justify-center">
            <motion.div
              whileHover={{ rotate: [0, 3, -3, 0], scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-52 h-52 md:w-80 md:h-80 rounded-full group"
            >

              {/* Outer Neon Glow Border */}
              <div className="absolute -inset-3 rounded-full border-2 border-green-500 animate-pulse transition duration-300 pointer-events-none z-0 shadow-[0_0_20px_4px_rgba(133,240,169,0.6)] group-hover:shadow-[0_0_30px_8px_rgba(133,240,169,0.8)]" />

              <div className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full shadow-md animate-ping" />
              <img
                src="./Yash.jpeg"
                alt="Hero"
                className="w-full h-full object-cover rounded-full shadow-xl ring-4 ring-green-500/40 group-hover:ring-green-500 transition duration-300"
              />

            </motion.div>

          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;