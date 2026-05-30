import React from "react";
import { nasaStatsData } from "../data/spaceData";
import { BarChart3, Star, Compass, Navigation, Radio } from "lucide-react";

const iconList = [
  <Compass className="h-5 w-5 text-cyan-400" />,
  <Radio className="h-5 w-5 text-indigo-400" />,
  <Star className="h-5 w-5 text-purple-400" />,
  <Navigation className="h-5 w-5 text-teal-400" />,
  <BarChart3 className="h-5 w-5 text-rose-400" />,
  <Radio className="h-5 w-5 text-emerald-400" />
];

export default function NasaStats() {
  return (
    <section id="stats" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center p-2 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 mb-4">
          <BarChart3 className="h-6 w-6" />
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          NASA{"  "}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Telemetry Database
          </span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
          Real-time telemetry and aggregated statistics from solar exploration programs and deep space telescope observations.
        </p>
      </div>

      {/* Dashboard Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {nasaStatsData.map((stat, idx) => (
          <div
            key={stat.label}
            className="group relative glass-panel p-6 md:p-8 rounded-3xl flex flex-col justify-between overflow-hidden border border-slate-200/40 dark:border-indigo-500/30 hover:border-cyan-400/50"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-cyan-400 text-xs md:text-sm font-extrabold uppercase tracking-widest">
                Telemetry Feed
              </span>
              <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-950/60 border border-slate-300/10 dark:border-indigo-500/20">
                {iconList[idx] || <Radio className="h-5 w-5 text-cyan-400" />}
              </div>
            </div>

            {/* Main stat digits */}
            <div className="my-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-7xl font-black font-display tracking-tight text-slate-950 dark:text-[#FFFFFF] group-hover:scale-105 transition-transform duration-300 origin-left drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                  {stat.value}
                </span>
                <span className="text-2xl md:text-3xl font-extrabold text-indigo-650 dark:text-cyan-400">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-base md:text-xl font-bold text-slate-850 dark:text-[#E5E7EB] mt-3 font-display">
                {stat.label}
              </p>
            </div>

            {/* Bottom feed status */}
            <div className="flex items-center gap-1.5 text-xs md:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Active Link
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
