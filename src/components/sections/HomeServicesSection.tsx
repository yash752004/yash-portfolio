import React from "react";
import { ChevronRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "@/data/servicesData";

const HomeServiceSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-transparent w-full">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
              Services We Provide
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              HIGH-PERFORMANCE <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                PRODUCT CAPABILITIES
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Pinak Technology builds custom business platforms to streamline operations and drive real outcomes.
            </p>
          </div>
        </div>

        {/* Bento Service Cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 3).map((svc) => (
            <div
              key={svc.id}
              className="bg-glass-premium border border-slate-200/60 rounded-[32px] p-8 shadow-xl card-hover-effect flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-100/80 rounded-2xl">
                    {svc.icon}
                  </div>
                  <ChevronRight className="size-4 text-slate-400 group-hover:text-primary-500" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-800 text-lg leading-tight">{svc.title}</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{svc.desc}</p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {svc.points.map((pt, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <Check className="size-3.5 text-primary-500 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="mt-8 text-xs font-bold text-emerald-600 hover:text-primary-700 flex items-center gap-1 group/link text-left w-fit"
              >
                <span>Inquire about this service</span>
                <ChevronRight className="size-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => navigate('/services')}
            className="px-8 py-3.5 border border-slate-200 text-slate-700 font-bold rounded-2xl shadow-sm transition-all flex items-center gap-2 group bg-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 hover:text-white hover:border-transparent hover:shadow-md"
          >
            View All Services
            <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Reworked: Wait there is more? callout block */}
        <div className="mt-16 bg-glass-premium border border-slate-200/60 rounded-[32px] p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-[10px] font-extrabold text-indigo-600 tracking-wider uppercase block">Wait there is more?</span>
            <h4 className="text-2xl font-black text-slate-900 leading-tight">We also engineering custom mobile systems & ERP solutions.</h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Whatever your target technical parameters require, we have the vetted team capacity to construct robust database indexes, cross-platform integrations, and prompt CI/CD handoffs.
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white font-bold text-sm rounded-2xl shadow-lg shadow-primary-500/10 hover:shadow-secondary-500/20 hover:scale-[1.01] transition-all flex-shrink-0"
          >
            Let's Explore Together
          </button>
        </div>

      </div>
    </section>
  );
};

export default HomeServiceSection;