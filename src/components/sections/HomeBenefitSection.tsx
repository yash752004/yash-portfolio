import React from "react";
import { CheckCircle2, ShieldCheck, Zap, BarChart3, Sparkles, LayoutDashboard } from "lucide-react";

interface BenefitItem {
  title: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
}

const HomeBenefitSection: React.FC = () => {
  const benefits: BenefitItem[] = [
    { 
      title: "Interactive Client Dashboard", 
      desc: "Track live project updates and give direct feedback on tasks in real-time. This ensures superior quality, fewer revisions, and lightning-fast delivery.",
      badge: "Transparency",
      icon: <LayoutDashboard className="size-5 text-amber-500" />
    },
    { 
      title: "Performance & Security First", 
      desc: "Engineered to scale with clean cloud-native configurations, extreme page speeds, and hardened shields.",
      badge: "Security",
      icon: <ShieldCheck className="size-5 text-primary-500" />
    },
    { 
      title: "Maintainable Clean Codebase", 
      desc: "Pragmatic modular patterns, extensive type checking, and developer-first documentation for easy handoff.",
      badge: "Quality",
      icon: <Sparkles className="size-5 text-secondary-500" />
    },
    { 
      title: "Direct Strategic Growth ROI", 
      desc: "Every line of code and pixel built is tailored to maximize conversion, client trust, and sales velocity.",
      badge: "ROI",
      icon: <BarChart3 className="size-5 text-cyan-500" />
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden w-full">
      {/* Mesh gradients strictly matching Pinak branding */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-8">
            <div className="space-y-4">
              <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full border border-primary-100 inline-block shadow-sm shadow-primary-500/5">
                Why Choose Us?
              </span>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase">
                TECH THAT DRIVES <br />
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent drop-shadow-sm">
                  SUCCESS
                </span>
              </h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We design and construct top-tier software systems that empower modern businesses to automate, build immediate authority, and boost conversion metrics.
            </p>
            <div className="p-4 bg-slate-100/50 border-l-4 border-secondary-500 rounded-r-2xl">
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Pinak Technology takes total responsibility for the final technical architecture so you can focus completely on scaling sales, acquisitions, and building trust.
              </p>
            </div>
          </div>

          {/* Right Benefits Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
            {/* Subtle glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 blur-[80px] -z-10 rounded-full" />
            
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-primary-500 group-hover:to-secondary-500 transition-colors duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                      {benefit.icon}
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-100 transition-colors">
                      {benefit.badge}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-slate-800 text-lg mb-2 group-hover:text-primary-600 transition-colors">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeBenefitSection;
