import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Cloud,
  Cpu,
  TrendingUp,
  Lock,
  Zap,
  Globe,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";

// Animated counter component
const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Animated code terminal widget
const CodeTerminal = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const codeLines = [
    { prefix: "const", content: " app = pinak.deploy()", color: "#60a5fa" },
    { prefix: "→", content: " Building optimized bundle...", color: "#34d399" },
    { prefix: "→", content: " Running security audit...", color: "#fbbf24" },
    { prefix: "✓", content: " Deployed to production!", color: "#34d399" },
  ];

  useEffect(() => {
    if (lineIndex >= codeLines.length) return;
    const timer = setTimeout(
      () => setLineIndex((prev) => prev + 1),
      800 + lineIndex * 200
    );
    return () => clearTimeout(timer);
  }, [lineIndex, codeLines.length]);

  return (
    <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <span className="text-[10px] text-slate-500 font-mono ml-2">
          pinak-cli v2.0 — production
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-xs sm:text-sm space-y-2 min-h-[120px]">
        {codeLines.slice(0, lineIndex).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <span style={{ color: line.color }} className="font-bold">
              {line.prefix}
            </span>
            <span className="text-slate-300">{line.content}</span>
            {i === lineIndex - 1 && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-2 h-4 bg-primary-400 inline-block ml-1"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-transparent">
      {/* Premium interactive background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226,232,240,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226,232,240,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, #000 60%, transparent 100%)",
        }}
      />

      {/* Ambient glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[5%] w-[40rem] h-[40rem] rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] right-[5%] w-[35rem] h-[35rem] rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, #fed7aa 0%, transparent 70%)",
        }}
      />

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Side: Headlines, Trust, CTA */}
        <div className="lg:col-span-7 text-left space-y-7 flex flex-col items-start justify-center">
          {/* Trust badges row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 shadow-sm text-emerald-700 text-[11px] font-bold backdrop-blur-sm">
              <CheckCircle className="size-3.5 text-emerald-500" />
              <span>Accepting Agency Partners</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 shadow-sm text-blue-700 text-[11px] font-bold backdrop-blur-sm">
              <ShieldCheck className="size-3.5 text-blue-500" />
              <span>SOC 2 Compliant Process</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50/80 border border-amber-200/60 shadow-sm text-amber-700 text-[11px] font-bold backdrop-blur-sm">
              <Star className="size-3.5 text-amber-500 fill-amber-500" />
              <span>5.0 Client Rating</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
              We Engineer{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Custom Software
              </span>
              <br />
              <span className="text-slate-400 text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
                That Scales.
              </span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg font-medium max-w-xl leading-relaxed">
              Pinak Technology is a leading <strong>custom software development company in India</strong>. As a premier <strong>AI automation agency for startups</strong>, we build secure cloud architectures, custom SaaS platforms, and lightning-fast web systems — from concept to production in weeks.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
          >
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="px-8 py-6 rounded-full text-base font-bold bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white shadow-lg shadow-primary-500/15 hover:shadow-secondary-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="#estimator"
              className="px-8 py-3.5 rounded-full text-slate-700 hover:text-slate-900 bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 font-bold text-center flex items-center justify-center gap-2 transition-all grow-on-hover"
            >
              <Zap className="size-4 text-secondary-500" />
              <span>Get Cost Estimate</span>
            </a>
          </motion.div>

          {/* Social proof / trust metrics */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full max-w-lg"
          >
            {/* Client logos / trust strip */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex -space-x-2">
                {[
                  "bg-gradient-to-br from-blue-400 to-blue-600",
                  "bg-gradient-to-br from-emerald-400 to-emerald-600",
                  "bg-gradient-to-br from-purple-400 to-purple-600",
                  "bg-gradient-to-br from-amber-400 to-amber-600",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-white shadow-sm flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Trusted by <span className="text-slate-700 font-bold">30+</span>{" "}
                companies worldwide
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-5 border-t border-slate-200/60">
              <div>
                <span className="text-2xl md:text-3xl font-black text-slate-800">
                  <AnimatedCounter end={100} suffix="%" />
                </span>
                <p className="text-[10px] text-slate-400 font-extrabold uppercase mt-0.5 tracking-wider">
                  On-Time Delivery
                </p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black text-slate-800">
                  <AnimatedCounter end={4} prefix="< " suffix=" hr" />
                </span>
                <p className="text-[10px] text-slate-400 font-extrabold uppercase mt-0.5 tracking-wider">
                  Response Time
                </p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black text-slate-800">
                  <AnimatedCounter end={99} suffix=".9%" />
                </span>
                <p className="text-[10px] text-slate-400 font-extrabold uppercase mt-0.5 tracking-wider">
                  Uptime SLA
                </p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black text-slate-800">
                  <AnimatedCounter end={10} suffix="+" />
                </span>
                <p className="text-[10px] text-slate-400 font-extrabold uppercase mt-0.5 tracking-wider">
                  Years Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Premium Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 relative w-full flex items-center justify-center"
        >
          {/* Floating tech badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 z-20 p-2.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-100 shadow-lg text-blue-500"
          >
            <Cloud className="size-5" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-3 right-8 z-20 p-2.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-100 shadow-lg text-orange-500"
          >
            <Cpu className="size-5" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-1/2 -right-6 z-20 p-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-100 shadow-lg text-emerald-500"
          >
            <Lock className="size-4" />
          </motion.div>

          {/* Main dashboard card */}
          <div className="w-full bg-white/70 backdrop-blur-lg rounded-[28px] p-5 border border-white/80 shadow-2xl relative overflow-hidden flex flex-col gap-4 hover:shadow-3xl transition-shadow duration-500">
            {/* Background accents */}
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-blue-50/50 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-orange-50/50 rounded-full blur-2xl pointer-events-none" />

            {/* Dashboard header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100/80">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-xl  from-primary-500 to-primary-700 flex items-center justify-center shadow-sm overflow-hidden p-1.5">
                  <img src="/pinak_favicon.svg" alt="Pinak" className="w-full h-full object-contain" style={{ pointerEvents: 'auto' }} />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    Pinak Engine v2.0
                  </span>
                  <span className="text-[9px] text-slate-400 font-medium block">
                    Live production monitoring
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Active
              </span>
            </div>

            {/* Code terminal widget */}
            <CodeTerminal />

            {/* Performance metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3 text-center">
                <span className="text-[9px] font-semibold text-slate-400 block uppercase tracking-wider">
                  Uptime
                </span>
                <span className="text-lg font-black text-slate-800 mt-0.5 block">
                  99.99%
                </span>
              </div>
              <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3 text-center">
                <span className="text-[9px] font-semibold text-slate-400 block uppercase tracking-wider">
                  Latency
                </span>
                <span className="text-lg font-black text-slate-800 mt-0.5 block">
                  12ms
                </span>
              </div>
              <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3 text-center">
                <span className="text-[9px] font-semibold text-slate-400 block uppercase tracking-wider">
                  Speed
                </span>
                <span className="text-lg font-black text-emerald-600 mt-0.5 flex items-center justify-center gap-0.5">
                  <TrendingUp className="size-3" />
                  +140%
                </span>
              </div>
            </div>

            {/* Security & compliance strip */}
            <div className="flex items-center justify-between px-3 py-2.5 bg-slate-50/60 rounded-xl border border-slate-100/60">
              <div className="flex items-center gap-4">
                {[
                  { icon: Lock, label: "SSL" },
                  { icon: ShieldCheck, label: "Audited" },
                  { icon: Globe, label: "CDN" },
                ].map(({ icon: Icon, label }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 text-[10px] text-slate-500 font-semibold"
                  >
                    <Icon className="size-3 text-primary-500" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <span className="text-[9px] text-slate-400 font-mono">
                v2.4.1
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;