// Redux imports
import React from 'react';

const Footer = () => {


  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 pt-8">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between text-gray-600 dark:text-gray-400">
          <div className="flex flex-col gap-0">
            <div className="font-light text-monospace">// Developed by</div>
            <div className="font-semibold text-monospace">// Yash Patel</div>
              <div className="font-semibold text-monospace">// +91 7861945362</div>
              <div className="font-semibold text-monospace">// yashpatel.dev01@gmail.com</div>
            <div className="font-semibold text-monospace">//&nbsp;
              <a href='https://github.com/yash752004' target='_blank' className="underline hover:text-emerald-500">Github</a>&nbsp;|&nbsp;
              <a href='https://www.linkedin.com/in/yash-patel-18a93a230/' target='_blank' className="underline hover:text-emerald-500">LinkedIn</a>
            </div>
            {/* <div className="flex gap-4 text-monospace">
              <a href={contactDetails.github} target="_blank" className="hover:text-emerald-500"><SiGithub className="w-5 h-5" /></a>
              <a href={contactDetails.linkedin} target="_blank" className="hover:text-emerald-500"><SiLinkedin className="w-5 h-5" /></a>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold text-gray-950">{contactDetails.name}</p>
              <p className="text-monospace">{contactDetails.phone}</p>
              <p className="text-monospace">{contactDetails.email}</p>
            </div> */}
          </div>
          <div className="flex flex-col gap-0 md:gap-2">
            <a href='/' target="_blank" className="hover:underline hover:text-emerald-500">About</a>
            <a href='/projects' target="_blank" className="hover:underline hover:text-emerald-500">Portfolio</a>
            <a href='/contact' target="_blank" className="hover:underline hover:text-emerald-500">Contact</a>
            <a href="/terms" target="_blank" className="hover:underline hover:text-emerald-500">Terms & Conditions</a>
            <a href='/privacy-policy' target="_blank" className="hover:underline hover:text-emerald-500">Privacy Policy</a>
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