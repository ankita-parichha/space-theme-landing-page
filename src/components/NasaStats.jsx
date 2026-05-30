import React from "react";
import { nasaStatsData } from "../data/spaceData";
import { BarChart3, Star, Compass, Navigation, Radio, Activity } from "lucide-react";
import { motion } from "framer-motion";

const iconList = [
  <Compass className="h-5 w-5 text-cyan-400" />,
  <Radio className="h-5 w-5 text-indigo-400" />,
  <Star className="h-5 w-5 text-purple-400" />,
  <Navigation className="h-5 w-5 text-teal-400" />,
  <BarChart3 className="h-5 w-5 text-rose-400" />,
  <Activity className="h-5 w-5 text-emerald-400" />
];

export default function NasaStats() {
  return (
    <section id="stats" className="py-28 px-6 max-w-7xl mx-auto relative tech-grid">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3 py-1.5 rounded-md border border-cyan-500/20">
          TELEMETRY LOGS
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mt-6 uppercase">
          NASA{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Database Sync
          </span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-300 font-semibold leading-relaxed">
          Aggregated quantitative parameters tracking active orbits, interstellar voyage logs, and deep telescope observations.
        </p>
      </div>

      {/* Dashboard Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {nasaStatsData.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative glass-panel p-6 md:p-8 rounded-3xl flex flex-col justify-between overflow-hidden border border-slate-800 bg-slate-950/40 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 hud-corner hud-corner-tl"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-mono text-[9px] font-bold uppercase tracking-widest">
                FEED NODE 0{idx + 1} // SECURE
              </span>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                {iconList[idx] || <Radio className="h-5 w-5 text-cyan-400" />}
              </div>
            </div>

            {/* Main stat digits */}
            <div className="my-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-7xl font-black font-display tracking-tight text-white group-hover:scale-105 transition-transform duration-300 origin-left drop-shadow-[0_0_15px_rgba(255,255,255,0.06)]">
                  {stat.value}
                </span>
                <span className="text-2xl md:text-3xl font-black text-cyan-400">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm md:text-base font-bold text-slate-300 mt-3 font-display uppercase tracking-wider">
                {stat.label}
              </p>
            </div>

            {/* Bottom feed status */}
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest border-t border-slate-900 pt-4">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>LINK ACTIVE</span>
              </div>
              <span className="text-slate-500">SECURE_SYNC</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
