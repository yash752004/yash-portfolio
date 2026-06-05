import React from "react";
import { Search, PenTool, Code2, ShieldAlert, Rocket, TrendingUp } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
}

const HomeProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery & Blueprint Strategy",
      desc: "We analyze your target user metrics, technical constraints, and business goals to map out a clear technical specification.",
      icon: <Search className="size-5" />,
      color: "from-primary-500 to-teal-500",
      details: ["Product consultation", "Tech stack selection", "ROI validation"]
    },
    {
      number: "02",
      title: "Bespoke System Architecture",
      desc: "Our architects model secure database structures, high-fidelity UI layout schemas, and scalable cloud topologies.",
      icon: <PenTool className="size-5" />,
      color: "from-teal-500 to-secondary-500",
      details: ["Database layout modeling", "Interactive wireframes", "AWS deployment design"]
    },
    {
      number: "03",
      title: "Premium Agile Engineering",
      desc: "We build clean modular codebases using React, Next.js, and TypeScript, backed by robust automated pipelines.",
      icon: <Code2 className="size-5" />,
      color: "from-indigo-500 to-blue-500",
      details: ["Pragmatic React code", "TypeScript configuration", "Continuous CI/CD"]
    },
    {
      number: "04",
      title: "Rigorous QA & Speed Tuning",
      desc: "We execute heavy load tests, check against the core security guidelines, and tune assets to pass SEO Core Web Vitals.",
      icon: <ShieldAlert className="size-5" />,
      color: "from-blue-500 to-cyan-500",
      details: ["Core Web Vitals tuning", "Hardened security checks", "Responsive device testing"]
    },
    {
      number: "05",
      title: "Seamless Production Release",
      desc: "We launch your high-conversion platform onto private clouds or global CDNs with zero downtime guarantees.",
      icon: <Rocket className="size-5" />,
      color: "from-cyan-500 to-emerald-500",
      details: ["Zero-downtime deployment", "Telemetry alarm setup", "Asset handoff & training"]
    }
  ];

  return (
    <section className="py-24 bg-slate-50/30 relative overflow-hidden w-full">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-[20%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[40rem] h-[40rem] bg-secondary-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
            How We Partner
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
            OUR SYSTEMATIC <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              COLLABORATIVE PROCESS
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            From initial conceptual blueprints to high-performance production scaling, we manage every engineering stage with complete technical transparency.
          </p>
        </div>

        {/* Horizontal/Vertical Connected Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Connector Line behind steps (hidden on mobile) */}
          <div className="absolute top-[3.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary-500/20 via-indigo-500/20 to-emerald-500/20 hidden md:block z-0" />

          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="bg-glass-premium border border-slate-200/60 rounded-[32px] p-6 shadow-md card-hover-effect relative z-10 flex flex-col justify-between gap-6"
            >
              {/* Top Row: Icon and Step Number */}
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-md`}>
                  {step.icon}
                </div>
                <span className="text-3xl font-black text-slate-200 tracking-tight font-mono select-none">
                  {step.number}
                </span>
              </div>

              {/* Middle Section: Title & Description */}
              <div className="space-y-2 mt-2">
                <h3 className="font-extrabold text-slate-800 text-sm md:text-base leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Section: Checklist */}
              <ul className="space-y-1.5 pt-4 border-t border-slate-100/80">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <span className="size-1.5 rounded-full bg-primary-500 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold shadow-md">
            <TrendingUp className="size-4 text-emerald-400" />
            <span>Structured Delivery Model Designed to Accelerate B2B Growth</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeProcessSection;
