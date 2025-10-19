import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import profile from "../../assets/1.webp";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="page-section min-h-[95vh] justify-start">
      <div className="absolute z-0 inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Content */}
      <div className="container items-start gap-30 -mt-5 py-20 px-10 overflow-clip">
        <div className="absolute top-0 left-0 size-full shrink-0 sm:rounded-b-2xl overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="size-full object-cover blur-[1px]"
          />
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-between">
          <div className="relative z-5 flex flex-col items-center md:items-start gap-3">
            {/* badge */}
            {/* <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#57ebde]/30 via-[#85f0a9]/30 to-[#aefb2a]/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_4px_2px_#22c55e]" />
                <span className="text-sm font-medium text-primary-500 dark:text-white bg-clip-text">
                  Open to collaborate
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-secondary-300/80 via-amber-200/80 to-secondary-400/60">
                <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse shadow-[0_0_4px_2px_#ff730c]" />
                <span className="text-sm font-medium text-gray-500 dark:text-white">
                  Available for help
                </span>
              </div>
            </div> */}

            {/* Main tagline */}
            <h1 className="text-6xl lg:text-8xl font-extrabold text-center md:text-left">
              <div className="uppercase text-white">Modern</div>
              <div className="text-white uppercase">Tech Works</div>
            </h1>

            {/* Animated subtitle */}
            <div className="text-4xl font-light text-white bg-secondary-500/85 capitalize text-center md:text-left">
              <TypewriterEffect
                words={[
                  "End to End Solutions",
                  "Business  driven",
                  "Performance Focused",
                  "Security Minded",
                  "Scalability Driven",
                ]}
              />
            </div>
          </div>
          
          {/* <div className="relative z-2 size-73 mx-auto mb-20 md:mx-0 md:mb-0">
            <div className="absolute top-1 left-1 size-full rounded-full outline-200 outline-primary-100 dark:outline-primary-950"></div>
            <div className="absolute top-1 left-1 size-full rounded-full outline-100 outline-primary-200 dark:outline-primary-900"></div>
          </div> */}
        </div>

        {/* Features */}
        <div className="max-w-150 relative z-10 flex flex-col gap-8 items-center md:items-start">
          <div className="max-w-150 text-center md:text-left text-xl font-medium uppercase text-gray-400">
            Empowering ideas with modern technology. Secure, Scalable and Built for results.
          </div>
          <div className="max-w-150 text-3xl font-medium capitalize text-center md:text-left text-white">Have a powerful vision and ready to launch something impactful?</div>
          <Button type="submit" onClick={() => navigate('/contact')} variant="secondary">Let's Connect</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;