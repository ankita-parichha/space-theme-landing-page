import React, { useState } from "react";
import { planetsData } from "../data/spaceData";
import { ArrowRight, HelpCircle, GitCompare, Award, Moon, Navigation, Scale } from "lucide-react";

export default function ComparisonTool() {
  const [planetAId, setPlanetAId] = useState("earth");
  const [planetBId, setPlanetBId] = useState("mars");

  const planetA = planetsData.find((p) => p.id === planetAId) || planetsData[2];
  const planetB = planetsData.find((p) => p.id === planetBId) || planetsData[3];

  // Helper to extract numerical value for progress bar comparison
  const parseNum = (strVal) => {
    if (typeof strVal === "number") return strVal;
    if (!strVal) return 0;
    const num = parseFloat(strVal.replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  const getPercentage = (valA, valB) => {
    const maxVal = Math.max(valA, valB, 1);
    return {
      a: (valA / maxVal) * 100,
      b: (valB / maxVal) * 100
    };
  };

  const statsToCompare = [
    {
      label: "Diameter",
      valA: parseNum(planetA.diameter),
      valB: parseNum(planetB.diameter),
      rawA: planetA.diameter,
      rawB: planetB.diameter
    },
    {
      label: "Gravity",
      valA: parseNum(planetA.gravity),
      valB: parseNum(planetB.gravity),
      rawA: planetA.gravity,
      rawB: planetB.gravity
    },
    {
      label: "Moons",
      valA: planetA.moons,
      valB: planetB.moons,
      rawA: planetA.moons,
      rawB: planetB.moons
    }
  ];

  return (
    <section id="compare" className="py-24 px-6 bg-slate-500/5 dark:bg-black/40 relative border-y border-indigo-500/10">
      {/* Premium background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <GitCompare className="h-7 w-7" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Planet{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Comparison Lab
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed">
            Select any two planets to compare their mass, gravity, moon counts, and diameter in our high-contrast, professional telemetry center.
          </p>
        </div>

        {/* Dropdowns & Visual Compare Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Planet A selector & preview */}
          <div className="lg:col-span-4 glass-panel p-8 rounded-3xl text-center flex flex-col justify-between hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Select Planet A
              </label>
              <select
                value={planetAId}
                onChange={(e) => setPlanetAId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-bold text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/50 mb-8 cursor-pointer"
              >
                {planetsData.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>

              {/* Planet A Display */}
              <div className="flex flex-col items-center">
                <div className="relative w-44 h-44 flex items-center justify-center select-none mb-6">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-tr ${planetA.color} shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.85),0_10px_35px_rgba(0,0,0,0.35)]`}
                  />
                  {planetA.id === "saturn" && (
                    <div className="absolute w-[200px] h-[34px] border-[12px] border-amber-500/40 rounded-full transform -rotate-[15deg] skew-x-[50deg]" />
                  )}
                  {planetA.id === "uranus" && (
                    <div className="absolute w-[150px] h-[10px] border-[2px] border-teal-500/20 rounded-full transform rotate-[75deg]" />
                  )}
                </div>
                <h3 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white">{planetA.name}</h3>
                <span className="mt-1 text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-cyan-400">
                  {planetA.type}
                </span>
              </div>
            </div>
            <p className="text-base text-slate-700 dark:text-slate-200 mt-6 leading-relaxed font-medium">
              {planetA.brief}
            </p>
          </div>

          {/* Compare Metrics Bar Charts */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-center">
            <div className="glass-panel p-8 rounded-3xl flex-grow flex flex-col justify-center gap-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200/50 dark:border-slate-800/60 pb-4 text-center">
                Visual Telemetry
              </h3>

              {statsToCompare.map((stat) => {
                const percentages = getPercentage(stat.valA, stat.valB);
                return (
                  <div key={stat.label} className="flex flex-col gap-3">
                    <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-center">
                      {stat.label}
                    </span>

                    {/* Bar comparison stack */}
                    <div className="flex flex-col gap-3 bg-slate-100/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200/30 dark:border-slate-800/30 shadow-inner">
                      {/* Planet A Bar */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-350 truncate w-16">
                          {planetA.name}
                        </span>
                        <div className="flex-grow h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                            style={{ width: `${percentages.a}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-slate-900 dark:text-white font-bold w-20 text-right">
                          {stat.rawA}
                        </span>
                      </div>

                      {/* Planet B Bar */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-350 truncate w-16">
                          {planetB.name}
                        </span>
                        <div className="flex-grow h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                            style={{ width: `${percentages.b}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-slate-900 dark:text-white font-bold w-20 text-right">
                          {stat.rawB}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Planet B selector & preview */}
          <div className="lg:col-span-4 glass-panel p-8 rounded-3xl text-center flex flex-col justify-between hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Select Planet B
              </label>
              <select
                value={planetBId}
                onChange={(e) => setPlanetBId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-bold text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/50 mb-8 cursor-pointer"
              >
                {planetsData.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>

              {/* Planet B Display */}
              <div className="flex flex-col items-center">
                <div className="relative w-44 h-44 flex items-center justify-center select-none mb-6">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-tr ${planetB.color} shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.85),0_10px_35px_rgba(0,0,0,0.35)]`}
                  />
                  {planetB.id === "saturn" && (
                    <div className="absolute w-[200px] h-[34px] border-[12px] border-amber-500/40 rounded-full transform -rotate-[15deg] skew-x-[50deg]" />
                  )}
                  {planetB.id === "uranus" && (
                    <div className="absolute w-[150px] h-[10px] border-[2px] border-teal-500/20 rounded-full transform rotate-[75deg]" />
                  )}
                </div>
                <h3 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white">{planetB.name}</h3>
                <span className="mt-1 text-xs font-bold uppercase tracking-widest text-purple-500 dark:text-purple-400">
                  {planetB.type}
                </span>
              </div>
            </div>
            <p className="text-base text-slate-700 dark:text-slate-200 mt-6 leading-relaxed font-medium">
              {planetB.brief}
            </p>
          </div>

        </div>

        {/* Detailed Side-By-Side Parameters Matrix */}
        <div className="mt-16 glass-panel rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/80 shadow-2xl">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[700px] text-base md:text-lg">
              <thead>
                <tr className="bg-slate-200/20 dark:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800/80">
                  <th className="py-6 px-6 text-xs font-extrabold text-slate-450 uppercase tracking-widest">
                    Comparative Matrix
                  </th>
                  <th className="py-6 px-6 font-bold text-cyan-400 font-display">
                    <div className="flex flex-col items-center sm:items-start gap-4">
                      {/* Mini Planet Icon */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${planetA.color} shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.85),0_0_20px_rgba(6,182,212,0.4)] relative`} />
                      <span className="text-xl md:text-2xl font-extrabold">{planetA.name}</span>
                    </div>
                  </th>
                  <th className="py-6 px-6 font-bold text-purple-400 font-display">
                    <div className="flex flex-col items-center sm:items-start gap-4">
                      {/* Mini Planet Icon */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${planetB.color} shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.85),0_0_20px_rgba(168,85,247,0.4)] relative`} />
                      <span className="text-xl md:text-2xl font-extrabold">{planetB.name}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/40 dark:divide-slate-800/40">
                {/* Planet Type */}
                <tr className="hover:bg-slate-100/30 dark:hover:bg-slate-900/40 transition-colors py-6 even:bg-slate-100/10 dark:even:bg-slate-900/10">
                  <td className="py-5 px-6 font-bold text-slate-500 dark:text-slate-400">Planet Type</td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                      {planetA.type}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1.5 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
                      {planetB.type}
                    </span>
                  </td>
                </tr>

                {/* Distance */}
                <tr className="hover:bg-slate-100/30 dark:hover:bg-slate-900/40 transition-colors py-6 even:bg-slate-100/10 dark:even:bg-slate-900/10">
                  <td className="py-5 px-6 font-bold text-slate-500 dark:text-slate-400">Distance from Sun</td>
                  <td className="py-5 px-6 font-extrabold text-slate-900 dark:text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300/10">
                      <Navigation className="h-4 w-4 text-cyan-400" />
                      {planetA.distanceFromSun}
                    </span>
                  </td>
                  <td className="py-5 px-6 font-extrabold text-slate-900 dark:text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300/10">
                      <Navigation className="h-4 w-4 text-purple-400" />
                      {planetB.distanceFromSun}
                    </span>
                  </td>
                </tr>

                {/* Moons */}
                <tr className="hover:bg-slate-100/30 dark:hover:bg-slate-900/40 transition-colors py-6 even:bg-slate-100/10 dark:even:bg-slate-900/10">
                  <td className="py-5 px-6 font-bold text-slate-500 dark:text-slate-400">Moons Count</td>
                  <td className="py-5 px-6 font-extrabold text-slate-900 dark:text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold">
                      <Moon className="h-4 w-4" />
                      {planetA.moons} {planetA.moons === 1 ? "moon" : "moons"}
                    </span>
                  </td>
                  <td className="py-5 px-6 font-extrabold text-slate-900 dark:text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold">
                      <Moon className="h-4 w-4" />
                      {planetB.moons} {planetB.moons === 1 ? "moon" : "moons"}
                    </span>
                  </td>
                </tr>

                {/* Diameter */}
                <tr className="hover:bg-slate-100/30 dark:hover:bg-slate-900/40 transition-colors py-6 even:bg-slate-100/10 dark:even:bg-slate-900/10">
                  <td className="py-5 px-6 font-bold text-slate-500 dark:text-slate-400">Planet Diameter</td>
                  <td className="py-5 px-6 font-bold text-slate-900 dark:text-white">{planetA.diameter}</td>
                  <td className="py-5 px-6 font-bold text-slate-900 dark:text-white">{planetB.diameter}</td>
                </tr>

                {/* Gravity */}
                <tr className="hover:bg-slate-100/30 dark:hover:bg-slate-900/40 transition-colors py-6 even:bg-slate-100/10 dark:even:bg-slate-900/10">
                  <td className="py-5 px-6 font-bold text-slate-500 dark:text-slate-400">Surface Gravity</td>
                  <td className="py-5 px-6 font-extrabold text-slate-900 dark:text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300/10">
                      <Scale className="h-4 w-4 text-cyan-400" />
                      {planetA.gravity}
                    </span>
                  </td>
                  <td className="py-5 px-6 font-extrabold text-slate-900 dark:text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300/10">
                      <Scale className="h-4 w-4 text-purple-400" />
                      {planetB.gravity}
                    </span>
                  </td>
                </tr>

                {/* Temperature */}
                <tr className="hover:bg-slate-100/30 dark:hover:bg-slate-900/40 transition-colors py-6 even:bg-slate-100/10 dark:even:bg-slate-900/10">
                  <td className="py-5 px-6 font-bold text-slate-500 dark:text-slate-400">Mean Temperature</td>
                  <td className="py-5 px-6 font-bold text-slate-900 dark:text-white">{planetA.temperature}</td>
                  <td className="py-5 px-6 font-bold text-slate-900 dark:text-white">{planetB.temperature}</td>
                </tr>

                {/* Atmosphere */}
                <tr className="hover:bg-slate-100/30 dark:hover:bg-slate-900/40 transition-colors py-6 even:bg-slate-100/10 dark:even:bg-slate-900/10">
                  <td className="py-5 px-6 font-bold text-slate-500 dark:text-slate-400">Atmospheric Profile</td>
                  <td className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium max-w-xs truncate" title={planetA.atmosphere}>
                    {planetA.atmosphere}
                  </td>
                  <td className="py-5 px-6 text-slate-800 dark:text-slate-200 font-medium max-w-xs truncate" title={planetB.atmosphere}>
                    {planetB.atmosphere}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
