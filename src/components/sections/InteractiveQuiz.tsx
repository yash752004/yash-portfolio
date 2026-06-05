import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Layers,
  Smartphone,
  Globe,
  Terminal,
  Clock,
  DollarSign,
  User,
  Mail,
  MessageSquare
} from "lucide-react";
import { toast } from "sonner";

interface Option {
  id: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

const InteractiveQuiz: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectOptions: Option[] = [
    { id: "saas", label: "Custom SaaS Platform", desc: "Performance-focused cloud application with multi-tenancy & billing", icon: <Layers className="size-5 text-secondary-500" /> },
    { id: "web", label: "High-End Business App / Landing", desc: "Ultra-fast, beautiful marketing frontends designed to close customers", icon: <Globe className="size-5 text-primary-500" /> },
    { id: "mobile", label: "Mobile Application", desc: "Cross-platform iOS and Android apps with beautiful micro-interactions", icon: <Smartphone className="size-5 text-cyan-500" /> },
    { id: "custom", label: "Custom Technical Integration", desc: "API development, cloud engineering, or database optimization", icon: <Terminal className="size-5 text-amber-500" /> },
  ];

  const timelineOptions: Option[] = [
    { id: "fast", label: "Fast (Under 4 Weeks)", desc: "Need a rapid MVP launch or prototype quickly", icon: <Clock className="size-5 text-primary-500" /> },
    { id: "standard", label: "Standard (4 - 8 Weeks)", desc: "Well-structured development with proper review phases", icon: <Clock className="size-5 text-secondary-500" /> },
    { id: "scale", label: "Enterprise (8+ Weeks)", desc: "Large project scale, continuous deployment & integration", icon: <Clock className="size-5 text-purple-500" /> },
  ];

  const budgetOptions: Option[] = [
    { id: "growth", label: "$2,000 - $5,000", desc: "Perfect for high-impact MVPs & custom landing campaigns", icon: <DollarSign className="size-5 text-primary-500" /> },
    { id: "professional", label: "$5,000 - $10,000", desc: "Recommended for fully integrated web apps & SaaS systems", icon: <DollarSign className="size-5 text-secondary-500" /> },
    { id: "enterprise", label: "$10,000+", desc: "For full-scale enterprise software with ongoing support plans", icon: <DollarSign className="size-5 text-cyan-500" /> },
  ];

  const handleNext = () => {
    if (step === 1 && !projectType) {
      toast.error("Please select a project type to continue.");
      return;
    }
    if (step === 2 && !timeline) {
      toast.error("Please select your timeline preference.");
      return;
    }
    if (step === 3 && !budget) {
      toast.error("Please select your budget estimation.");
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please provide your name and email address.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Design consultation request sent! We'll contact you in under 4 hours.");
      setStep(5);
    }, 1500);
  };

  const resetQuiz = () => {
    setStep(1);
    setProjectType("");
    setTimeline("");
    setBudget("");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-slate-50 w-full" id="estimator">
      <div className="max-w-4xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2">
            Build Your <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Digital Blueprint</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Answer a few quick questions to estimate scope, delivery timeline, and map out your strategic roadmap.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-glass-premium rounded-3xl border border-white/60 p-8 md:p-12 shadow-xl relative overflow-hidden">

          {/* Progress bar */}
          {step <= 4 && (
            <div className="w-full bg-slate-100 h-1.5 rounded-full mb-10 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          )}

          {/* STEP 1: PROJECT TYPE */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">What are you looking to build?</h3>
                <p className="text-slate-500 text-sm">Select the option that aligns closest to your requirements.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setProjectType(opt.id)}
                    className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${projectType === opt.id
                        ? "bg-white border-primary-500 shadow-md ring-2 ring-primary-500/10"
                        : "bg-slate-50/50 border-slate-200 hover:border-slate-300 hover:bg-white"
                      }`}
                  >
                    <div className="p-3 rounded-xl bg-slate-100/80 mt-1">
                      {opt.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm md:text-base">{opt.label}</h4>
                      <p className="text-slate-500 text-xs md:text-sm mt-1">{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: TIMELINE */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">What is your ideal launch window?</h3>
                <p className="text-slate-500 text-sm">Choose the speed that fits your target timeline.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {timelineOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setTimeline(opt.id)}
                    className={`flex flex-col items-center justify-between p-6 rounded-2xl border text-center transition-all ${timeline === opt.id
                        ? "bg-white border-primary-500 shadow-md ring-2 ring-primary-500/10"
                        : "bg-slate-50/50 border-slate-200 hover:border-slate-300 hover:bg-white"
                      }`}
                  >
                    <div className="p-3 rounded-xl bg-slate-100/80 mb-4">
                      {opt.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm md:text-base">{opt.label}</h4>
                      <p className="text-slate-500 text-xs mt-2">{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: BUDGET */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Select an estimated project budget</h3>
                <p className="text-slate-500 text-sm">Helps us tailor a realistic architectural scale for your software.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setBudget(opt.id)}
                    className={`flex flex-col items-center justify-between p-6 rounded-2xl border text-center transition-all ${budget === opt.id
                        ? "bg-white border-primary-500 shadow-md ring-2 ring-primary-500/10"
                        : "bg-slate-50/50 border-slate-200 hover:border-slate-300 hover:bg-white"
                      }`}
                  >
                    <div className="p-3 rounded-xl bg-slate-100/80 mb-4">
                      {opt.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm md:text-base">{opt.label}</h4>
                      <p className="text-slate-500 text-xs mt-2">{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT INFO */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Who should we send the estimate to?</h3>
                <p className="text-slate-500 text-sm">Provide your best contact info to receive your custom Blueprint roadmap.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full bg-glass-input pl-11 pr-4 py-3 rounded-xl text-sm font-medium text-slate-800 outline-none"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email Address"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full bg-glass-input pl-11 pr-4 py-3 rounded-xl text-sm font-medium text-slate-800 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 size-4 text-slate-400" />
                <textarea
                  name="message"
                  placeholder="Optional details (e.g. key reference sites or technical parameters)..."
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full bg-glass-input pl-11 pr-4 pt-3.5 pb-4 rounded-xl text-sm font-medium text-slate-800 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-bold shadow-lg shadow-primary-500/10 hover:shadow-secondary-500/20 hover:scale-[1.01] transition-all disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSubmitting ? "Generating Blueprint..." : "Get Our Strategic Quote"}
                <Sparkles className="size-4" />
              </button>
            </form>
          )}

          {/* STEP 5: SUCCESS THANK YOU */}
          {step === 5 && (
            <div className="text-center py-10 space-y-6">
              <div className="mx-auto flex items-center justify-center size-20 rounded-full bg-emerald-50 border border-emerald-100 text-primary-500 shadow-md">
                <Check className="size-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Blueprint Initialized!</h3>
                <p className="text-slate-500 text-base max-w-md mx-auto">
                  Thanks for building your specification plan. We are analyzing the parameters and will send a detailed technical overview to <span className="font-bold text-slate-800">{formData.email}</span> shortly.
                </p>
              </div>
              <button
                onClick={resetQuiz}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-all"
              >
                Plan Another Project
              </button>
            </div>
          )}

          {/* NAVIGATION FOOTER */}
          {step <= 4 && (
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={step === 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 text-xs md:text-sm font-semibold transition-all disabled:opacity-0 disabled:pointer-events-none"
              >
                <ArrowLeft className="size-4" /> Back
              </button>

              {step < 4 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs md:text-sm font-semibold transition-all ml-auto"
                >
                  Continue <ArrowRight className="size-4" />
                </button>
              ) : null}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default InteractiveQuiz;
