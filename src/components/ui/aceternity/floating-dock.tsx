import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const FloatingDock = ({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <motion.div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8 }}
    >
      <motion.button
        onClick={onClick}
        className="group relative p-4 bg-glass backdrop-blur-xl border border-border/20 rounded-full hover:border-primary/30 transition-all duration-300"
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </div>
      </motion.button>
    </motion.div>
  );
};