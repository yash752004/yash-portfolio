import React from 'react';
import { Play } from 'lucide-react';

import { useTestimonials } from '@/hooks/useTestimonials';
import { GradientSpinner } from '@/components/ui/GradientSpinner';
const TestimonialSection: React.FC = () => {
  const { testimonials, loading } = useTestimonials();

  if (loading) return null; // or a loading spinner if preferred, but usually silent load is okay for sections

  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-12 text-center">

        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase max-w-3xl mx-auto mt-4">
          DON'T TAKE OUR WORD FOR IT! <br />
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            HEAR IT FROM OUR PARTNERS.
          </span>
        </h2>
      </div>

      {/* Marquee Track container */}
      <div className="relative w-full">
        {/* Gradient Fades for Smooth Marquee Edges */}
        {/* <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" /> */}

        <div
          className="flex w-fit marquee-left hover:[animation-play-state:paused] gap-6 px-6"
          style={{ animationDuration: '40s' }}
        >
          {/* Duplicate the array 3 times to ensure a seamless infinite loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] h-[350px] rounded-[32px] overflow-hidden relative flex flex-col justify-between bg-white text-slate-900 shadow-sm border border-slate-100"
            >
              <div className="p-8 flex flex-col h-full bg-glass-premium">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-8 border border-slate-100 shadow-sm">
                  <img src={testimonial.image || "https://i.pravatar.cc/300?img=12"} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>

                <p className="text-[15px] leading-relaxed text-slate-600 font-medium flex-grow italic">
                  "{testimonial.text}"
                </p>

                <div className="mt-8">
                  <h4 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">
                    {testimonial.name}
                  </h4>
                  {testimonial.role && (
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
