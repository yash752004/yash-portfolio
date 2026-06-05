import React, { useState } from "react";
import { 
  Code2, 
  MapPin, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  Terminal,
  Globe,
  Briefcase,
  Users,
  CheckCircle2
} from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface TechItem {
  name: string;
  category: string;
  color: string;
  icon: React.ReactNode;
}

const BentoGrid: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectEstimate, setProjectEstimate] = useState<string>("TBD");

  const techStack: TechItem[] = [
    { name: "React / Next.js", category: "Frontend", color: "text-blue-500", icon: <Globe className="size-4" /> },
    { name: "TypeScript", category: "Languages", color: "text-sky-600", icon: <Code2 className="size-4" /> },
    { name: "Tailwind CSS", category: "Styling", color: "text-teal-500", icon: <Layers className="size-4" /> },
    { name: "Node.js / Go", category: "Backend", color: "text-green-600", icon: <Terminal className="size-4" /> },
    { name: "AWS Cloud", category: "Cloud", color: "text-orange-500", icon: <Layers className="size-4" /> },
    { name: "Kubernetes", category: "DevOps", color: "text-blue-600", icon: <Sparkles className="size-4" /> },
  ];

  const handleServiceToggle = (service: string) => {
    let newServices = [...selectedServices];
    if (newServices.includes(service)) {
      newServices = newServices.filter(s => s !== service);
    } else {
      newServices.push(service);
    }
    setSelectedServices(newServices);
    
    let weeks = 0;
    if (newServices.includes("web")) weeks += 4;
    if (newServices.includes("saas")) weeks += 8;
    if (newServices.includes("cloud")) weeks += 3;
    
    if (weeks === 0) setProjectEstimate("Select a service");
    else setProjectEstimate(`~${weeks} Weeks`);
  };

  return (
    <section className="py-12 bg-transparent w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full border border-primary-200">
            Agency Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Our Technical <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Powerhouse & Flow</span>
          </h2>
          <p className="text-slate-500 text-lg mt-3 max-w-2xl mx-auto">
            A premium bento box overview of Pinak Technology's stack, response time, and instant value generation metrics.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* Cell 1: Availability Status (1x2 span) */}
          <div 
            className="md:col-span-2 bg-glass-premium rounded-3xl p-8 border border-white/60 flex flex-col justify-between card-hover-effect relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-100/30 rounded-full blur-3xl pointer-events-none group-hover:bg-primary-200/40 transition-all duration-500" />
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Accepting New Partnerships
              </span>
            </div>
            
            <div className="space-y-3 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                Architecting high-availability software platforms & custom SaaS solutions.
              </h3>
              <p className="text-slate-500 text-sm md:text-base max-w-xl">
                Pinak Technology empowers global enterprises and growing startups with robust tech infrastructure and pixel-perfect design.
              </p>
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-xs tracking-wider uppercase font-semibold">
              <MapPin className="size-4 text-primary-500" />
              <span>HQ: Gujarat, India — Collaborating Globally (EST, CET, IST)</span>
            </div>
          </div>

          {/* Cell 2: Quick Stats & Achievements (1x1 span) */}
          <div 
            className="bg-glass-premium rounded-3xl p-8 border border-white/60 flex flex-col justify-between card-hover-effect"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary-600 bg-secondary-50 px-2.5 py-0.5 rounded-full border border-secondary-100">
                  Trust Indicators
                </span>
                <Briefcase className="size-4 text-slate-400" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">
                Proven Agency Track Record
              </h4>
              <p className="text-slate-400 text-xs mt-1">
                Enterprise grade reliability, clean architectures, and prompt deliveries.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                <CheckCircle2 className="size-4 text-primary-500" />
                <span>99.9% Cloud Uptime Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                <CheckCircle2 className="size-4 text-primary-500" />
                <span>100% On-Time Milestones</span>
              </div>
            </div>
          </div>

          {/* Cell 3: Corporate Response SLA & NDA (1x1 span) */}
          <div 
            className="bg-glass-premium rounded-3xl p-6 border border-white/60 flex flex-col justify-between card-hover-effect overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                Corporate SLA
              </span>
              <Layers className="size-4 text-slate-400" />
            </div>

            <div className="space-y-3.5 my-2">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase block tracking-wider">Response Speed</span>
                <span className="text-lg font-black text-slate-800">&lt; 4 Hours Guarantee</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase block tracking-wider">Lead Protection</span>
                <span className="text-xs font-bold text-slate-700">Hardened Corporate NDA protocols</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 text-center font-medium">
              Vetted communications & strict data safety policies.
            </div>
          </div>

          {/* Cell 4: Live Estimator Tool (1x2 span) */}
          <div 
            className="md:col-span-2 bg-glass-premium rounded-3xl p-8 border border-white/60 flex flex-col justify-between card-hover-effect relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary-100/30 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary-200/40 transition-all duration-500" />
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                Interactive Cost Estimator
              </span>
              <div className="text-xs font-medium text-slate-400 flex items-center gap-1">
                <Users className="size-3 text-secondary-500" /> Multidisciplinary Team Capacity
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2 relative z-10">
              <div>
                <h4 className="text-sm font-bold text-slate-700 mb-2">Select Target Deliverables:</h4>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => handleServiceToggle("web")}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                      selectedServices.includes("web") 
                        ? "bg-primary-500 border-primary-500 text-white shadow-sm" 
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    Custom Web App
                  </button>
                  <button 
                    onClick={() => handleServiceToggle("saas")}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                      selectedServices.includes("saas") 
                        ? "bg-primary-500 border-primary-500 text-white shadow-sm" 
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    SaaS Platform
                  </button>
                  <button 
                    onClick={() => handleServiceToggle("cloud")}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                      selectedServices.includes("cloud") 
                        ? "bg-primary-500 border-primary-500 text-white shadow-sm" 
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    Cloud & CI/CD Setup
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center md:items-end bg-slate-50/50 border border-slate-100 rounded-2xl p-4">
                <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Estimated Delivery Timeline</span>
                <span className="text-2xl md:text-3xl font-extrabold text-slate-800 bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent mt-1">
                  {projectEstimate}
                </span>
                <span className="text-[10px] text-slate-400 mt-1">Exact specifications finalized on Discovery call</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400">
              *Interactive agency blueprinting engine. Final scope tailored to business objectives.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
