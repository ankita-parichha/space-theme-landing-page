import React, { useState } from "react";
import { Search, Compass, ShieldAlert, Sparkles, Plus, Check } from "lucide-react";
import { planetsData } from "../data/spaceData";

export default function PlanetsSection({ onExplore, onToggleCompare, comparedIds }) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Terrestrial", "Gas Giant", "Ice Giant"];

  const filteredPlanets = planetsData.filter((planet) => {
    const matchesSearch = planet.name.toLowerCase().includes(search.toLowerCase()) ||
      planet.brief.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === "All" || planet.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="planets" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Planets of the{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Solar System
          </span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
          Search, filter, and compare the planetary bodies in orbit around our sun. Click "Explore" to deep dive into atmospheric chemistry, orbits, and facts.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 w-full glass-panel p-5 rounded-2xl">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search planets, features..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/30 text-slate-900 dark:text-white placeholder-slate-405 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-base font-medium"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-600 text-white shadow-md"
                  : "bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-350"
              }`}
            >
              {filter}s
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Planet Cards */}
      {filteredPlanets.length === 0 ? (
        <div className="text-center py-20 glass-panel rounded-3xl">
          <ShieldAlert className="h-12 w-12 text-rose-500 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold dark:text-white">No Planets Found</h3>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-400">Try adjusting your search keywords or categories.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPlanets.map((planet) => {
            const isCompared = comparedIds.includes(planet.id);
            return (
              <div
                key={planet.id}
                className="group relative flex flex-col justify-between glass-panel p-6 rounded-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.22)]"
              >
                {/* Accent glow behind planet sphere */}
                <div
                  className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[40px] opacity-15 group-hover:opacity-25 transition-all pointer-events-none"
                  style={{ backgroundColor: planet.accentColor }}
                />

                {/* Top header: Type & Compare option */}
                <div className="flex justify-between items-center z-10">
                  <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-slate-200/50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-300/10">
                    {planet.type}
                  </span>

                  <button
                    onClick={() => onToggleCompare(planet.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                      isCompared
                        ? "bg-cyan-500/25 border border-cyan-400 text-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.3)]"
                        : "bg-white/10 border border-slate-200/10 text-slate-655 dark:text-slate-350 hover:text-indigo-400 dark:hover:text-cyan-400"
                    }`}
                  >
                    {isCompared ? (
                      <>
                        <Check className="h-3 w-3" />
                        Comparing
                      </>
                    ) : (
                      <>
                        <Plus className="h-3 w-3" />
                        Compare
                      </>
                    )}
                  </button>
                </div>

                {/* 3D-Glowing Planet Sphere Graphic */}
                <div className="h-44 flex items-center justify-center relative select-none z-10">
                  {/* Planet sphere */}
                  <div
                    className={`w-28 h-28 rounded-full bg-gradient-to-tr ${planet.color} shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.85),0_10px_35px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500 relative`}
                  >
                    {/* Atmospheric glow overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/15 pointer-events-none" />
                  </div>

                  {/* Custom Saturn Ring Overlay */}
                  {planet.id === "saturn" && (
                    <div className="absolute w-[184px] h-[34px] border-[10px] border-amber-500/40 rounded-full transform -rotate-[15deg] skew-x-[50deg] pointer-events-none scale-100 group-hover:scale-105 transition-transform duration-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]" />
                  )}
                  {/* Uranus faint Ring */}
                  {planet.id === "uranus" && (
                    <div className="absolute w-[140px] h-[10px] border-[2px] border-teal-500/20 rounded-full transform rotate-[75deg] pointer-events-none" />
                  )}
                </div>

                {/* Text Body */}
                <div className="z-10 text-center mt-2 flex-grow">
                  <h3 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    {planet.name}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-slate-550 dark:text-indigo-400 mt-1 tracking-wider uppercase">
                    {planet.tagline}
                  </p>
                  <p className="text-base text-slate-700 dark:text-slate-200 mt-4 leading-relaxed line-clamp-3 h-18">
                    {planet.brief}
                  </p>
                </div>

                {/* Mini features & buttons */}
                <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/60 z-10">
                  <div className="grid grid-cols-2 gap-2 text-left text-sm mb-5">
                    <div>
                      <span className="block text-xs text-slate-400 uppercase tracking-wide">Moons</span>
                      <span className="font-bold text-sm text-slate-850 dark:text-white">
                        {planet.moons === 0 ? "None" : `${planet.moons} moons`}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 uppercase tracking-wide">Dist. Sun</span>
                      <span className="font-bold text-sm text-slate-850 dark:text-white truncate block">
                        {planet.distanceFromSun.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onExplore(planet)}
                    className="w-full py-3.5 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white text-base font-bold tracking-wider transition-all duration-300 shadow-[0_4px_12px_rgba(99,102,241,0.15)] hover:shadow-[0_4px_16px_rgba(99,102,241,0.35)]"
                  >
                    Explore Planet
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
