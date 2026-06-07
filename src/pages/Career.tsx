import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code2, Gamepad2, Component, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { useApplications } from "@/hooks/useApplications";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Career: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (< 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Resume must be less than 5MB");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Validate type
    const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a PDF or DOCX file");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setResumeFile(file);
  };

  return (
    <div className="min-h-screen relative bg-slate-50">
      <Helmet>
        <title>Careers | Hire Dedicated Software Developers in India | Pinak Technology</title>
        <meta name="description" content="Join Pinak Technology, or hire dedicated software developers in India from our talented pool of engineers and creators." />
      </Helmet>
      {/* Decorative Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20 text-center">
          <span className="inline-flex px-4 py-1.5 mb-6 bg-primary-50 border border-primary-100 rounded-full text-xs font-black uppercase tracking-widest text-primary-600 shadow-sm">
            We're Hiring
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate engineers and creators to build the future of software and interactive experiences. Find your next role below.
          </p>
        </section>

        {/* Job Listings Grid */}
        <section className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-8">
            
            {/* Full Stack Developer */}
            <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 hover:shadow-primary-500/10 transition-all duration-500">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center border border-primary-100/50 group-hover:scale-105 transition-transform duration-300">
                    <Code2 className="w-8 h-8 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">Full Stack Developer</h3>
                    <p className="text-slate-500 mb-4 text-sm leading-relaxed max-w-xl">
                      Architect and build highly scalable, performant web applications. You'll take ownership of both frontend and backend infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Svelte", "Go", "PostgreSQL", "Communication"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-100 rounded-md text-xs font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>3+ years of experience in full-stack development</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Strong problem-solving and communication skills</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 min-w-[200px]">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Remote / Hybrid</p>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center group-hover:border-primary-200 transition-colors">
                    <span className="text-xs font-bold text-slate-500 mb-1">Send Resume to:</span>
                    <span className="text-sm font-bold text-primary-600 font-mono">connect@pinaktechnology.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Unity Developer */}
            <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 hover:shadow-secondary-500/10 transition-all duration-500">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-50 to-primary-50 flex items-center justify-center border border-secondary-100/50 group-hover:scale-105 transition-transform duration-300">
                    <Gamepad2 className="w-8 h-8 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-secondary-600 transition-colors">Unity Developer</h3>
                    <p className="text-slate-500 mb-4 text-sm leading-relaxed max-w-xl">
                      Create immersive and engaging gameplay experiences. Work closely with designers and artists to bring mechanics to life with high performance.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Unity 3D", "C#", "Game Performance Optimization", "Shaders"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-100 rounded-md text-xs font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Proficiency in memory profiling and physics optimization</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Experience shipping games on mobile or PC</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 min-w-[200px]">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">On-site / Hybrid</p>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center group-hover:border-secondary-200 transition-colors">
                    <span className="text-xs font-bold text-slate-500 mb-1">Send Resume to:</span>
                    <span className="text-sm font-bold text-secondary-600 font-mono">connect@pinaktechnology.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Design Developer */}
            <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 hover:shadow-primary-500/10 transition-all duration-500">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-primary-50 flex items-center justify-center border border-indigo-100/50 group-hover:scale-105 transition-transform duration-300">
                    <Component className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Game Design Developer</h3>
                    <p className="text-slate-500 mb-4 text-sm leading-relaxed max-w-xl">
                      Shape the core mechanics, level progression, and storytelling of our games. Balance gameplay loops to ensure maximum player retention and joy.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Game Mechanics", "Level Design", "Storytelling", "Economy Balance"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-100 rounded-md text-xs font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Ability to create rapid paper prototypes and GDDs</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Deep understanding of player psychology</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 min-w-[200px]">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Remote / Hybrid</p>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center group-hover:border-indigo-200 transition-colors">
                    <span className="text-xs font-bold text-slate-500 mb-1">Send Resume to:</span>
                    <span className="text-sm font-bold text-indigo-600 font-mono">connect@pinaktechnology.com</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
