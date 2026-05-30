import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Scale, Sun, Thermometer, Compass, Orbit } from "lucide-react";

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
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[85vh] overflow-y-auto glass-panel border border-indigo-500/20 rounded-3xl p-6 md:p-8 flex flex-col md:grid md:grid-cols-12 gap-8 z-10 text-slate-800 dark:text-slate-200"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-350/10 hover:text-rose-500 transition-colors z-20"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Column: Big Planet Rendering */}
            <div className="md:col-span-5 flex flex-col items-center justify-center py-6 relative">
              {/* Radial background glow */}
              <div
                className="absolute w-56 h-56 rounded-full blur-[60px] opacity-15 pointer-events-none"
                style={{ backgroundColor: planet.accentColor }}
              />

              {/* Glowing planetary model */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="relative select-none"
              >
                <div
                  className={`w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr ${planet.color} shadow-[inset_-15px_-15px_40px_rgba(0,0,0,0.9),0_15px_40px_rgba(0,0,0,0.4)] relative`}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/10" />
                </div>

                {/* Saturn Ring Overlay */}
                {planet.id === "saturn" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[55px] border-[16px] border-amber-500/40 rounded-full transform -rotate-[15deg] skew-x-[50deg] pointer-events-none shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
                )}

                {/* Uranus Ring Overlay */}
                {planet.id === "uranus" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[15px] border-[2px] border-teal-500/25 rounded-full transform rotate-[75deg] pointer-events-none" />
                )}
              </motion.div>

              <h3 className="mt-8 text-3xl font-bold font-display tracking-wide dark:text-white">
                {planet.name}
              </h3>
              <span className="text-sm font-semibold tracking-wider text-indigo-500 dark:text-cyan-400 uppercase mt-1">
                {planet.tagline}
              </span>
            </div>

            {/* Right Column: Information Grid & Facts */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {/* Section Header */}
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 mb-2">Overview</h4>
                <p className="text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-6">
                  {planet.brief}
                </p>

                {/* Grid stats */}
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 mb-3">Key Parameters</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-3.5 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/30 rounded-2xl flex items-center gap-3">
                    <Globe className="h-5 w-5 text-indigo-500" />
                    <div>
                      <span className="block text-xs text-slate-450 uppercase tracking-wide">Diameter</span>
                      <span className="font-extrabold text-sm md:text-base text-slate-900 dark:text-white">{planet.diameter}</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/30 rounded-2xl flex items-center gap-3">
                    <Scale className="h-5 w-5 text-indigo-500" />
                    <div>
                      <span className="block text-xs text-slate-450 uppercase tracking-wide">Gravity</span>
                      <span className="font-extrabold text-sm md:text-base text-slate-900 dark:text-white">{planet.gravity}</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/30 rounded-2xl flex items-center gap-3">
                    <Thermometer className="h-5 w-5 text-indigo-500" />
                    <div>
                      <span className="block text-xs text-slate-450 uppercase tracking-wide">Temperature</span>
                      <span className="font-extrabold text-sm md:text-base text-slate-900 dark:text-white">{planet.temperature}</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/30 rounded-2xl flex items-center gap-3 col-span-2">
                    <Compass className="h-5 w-5 text-indigo-500" />
                    <div>
                      <span className="block text-xs text-slate-455 uppercase tracking-wide">Atmosphere</span>
                      <span className="font-extrabold text-sm md:text-base text-slate-900 dark:text-white block truncate" title={planet.atmosphere}>
                        {planet.atmosphere}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/30 rounded-2xl flex items-center gap-3">
                    <Orbit className="h-5 w-5 text-indigo-500" />
                    <div>
                      <span className="block text-xs text-slate-450 uppercase tracking-wide">Moons</span>
                      <span className="font-extrabold text-sm md:text-base text-slate-900 dark:text-white">
                        {planet.moons === 0 ? "0 (None)" : planet.moons}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Facts section */}
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 mb-3">Interesting Facts</h4>
                <div className="flex flex-col gap-3">
                  {planet.funFacts.map((fact, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-indigo-550/5 hover:bg-indigo-500/10 border border-indigo-500/15 rounded-2xl flex items-start gap-3 transition-colors"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-cyan-400 text-xs font-extrabold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        {fact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close text helper */}
              <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-slate-800/40 text-center md:text-right">
                <button
                  onClick={onClose}
                  className="px-8 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-base font-bold shadow-md cursor-pointer"
                >
                  Close Observatory
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
