import { Sparkles,  Code, Zap, Shield, Globe } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import profile from "../../../public/yash png 2.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-27">
      <div className="absolute z-0 inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Content */}
      <div className="container z-10 mx-auto px-6 py-12 text-center">
        <div className="flex flex-col items-start justify-between gap-12">
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between">
            <div className="relative z-5 flex flex-col items-start gap-4">
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
              <p className="flex items-center gap-2 text-lg  md:text-xl text-muted-foreground mb-4 text-left" >
                <Sparkles className=" h-6 w-6 animate-glow" />
                Hi There!
              </p>

              {/* Name */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-left">
                <span className="">I'm</span>{" "}
                <span className="text-gradient">Yash Patel</span>
              </h1>

              {/* Animated subtitle */}
              <div className="text-xl md:text-4xl lg:text-5xl font-semibold mb-8 text-left">
                <TypewriterEffect
                  words={[
                    "End to End Web Developer",
                    "Creative Problem Solver",
                    "Performance, Security and Scalability Focused",
                  ]}
                // className="text-gradient"
                />
              </div>
            </div>
            <div className="relative z-2 size-75">
              <div className="absolute top-0 left-0 size-full rounded-full outline-200 outline-emerald-100"></div>
              <div className="absolute top-0 left-0 size-full rounded-full outline-100 outline-emerald-200"></div>

              <div className="size-75 shrink-0 rounded-full overflow-hidden bg-emerald-400 pt-4">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="relative z-10 flex flex-col gap-4">
            <p className="text-start text-xl mb-2">I find creating solutions for my client very rewarding for both of us. I am always eager to help others. To develop web apps which are,</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { icon: Zap, text: "Faster", color: "text-yellow-400", highlight: "group-hover:text-yellow-300" },
                { icon: Globe, text: "Reliable", color: "text-green-400", highlight: "group-hover:text-green-300" },
                { icon: Shield, text: "Secure", color: "text-blue-400", highlight: "group-hover:text-blue-300" },
                { icon: Code, text: "Scalable", color: "text-purple-400", highlight: "group-hover:text-purple-300" },
              ].map((item, index) => (
                <div key={item.text} className="group">
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <p
                      className={`text-sm font-medium transition-all duration-300 transform group-hover:scale-105 ${item.highlight}`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xl text-start mb-12">Click on button below and let's get started!</p>
            <Button
              type="submit"
              className="w-40 bg-gradient-repeat text-white hover:shadow-xl text-lg py-6 rounded-xl cursor-pointer transition-all duration-150"
              onClick={() => navigate('/contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;