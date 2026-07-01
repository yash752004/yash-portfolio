import React from "react";
import { Server, Cloud, Zap } from "lucide-react";

interface HeroService {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number | string }>;
}

const services: HeroService[] = [
  {
    title: "Professional Analysis",
    description:
      "Comprehensive analysis to understand your business needs and technical requirements, ensuring tailored solutions that drive success.",
    icon: Server,
  },
  {
    title: "Accurate Cost Estimation",
    description:
      "Precise cost estimations for your projects, helping you budget effectively and avoid unexpected expenses.",
    icon: Cloud,
  },
  {
    title: "On Time Delivery",
    description:
      "Timely delivery of projects through efficient planning, agile methodologies, and clear communication, keeping your business on track.",
    icon: Zap,
  },
];

const ServiceHeroSection: React.FC = () => {
  return (
    <section className="relative pt-36 pb-12 overflow-hidden bg-transparent">
      
      {/* Background spotlights matching Pinak colors */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[10%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl space-y-4">
          <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-primary-200 bg-white shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Our Blueprints
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase">
            MODERN WEB & <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              CLOUD ENGINEERING
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed pt-2">
            We design and build robust, secure, and scalable software platforms to accelerate product delivery and maximize business outcomes.
          </p>
        </div>

        <div className="w-full mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-start text-left space-y-4 bg-glass-premium border border-slate-200/60 rounded-3xl p-8 card-hover-effect shadow-md"
              >
                <div className="rounded-xl p-3 bg-slate-100/80 text-primary-500">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
