import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8">
      {/* Desktop Navigation */}
      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 shadow-md backdrop-blur-md border border-white/60 py-2 px-6" 
          : "bg-white/40 backdrop-blur-sm border border-white/20 py-3 px-8"
      } hidden md:flex items-center justify-between`}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 flex items-center">
            <img src="/logo_color.svg" alt="Pinak Technology" className="h-full object-contain group-hover:scale-[1.02] transition-transform duration-300" />
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
                    ? "bg-primary-50 text-primary-600 shadow-sm shadow-primary-500/10 border border-primary-100" 
                    : "text-slate-600 hover:text-primary-500 hover:bg-slate-50"
                }`}
              >
                {item.name}
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
      <div className={`md:hidden rounded-2xl transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 shadow-lg border border-white/80" 
          : "bg-white/60 border border-white/20"
      } p-3.5`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo_color.svg" alt="Pinak Technology" className="h-7 object-contain" />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-slate-100 rounded-xl transition-all text-slate-600"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="flex flex-col gap-2 p-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                  isActive(item.path)
                    ? "bg-slate-50 text-slate-900 border-l-4 border-primary-500"
                    : "text-slate-600 hover:bg-slate-50/50 hover:text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                isActive("/contact")
                  ? "bg-slate-50 text-slate-900 border-l-4 border-primary-500"
                  : "text-slate-600 hover:bg-slate-50/50 hover:text-slate-900"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;