import React, { useState } from "react";
import { Mic, User, Video, BarChart2, Calendar, Check, Play, Settings, ShieldCheck, Heart, Globe } from "lucide-react";

const BytesquadReference: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("voice");

  return (
    <section className="py-20 relative bg-transparent overflow-hidden w-full">
      {/* Soft background colorful spot blurs like the reference */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute top-[50%] right-[30%] w-[30rem] h-[30rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
            Interactive Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            High-Fidelity <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Digital Prototypes</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            Inspired by the ByteSquad premium Framer showcase, demonstrating high-converting user interfaces with dynamic widgets and smooth layout structures.
          </p>
        </div>

        {/* Bytesquad Showcase Container */}
        <div className="relative w-full rounded-[40px] bg-slate-50/60 border border-slate-200/80 p-8 md:p-12 shadow-2xl backdrop-blur-md overflow-hidden min-h-[550px] flex items-center justify-center">
          
          {/* Header reference top label */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer hover:bg-blue-700 transition-all">
              Reduce your churn for free →
            </span>
            <p className="text-[11px] text-slate-400 font-semibold mt-2.5 text-center">
              Unlimited AI-Moderated Text Interviews • Note: limited-time deal
            </p>
          </div>

          {/* Components Layout Grid replicating the screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mt-12 items-center">
            
            {/* Left Card: AI Interviewer (Voice Card) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between items-center text-center space-y-6 relative hover:scale-[1.01] transition-transform duration-300">
              
              {/* Trip Planner Absolute Tag */}
              <div className="absolute -top-6 -left-4 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-3 shadow-md flex items-start gap-2.5 max-w-[170px] text-left">
                <div className="p-1.5 bg-orange-50 rounded-lg text-orange-500">
                  <User className="size-4" />
                </div>
                <div>
                  <h5 className="text-[10px] font-bold text-slate-800">Trip Planner</h5>
                  <p className="text-[8px] text-slate-400 mt-0.5 leading-tight">AI-Moderated user testing inputs.</p>
                </div>
              </div>

              <div className="size-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner mt-4">
                <Mic className="size-5 text-slate-800 animate-pulse" />
              </div>

              <div>
                <h4 className="font-extrabold text-slate-800 text-lg">AI Interviewer</h4>
                <p className="text-slate-400 text-xs mt-1">10 key questions will be covered</p>
              </div>

              <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-slate-900/10 transition-all active:scale-[0.98]">
                <Mic className="size-3.5" />
                <span>Start Voice Interview</span>
              </button>

              <div className="text-[9px] text-slate-400 leading-normal max-w-[200px]">
                By continuing, you agree to our <span className="underline cursor-pointer">Terms & Conditions</span>. Powered by <span className="font-bold text-slate-500">The Insights Company</span>.
              </div>
            </div>

            {/* Middle Card: Video Interview Layout */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-5 shadow-xl border border-slate-100 flex flex-col justify-between min-h-[340px] relative overflow-hidden hover:scale-[1.01] transition-transform duration-300">
              
              {/* Top video label details */}
              <div className="flex items-center justify-between z-10 relative">
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/5 backdrop-blur-md rounded-full text-slate-700 text-[10px] font-bold">
                  <Video className="size-3 text-red-500" />
                  <span>Video Interview</span>
                </div>
                <span className="text-[10px] font-bold text-slate-400">00:01</span>
              </div>

              {/* Video Placeholder Box with face avatar */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="w-full h-full bg-slate-50 relative flex items-center justify-center">
                  {/* Replicating the avatar frame from screenshot */}
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                    alt="Interviewee" 
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Control dock floating at the bottom */}
              <div className="flex items-center justify-center gap-2 py-2 px-3 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl shadow-lg w-fit mx-auto z-10 relative">
                <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-600 transition-all">
                  <Settings className="size-4" />
                </button>
                <button className="p-2.5 bg-slate-950 text-white rounded-xl hover:bg-slate-800 transition-all">
                  <Mic className="size-4" />
                </button>
                <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-600 transition-all">
                  <Globe className="size-4" />
                </button>
              </div>

              {/* Metric curve overlay tag */}
              <div className="absolute -bottom-6 -left-4 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-3 shadow-md flex flex-col gap-2 min-w-[160px] text-left z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-800">Growth Index</span>
                  <span className="text-[8px] font-extrabold text-primary-500 bg-emerald-50 px-1 rounded">You</span>
                </div>
                {/* Simulated Sparkline path */}
                <svg className="w-full h-8 text-orange-500" viewBox="0 0 100 30" fill="none">
                  <path d="M0,25 Q25,20 50,15 T100,5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="100" cy="5" r="3.5" fill="currentColor" />
                </svg>
                <div className="flex justify-between text-[7px] text-slate-400 font-bold">
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            {/* Right Card: Bar Graph & Stats Card */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between min-h-[300px] relative hover:scale-[1.01] transition-transform duration-300">
              
              {/* Trip Planner top right widget */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-800">
                  <User className="size-3.5 text-slate-500" />
                  <span className="text-xs font-bold">Trip Planner</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-normal">
                  AI-Moderated User Insights and Metrics analysis.
                </p>
              </div>

              {/* Bar Chart Container */}
              <div className="space-y-4 my-4">
                <div className="flex items-end justify-between gap-1.5 h-20 px-2 border-b border-slate-100">
                  <div className="w-2.5 h-1/4 bg-slate-100 rounded-t-sm" />
                  <div className="w-2.5 h-2/5 bg-slate-100 rounded-t-sm" />
                  <div className="w-2.5 h-3/5 bg-slate-100 rounded-t-sm" />
                  <div className="w-2.5 h-4/5 bg-primary-500 rounded-t-sm relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-1 bg-black text-white text-[7px] font-bold rounded">You</span>
                  </div>
                  <div className="w-2.5 h-1/2 bg-slate-100 rounded-t-sm" />
                </div>
                <div className="flex justify-between text-[7px] text-slate-400 font-extrabold px-1">
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>

              {/* Active badges */}
              <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[9px] text-slate-500 font-bold">
                  <ShieldCheck className="size-3.5 text-primary-500" />
                  <span>Verified Score</span>
                </div>
                <Heart className="size-3.5 text-red-500 fill-red-500" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BytesquadReference;
