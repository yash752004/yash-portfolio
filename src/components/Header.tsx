import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.theme || "light");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  return (
    <div className="page-section fixed top-0 left-0 right-0 z-1000 py-0 md:px-6">
      <nav className="container mt-6 hidden md:flex flex-row gap-4 rounded-xl bg-primary-200/30 shadow-lg backdrop-blur-md">
        <div className="w-full flex justify-between pr-4 py-3">
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="h-9"><img src="/pinak_logo_small_1.png" alt="Logo" className="size-full -mt-1" /></div>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
              className={`px-4 py-1.5 rounded-full link-focus ${isActive(item.path) ? "text-white bg-primary-500" : "hover:bg-primary-100 hover:text-primary-500 hover:cursor-pointer"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          {theme === "dark"
            ? <button onClick={() => setTheme("light")} className="flex items-center gap-2 p-2 bg-slate-600 text-white rounded-full hover:shadow-lg cursor-pointer link-focus">
              <Moon size={20} />
            </button>
            :
            <button onClick={() => setTheme("dark")} className="flex items-center gap-2 p-2 bg-primary-200 rounded-full hover:shadow-lg cursor-pointer link-focus">
              <Sun size={20} />
            </button>
          }
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="w-full flex flex-col md:hidden p-3 bg-glass-header shadow-2xl">
        <nav className="w-full flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-4">
            <div className="h-9"><img src="/pinak_logo_small_1.png" alt="Logo" className="size-full -mt-1" /></div>
          </div>
          <div className="flex items-center">
            {theme === "dark"
              ? <button onClick={() => setTheme("light")} className="flex items-center gap-2 px-3 py-3 bg-slate-600 text-white rounded-full hover:shadow-lg cursor-pointer link-focus">
                <Moon size={18} />
              </button>
              : <button onClick={() => setTheme("dark")} className="flex items-center gap-2 px-3 py-3 bg-yellow-200 rounded-full hover:shadow-lg cursor-pointer link-focus">
                <Sun size={18} />
              </button>
            }
          </div>
        </nav>
        <div className={"h-0 overflow-hidden transition-all duration-150 ease-in-out" + (isOpen ? " h-60" : "")}>
          <div className="md:hidden mt-4 px-3 py-4 flex flex-col items-start gap-6 overflow-hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg flex items-center justify-start gap-2 hover:underline"
              >
                {item.name}
                {isActive(item.path) && (<div className="size-2 rounded-full bg-primary-500"></div>)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;