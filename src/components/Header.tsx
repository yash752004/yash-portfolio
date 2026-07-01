import { useEffect, useState } from "react";
import { Menu, X, Sparkles, Linkedin, Instagram } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import path from "path";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    // { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    // { name: "Case Studies", path: "/case-studies" },
    // { name: "Career", path: "/career" },
    // { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll * 100 || 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar Removed */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8 mt-1.5">
        {/* Desktop Navigation */}
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/80 shadow-md backdrop-blur-md border border-white/60 py-2 px-6"
              : "bg-white/40 backdrop-blur-sm border border-white/20 py-3 px-8"
          } hidden md:flex items-center justify-between`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 flex items-center">
              <img
                src="/logo_color.svg"
                alt="Pinak Technology"
                className="h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                    active
                      ? "bg-white shadow-sm shadow-primary-500/10 border border-primary-100"
                      : "text-slate-600 hover:text-primary-500 hover:bg-slate-50"
                  }`}
                >
                  <span className={active ? "text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600" : ""}>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white text-xs font-bold rounded-full transition-all shadow-md shadow-primary-500/10 hover:shadow-secondary-500/20"
          >
            <span>Partner With Us</span>
            <Sparkles className="size-3.5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden rounded-2xl transition-all duration-300 ${
            scrolled || isOpen
              ? "bg-white/95 shadow-lg border border-white/80"
              : "bg-white/60 border border-white/20"
          } p-4 py-5`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src="/logo_color.svg"
                alt="Pinak Technology"
                className="h-8 object-contain"
              />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-slate-100 rounded-xl transition-all text-slate-600"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-115 mt-4 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 p-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`relative py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between overflow-hidden ${
                  isActive("/")
                    ? "bg-slate-50 pl-5 pr-4"
                    : "text-slate-600 hover:bg-slate-50/50 hover:text-slate-900 px-4"
                }`}
              >
                {isActive("/") && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500" />
                )}
                <span className={isActive("/") ? "text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600" : ""}>
                  Home
                </span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between overflow-hidden ${
                    isActive(item.path)
                      ? "bg-slate-50 pl-5 pr-4"
                      : "text-slate-600 hover:bg-slate-50/50 hover:text-slate-900 px-4"
                  }`}
                >
                  {isActive(item.path) && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500" />
                  )}
                  <span className={isActive(item.path) ? "text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600" : ""}>
                    {item.name}
                  </span>
                </Link>
              ))}

              {/* Social Links */}
              <div className="mt-2 pt-4 border-t border-slate-100 flex items-center justify-center gap-4">
                <a
                  href="https://linkedin.com/company/pinaktechnology"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-all"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="https://instagram.com/pinaktechnology"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-all"
                >
                  <Instagram className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
