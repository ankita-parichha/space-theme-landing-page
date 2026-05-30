import React, { useState } from "react";
import { planetsData } from "../data/spaceData";
import { GitCompare, Navigation, Moon, Scale } from "lucide-react";

export default function ComparisonTool() {
  const [planetAId, setPlanetAId] = useState("earth");
  const [planetBId, setPlanetBId] = useState("mars");

  const planetA = planetsData.find((p) => p.id === planetAId) || planetsData[2];
  const planetB = planetsData.find((p) => p.id === planetBId) || planetsData[3];

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
      label: "DIAMETER INDEX",
      valA: parseNum(planetA.diameter),
      valB: parseNum(planetB.diameter),
      rawA: planetA.diameter,
      rawB: planetB.diameter
    },
    {
      label: "GRAVITATIONAL FORCE",
      valA: parseNum(planetA.gravity),
      valB: parseNum(planetB.gravity),
      rawA: planetA.gravity,
      rawB: planetB.gravity
    },
    {
      label: "NATURAL SATELLITES",
      valA: planetA.moons,
      valB: planetB.moons,
      rawA: planetA.moons,
      rawB: planetB.moons
    }
  ];

  return (
    <section id="compare" className="py-28 px-6 bg-slate-950/20 relative border-y border-slate-800/80 tech-grid">
      {/* HUD accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3 py-1.5 rounded-md border border-cyan-500/20">
            DIAGNOSTIC LAB
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mt-6 uppercase">
            Planetary{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Comparison Center
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-300 font-semibold leading-relaxed">
            Run real-time diagnostics matching diameter ratios, gravity indices, and moons profiles across selected targets.
          </p>
        </div>

        {/* Dropdowns & Visual Compare Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Planet A selector & preview */}
          <div className="lg:col-span-4 glass-panel p-8 rounded-3xl text-center flex flex-col justify-between border border-slate-800/80 bg-slate-950/45 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 hud-corner hud-corner-tl">
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">
                SELECT TARGET A
              </label>
              <select
                value={planetAId}
                onChange={(e) => setPlanetAId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/95 text-white font-bold text-base focus:outline-none focus:ring-1 focus:ring-cyan-500/60 mb-8 cursor-pointer"
              >
                {planetsData.map((p) => (
                  <option key={p.id} value={p.id} className="bg-slate-950">
                    {p.name.toUpperCase()}
                  </option>
                ))}
              </select>

              {/* Planet A Display */}
              <div className="flex flex-col items-center">
                <div className="relative w-44 h-44 flex items-center justify-center select-none mb-6">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-tr ${planetA.color} shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.85),0_10px_30px_rgba(0,0,0,0.45)]`}
                  />
                  {planetA.id === "saturn" && (
                    <div className="absolute w-[200px] h-[34px] border-[12px] border-amber-500/40 rounded-full transform -rotate-[15deg] skew-x-[50deg] pointer-events-none" />
                  )}
                  {planetA.id === "uranus" && (
                    <div className="absolute w-[150px] h-[10px] border-[2px] border-teal-500/20 rounded-full transform rotate-[75deg] pointer-events-none" />
                  )}
                </div>
                <h3 className="text-3xl font-black font-display text-white uppercase">{planetA.name}</h3>
                <span className="mt-2 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                  {planetA.type}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-350 mt-6 leading-relaxed font-semibold">
              {planetA.brief}
            </p>
          </div>

          {/* Compare Metrics Bar Charts */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-center">
            <div className="glass-panel p-8 rounded-3xl flex-grow flex flex-col justify-center gap-8 border border-slate-800/80 bg-slate-950/45">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800/80 pb-4 text-center">
                COMPARATIVE DIAGNOSTIC
              </h3>

              {statsToCompare.map((stat) => {
                const percentages = getPercentage(stat.valA, stat.valB);
                return (
                  <div key={stat.label} className="flex flex-col gap-3">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest text-center">
                      {stat.label}
                    </span>

                    {/* Bar comparison stack */}
                    <div className="flex flex-col gap-3 bg-slate-900/30 p-4 rounded-2xl border border-slate-800/60 shadow-inner">
                      {/* Planet A Bar */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold text-slate-300 truncate w-16 uppercase">
                          {planetA.name}
                        </span>
                        <div className="flex-grow h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                            style={{ width: `${percentages.a}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-white font-bold w-20 text-right">
                          {stat.rawA}
                        </span>
                      </div>

                      {/* Planet B Bar */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold text-slate-300 truncate w-16 uppercase">
                          {planetB.name}
                        </span>
                        <div className="flex-grow h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                            style={{ width: `${percentages.b}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-white font-bold w-20 text-right">
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
          <div className="lg:col-span-4 glass-panel p-8 rounded-3xl text-center flex flex-col justify-between border border-slate-800/80 bg-slate-950/45 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 hud-corner hud-corner-tl">
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">
                SELECT TARGET B
              </label>
              <select
                value={planetBId}
                onChange={(e) => setPlanetBId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/95 text-white font-bold text-base focus:outline-none focus:ring-1 focus:ring-purple-500/60 mb-8 cursor-pointer"
              >
                {planetsData.map((p) => (
                  <option key={p.id} value={p.id} className="bg-slate-950">
                    {p.name.toUpperCase()}
                  </option>
                ))}
              </select>

              {/* Planet B Display */}
              <div className="flex flex-col items-center">
                <div className="relative w-44 h-44 flex items-center justify-center select-none mb-6">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-tr ${planetB.color} shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.85),0_10px_30px_rgba(0,0,0,0.45)]`}
                  />
                  {planetB.id === "saturn" && (
                    <div className="absolute w-[200px] h-[34px] border-[12px] border-amber-500/40 rounded-full transform -rotate-[15deg] skew-x-[50deg] pointer-events-none" />
                  )}
                  {planetB.id === "uranus" && (
                    <div className="absolute w-[150px] h-[10px] border-[2px] border-teal-500/20 rounded-full transform rotate-[75deg] pointer-events-none" />
                  )}
                </div>
                <h3 className="text-3xl font-black font-display text-white uppercase">{planetB.name}</h3>
                <span className="mt-2 text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400">
                  {planetB.type}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-350 mt-6 leading-relaxed font-semibold">
              {planetB.brief}
            </p>
          </div>

        </div>

        {/* Comparative Parameters Table Matrix */}
        <div className="mt-16 glass-panel rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-950/45 shadow-2xl">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[700px] text-sm md:text-base">
              <thead>
                <tr className="bg-slate-900/60 border-b border-slate-800/80">
                  <th className="py-6 px-6 text-[10px] font-mono font-bold text-slate-450 uppercase tracking-widest">
                    COMPARISON MATRIX
                  </th>
                  <th className="py-6 px-6 font-bold text-cyan-400 font-display">
                    <div className="flex flex-col items-center sm:items-start gap-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${planetA.color} shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.85)] relative`} />
                      <span className="text-lg md:text-xl font-black uppercase">{planetA.name}</span>
                    </div>
                  </th>
                  <th className="py-6 px-6 font-bold text-purple-400 font-display">
                    <div className="flex flex-col items-center sm:items-start gap-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${planetB.color} shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.85)] relative`} />
                      <span className="text-lg md:text-xl font-black uppercase">{planetB.name}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40 font-semibold text-slate-300">
                <tr className="hover:bg-slate-900/30 transition-colors py-5 even:bg-slate-900/10">
                  <td className="py-4 px-6 font-mono text-xs text-slate-450 tracking-wider">PLANET TYPE</td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold">
                      {planetA.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-mono font-bold">
                      {planetB.type.toUpperCase()}
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/30 transition-colors py-5 even:bg-slate-900/10">
                  <td className="py-4 px-6 font-mono text-xs text-slate-450 tracking-wider">DISTANCE FROM SUN</td>
                  <td className="py-4 px-6 text-white font-mono text-xs">
                    <span className="inline-flex items-center gap-1.5">
                      <Navigation className="h-3.5 w-3.5 text-cyan-400 rotate-45" />
                      {planetA.distanceFromSun}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-white font-mono text-xs">
                    <span className="inline-flex items-center gap-1.5">
                      <Navigation className="h-3.5 w-3.5 text-purple-400 rotate-45" />
                      {planetB.distanceFromSun}
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/30 transition-colors py-5 even:bg-slate-900/10">
                  <td className="py-4 px-6 font-mono text-xs text-slate-450 tracking-wider">MOONS RECORDED</td>
                  <td className="py-4 px-6 text-white">
                    <span className="inline-flex items-center gap-1.5">
                      <Moon className="h-3.5 w-3.5 text-cyan-400" />
                      {planetA.moons} {planetA.moons === 1 ? "moon" : "moons"}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-white">
                    <span className="inline-flex items-center gap-1.5">
                      <Moon className="h-3.5 w-3.5 text-purple-400" />
                      {planetB.moons} {planetB.moons === 1 ? "moon" : "moons"}
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/30 transition-colors py-5 even:bg-slate-900/10">
                  <td className="py-4 px-6 font-mono text-xs text-slate-450 tracking-wider">DIAMETER PROFILE</td>
                  <td className="py-4 px-6 text-white font-mono text-xs">{planetA.diameter}</td>
                  <td className="py-4 px-6 text-white font-mono text-xs">{planetB.diameter}</td>
                </tr>

                <tr className="hover:bg-slate-900/30 transition-colors py-5 even:bg-slate-900/10">
                  <td className="py-4 px-6 font-mono text-xs text-slate-450 tracking-wider">SURFACE GRAVITY</td>
                  <td className="py-4 px-6 text-white">
                    <span className="inline-flex items-center gap-1.5">
                      <Scale className="h-3.5 w-3.5 text-cyan-400" />
                      {planetA.gravity}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-white">
                    <span className="inline-flex items-center gap-1.5">
                      <Scale className="h-3.5 w-3.5 text-purple-400" />
                      {planetB.gravity}
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/30 transition-colors py-5 even:bg-slate-900/10">
                  <td className="py-4 px-6 font-mono text-xs text-slate-450 tracking-wider">MEAN TEMPERATURE</td>
                  <td className="py-4 px-6 text-white font-mono text-xs">{planetA.temperature}</td>
                  <td className="py-4 px-6 text-white font-mono text-xs">{planetB.temperature}</td>
                </tr>

                <tr className="hover:bg-slate-900/30 transition-colors py-5 even:bg-slate-900/10">
                  <td className="py-4 px-6 font-mono text-xs text-slate-450 tracking-wider">ATMOSPHERE MATRIX</td>
                  <td className="py-4 px-6 text-slate-300 max-w-xs truncate" title={planetA.atmosphere}>
                    {planetA.atmosphere}
                  </td>
                  <td className="py-4 px-6 text-slate-300 max-w-xs truncate" title={planetB.atmosphere}>
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
