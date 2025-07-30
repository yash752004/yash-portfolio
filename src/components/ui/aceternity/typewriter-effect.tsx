import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];
      const shouldDelete = isDeleting;

      if (!shouldDelete && currentText === currentWord) {
        // Finished typing, wait before deleting
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (shouldDelete && currentText === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        return;
      }

      const timeout = setTimeout(
        () => {
          setCurrentText((prevText) =>
            shouldDelete
              ? prevText.slice(0, -1)
              : currentWord.slice(0, prevText.length + 1)
          );
        },
        shouldDelete ? 50 : 100
      );

      return () => clearTimeout(timeout);
    };

    const cleanup = type();
    return cleanup;
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <div className={cn("", className)}>
      <span>{currentText}</span>
      <motion.span
        className={cn(
          "inline-block w-1 h-6 bg-primary ml-1",
          cursorClassName
        )}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
};