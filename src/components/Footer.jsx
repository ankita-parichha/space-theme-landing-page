import React, { useState, useEffect } from "react";
import { ArrowUp, MessageSquare, Orbit } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-100/50 dark:bg-slate-950/40 border-t border-slate-200/50 dark:border-slate-800/60 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Orbit className="h-6 w-6 text-indigo-500 animate-spin-slow" />
          <span className="text-sm font-bold font-display tracking-widest text-slate-800 dark:text-white">
            COSMOS EXPLORER
          </span>
        </div>

        {/* Copy */}
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
          © {new Date().getFullYear()} COSMOS Agency. All rights reserved. Data adapted from public planetary logs.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-200/50 hover:bg-slate-300/50 dark:bg-slate-900/50 dark:hover:bg-slate-800/80 text-slate-550 dark:text-slate-400 hover:text-indigo-500 transition-colors"
            aria-label="GitHub Link"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-200/50 hover:bg-slate-300/50 dark:bg-slate-900/50 dark:hover:bg-slate-800/80 text-slate-550 dark:text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Twitter Link"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-200/50 hover:bg-slate-300/50 dark:bg-slate-900/50 dark:hover:bg-slate-800/80 text-slate-550 dark:text-slate-400 hover:text-indigo-400 transition-colors"
            aria-label="Discord Link"
          >
            <MessageSquare className="h-4 w-4" />
          </a>
        </div>

      </div>

      {/* Floating Back To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 hover:from-cyan-500 hover:to-indigo-700 text-white shadow-[0_4px_16px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-115 focus:outline-none cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
