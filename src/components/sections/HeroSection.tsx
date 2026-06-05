import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle, ShieldCheck, Cpu, Code2, Cloud, TrendingUp, BarChart2 } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">

      {/* Premium Light-Theme Interactive Background grid & blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0b0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0b0_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Light glow drops */}
      <div className="absolute top-[10%] left-[10%] w-[35rem] h-[35rem] bg-primary-100/50 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-secondary-100/40 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Content Layout Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">

        {/* Left Side: Brand headlines and CTA */}
        <div className="lg:col-span-7 text-left space-y-8 flex flex-col items-start justify-center">

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm text-emerald-800 text-xs font-bold">
              <CheckCircle className="size-3.5 text-primary-500" />
              <span>Accepting Agency Partnerships</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 shadow-sm text-indigo-800 text-xs font-bold">
              <ShieldCheck className="size-3.5 text-secondary-500 animate-pulse" />
              <span>99.9% Production Guarantee</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] uppercase">
              WE ENGINEER <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                HIGH-ROI SOFTWARE
              </span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg lg:text-xl font-medium max-w-xl leading-relaxed pt-2">
              Pinak Technology builds secure cloud architectures, custom SaaS platforms, and lightning-fast web systems for visionary companies and founders.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="w-full sm:w-auto px-8 py-6 rounded-full text-base font-bold bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white shadow-lg shadow-primary-500/15 hover:shadow-secondary-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Build My Platform</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="#estimator"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-slate-700 hover:text-slate-900 bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 font-bold text-center flex items-center justify-center gap-2 transition-all grow-on-hover"
            >
              <Sparkles className="size-4 text-secondary-500" />
              <span>Project Cost Estimator</span>
            </a>
          </div>

          {/* Vetted parameters */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 pt-8 border-t border-slate-200/50 w-full max-w-lg">
            <div>
              <span className="text-2xl md:text-3xl font-black text-slate-800">100%</span>
              <p className="text-[10px] text-slate-400 font-extrabold uppercase mt-0.5 tracking-wider">Milestone Delivery</p>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-slate-800">&lt; 4 hr</span>
              <p className="text-[10px] text-slate-400 font-extrabold uppercase mt-0.5 tracking-wider">Response Speed</p>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-slate-800">20+</span>
              <p className="text-[10px] text-slate-400 font-extrabold uppercase mt-0.5 tracking-wider">Active Clients</p>
            </div>
          </div>

        </div>

        {/* Right Side: Attractive Premium Interface Mockup (Bytesquad design layout) */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">

          {/* Floating glowing design badges */}
          <div className="absolute -top-6 -left-6 z-20 p-2.5 rounded-2xl bg-white border border-slate-100 shadow-lg text-primary-500 animate-bounce delay-1000">
            <Cloud className="size-5" />
          </div>
          <div className="absolute -bottom-4 right-10 z-20 p-2.5 rounded-2xl bg-white border border-slate-100 shadow-lg text-secondary-500 animate-pulse">
            <Cpu className="size-5" />
          </div>

          {/* Replicating highly premium modular agency card dashboards in place of BytesquadReference */}
          <div className="w-full bg-white/70 backdrop-blur-md rounded-[32px] p-6 border border-white/80 shadow-2xl relative overflow-hidden flex flex-col gap-5 hover:scale-[1.01] transition-transform duration-300">

            {/* Soft backdrop radial spotlights */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-50/60 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-50/60 rounded-full blur-2xl pointer-events-none" />

            {/* Widget 1: Platform Overview Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                  P
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Pinak Engine v2.0</span>
                  <span className="text-[9px] text-slate-400 font-semibold block">Production monitoring active</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-primary-500 bg-emerald-50 px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>

            {/* Widget 2: Beautiful curved speed indices chart */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                <span>Speed Index</span>
                <span className="text-secondary-500 flex items-center gap-0.5">
                  <TrendingUp className="size-3" /> +140% faster
                </span>
              </div>

              {/* Sparkline curve */}
              <svg className="w-full h-16 text-primary-500 mt-2" viewBox="0 0 100 40" fill="none">
                <path d="M0,35 Q20,38 40,20 T80,10 T100,5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="100" cy="5" r="3.5" fill="currentColor" />
              </svg>
            </div>

            {/* Widget 3: Live bar details metrics and logs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-3 flex flex-col justify-between">
                <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-wider">Cloud Uptime</span>
                <span className="text-xl font-black text-slate-800 mt-1">99.99%</span>
              </div>

              <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-3 flex flex-col justify-between">
                <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-wider">API Load</span>
                <span className="text-xl font-black text-slate-800 mt-1">12 ms</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;