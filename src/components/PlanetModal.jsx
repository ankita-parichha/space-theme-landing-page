import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Scale, Thermometer, Compass, Orbit, Terminal } from "lucide-react";

export default function PlanetModal({ planet, isOpen, onClose }) {
  // Prevent page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!planet) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#030308]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[85vh] overflow-y-auto glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:grid md:grid-cols-12 gap-8 z-10 text-slate-250 bg-slate-950/95 shadow-[0_25px_60px_rgba(0,0,0,0.85)] hud-corner hud-corner-tl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 z-20 cursor-pointer"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Column: Big Planet Rendering */}
            <div className="md:col-span-5 flex flex-col items-center justify-center py-6 relative border-b md:border-b-0 md:border-r border-slate-800/80 pr-0 md:pr-8">
              {/* Radial background glow */}
              <div
                className="absolute w-56 h-56 rounded-full blur-[65px] opacity-15 pointer-events-none"
                style={{ backgroundColor: planet.accentColor }}
              />

              {/* Glowing planetary model */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="relative select-none"
              >
                <div
                  className={`w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-tr ${planet.color} shadow-[inset_-12px_-12px_35px_rgba(0,0,0,0.9),0_15px_45px_rgba(0,0,0,0.5)] relative`}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/10" />
                </div>

                {/* Saturn Ring Overlay */}
                {planet.id === "saturn" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[50px] border-[14px] border-amber-500/40 rounded-full transform -rotate-[15deg] skew-x-[50deg] pointer-events-none shadow-[0_0_20px_rgba(245,158,11,0.25)]" />
                )}

                {/* Uranus Ring Overlay */}
                {planet.id === "uranus" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[12px] border-[2px] border-teal-500/20 rounded-full transform rotate-[75deg] pointer-events-none" />
                )}
              </motion.div>

              <h3 className="mt-8 text-3xl font-black font-display tracking-wide text-white uppercase">
                {planet.name}
              </h3>
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mt-2">
                {planet.tagline}
              </span>
            </div>

            {/* Right Column: Information Grid & Facts */}
            <div className="md:col-span-7 flex flex-col justify-between pl-0 md:pl-2">
              <div>
                {/* Section Header */}
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  EXPLORATION SUMMARY
                </span>
                <p className="text-base md:text-lg text-slate-200 font-semibold leading-relaxed mb-8">
                  {planet.brief}
                </p>

                {/* Grid stats */}
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
                  CRITICAL METRICS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex items-center gap-3">
                    <Globe className="h-5 w-5 text-cyan-400" />
                    <div>
                      <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wide">DIAMETER</span>
                      <span className="font-extrabold text-sm text-white font-mono">{planet.diameter}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex items-center gap-3">
                    <Scale className="h-5 w-5 text-purple-400" />
                    <div>
                      <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wide">GRAVITY</span>
                      <span className="font-extrabold text-sm text-white font-mono">{planet.gravity}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex items-center gap-3">
                    <Thermometer className="h-5 w-5 text-rose-400" />
                    <div>
                      <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wide">TEMP RANGE</span>
                      <span className="font-extrabold text-sm text-white font-mono truncate block" title={planet.temperature}>
                        {planet.temperature.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex items-center gap-3 col-span-2">
                    <Compass className="h-5 w-5 text-indigo-400" />
                    <div>
                      <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wide">ATMOSPHERE MATRIX</span>
                      <span className="font-extrabold text-sm text-white block truncate" title={planet.atmosphere}>
                        {planet.atmosphere}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex items-center gap-3">
                    <Orbit className="h-5 w-5 text-amber-400" />
                    <div>
                      <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wide">MOONS</span>
                      <span className="font-extrabold text-sm text-white">
                        {planet.moons === 0 ? "0 (NONE)" : planet.moons}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Facts section */}
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
                  INTELLIGENCE LOGS
                </span>
                <div className="flex flex-col gap-3">
                  {planet.funFacts.map((fact, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-900/30 border border-slate-850 hover:bg-cyan-500/5 hover:border-cyan-500/15 rounded-2xl flex items-start gap-3 transition-colors duration-300"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-slate-850 text-cyan-400 text-xs font-mono font-black flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <p className="text-sm md:text-base text-slate-300 font-semibold leading-relaxed">
                        {fact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close helper */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-slate-500">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>CALIBRATION: STABLE</span>
                </div>
                <button
                  onClick={onClose}
                  className="px-8 py-3.5 rounded-xl border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-400/35 bg-slate-900 hover:bg-slate-850 transition-all duration-300 text-xs font-black tracking-widest uppercase shadow-md cursor-pointer"
                >
                  DISMISS LOGS
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
