import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, ArrowDown, Sparkles } from "lucide-react";
import astronautImg from "../assets/astronaut.png";

export default function Hero() {
  const [isLaunching, setIsLaunching] = useState(false);

  const triggerLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
    }, 3500); // Reset after animation completes
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Decorative Nebula Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading and CTA */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 dark:text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Solar System Exploration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-display leading-[1.15] tracking-tight text-slate-900 dark:text-white"
          >
            Journey Through <br className="hidden md:inline" />
            The{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Solar System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-medium max-w-2xl leading-relaxed"
          >
            Explore the wonders of space, from the scorched, cratered plains of
            Mercury to the howling, frozen supersonic storms of Neptune. Discover
            our cosmic neighborhood in stunning glassmorphic detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#planets"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 hover:from-cyan-500 hover:to-indigo-700 text-white font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5"
            >
              Explore Planets
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>

            <button
              onClick={triggerLaunch}
              disabled={isLaunching}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-indigo-500/20 dark:border-indigo-500/30 hover:border-indigo-500/60 dark:hover:border-cyan-400 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 font-semibold bg-white/40 dark:bg-slate-950/20 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Rocket className={`h-5 w-5 ${isLaunching ? "text-cyan-400" : ""}`} />
              {isLaunching ? "Rocket Launched!" : "Launch Rocket"}
            </button>
          </motion.div>
        </div>

        {/* Right Column: Visual Astronaut & Rocket Display */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
          
          {/* Circular Orbit Backplate */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-indigo-500/20 animate-spin-reverse pointer-events-none" />

          {/* Floating Astronaut Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute z-10 w-64 h-64 md:w-80 md:h-80 select-none animate-float pointer-events-none"
          >
            <img
              src={astronautImg}
              alt="Astronaut floating in deep space"
              className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(99,102,241,0.3)]"
            />
          </motion.div>

          {/* Animated Rocket Launch System */}
          <div className="absolute right-0 bottom-4 w-28 h-full flex flex-col justify-end items-center pointer-events-none">
            {/* Landing Pad */}
            <div className="w-16 h-2 bg-slate-400 dark:bg-slate-800 rounded-full border border-slate-300 dark:border-slate-700 shadow-md" />

            {/* Launching Rocket */}
            <motion.div
              style={{ originY: 1 }}
              animate={
                isLaunching
                  ? {
                      y: ["0%", "-350%", "-350%", "100%", "0%"],
                      scale: [1, 1.2, 0.5, 0.8, 1],
                      opacity: [1, 1, 0, 0, 1]
                    }
                  : { y: "0%", scale: 1, opacity: 1 }
              }
              transition={{
                duration: 3.5,
                times: [0, 0.4, 0.5, 0.75, 1],
                ease: "easeInOut"
              }}
              className="absolute bottom-2 flex flex-col items-center"
            >
              {/* Rocket SVG */}
              <svg
                width="40"
                height="60"
                viewBox="0 0 24 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="filter drop-shadow-[0_4px_10px_rgba(6,182,212,0.4)]"
              >
                {/* Nose Cone */}
                <path d="M12 2C12 2 16 8 16 12H8C8 12 12 2 12 2Z" fill="#ff4d4d" />
                {/* Body */}
                <rect x="8" y="12" width="8" height="16" rx="2" fill="#f1f5f9" />
                {/* Window */}
                <circle cx="12" cy="18" r="2.5" fill="#38bdf8" stroke="#cbd5e1" strokeWidth="0.5" />
                {/* Fins */}
                <path d="M8 20L4 26V28H8V20Z" fill="#ef4444" />
                <path d="M16 20L20 26V28H16V20Z" fill="#ef4444" />
                {/* Nozzle */}
                <rect x="10" y="28" width="4" height="2" fill="#475569" />
              </svg>

              {/* Fire & Smoke particles when launching */}
              {isLaunching && (
                <motion.div
                  initial={{ opacity: 1, scale: 0.5 }}
                  animate={{ opacity: 0, scale: 2 }}
                  transition={{ duration: 0.6, repeat: 4, repeatType: "reverse" }}
                  className="w-8 h-12 bg-gradient-to-t from-transparent via-amber-500 to-orange-400 blur-sm rounded-full -mt-1 origin-top"
                />
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
