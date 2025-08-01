import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Home, FolderKanban, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-xl border-b"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center gap-2 px-4 py-2 text-base  font-semibold transition-all duration-300 hover:text-primary ${isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                <item.icon size={16} />
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}

          </nav>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t pt-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-primary/5 rounded-lg ${isActive(item.path) ? "text-primary bg-primary/10" : "text-muted-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            {/* <div className="mt-4 pt-4 border-t">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
                {mounted && (theme === "dark" ? "Light Mode" : "Dark Mode")}
              </button>
            </div> */}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;