import { motion } from "motion/react";
import { Zap, Shield, Globe, Code } from "lucide-react";

const features = [
  { icon: Zap, text: "Faster", color: "text-yellow-400" },
  { icon: Shield, text: "Reliable", color: "text-green-400" },
  { icon: Globe, text: "Secure", color: "text-blue-400" },
  { icon: Code, text: "Scalable", color: "text-purple-400" },
];

// Duplicate features for smooth infinite loop
const repeatedFeatures = [...features, ...features];

const FeatureSlider = () => {
  return (
    <div className="relative h-40 overflow-hidden mb-12">
      {/* Optional gradient fade (top & bottom) */}
      {/* <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-background to-transparent z-10" /> */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-background to-transparent z-10" /> */}

      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 8, // total loop time (adjust speed)
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col"
      >
        {repeatedFeatures.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-4 my-3"
          >
            <item.icon className={`w-6 h-6 ${item.color}`} />
            <p className="text-xl font-semibold">
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureSlider;
