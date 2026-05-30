import React from "react";
import { astronautsData } from "../data/spaceData";
import { Users, Info, Calendar } from "lucide-react";

export default function AstronautGallery() {
  return (
    <section id="astronauts" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center p-2 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 mb-4">
          <Users className="h-6 w-6" />
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Astronaut{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Hall of Fame
          </span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
          Meet the brave pioneers who ventured beyond Earth's atmosphere, driving scientific breakthroughs and setting milestones for humanity.
        </p>
      </div>

      {/* Grid of Astronauts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {astronautsData.map((astronaut) => (
          <div
            key={astronaut.name}
            className="group relative h-[420px] rounded-3xl overflow-hidden glass-panel flex flex-col justify-end p-6 border border-slate-200/20 dark:border-slate-800/30 shadow-lg hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]"
          >
            {/* Background Image with zoom on hover */}
            <div className="absolute inset-0 z-0">
              <img
                src={astronaut.imageUrl}
                alt={astronaut.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.3]"
              />
              {/* Bottom Vignette gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
            </div>

            {/* Content Layer (positioned relative and z-10 to stay above image) */}
            <div className="relative z-10 flex flex-col">
              
              {/* Achievement Badge */}
              <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-md bg-indigo-500/80 text-white text-xs font-bold tracking-wider uppercase mb-3 shadow">
                <Info className="h-3.5 w-3.5" />
                {astronaut.achievement}
              </span>

              {/* Name */}
              <h3 className="text-3xl font-extrabold font-display text-white">
                {astronaut.name}
              </h3>

              {/* Role & Date */}
              <div className="flex items-center justify-between mt-1.5 text-slate-300 text-sm border-b border-white/10 pb-3 mb-3">
                <span className="font-bold text-cyan-400">{astronaut.role}</span>
                <span className="flex items-center gap-1 font-mono text-xs font-bold">
                  <Calendar className="h-4 w-4 text-indigo-400" />
                  {astronaut.period}
                </span>
              </div>

              {/* Bio: expands/fades-in on hover */}
              <p className="text-slate-350 text-sm font-semibold leading-relaxed max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                {astronaut.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
