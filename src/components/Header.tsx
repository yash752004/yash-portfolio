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
    <div className="navbar-block">
      <nav className="container">
        <div className="main-block">
          <div className="name-block">
            <span className="name-text">Yash Patel</span>
            <span className="title-text text-monospace">// Full Stack Developer</span>
          </div>
          <div className="link-block">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`link ${isActive(item.path) ? "active" : "hover:bg-gradient-repeat"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="theme-block">
          {theme === "dark"
            ? <button onClick={() => setTheme("light")} className="theme-btn theme-btn-dark">
              <Moon size={24} />
            </button>
            :
            <button onClick={() => setTheme("dark")} className="theme-btn">
              <Sun size={24} />
            </button>
          }
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="name-block">
            <span className="name-text text-gradient">Yash Patel</span>
            <span className="title-text text-monospace">// Full Stack Developer</span>
          </div>
          <div className="theme-block">
            {theme === "dark"
              ? <button onClick={() => setTheme("light")} className="theme-btn theme-btn-dark">
                <Moon size={18} />
              </button>
              :
              <button onClick={() => setTheme("dark")} className="theme-btn">
                <Sun size={18} />
              </button>
            }
          </div>
        </nav>
        <div className={"link-container" + (isOpen ? " open" : "")}>
          <div className="link-block">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="link"
              >
                {item.name}
                {isActive(item.path) && (<div className="active"></div>)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;