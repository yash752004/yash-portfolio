"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const greetings = ["Hi", "Hello", "Namaste", "Welcome"];

export const CodeLoader = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 400); // match SplashLoader speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-[#fcfcfc] backdrop-blur-md", className)}>
      
      {/* Logo just above the text */}
      <div className="flex justify-center">
        <img
          src="/logo_color.svg"
          alt="Pinak Technology"
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </div>

      {/* Centered cycling greeting with gradient text */}
      <div className="flex items-center justify-center">
        <p className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
          {greetings[index]}
        </p>
      </div>

    </div>
  );
};
