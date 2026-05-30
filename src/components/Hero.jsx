import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, ShieldAlert, Sparkles, Database } from "lucide-react";
import astronautImg from "../assets/astronaut.png";

export default function Hero() {
  const [isLaunching, setIsLaunching] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Interactive mouse-move parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 35;
      const y = (clientY - window.innerHeight / 2) / 35;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const triggerLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
    }, 3500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden tech-grid">
      {/* SpaceX-style HUD borders & grids */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Horizontal & Vertical lines */}
        <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-cyan-500/5" />
        <div className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-purple-500/5" />
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-cyan-500/5" />
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-purple-500/5" />
        
        {/* Glowing crosshair in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-cyan-500/10 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-12 bg-cyan-500/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1px] w-12 bg-cyan-500/20" />
      </div>

      {/* Decorative Nebula Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Background Animated Drift Planets */}
      <motion.div
        animate={{
          x: -mousePos.x * 0.3,
          y: -mousePos.y * 0.3,
        }}
        className="absolute top-20 right-1/4 w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-800 via-purple-700 to-cyan-500 opacity-20 blur-[2px] pointer-events-none select-none z-0"
      >
        <div className="absolute inset-0 rounded-full bg-black/45 shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.9)]" />
      </motion.div>

      <motion.div
        animate={{
          x: -mousePos.x * 0.15,
          y: -mousePos.y * 0.15,
        }}
        className="absolute bottom-24 left-10 w-24 h-24 rounded-full bg-gradient-to-tr from-rose-800 to-amber-500 opacity-15 blur-[1px] pointer-events-none select-none z-0"
      >
        <div className="absolute inset-0 rounded-full bg-black/40 shadow-[inset_-5px_-5px_12px_rgba(0,0,0,0.9)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Heading and CTA */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Mission Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400/30 bg-cyan-500/5 text-cyan-400 text-xs font-black uppercase tracking-widest mb-8 hud-corner hud-corner-tl"
          >
            <Sparkles className="h-4 w-4 animate-pulse text-cyan-400" />
            <span>SOLARIS INITIATIVE : ORBITAL MISSION V</span>
          </motion.div>

          {/* Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black font-display leading-[1.05] tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          >
            Explore <br />
            The{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent glow-text-cyan font-black">
              Deep Cosmos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-base md:text-lg text-slate-300 font-semibold max-w-xl leading-relaxed font-sans"
          >
            Delve into high-contrast multi-planetary telemetry data. Discover chemical structures, atmospheric composition matrices, and orbital blueprints across the solar frontier.
          </motion.p>

          {/* Glowing CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-extrabold uppercase text-xs tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5"
            >
              Analyze Systems
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              onClick={triggerLaunch}
              disabled={isLaunching}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-cyan-400/25 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 font-extrabold uppercase text-xs tracking-wider bg-slate-950/40 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <Rocket className={`h-4.5 w-4.5 ${isLaunching ? "text-cyan-400 animate-pulse" : ""}`} />
              {isLaunching ? "ROCKET DISPATCHED!" : "IGNITE ENGINES"}
            </button>
          </motion.div>

          {/* Telemetry Footer Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            className="mt-16 hidden md:flex items-center gap-8 text-[10px] font-mono font-bold tracking-widest text-slate-450 border-t border-slate-800/80 pt-6 w-full"
          >
            <div className="flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-cyan-400" />
              <span>LIVE CORE: SOL_NETWORK_V.5</span>
            </div>
            <div>STATUS: ONLINE</div>
            <div>LATENCY: 0.04 MS</div>
          </motion.div>

        </div>

        {/* Right Column: Visual Astronaut Display */}
        <div className="lg:col-span-5 relative w-full h-[450px] md:h-[600px] flex items-center justify-center">
          
          {/* Outer Dashed Orbit Path */}
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-indigo-500/15 animate-spin-reverse pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-cyan-500/5 animate-spin-slow pointer-events-none" />

          {/* Floating Astronaut Image with Mouse Parallax */}
          <motion.div
            animate={{
              x: mousePos.x,
              y: mousePos.y,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="absolute z-10 w-72 h-72 md:w-96 md:h-96 select-none animate-float pointer-events-none"
          >
            <img
              src={astronautImg}
              alt="Astronaut floating in space"
              className="w-full h-full object-contain filter drop-shadow-[0_15px_45px_rgba(99,102,241,0.35)]"
            />
          </motion.div>

          {/* SpaceX Launching Rocket Rig */}
          <div className="absolute right-4 bottom-0 w-24 h-[280px] flex flex-col justify-end items-center pointer-events-none">
            {/* Pad */}
            <div className="w-12 h-1.5 bg-slate-800 rounded-full border border-slate-700/60 shadow-md" />

            {/* Launching Rocket */}
            <motion.div
              style={{ originY: 1 }}
              animate={
                isLaunching
                  ? {
                      y: ["0%", "-140%", "-140%", "100%", "0%"],
                      scale: [1, 1.25, 0.4, 0.7, 1],
                      opacity: [1, 1, 0, 0, 1]
                    }
                  : { y: "0%", scale: 1, opacity: 1 }
              }
              transition={{
                duration: 3.5,
                times: [0, 0.4, 0.5, 0.75, 1],
                ease: "easeInOut"
              }}
              className="absolute bottom-2.5 flex flex-col items-center"
            >
              {/* Rocket Body */}
              <svg
                width="34"
                height="50"
                viewBox="0 0 24 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="filter drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]"
              >
                <path d="M12 2C12 2 16 8 16 12H8C8 12 12 2 12 2Z" fill="#ff3b3b" />
                <rect x="8" y="12" width="8" height="16" rx="1.5" fill="#f8fafc" />
                <circle cx="12" cy="18" r="2" fill="#0ea5e9" stroke="#cbd5e1" strokeWidth="0.5" />
                <path d="M8 20L4 25V27H8V20Z" fill="#ef4444" />
                <path d="M16 20L20 25V27H16V20Z" fill="#ef4444" />
                <rect x="10" y="28" width="4" height="2" fill="#64748b" />
              </svg>

              {/* Engine fire */}
              {isLaunching && (
                <motion.div
                  initial={{ opacity: 1, scale: 0.6 }}
                  animate={{ opacity: 0, scale: 2.2 }}
                  transition={{ duration: 0.5, repeat: 5, repeatType: "reverse" }}
                  className="w-6 h-10 bg-gradient-to-t from-transparent via-orange-500 to-amber-400 blur-xs rounded-full -mt-0.5 origin-top"
                />
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
