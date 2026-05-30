import React from "react";
import { astronautsData } from "../data/spaceData";
import { Users, Info, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function AstronautGallery() {
  return (
    <section id="astronauts" className="py-28 px-6 max-w-7xl mx-auto tech-dot-grid relative">
      <div className="absolute top-1/4 left-10 w-6 h-6 border-l border-t border-cyan-500/25 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-6 h-6 border-r border-b border-purple-500/25 pointer-events-none" />

      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3 py-1.5 rounded-md border border-cyan-500/20">
          CREW DIRECTORY
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mt-6 uppercase">
          Astronaut{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Hall of Fame
          </span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-300 font-semibold leading-relaxed">
          Pioneering explorers who piloted vector trajectories beyond the stratosphere, expanding scientific frontiers.
        </p>
      </div>

      {/* Grid of Astronauts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {astronautsData.map((astronaut, idx) => (
          <motion.div
            key={astronaut.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative h-[450px] rounded-3xl overflow-hidden glass-panel flex flex-col justify-end p-8 border border-slate-800 bg-slate-950/20 shadow-xl hover:border-cyan-500/40 hover:shadow-[0_20px_45px_rgba(6,182,212,0.18)] transition-all duration-500 hud-corner hud-corner-tl"
          >
            {/* Background Image with zoom on hover */}
            <div className="absolute inset-0 z-0">
              <img
                src={astronaut.imageUrl}
                alt={astronaut.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-[0.6] group-hover:brightness-[0.25]"
              />
              {/* Bottom Vignette gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-955 via-slate-950/45 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col">

              {/* Achievement Badge */}
              <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded bg-cyan-500/20 border border-cyan-400/35 text-cyan-400 text-[10px] font-mono font-bold tracking-widest uppercase mb-4 shadow">
                <Info className="h-3.5 w-3.5" />
                {astronaut.achievement.toUpperCase()}
              </span>

              {/* Name */}
              <h3 className="text-2xl md:text-3xl font-black font-display text-white uppercase tracking-wide">
                {astronaut.name}
              </h3>

              {/* Role & Date */}
              <div className="flex items-center justify-between mt-2.5 text-slate-350 text-xs border-b border-slate-800/80 pb-4 mb-4 font-mono font-bold">
                <span className="text-cyan-400">{astronaut.role.toUpperCase()}</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  {astronaut.period}
                </span>
              </div>

              {/* Bio: expands/fades-in on hover */}
              <p className="text-slate-300 text-xs md:text-sm font-semibold leading-relaxed max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                {astronaut.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
