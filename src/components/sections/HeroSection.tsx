import { Sparkles } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import profile from "../../assets/Profile/yash-profile.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-27">
      <div className="absolute z-0 inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Content */}
      <div className="container z-10 mx-auto px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-18">
          <div className="w-full flex flex-col-reverse md:flex-row justify-between">
            <div className="relative z-5 flex flex-col items-center md:items-start gap-6">
              {/* badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#57ebde]/30 via-[#85f0a9]/30 to-[#aefb2a]/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_4px_2px_#22c55e]" />
                  <span className="text-sm font-medium text-gradient bg-clip-text">
                    Available for projects
                  </span>
                </div>
                {/* Badge 2: Open to collaborate */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#a78bfa]/30 via-[#c084fc]/30 to-[#f472b6]/30">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_4px_2px_#c084fc]" />
                  <span className="text-sm font-medium bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#f472b6] text-transparent bg-clip-text">
                    Open to collaborate
                  </span>
                </div>
              </div>

              {/* Greeting */}
              <p className="flex items-center gap-2 text-lg md:text-xl" >
                <Sparkles className=" h-6 w-6" />
                Hi There!
              </p>

              {/* Name */}
              <h1 className="text-6xl lg:text-8xl font-bold text-center md:text-left">
                <span className="">I'm</span>{" "}
                <span className="text-gradient">Yash Patel</span>
              </h1>

              {/* Animated subtitle */}
              <div className="text-4xl font-semibold text-emerald-700 bg-emerald-500/15">
                <TypewriterEffect
                  words={[
                    "End to End Solution",
                    "Creative Problem Solver",
                    "Performance Focused",
                    "Security Minded",
                    "Scalability Driven",
                  ]}
                // className="text-gradient"
                />
              </div>
            </div>
            <div className="relative z-2 size-73 mx-auto mb-20 md:mx-0 md:mb-0">
              <div className="absolute top-1 left-1 size-full rounded-full outline-200 outline-emerald-100 dark:outline-emerald-950"></div>
              <div className="absolute top-1 left-1 size-full rounded-full outline-100 outline-emerald-200 dark:outline-emerald-900"></div>

              <div className="size-75 shrink-0 rounded-full overflow-hidden bg-emerald-400 outline-10 outline-emerald-400 dark:outline-emerald-800 dark:bg-emerald-800 pt-4">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="relative z-10 flex flex-col gap-12 items-center md:items-start">
            <div className="text-center md:text-left text-xl">Helping clients succeed through fast, secure, and scalable web applications isn't just my job, it's my passion. Every line of code is written with purpose, performance, and precision.</div>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
            </div> */}
            <div className="text-xl">Ready to launch something powerful?</div>
            <Button
              type="submit"
              className="w-40 bg-gradient-repeat text-white hover:shadow-xl text-lg py-6 rounded-xl cursor-pointer transition-all duration-150 link-focus"
              onClick={() => navigate('/contact')}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;