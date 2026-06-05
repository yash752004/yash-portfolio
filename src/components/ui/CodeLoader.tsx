"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const greetings = ["Hello", "Namaskar", "Welcome", "Bonjour", "Hola"];

export const CodeLoader = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("fixed inset-0 z-[200] flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-md", className)}>
      
      {/* Pinak Technology Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <img src="/logo_color.svg" alt="Pinak Technology" className="h-10 md:h-12 object-contain" />
      </motion.div>

      <div className="font-mono text-sm sm:text-base text-left px-8 py-6 bg-slate-900 rounded-2xl border border-primary-500/20 shadow-2xl shadow-primary-500/10 flex items-center min-w-[280px]">
        <span className="text-secondary-500 font-bold mr-3">{"{"}</span>
        
        <span className="text-primary-300 font-medium mr-2">greeting</span>
        <span className="text-slate-400 mr-3">: </span>
        
        <div className="flex items-center justify-center min-w-[100px]">
          <AnimatePresence mode="wait">
            <motion.span 
              key={index}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="text-primary-400 inline-block"
            >
              "{greetings[index]}"
            </motion.span>
          </AnimatePresence>
        </div>
        
        <span className="text-secondary-500/70 ml-1">,</span>
        <span className="text-secondary-500 font-bold ml-3">{"}"}</span>
        
        {/* Blinking cursor */}
        <motion.div 
          animate={{ opacity: [1, 0, 1] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-5 bg-primary-500 inline-block ml-3"
        />
      </div>
    </div>
  );
};
