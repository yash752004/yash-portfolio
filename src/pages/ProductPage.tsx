import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Star, Target, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData } from "@/data/productsData";
import { useProductsImages } from "@/hooks/useProductsImages";
import { Button } from "@/components/ui/button";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { productImages, loading } = useProductsImages();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Product Not Found</h1>
          <p className="text-slate-500 mb-8">The product you are looking for does not exist.</p>
          <Button onClick={() => navigate("/")} className="bg-primary-600">Back to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const images = productImages[product.id] || { thumbnail: "", macbookSrc: "", screenshots: [] };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <Helmet>
        <title>{product.name} - {product.tagline} | Pinak Technology</title>
        <meta name="description" content={product.overview} />
      </Helmet>

      <Header />

      <main className="pt-24 relative z-10">
        
        {/* Back button */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-sm font-bold text-slate-500 hover:text-primary-600 transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-28 relative overflow-hidden">
          {/* Dribbble-style abstract background shapes */}
          <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-br from-primary-400/20 to-secondary-500/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-secondary-400/20 to-primary-500/20 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/4" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_100%)] -z-10 backdrop-blur-[2px]" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-sm font-bold text-slate-700 tracking-wide">{product.category}</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.05]">
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">{product.name}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-slate-700 leading-snug">
                {product.tagline}
              </p>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                {product.overview}
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate("/contact")} size="lg" className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-2xl px-10 py-7 text-lg hover:scale-105 hover:from-primary-600 hover:to-secondary-600 transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                  Get a Demo
                </Button>
                <Button onClick={() => navigate("/contact")} size="lg" variant="outline" className="font-bold border-2 border-slate-200 text-slate-700 rounded-2xl px-10 py-7 text-lg hover:bg-white hover:shadow-xl hover:border-white transition-all bg-white/50 backdrop-blur-sm">
                  Contact Sales
                </Button>
              </div>
            </div>
            
            {/* Dribbble-style floating mockup showcase */}
            <div className="relative group perspective-[1000px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-[2.5rem] transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500 blur-xl" />
              {images.thumbnail ? (
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/40 bg-white/40 backdrop-blur-xl transform transition-transform duration-700 hover:rotate-y-[-5deg] hover:scale-[1.02]">
                  <div className="absolute top-0 inset-x-0 h-12 bg-white/80 backdrop-blur-md flex items-center px-6 gap-2 border-b border-white/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="mx-auto px-4 py-1 rounded-md bg-slate-100/50 text-[10px] font-bold text-slate-400 font-mono">
                      {product.id}.pinak.tech
                    </div>
                  </div>
                  <img src={images.thumbnail} alt={product.name} className="w-full h-auto object-cover pt-12" />
                </div>
              ) : (
                <div className="w-full aspect-square bg-slate-200 rounded-[2.5rem] animate-pulse flex items-center justify-center border-4 border-white">
                  <span className="text-slate-400 font-bold">Main Interface Mockup</span>
                </div>
              )}
              
              {/* Floating feature badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <Zap className="text-primary-600 size-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Performance</p>
                    <p className="text-lg font-black text-slate-800">10x Faster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Detailed Description */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-secondary-100/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
             <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-4">
               <Target className="text-primary-600" size={32} />
             </div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">{product.name}</span>?
             </h2>
             <div className="relative">
               <div className="absolute -left-6 -top-6 text-8xl text-slate-200 font-serif leading-none select-none">"</div>
               <div className="absolute -right-6 -bottom-10 text-8xl text-slate-200 font-serif leading-none select-none">"</div>
               <div className="text-xl md:text-2xl text-slate-600 leading-relaxed whitespace-pre-line text-left bg-white/80 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-xl border border-white relative z-10 font-medium">
                 {product.detailedDescription}
               </div>
             </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                Everything you need to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">dominate your market.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.keyCapabilities.map((capability, idx) => (
                <div key={idx} className="group relative bg-white border border-slate-200/60 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50/50 to-secondary-50/50 border border-primary-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-primary-300 transition-colors">
                      <CheckCircle2 size={24} className="text-primary-600 group-hover:text-secondary-600 transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 leading-tight">{capability}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Screenshots (Marquee) */}
        {images.screenshots && images.screenshots.length > 0 && (
          <section className="py-24 bg-slate-900 overflow-hidden">
            <div className="text-center mb-12 px-6">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
                Interface Preview
              </h2>
            </div>
            
            <div className="relative flex overflow-x-hidden group">
              <div className="py-4 animate-marquee whitespace-nowrap flex gap-6 px-3">
                {images.screenshots.map((shot, index) => (
                  <div key={`shot-1-${index}`} className="w-[300px] md:w-[600px] aspect-video rounded-2xl overflow-hidden shrink-0 border-4 border-slate-800 shadow-2xl">
                    <img src={shot} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex gap-6 px-3">
                {images.screenshots.map((shot, index) => (
                  <div key={`shot-2-${index}`} className="w-[300px] md:w-[600px] aspect-video rounded-2xl overflow-hidden shrink-0 border-4 border-slate-800 shadow-2xl">
                    <img src={shot} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits & Ideal For */}
        <section className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Benefits */}
            <div className="space-y-8">
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
                Core Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <Zap size={20} className="text-amber-500 shrink-0" />
                    <span className="font-bold text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="space-y-8">
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
                Ideal For
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.idealFor.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-6 py-4 bg-slate-800 text-white rounded-full font-bold shadow-md">
                    <Target size={18} className="text-primary-400" />
                    {industry}
                  </div>
                ))}
              </div>
              <div className="p-6 bg-primary-50 rounded-3xl border border-primary-100 mt-8">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-primary-600" />
                  <h4 className="font-bold text-slate-900">Primary Users</h4>
                </div>
                <p className="text-slate-600 font-medium">{product.primaryUsers}</p>
              </div>
            </div>

          </div>
        </section>

        {/* Why Choose Pinak */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Pinak Technology</span>?
             </h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               At Pinak Technology, we don't just sell software; we provide solutions that transform businesses. Our products are built with cutting-edge technology, ensuring scalability, security, and exceptional performance. We offer dedicated support and continuous updates to ensure your operations never miss a beat.
             </p>
             <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-slate-700 font-bold bg-slate-50 px-6 py-3 rounded-xl border border-slate-200">
                  <Star className="text-yellow-500 fill-yellow-500" size={20} /> Premium Quality
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-bold bg-slate-50 px-6 py-3 rounded-xl border border-slate-200">
                  <Target className="text-primary-500" size={20} /> Customization Ready
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-bold bg-slate-50 px-6 py-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="text-emerald-500" size={20} /> 24/7 Support
                </div>
             </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-slate-900 to-[#030712] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-secondary-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              Ready to Upgrade Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Operations?
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-medium max-w-2xl mx-auto">
              Get started with {product.name} today and experience the difference of a truly integrated system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate("/contact")} size="lg" className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-full px-10 py-7 text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                Request a Live Demo
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Tailwind classes for marquee animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductPage;
