import React from "react";
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
    <section id="timeline" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center justify-center p-2 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 mb-4">
          <Calendar className="h-6 w-6" />
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Cosmic{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Missions Timeline
          </span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
          Trace the history of human spaceflight and interstellar exploration, from the first satellite orbit to the crewed Artemis returns.
        </p>
      </div>

      {/* Vertical Timeline Stack */}
      <div className="relative border-l border-slate-200 dark:border-slate-800/80 max-w-3xl mx-auto pl-8 md:pl-0 md:border-l-0">
        
        {/* Center line for desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800/80" />

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.year}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row md:justify-between items-start md:items-center w-full ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Dot / Icon */}
              <div className="absolute -left-[53px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 dark:bg-[#0b0b18] border border-indigo-500/30 dark:border-indigo-500/50 shadow-[0_0_12px_rgba(99,102,241,0.2)] z-10">
                {iconMap[item.icon] || <Rocket className="h-5 w-5 text-indigo-400" />}
              </div>

              {/* Card Container */}
              <div className={`w-full md:w-[45%] ${isEven ? "md:text-right" : "md:text-left"}`}>
                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-indigo-500/40 dark:hover:border-cyan-400/40 transition-colors">
                  
                  {/* Decorative edge line */}
                  <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500 ${
                    isEven ? "right-0" : "left-0"
                  }`} />

                  {/* Year Tag */}
                  <span className="inline-block px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 font-mono text-sm font-extrabold mb-3 tracking-wider">
                    {item.year}
                  </span>

                  {/* Mission Title */}
                  <h3 className="text-2xl font-extrabold font-display text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Empty placeholder spacer to align alternating columns */}
              <div className="hidden md:block w-[45%]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
