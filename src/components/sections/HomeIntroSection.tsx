import React from "react";
import {
  ChevronRight,
  Send,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Zap,
  Brain,
  Settings,
  Cloud,
  Database,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeIntroSection: React.FC = () => {
  const navigate = useNavigate();

  const aims = [
    "To eliminate operational inefficiencies by engineering intelligent, automated workflows.",
    "To empower modern enterprises with cutting-edge AI integrations and robust SaaS architectures.",
    "To deliver measurable ROI through smart technology, reducing manual labor and scaling capabilities.",
  ];

  const visions = [
    "To build a future where intelligent automation handles the mundane, freeing humans for creative work.",
    "To continuously explore new AI technologies and cloud paradigms to keep our clients ahead of the curve.",
    "To redefine industry standards by making complex AI and ERP integrations accessible and reliable.",
  ];

  return (
    <section className="bg-transparent w-full relative overflow-hidden ">
      {/* Backdrop glowing drops using Pinak colors */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-emerald-50/45 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-indigo-50/35 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Row 1: Mission (Left) & Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Our Missions */}
          <div className="space-y-6">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
              Our Missions
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              AT PINAK <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                WE STRIVE FOR ROI
              </span>
            </h3>

            <div className="space-y-4 pt-2">
              {aims.map((aim, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <CheckCircle2 className="size-5 text-primary-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm md:text-base font-semibold leading-relaxed">
                    {aim}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mission Illustration (Floating Glassmorphism Tech Hub) */}
          <div className="relative rounded-3xl overflow-hidden bg-transparent h-[300px] md:h-[450px] group flex items-center justify-center border border-transparent">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] group-hover:opacity-100 opacity-60 transition-opacity duration-700" />

            {/* Central Main Card */}
            <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center transform group-hover:scale-[1.03] transition-transform duration-700">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/10 to-primary-600/5" />
              <Zap className="size-12 md:size-16 text-primary-500 drop-shadow-sm" />
              {/* Outer rotating dashed ring */}
              <div className="absolute inset-[-24px] rounded-full border border-dashed border-primary-500/30 animate-[spin_20s_linear_infinite]" />
            </div>

            {/* Floating Element 1 - Top Left */}
            <div className="absolute top-[20%] left-[15%] md:left-[25%] size-12 md:size-14 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-lg flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700">
              <Settings className="size-5 md:size-6 text-slate-600" />
            </div>

            {/* Floating Element 2 - Top Right */}
            <div className="absolute top-[25%] right-[10%] md:right-[20%] size-10 md:size-12 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-lg flex items-center justify-center group-hover:-translate-y-3 group-hover:translate-x-1 transition-transform duration-700 delay-100">
              <Cloud className="size-4 md:size-5 text-primary-500" />
            </div>

            {/* Floating Element 3 - Bottom Left */}
            <div className="absolute bottom-[25%] left-[10%] md:left-[20%] size-10 md:size-12 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-lg flex items-center justify-center group-hover:translate-y-2 group-hover:-translate-x-2 transition-transform duration-700 delay-75">
              <Database className="size-4 md:size-5 text-primary-600" />
            </div>

            {/* Floating Element 4 - Bottom Right */}
            <div className="absolute bottom-[20%] right-[15%] md:right-[25%] size-14 md:size-16 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-lg flex items-center justify-center group-hover:translate-y-3 transition-transform duration-700 delay-150">
              <ShieldCheck className="size-6 md:size-7 text-emerald-500" />
            </div>
          </div>
        </div>

        {/* Row 2: Image (Left) & Vision (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Vision Illustration */}
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden bg-transparent h-[300px] md:h-[450px] group flex items-center justify-center border border-transparent">
            {/* Core Orbit Rings */}
            <div className="absolute size-48 md:size-64 rounded-full border border-secondary-500/20 group-hover:rotate-45 transition-transform duration-1000" />
            <div className="absolute size-36 md:size-48 rounded-full border border-secondary-500/30 group-hover:-rotate-45 transition-transform duration-1000" />

            {/* Central AI Core */}
            <div className="relative z-10 size-20 md:size-24 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 shadow-[0_0_50px_rgba(249,115,22,0.3)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
              <Brain className="size-10 text-white" />
            </div>

            {/* Floating Data Particles */}
            <div
              className="absolute top-1/4 left-[20%] size-2 rounded-full bg-secondary-400 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute bottom-1/3 left-[30%] size-3 rounded-full bg-secondary-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-1/3 right-[20%] size-2 rounded-full bg-secondary-300 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1/4 right-[30%] size-2.5 rounded-full bg-secondary-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
          </div>

          {/* Right: Our Vision */}
          <div className="order-1 lg:order-2 space-y-6 lg:pl-8">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full border border-primary-200">
              Our Vision
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              SHAPING THE <br />
              <span className="bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent">
                DIGITAL FRONTIER
              </span>
            </h3>

            <div className="space-y-4 pt-2">
              {visions.map((vision, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="size-5 shrink-0 mt-0.5 rounded-full bg-secondary-50 border border-secondary-200 flex items-center justify-center">
                    <div className="size-2 rounded-full bg-secondary-500" />
                  </div>
                  <p className="text-slate-700 text-sm md:text-base font-semibold leading-relaxed">
                    {vision}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Card: Let's Work Together */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col md:flex-row items-center justify-between w-full gap-8 lg:gap-12">
          {/* Left Text Block */}
          <div className="relative z-10 flex-1 text-left">
            <h4 className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-blue-500 mb-4">
              READY TO GET STARTED?
            </h4>
            <h3 className="text-2xl md:text-[32px] font-extrabold text-slate-900 mb-4 leading-[1.3] max-w-2xl">
              Let's turn your innovative ideas into{" "}
              <br className="hidden lg:block" />
              scalable digital realities.
            </h3>
            <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed max-w-2xl font-medium">
              Whether you need a custom SaaS platform, robust enterprise
              software, or cutting-edge AI integrations, our dedicated team of
              experts is ready to help you build and scale with confidence.
            </p>
          </div>

          {/* Right Button */}
          <div className="relative z-10 shrink-0 w-full md:w-auto mt-2 md:mt-0">
            <button
              onClick={() => navigate("/contact")}
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-xl font-bold text-sm md:text-[15px] shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
            >
              Let's Explore Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntroSection;
