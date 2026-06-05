import React from 'react';
import { 
  ShoppingCart, Factory, Truck, Calculator, 
  HeartPulse, GraduationCap, Building2, Utensils, 
  ShoppingBag, Briefcase, Plane, Gamepad2, 
  Glasses, Landmark, CreditCard 
} from 'lucide-react';

const domains = [
  { name: "Retail & Wholesale", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Supply chain", icon: Truck },
  { name: "Finance", icon: Calculator },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Real Estate", icon: Building2 },
  { name: "Hospitality", icon: Utensils },
  { name: "Ecommerce", icon: ShoppingBag },
  { name: "Services", icon: Briefcase },
  { name: "Logistics", icon: Plane },
  { name: "Gaming", icon: Gamepad2 },
  { name: "AR/VR", icon: Glasses },
  { name: "Banking", icon: Landmark },
  { name: "Fintech", icon: CreditCard },
];

const DomainMarqueeSection: React.FC = () => {
  return (
    <section className="py-8 bg-white border-y border-slate-100 overflow-hidden relative">
      {/* Gradient Fades for Smooth Marquee Edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      {/* Title (Optional, keeping it clean as requested) */}
      <div className="text-center mb-6 relative z-10">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
          Industries We Empower
        </span>
      </div>

      <div 
        className="flex w-fit marquee-left hover:[animation-play-state:paused]" 
        style={{ animationDuration: '60s' }}
      >
        {/* Duplicate the array 3 times to ensure a seamless infinite loop even on ultrawide screens */}
        {[...domains, ...domains, ...domains].map((domain, index) => {
          const Icon = domain.icon;
          // Alternate between primary and secondary colors for the logo color effect
          const colorClass = index % 2 === 0 ? "text-primary-500" : "text-secondary-500";

          return (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[140px] gap-3 group px-3 cursor-default"
            >
              <div className={`p-4 bg-slate-50 ${colorClass} rounded-2xl group-hover:bg-white group-hover:-translate-y-1 group-hover:shadow-md transition-all border border-slate-100 shadow-sm`}>
                <Icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-extrabold text-slate-600 uppercase tracking-widest group-hover:text-slate-900 transition-colors whitespace-nowrap text-center">
                {domain.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DomainMarqueeSection;
