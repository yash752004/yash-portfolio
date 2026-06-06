import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef, useCallback } from "react";

// Words to cycle through — custom greetings
const words = ["Hi", "Hello", "Namaste", "Welcome"];

interface SplashLoaderProps {
  onComplete: () => void;
}

export const SplashLoader = ({ onComplete }: SplashLoaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Get window dimensions for the SVG curve
  useEffect(() => {
    const updateDimension = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  // Word cycling logic:
  // First word stays for 1000ms, then cycle every 450ms
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
      }, 450);
    }, 1000);

    return () => {
      clearTimeout(firstWordTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Total time before exit starts:
  // 1000ms (first word) + 450ms * (words.length - 1) remaining words + 400ms pause on last word
  const totalBeforeExit = 1000 + 450 * (words.length - 1) + 400;

  // Trigger the slide-up exit animation
  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, totalBeforeExit);

    return () => clearTimeout(exitTimer);
  }, [totalBeforeExit]);

  // Call onComplete AFTER the exit animation finishes (0.8s + 0.2s delay = 1s total)
  const handleExitComplete = useCallback(() => {
    onCompleteRef.current();
  }, []);

  // Calculate SVG paths for the organic curve effect
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[99] flex items-center justify-center"
          style={{ backgroundColor: "#f8fafc" }}
          initial={{ top: 0 }}
          exit={{ top: "-100vh" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {dimension.width > 0 && (
            <>
              {/* Centered content: logo + cycling word */}
              <div className="absolute z-10 flex items-center gap-3 sm:gap-4 md:gap-6">
                {/* Pinak logo */}
                <motion.img
                  src="/pinak_favicon.svg"
                  alt="Pinak Technology"
                  className="h-9 w-9 sm:h-10 sm:w-10 md:h-14 md:w-14 object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ pointerEvents: "auto" }}
                />

                {/* Cycling greeting word without animation */}
                <p
                  key={`word-${currentIndex}`}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-900"
                >
                  {words[currentIndex]}
                </p>
              </div>

              {/* SVG curve bottom — organic "peel away" exit effect */}
              <svg
                className="absolute top-0 w-full pointer-events-none"
                style={{ height: `calc(100% + 300px)` }}
              >
                <motion.path
                  d={initialPath}
                  fill="#f8fafc"
                  initial={{ d: initialPath }}
                  exit={{ d: targetPath }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(248,250,252,1))",
                  }}
                />
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
