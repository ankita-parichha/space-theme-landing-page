import React from "react";
import { motion } from "framer-motion";
import { timelineData } from "../data/spaceData";
import {
  Satellite,
  User,
  Navigation,
  Eye,
  Cpu,
  Sun,
  Rocket,
  Milestone,
  Calendar
} from "lucide-react";

const iconMap = {
  Satellite: <Satellite className="h-5 w-5 text-cyan-400" />,
  User: <User className="h-5 w-5 text-indigo-400" />,
  Footprints: <Milestone className="h-5 w-5 text-purple-400" />,
  Navigation: <Navigation className="h-5 w-5 text-teal-400" />,
  Eye: <Eye className="h-5 w-5 text-pink-400" />,
  Cpu: <Cpu className="h-5 w-5 text-emerald-400" />,
  Sun: <Sun className="h-5 w-5 text-amber-400" />,
  Rocket: <Rocket className="h-5 w-5 text-rose-400" />
};

export default function SpaceTimeline() {
  return (
    <section id="timeline" className="py-28 px-6 max-w-7xl mx-auto relative tech-dot-grid">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-24 relative z-10">
        <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3 py-1.5 rounded-md border border-cyan-500/20">
          HISTORICAL LOG
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mt-6 uppercase">
          Mission{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Chronology
          </span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-300 font-semibold leading-relaxed">
          Follow the milestones of deep-space voyages and robotic/crewed initiatives that mapped the solar system.
        </p>
      </div>

      {/* Vertical Timeline Stack */}
      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
        
        {/* Glowing plasma beam track line down center */}
        <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.3)] opacity-60" />

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.year}
              className={`relative mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between items-start md:items-center w-full ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Dot / Icon */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
                className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 shadow-[0_0_15px_rgba(99,102,241,0.25)] z-10"
              >
                {iconMap[item.icon] || <Rocket className="h-5 w-5 text-indigo-400" />}
              </motion.div>

              {/* Card Container with slide/fade-in animation */}
              <motion.div
                initial={{
                  x: isEven ? 50 : -50,
                  opacity: 0
                }}
                whileInView={{
                  x: 0,
                  opacity: 1
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-[45%] pl-6 md:pl-0 ${isEven ? "md:text-right" : "md:text-left"}`}
              >
                <div className="group glass-panel p-8 rounded-3xl relative overflow-hidden border border-slate-800/80 bg-slate-950/40 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 hud-corner hud-corner-tl">
                  
                  {/* Decorative edge line */}
                  <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 ${
                    isEven ? "right-0" : "left-0"
                  }`} />

                  {/* Year Tag */}
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-black tracking-widest uppercase mb-4 rounded-md">
                    INDEX {item.year}
                  </span>

                  {/* Mission Title */}
                  <h3 className="text-xl md:text-2xl font-black font-display text-white group-hover:text-cyan-400 transition-colors uppercase">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm md:text-base text-slate-350 leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
              </motion.div>

              {/* Spacer matching card size to balance grid */}
              <div className="hidden md:block w-[45%]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
