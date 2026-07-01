import React from "react";
import { Package, ShieldCheck, Zap } from "lucide-react";

interface HeroFeature {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number | string }>;
}

const features: HeroFeature[] = [
  {
    title: "Ready-to-Use Software",
    description:
      "Fully developed software solutions that can be deployed instantly to streamline your business operations without the wait.",
    icon: Package,
  },
  {
    title: "Secure & Compliant",
    description:
      "Built with enterprise-grade security protocols ensuring your data is always protected and compliant with industry standards.",
    icon: ShieldCheck,
  },
  {
    title: "High Performance",
    description:
      "Optimized for speed and reliability, our products handle heavy workloads effortlessly while maintaining a smooth user experience.",
    icon: Zap,
  },
];

const ProductsHeroSection: React.FC = () => {
  return (
    <section className="relative pt-36 pb-12 overflow-hidden bg-transparent">
      
      {/* Background spotlights matching Pinak colors */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[10%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start text-left max-w-3xl space-y-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
            Digital Products
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase">
            POWERFUL SAAS <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              FOR EVERY INDUSTRY
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed pt-2">
            Accelerate your growth with our pre-built, scalable, and customizable software products designed for modern enterprises and startups.
          </p>
        </div>

        <div className="w-full mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-start text-left space-y-4 bg-glass-premium border border-slate-200/60 rounded-3xl p-8 card-hover-effect shadow-md"
              >
                <div className="rounded-xl p-3 bg-slate-100/80 text-primary-500">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsHeroSection;
