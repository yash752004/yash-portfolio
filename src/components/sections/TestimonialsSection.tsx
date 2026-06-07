import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Sharma",
    role: "CTO, TechFlow",
    content: "Pinak Technology didn't just build our app; they elevated our entire product strategy. Their deep understanding of user experience and scalable backend architecture helped us increase our daily active users by 150%. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder, Bloom E-Commerce",
    content: "We were struggling with our previous development team. Pinak stepped in, audited our code, and rebuilt our platform flawlessly. The new site is lightning-fast and our conversion rates have doubled since launch.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Product Manager, Innovate AI",
    content: "Working with the Pinak team is like having an in-house engineering squad. They are responsive, deeply knowledgeable, and genuinely care about the product's success. The custom CRM they built for us is a masterpiece.",
    avatar: "https://i.pravatar.cc/150?u=david",
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-secondary-50/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-1.5 mb-4 bg-primary-50 border border-primary-100 rounded-full text-xs font-black uppercase tracking-widest text-primary-600">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Industry Leaders</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our partners have to say about working with Pinak Technology.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-slate-50 rotate-12 -z-0" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-xl md:text-3xl text-slate-800 font-medium leading-relaxed mb-10 italic">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-primary-100 shadow-sm"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary-500 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/10 transition-all focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? "w-8 bg-gradient-to-r from-primary-500 to-secondary-500" 
                      : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary-500 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/10 transition-all focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
