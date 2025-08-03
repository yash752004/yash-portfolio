import { Sparkles,  Code, Zap, Shield, Globe } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import ProfileCard from "../ui/ProfileCard";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Content */}
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-3/4">

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
            <p className="flex items-center  gap-2 text-lg  md:text-xl text-muted-foreground mb-4 text-left" >
              <Sparkles className=" h-6 w-6 animate-glow" />
              Hi There!
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-left">
              <span className="">I'M</span>{" "}
              <span className="text-gradient">Yash Patel</span>
            </h1>

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 ">
              {[
                { icon: Zap, text: "Faster", color: "text-yellow-400", highlight: "group-hover:text-yellow-300" },
                { icon: Shield, text: "Reliable", color: "text-green-400", highlight: "group-hover:text-green-300" },
                { icon: Globe, text: "Secure", color: "text-blue-400", highlight: "group-hover:text-blue-300" },
                { icon: Code, text: "Scalable", color: "text-purple-400", highlight: "group-hover:text-purple-300" },
              ].map((item, index) => (
                <div key={item.text} className="group">
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
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full lg:w-1/4 justify-center">
            <ProfileCard
              name="Yash Patel"
              title="Software Engineer"
              handle="yashpatel"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./yash png 2.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => navigate('/contact')}
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;