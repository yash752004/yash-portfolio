import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef, useCallback } from "react";

// Words to cycle through — custom greetings
const words = ["Hi", "Hello", "Namaste", "Welcome"];

interface SplashLoaderProps {
  onComplete: () => void;
}

export const SplashLoader = ({ onComplete }: SplashLoaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Word cycling logic:
  // Cycle every 400ms. Keep the last word ("Welcome") visible longer.
  useEffect(() => {
    const firstWordTimer = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= words.length - 1) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, 400); // slightly slower speed for better readability
    }, 600); // initial delay before starting to swap

    return () => {
      clearTimeout(firstWordTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Total time before exit starts:
  // 600ms initial + 400ms * (words.length - 1) + 600ms pause on last word
  const totalBeforeExit = 600 + 400 * (words.length - 1) + 600;

  // Trigger the slide-up exit animation
  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, totalBeforeExit);

    return () => clearTimeout(exitTimer);
  }, [totalBeforeExit]);

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

          {/* Centered cycling greeting with gradient text */}
          <div className="flex items-center justify-center">
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              {words[currentIndex]}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
