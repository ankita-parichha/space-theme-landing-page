import React from "react";
import { motion } from "framer-motion";
import { Orbit, Activity, Compass, Users, Database, Globe } from "lucide-react";

export default function Features() {
  const featuresList = [
    {
      title: "Orbital Path Simulation",
      description: "Real-time relative orbital calculations simulating planetary trajectories and gravity wells conforming to Kepler's Laws.",
      icon: <Orbit className="h-6 w-6 text-cyan-400" />,
      tag: "ORBITAL_OS",
      glowColor: "group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
    },
    {
      title: "Atmospheric Spectroscopy",
      description: "Aggregated molecular profiles tracking chemical compositions, temperature variations, and exosphere densities.",
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      tag: "CHEMISTRY_LOG",
      glowColor: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
    },
    {
      title: "Comparative Telemetry",
      description: "Side-by-side analysis of mass indices, diameter differentials, and lunar systems inside our advanced lab.",
      icon: <Activity className="h-6 w-6 text-indigo-400" />,
      tag: "COMPARE_CTRL",
      glowColor: "group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
    },
    {
      title: "Deep Space Logs",
      description: "Chronological database tracing the history of human spaceflight, satellite launches, and deep telescope missions.",
      icon: <Database className="h-6 w-6 text-rose-400" />,
      tag: "CHRONOLOGY_DB",
      glowColor: "group-hover:border-rose-500/50 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]"
    },
    {
      title: "Crew Archives",
      description: "Biographical details and mission statistics of the pioneers who pushed the boundaries of human exploration.",
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      tag: "VANGUARD_CREW",
      glowColor: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
    },
    {
      title: "Live NASA Statistics",
      description: "Direct telemetry aggregation displaying active missions, confirmed exoplanet charts, and deep-space coordinates.",
      icon: <Compass className="h-6 w-6 text-amber-400" />,
      tag: "NASA_API_SYNC",
      glowColor: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
    }
  ];

  return (
    <section id="features" className="py-28 px-6 max-w-7xl mx-auto relative tech-dot-grid">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3 py-1.5 rounded-md border border-cyan-500/20">
          SYSTEM CAPABILITIES
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mt-6 uppercase">
          Advanced{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Cosmic Core
          </span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-300 font-semibold leading-relaxed">
          Our advanced aerospace telemetry deck allows explorers to scan orbits, compare celestial metrics, and browse historic cosmic logs in real-time.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {featuresList.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative glass-panel p-8 rounded-3xl overflow-hidden border border-slate-800/80 hover:bg-slate-950/45 transition-all duration-300 hud-corner hud-corner-tl ${feature.glowColor}`}
          >
            {/* Top row: Icon & Tag */}
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                {feature.icon}
              </div>
              <span className="text-[9px] font-mono font-bold text-slate-450 tracking-widest uppercase">
                {feature.tag}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-black font-display text-white mt-8 group-hover:text-cyan-400 transition-colors uppercase">
              {feature.title}
            </h3>
            <p className="mt-4 text-sm md:text-base text-slate-350 font-semibold leading-relaxed">
              {feature.description}
            </p>

            {/* Bottom HUD lines */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
