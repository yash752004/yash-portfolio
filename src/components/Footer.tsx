import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=" bg-card/50 backdrop-blur-xl border-t border-border/20 "
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left - Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4 md:mb-0">
            <span>Developed by</span>
            <span className="text-primary font-semibold">Yash Patel</span>
          </div>

          {/* Center - Copyright */}
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            @ {new Date().getFullYear()} All rights reserved
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/yash752004"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 text-primary hover:shadow-lg hover:shadow-primary/25"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yash-patel-18a93a230/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 text-primary hover:shadow-lg hover:shadow-primary/25"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;