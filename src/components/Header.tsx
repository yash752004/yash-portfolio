import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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
      <nav className="container mt-6 hidden md:flex flex-row gap-4 rounded-xl bg-white/80 dark:bg-black/50 shadow-lg backdrop-blur-md">
        <div className="w-full flex justify-between pr-4 py-3">
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="h-9">
              <img src="/logo_small_white.svg" alt="Logo" className="hidden dark:block size-full" />
              <img src="/logo_small_color.svg" alt="Logo" className="block dark:hidden size-full" />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => {
              return isActive(item.path)
                ? <p key={item.name} className="px-2 font-bold text-primary-500 underline">{item.name}</p>
                : <Button
                    key={item.name}
                    type="submit"
                    onClick={() => navigate(item.path)}
                    variant="default"
                    size="sm"
                    className="rounded-full bg-transparent text-black dark:text-white hover:bg-primary-500 hover:text-white"
                  >
                      {item.name}
                  </Button>
            })}
          </div>
        </div>
        <div className="flex items-center">
          {theme === "dark"
            ? <Button
                onClick={() => setTheme("light")}
                className="w-10 p-2 bg-slate-800 text-white rounded-full"
              >
                <Moon size={20} />
              </Button>
            :
            <Button
              onClick={() => setTheme("dark")}
              className="w-10 p-2 bg-primary-500 text-white rounded-full"
            >
              <Sun size={20} />
            </Button>
          }
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="w-full flex flex-col md:hidden p-3 bg-glass-header shadow-2xl">
        <nav className="w-full flex items-center justify-between">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            className="md:hidden w-10 p-2 hover:bg-primary-500 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <div className="flex items-center gap-4">
            <div className="h-9">
              <img src="/logo_small_white.svg" alt="Logo" className="hidden dark:block size-full" />
              <img src="/logo_small_color.svg" alt="Logo" className="block dark:hidden size-full" />
            </div>
          </div>
          <div className="flex items-center">
            {theme === "dark"
              ? <Button
                  onClick={() => setTheme("light")}
                  className="w-10 p-2 bg-slate-800 text-white rounded-full"
                >
                  <Moon size={20} />
                </Button>
                :
                <Button
                  onClick={() => setTheme("dark")}
                  className="w-10 p-2 bg-primary-500 text-white rounded-full"
                >
                  <Sun size={20} />
                </Button>
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
                className="link link-focus text-lg flex items-center justify-start gap-2"
              >
                {item.name}
                {isActive(item.path) && (<div className="size-2 rounded-full bg-secondary-400"></div>)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;