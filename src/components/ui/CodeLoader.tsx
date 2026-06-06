"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const greetings = ["Hi", "Hello", "Namaste", "Welcome"];

export const CodeLoader = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 500); // cycle every 500ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white/90 backdrop-blur-md", className)}>
      
      {/* Pinak Technology Logo (Upper side) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <img src="/logo_color.svg" alt="Pinak Technology" className="h-10 md:h-12 object-contain" style={{ pointerEvents: "auto" }} />
      </motion.div>

      {/* Clean Text Layout (No coding style) */}
      <div className="flex items-center justify-center min-h-[60px] overflow-hidden">
        <span 
          key={index}
          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent"
        >
          {greetings[index]}
        </span>
      </div>
    </div>
  );
};
