import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef, useCallback } from "react";

interface SplashLoaderProps {
  onComplete: () => void;
}

// Adjust this value to make the loader faster or slower (in milliseconds)
const LOADER_SPEED_MS = 1500;

export const SplashLoader = ({ onComplete }: SplashLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const getGreeting = (p: number) => {
    if (p <= 25) return "Hii";
    if (p <= 50) return "Hello";
    if (p <= 75) return "Namaste";
    return "Welcome";
  };

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const intervalTime = 20; // 20ms for smooth 50fps animation
    const step = 100 / (LOADER_SPEED_MS / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Trigger the exit animation shortly after hitting 100%
  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Wait half a second at 100% before exiting
      return () => clearTimeout(exitTimer);
    }
  }, [progress]);

  // Call onComplete AFTER the exit animation finishes
  const handleExitComplete = useCallback(() => {
    onCompleteRef.current();
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[#fcfcfc]"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1], // Smooth Apple-like easing
          }}
        >
          {/* Logo just above the text */}
          <div className="flex justify-center">
            <img
              src="/logo_color.svg"
              alt="Pinak Technology"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          {/* Centered progressive greeting with gradient text */}
          <div className="flex items-center justify-center">
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent w-[300px] text-center">
              {getGreeting(progress)}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
