import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceContactSection: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    "Custom Web & Mobile Applications",
    "Microservices & API Design",
    "Cloud-native Architecture & Migration",
    "Managed DevOps & CI/CD Pipelines",
    "Security-first Development & Audits",
    "Scalable Data & Integration Solutions",
    "Performance Optimization & Monitoring",
    "Ongoing Maintenance & Support",
  ];

  return (
    <section className="py-24 bg-transparent w-full relative overflow-hidden">
      
      {/* Background spotlights matching Pinak colors */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-[10%] w-[30rem] h-[30rem] bg-emerald-50/45 rounded-full blur-3xl" />
        <div className="absolute top-0 right-[10%] w-[35rem] h-[35rem] bg-indigo-50/35 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-glass-premium border border-slate-200/60 rounded-[40px] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Details */}
          <div className="max-w-xl flex flex-col justify-start items-start gap-6 text-left">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
              Partnership Consultation
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">
              END-TO-END SOFTWARE & <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                CLOUD ENGINEERING
              </span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Build, deploy, and scale modern software with our engineering teams. We cover the full lifecycle — product development, cloud migration, security, and ongoing platform support to help your business grow.
            </p>
            <button 
              onClick={() => navigate("/contact")} 
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white font-bold text-sm rounded-2xl shadow-lg shadow-primary-500/10 hover:shadow-secondary-500/20 hover:scale-[1.01] transition-all flex items-center gap-2"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="size-4" />
            </button>
          </div>

          {/* Bullet Items grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 font-semibold text-left">
                <CheckCircle2 className="size-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>{service}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default ServiceContactSection;
