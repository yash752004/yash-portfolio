import React, { useState } from "react";
import { Send, Mail, MapPin, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import FAQSection from "@/components/sections/FAQSection";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, acceptTerms: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      toast.error("Please accept the terms and conditions to proceed.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all the required contact fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact-form-detail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent! Pinak Technology will contact you soon.");
      setFormData({ name: "", email: "", message: "", acceptTerms: false });
    } catch (error) {
      console.error(error);
      toast.error("Submission failed. Please check network parameters.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-slate-50">
      <Header />

      {/* Decorative Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Title */}
          <div className="text-center mb-16 space-y-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full border border-primary-200">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase">
              PARTNER WITH <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                PINAK TECHNOLOGY
              </span>
            </h1>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Have a visionary product outline or custom SaaS platform target? Let's engineer a high-ROI digital blueprint today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mt-10">
            
            {/* Left side: Coordinates Column */}
            <div className="lg:col-span-5 bg-glass-premium border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold text-emerald-600 tracking-wider uppercase">Contact Details</span>
                  <h3 className="text-2xl font-bold text-slate-800">Our Communication Office</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Drop us a line to discuss architectural specifications or get instant estimation blue prints.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3.5 text-sm font-medium text-slate-600">
                    <div className="p-2.5 rounded-xl bg-slate-100/80 text-primary-500">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase block">Work Email</span>
                      <a href="mailto:connect@pinaktechnology.com" className="hover:text-slate-900 transition-colors">connect@pinaktechnology.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-sm font-medium text-slate-600">
                    <div className="p-2.5 rounded-xl bg-slate-100/80 text-secondary-500">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase block">HQ Address</span>
                      <span>Pinak Technology, Mehsana, Gujarat, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <ShieldCheck className="size-4.5 text-primary-500" />
                  <span>Encrypted Lead Capturing</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-normal">
                  We guarantee total technical confidentiality under active corporate NDA protocols.
                </p>
              </div>
            </div>

            {/* Right side: Modern Form Grid */}
            <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 shadow-xl">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Outline Your Intentions</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name *</label>
                    <Input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="bg-slate-50 border-slate-200 focus-visible:ring-primary-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Work Email *</label>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@company.com"
                      className="bg-slate-50 border-slate-200 focus-visible:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Interested Service *</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="ERP Solutions">ERP Solutions</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Server Management">Server Management</option>
                    <option value="PLC Integration">PLC Integration</option>
                    <option value="WhatsApp Integration">WhatsApp Integration</option>
                    <option value="Support & Maintenance">Support & Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message Description *</label>
                  <Textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your SaaS scope, cloud setup objectives, or custom ideas..."
                    rows={5}
                    className="bg-slate-50 border-slate-200 focus-visible:ring-primary-500 resize-none"
                  />
                </div>

                <div className="flex items-start space-x-3 pt-1">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <label htmlFor="terms" className="text-xs text-slate-500 leading-normal font-medium">
                    I accept the{" "}
                    <Link to="/terms" target="_blank" className="underline font-bold text-slate-600 hover:text-slate-800">Terms & Condition</Link>
                    {" "}and{" "}
                    <Link to="/privacy-policy" target="_blank" className="underline font-bold text-slate-600 hover:text-slate-800">Privacy Policy</Link>.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white rounded-2xl font-bold shadow-lg shadow-primary-500/10 hover:shadow-secondary-500/20 hover:scale-[1.01] transition-all disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-b-transparent" />
                      Engaging Security Pipeline...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="size-4" /> Engage Strategic Call
                    </span>
                  )}
                </button>
              </form>
            </div>

          </div>

        </div>
      </main>

      <FAQSection />
      <Footer />
    </div>
  );
};

export default Contact;