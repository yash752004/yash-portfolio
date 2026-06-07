import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { extendedServiceData } from "@/components/sections/ServiceDetailSection";
import ServiceContactSection from "@/components/sections/ServiceContactSection";
import { Check, Target, Zap, Shield, Sparkles, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    const foundService = extendedServiceData.find((s) => s.id === id);
    if (foundService) {
      setService(foundService);
    } else {
      navigate("/services");
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!service) return null;

  const Icon = service.icon;

  return (
    <div className="min-h-screen relative bg-slate-50 font-sans">
      <Helmet>
        <title>{service.title} | Pinak Technology</title>
        <meta name="description" content={`Expert ${service.title} services. ${service.description}`} />
      </Helmet>
      <Header />
      
      <main className="relative z-10 pt-32 pb-20">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Hero Content */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32 relative z-10">
          <button 
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-slate-500 hover:text-primary-600 font-bold text-sm mb-10 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back to Services
          </button>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <span className="inline-flex px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-[10px] font-black uppercase tracking-widest text-primary-600 shadow-sm">
                {service.tagline}
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
                {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                  {service.title.split(' ').slice(-1)}
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                {service.description} We merge cutting-edge technology with deep industry expertise to deliver solutions that are not just functional, but transformative for your business.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 rounded-full text-sm font-bold bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white shadow-lg shadow-primary-500/15 hover:shadow-secondary-500/30 hover:scale-[1.02] transition-all flex items-center gap-2 group">
                  <span>Start a Project</span>
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/case-studies')}
                  className="px-8 py-4 rounded-full text-sm font-bold bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
                >
                  View Case Studies
                </button>
              </div>
            </div>
            
            {/* Right Image/Icon Visual */}
            <div className="flex-1 w-full flex justify-center relative">
              <div className="absolute inset-0 bg-primary-200/20 rounded-full blur-[100px] scale-150" />
              <div className="relative w-full max-w-lg aspect-square bg-white/60 backdrop-blur-xl rounded-[3rem] p-10 border border-white/80 shadow-2xl shadow-slate-200/50 flex flex-col items-center justify-center overflow-hidden group">
                 {/* Floating background icon */}
                 <Icon className="w-64 h-64 text-primary-500/10 absolute -right-10 -bottom-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
                 
                 <img src={service.imageUrl} alt={service.title} className="relative z-10 w-full h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Why Choose This <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Service</span>
            </h2>
            <p className="text-slate-600 font-medium">We focus on delivering measurable ROI, exceptional performance, and robust security in every system we architect.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit: string, index: number) => {
              const icons = [Target, Zap, Shield, Sparkles];
              const BIcon = icons[index % icons.length];
              return (
                <div key={index} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary-500/5 hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-secondary-500 transition-colors duration-300">
                    <BIcon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-primary-600 transition-colors">{benefit}</h4>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Process Section (New) */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32 relative z-10">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Our Engineering <br/><span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Process</span>
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  We don't just write code; we architect solutions. Our agile methodology ensures transparency, rapid iteration, and strict adherence to security protocols at every stage of the lifecycle.
                </p>
                <div className="space-y-6">
                  {['Requirements & Blueprinting', 'Agile Development Sprints', 'Rigorous QA & Security Testing', 'Deployment & Scaling'].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center justify-center font-black text-sm shadow-md">
                        {i + 1}
                      </div>
                      <h5 className="text-lg font-bold text-slate-800">{step}</h5>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-slate-100 flex items-center justify-center">
                   {/* Abstract representation of code/process */}
                   <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                   <div className="relative z-10 w-3/4 h-3/4 bg-slate-900/50 rounded-2xl border border-slate-700 p-6 flex flex-col gap-4 backdrop-blur-md">
                     <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden"><div className="w-1/3 h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" /></div>
                     <div className="w-3/4 h-4 bg-slate-800 rounded-full overflow-hidden"><div className="w-1/2 h-full bg-gradient-to-r from-secondary-500 to-secondary-400 rounded-full" /></div>
                     <div className="w-5/6 h-4 bg-slate-800 rounded-full overflow-hidden"><div className="w-3/4 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" /></div>
                     <div className="mt-auto flex justify-between items-end">
                       <div className="w-12 h-12 bg-slate-800 rounded-xl" />
                       <div className="w-12 h-16 bg-slate-800 rounded-xl" />
                       <div className="w-12 h-24 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-xl" />
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery / Features Section (Gradient Card) */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 relative z-10">
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-primary-500/20">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
             
             <div className="relative z-10">
               <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-black uppercase tracking-widest text-white mb-6">
                 Delivery Commitment
               </span>
               <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{service.delivery.title}</h2>
               <p className="text-primary-50 mb-12 max-w-3xl text-lg md:text-xl font-medium leading-relaxed">{service.delivery.description} Our delivery pipeline guarantees precision and performance.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {service.delivery.features.map((feature: string, index: number) => (
                   <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-sm hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                     <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                       <Check className="w-6 h-6 text-white" />
                     </div>
                     <h4 className="font-bold text-white text-lg">{feature}</h4>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        <ServiceContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
