import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Home, FolderKanban, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-1000 shadow-lg md:shadow-none">
      <nav className="container h-full mx-auto hidden md:flex items-center gap-4 px-6 pt-6">
        <div className="w-full flex justify-between pl-6 pr-4 py-3 rounded-full bg-glass-header">
          <div className="flex items-center gap-4 lg:gap-8">
            <span className="text-2xl font-bold text-gradient">Yash Patel</span>
            <span className="text-sm lg:text-lg text-gray-500 text-monospace">// Full Stack Developer</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-1.5 rounded-full ${isActive(item.path) ? "text-white bg-emerald-500 shadow-lg" : "bg-gradient-repeat-transparent hover:text-white"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          {theme === "dark"
            ? <button onClick={() => setTheme("light")} className="flex items-center gap-2 px-3 py-3 bg-purple-900 text-white rounded-full hover:shadow-lg cursor-pointer">
              <Moon size={24} />
            </button>
            :
            <button onClick={() => setTheme("dark")} className="flex items-center gap-2 px-3 py-3 bg-yellow-200 rounded-full hover:shadow-lg cursor-pointer">
              <Sun size={24} />
            </button>
          }
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="w-full flex flex-col md:hidden p-3 bg-gray-100">
        <nav className="w-full flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-gradient">Yash Patel</span>
            <span className="hidden sm:flex text-xs lg:text-lg text-gray-500 text-monospace">// Full Stack Developer</span>
          </div>
          <div className="flex items-center">
            {theme === "dark"
              ? <button onClick={() => setTheme("light")} className="flex items-center gap-2 px-3 py-3 bg-purple-900 text-white rounded-full hover:shadow-lg cursor-pointer">
                <Moon size={18} />
              </button>
              : <button onClick={() => setTheme("dark")} className="flex items-center gap-2 px-3 py-3 bg-yellow-200 rounded-full hover:shadow-lg cursor-pointer">
                <Sun size={18} />
              </button>
            }
          </div>
        </nav>
        <div className={"h-0 overflow-hidden transition-all duration-150 ease-in-out" + (isOpen ? " h-50" : "")}>
          <div className="md:hidden mt-4 px-3 py-4 flex flex-col items-start gap-6 overflow-hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg flex items-center justify-start gap-2 hover:underline"
              >
                {item.name}
                {isActive(item.path) && (<div className="size-2 rounded-full bg-emerald-500"></div>)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;