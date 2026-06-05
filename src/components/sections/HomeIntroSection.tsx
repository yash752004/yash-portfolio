import React from "react";
import { ChevronRight, Send, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeIntroSection: React.FC = () => {
  const navigate = useNavigate();

  const aims = [
    "To be a trusted long-term engineering partner, delivering custom architectures that drive actual business scale.",
    "To empower founders and modern enterprises with cutting-edge SaaS, Cloud DevOps, and robust frontends.",
    "To foster transparent relations built on rock-solid delivery parameters, security guidelines, and mutual growth."
  ];

  const visions = [
    "To become the global benchmark for innovative and scalable digital solutions that redefine industry standards.",
    "To continuously explore new technologies and design paradigms to stay ahead of the digital curve.",
    "To build a sustainable tech ecosystem that empowers our clients, our team, and our communities alike."
  ];

  return (
    <section className="py-24 bg-transparent w-full relative overflow-hidden">
      
      {/* Backdrop glowing drops using Pinak colors */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[10%] w-[30rem] h-[30rem] bg-emerald-50/45 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-indigo-50/35 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Aims list */}
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
              Our Missions
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              AT PINAK <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                WE STRIVE FOR ROI
              </span>
            </h3>
            
            <div className="space-y-4 pt-2">
              {aims.map((aim, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <CheckCircle2 className="size-5 text-primary-500 shrink-0 mt-0.5" />
                  <p className="text-slate-655 text-xs md:text-sm font-semibold leading-relaxed">
                    {aim}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Vision list */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full border border-primary-200">
              Our Vision
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              SHAPING THE <br />
              <span className="bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent">
                DIGITAL FRONTIER
              </span>
            </h3>
            
            <div className="space-y-4 pt-2">
              {visions.map((vision, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="size-5 shrink-0 mt-0.5 rounded-full bg-secondary-50 border border-secondary-200 flex items-center justify-center">
                    <div className="size-2 rounded-full bg-secondary-500" />
                  </div>
                  <p className="text-slate-655 text-xs md:text-sm font-semibold leading-relaxed">
                    {vision}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeIntroSection;