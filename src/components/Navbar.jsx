import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Orbit } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: "Planets", href: "#planets" },
    { name: "Compare", href: "#compare" },
    { name: "Interactive Orbit", href: "#orbit" },
    { name: "Timeline", href: "#timeline" },
    { name: "Astronauts", href: "#astronauts" },
    { name: "NASA Stats", href: "#stats" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/70 dark:bg-[#0B1020]/75 backdrop-blur-md border-b border-indigo-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Orbit className="h-8 w-8 text-indigo-500 group-hover:text-cyan-400 transition-colors duration-300 animate-spin-slow" />
            <div className="absolute inset-0 bg-indigo-500/20 blur-md rounded-full group-hover:bg-cyan-400/25 transition-all duration-300" />
          </div>
          <span className="text-2xl font-extrabold font-display tracking-widest text-[#0f172a] dark:text-white">
            COSMOS
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg glass-panel text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all duration-300 relative overflow-hidden"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 animate-pulse" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg glass-panel text-slate-700 dark:text-slate-300"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm z-30 transition-all duration-300" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-0 right-0 w-64 h-[calc(100vh-60px)] bg-white/95 dark:bg-[#070714]/95 border-l border-indigo-500/10 p-6 flex flex-col gap-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 py-2 border-b border-slate-100 dark:border-slate-800 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
