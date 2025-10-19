// Redux imports
import { Braces, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-section z-10 pb-10 overflow-clip">
      <div className="container items-start gap-8">
        <Braces size={450} className="absolute right-0 md:-right-30 -bottom-20 rotate-8 -z-2 text-gray-400/20 dark:text-gray-600/20" />
        <div className="w-40"><img src="/pinak_logo.png" alt="Logo" className="w-full -mt-4" /></div>
        <div className="w-full flex flex-col sm:flex-row gap-8 justify-between text-gray-600 dark:text-gray-400">
          <div className="flex flex-col gap-0">
            <div className="flex gap-4 mb-2 items-center font-semibold text-monospace"><Phone size={20} className="text-secondary-400" />+91-7861945362</div>
            <div className="flex gap-4 mb-2 items-center font-semibold text-monospace"><Mail size={20} className="text-secondary-400" />contact@pinaktechnology.com</div>
            <div className="flex gap-4 mb-2 items-start font-semibold text-monospace"><MapPin size={20} className="text-secondary-400" />Pinak Technology, Mehsana, <br />Gujarat, India</div>
            <div className="flex gap-4 font-semibold text-monospace">
              <Send size={20} className="text-secondary-400" />
              <div className="flex gap-2">
                <Link to='https://github.com/yash752004' target='_blank' className="link link-focus underline">Github</Link>|
                <Link to='https://www.linkedin.com/in/yash-patel-18a93a230/' target='_blank' className="link link-focus underline">LinkedIn</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-0 md:gap-2">
            <Link to='/services' className="link link-focus font-semibold">Services</Link>
            <Link to='/projects' className="link link-focus font-semibold">Projects</Link>
            <Link to='/contact' className="link link-focus font-semibold">Contact</Link>
            <Link to="/terms" className="link link-focus font-semibold">Terms of Service</Link>
            <Link to='/privacy-policy' className="link link-focus font-semibold">Privacy Policy</Link>
          </div>
        </div>
        <div className="container mx-auto text-center mt-6 text-gray-500">
          &copy; 2025 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;