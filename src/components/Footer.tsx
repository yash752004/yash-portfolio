import React from 'react';
import { Mail, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200/80 py-16 overflow-hidden">
      
      {/* Decorative Glow background */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="h-8 flex items-center">
                <img src="/logo_color.svg" alt="Pinak Technology" className="h-full object-contain group-hover:scale-[1.02] transition-transform duration-300" />
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Creating high-performance digital products, robust SaaS platforms, and secure cloud infrastructures that build trust and optimize business conversions.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/yash752004" target="_blank" rel="noreferrer" className="flex items-center justify-center size-8 rounded-lg bg-white border border-slate-200 text-slate-500 hover:bg-slate-900 hover:text-white transition-all">
                <FaGithub className="size-4" />
              </a>
              <a href="https://www.linkedin.com/company/pinaktechnology/" target="_blank" rel="noreferrer" className="flex items-center justify-center size-8 rounded-lg bg-white border border-slate-200 text-slate-500 hover:bg-blue-600 hover:text-white transition-all">
                <FaLinkedin className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-3 text-slate-500 text-sm">
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-primary-500" />
                <a href="mailto:connect@pinaktechnology.com" className="hover:text-slate-900 transition-colors font-medium">connect@pinaktechnology.com</a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-primary-500 mt-0.5" />
                <span className="leading-relaxed">Pinak Technology, Mehsana,<br />Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-500 font-medium">
              <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <Link to="/services" className="hover:text-slate-900 transition-colors">Services</Link>
              <Link to="/projects" className="hover:text-slate-900 transition-colors">Projects</Link>
              <Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
              <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
              <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy</Link>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-xs text-slate-400 font-medium gap-4">
          <p>&copy; {new Date().getFullYear()} Pinak Technology. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <Sparkles className="size-3 text-secondary-500" />
            <span>Designed for Premium Conversions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;