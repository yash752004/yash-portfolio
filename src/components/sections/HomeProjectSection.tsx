import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import { useHomeProjects } from "@/hooks/useProjects";
import { GradientSpinner } from "@/components/ui/GradientSpinner";

const HomeProjectSection: React.FC = () => {
  const navigate = useNavigate();
  const { homeProjects, loading } = useHomeProjects();

  return (
    <section className="py-24 bg-transparent w-full">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
              Our Work
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              DELIVERED PROVEN <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                PRODUCT SHOWCASES
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Discover a diverse range of software systems reflecting our dedication to quality, scalability, and corporate speed.
            </p>
          </div>
        </div>

        {/* Bento grid layout for projects */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <GradientSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeProjects.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => navigate(`/projects#${proj.id}`)}
              className="bg-glass-premium border border-slate-200/60 rounded-[32px] overflow-hidden shadow-xl card-hover-effect flex flex-col justify-between cursor-pointer group"
            >
              {/* Preview image */}
              <div className="h-44 w-full bg-slate-100/50 flex items-center justify-center p-4 border-b border-slate-100">
                <img 
                  src={proj.thumbnail} 
                  alt={proj.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      {proj.category}
                    </span>
                    <ArrowUpRight className="size-4 text-slate-400 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-base leading-tight group-hover:text-emerald-600 transition-colors">
                    {proj.title}
                  </h3>
                </div>

                {proj.metricsEnabled && (
                  <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">ROI Metric</span>
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-0.5">
                      <TrendingUp className="size-3 text-primary-500" /> {proj.metricsValue}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        )}

        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/case-studies')}
            className="group relative px-6 py-3 font-semibold text-slate-900 bg-white border border-slate-200 rounded-full hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 hover:text-white hover:border-transparent hover:shadow-md transition-all duration-300 overflow-hidden inline-flex items-center gap-2"
          >
            <span className="relative z-10">View All Case Studies</span>
            <ArrowUpRight className="size-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeProjectSection;
