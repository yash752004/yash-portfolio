import React from 'react';
import { Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CTO at TechVed",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The lovely team at Pinak Technology has provided our startup with significant leverage. Their work is exceptionally professional, and the team is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
    theme: "light"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Product Manager at InnovateOps",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    videoThumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    text: "",
    theme: "dark"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Founder of GrowthBox",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Pinak Technology has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the systems are robust, innovative, and spot on!",
    theme: "light"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "VP Engineering at DataFlow",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The level of expertise the team provided gave us significant leverage. Exceptional professionalism, highly attentive to understanding our unique briefs, and consistently offering valuable architectural direction. Outstanding turnaround times.",
    theme: "light"
  },
  {
    id: 5,
    name: "Ajay Kumar",
    role: "CEO of GrowthBox",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Pinak Technology has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the systems are robust, innovative, and spot on!",
    theme: "light"
  },
  {
    id: 6,
    name: "Priya Patel",
    role: "Product Manager at InnovateOps",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    videoThumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    text: "",
    theme: "dark"
  }
];

const TestimonialSection: React.FC = () => {
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
              key={index}
              className={`flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] h-[450px] rounded-[32px] overflow-hidden relative flex flex-col justify-between ${testimonial.theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 shadow-sm border border-slate-100'
                }`}
            >
              {testimonial.theme === 'dark' ? (
                // Dark Video Card Variant
                <>
                  <div className="absolute inset-0 z-0">
                    <img
                      src={testimonial.videoThumbnail}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                  </div>

                  <div className="p-8 relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30 text-white hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </button>
                  </div>

                  <div className="p-8 relative z-10 mt-auto">
                    <h4 className="text-xl font-extrabold tracking-tight mb-1 text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </>
              ) : (
                // Light Text Card Variant
                <div className="p-8 flex flex-col h-full bg-glass-premium">
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-8 border border-slate-100 shadow-sm">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>

                  <p className="text-[15px] leading-relaxed text-slate-600 font-medium flex-grow italic">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-8">
                    <h4 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
