import React, { useState } from "react";
import { planetsData } from "../data/spaceData";
import { Orbit, Compass, Activity, Play, Pause, Terminal } from "lucide-react";

export default function OrbitAnimation() {
  const [selectedId, setSelectedId] = useState("earth");
  const [isPlaying, setIsPlaying] = useState(true);

  const selectedPlanet = planetsData.find((p) => p.id === selectedId) || planetsData[2];

  // Specific orbital periods relative to Earth
  const orbitSpeeds = {
    mercury: "5s",
    venus: "10s",
    earth: "15s",
    mars: "22s",
    jupiter: "35s",
    saturn: "48s",
    uranus: "62s",
    neptune: "78s"
  };

  const orbitSizes = {
    mercury: "w-20 h-20 md:w-28 md:h-28",
    venus: "w-28 h-28 md:w-40 md:h-40",
    earth: "w-36 h-36 md:w-52 md:h-52",
    mars: "w-44 h-44 md:w-64 md:h-64",
    jupiter: "w-56 h-56 md:w-80 md:h-80",
    saturn: "w-68 h-68 md:w-[380px] md:h-[380px]",
    uranus: "w-80 h-80 md:w-[460px] md:h-[460px]",
    neptune: "w-[360px] h-[360px] md:w-[540px] md:h-[540px]"
  };

  const orbitalRadius = {
    mercury: "57.9 Million km",
    venus: "108.2 Million km",
    earth: "149.6 Million km",
    mars: "227.9 Million km",
    jupiter: "778.5 Million km",
    saturn: "1.4 Billion km",
    uranus: "2.9 Billion km",
    neptune: "4.5 Billion km"
  };

  const orbitPeriod = {
    mercury: "88 Earth days",
    venus: "224.7 Earth days",
    earth: "365.25 days (1 year)",
    mars: "687 Earth days",
    jupiter: "12 Earth years",
    saturn: "29 Earth years",
    uranus: "84 Earth years",
    neptune: "165 Earth years"
  };

  return (
    <section id="orbit" className="py-28 px-6 max-w-7xl mx-auto tech-dot-grid relative">
      {/* HUD corner accents for section */}
      <div className="absolute top-10 left-10 w-6 h-6 border-l border-t border-cyan-500/25 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-6 h-6 border-r border-b border-purple-500/25 pointer-events-none" />

      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3 py-1.5 rounded-md border border-cyan-500/20">
          ORBITAL CALCULATOR
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mt-6 uppercase">
          Tactical{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Orbit Map
          </span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-300 font-semibold leading-relaxed">
          Select orbital bodies to trigger mathematical diagnostics on vector radius, orbital velocity, and Kepler period indices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Side: Orbit System Display */}
        <div className="lg:col-span-8 flex items-center justify-center h-[450px] md:h-[600px] glass-panel rounded-3xl relative overflow-hidden bg-slate-950/45 border border-slate-800/80 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          
          {/* Diagnostic Overlay Grids */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.02)_0%,transparent_70%)]" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-slate-800/20 border-dashed border-l border-slate-700/10" />
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-slate-800/20 border-dashed border-t border-slate-700/10" />

          {/* Controls overlay */}
          <div className="absolute top-6 left-6 z-20 flex gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl bg-slate-900/90 text-slate-200 hover:text-cyan-400 border border-cyan-400/20 hover:border-cyan-400/40 flex items-center gap-2 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-md transition-all duration-300 cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4.5 w-4.5 text-cyan-400 animate-pulse" /> PAUSE VECTORS
                </>
              ) : (
                <>
                  <Play className="h-4.5 w-4.5" /> RE-ENGAGE VECTORS
                </>
              )}
            </button>
          </div>

          <div className="absolute bottom-6 left-6 z-20 hidden md:block">
            <span className="text-[10px] font-mono font-bold text-slate-450 tracking-widest uppercase">
              CALIBRATION: ACTIVE / SPEED_SCALE=1.0x
            </span>
          </div>

          {/* Orbit rings stack */}
          <div className="relative flex items-center justify-center scale-[0.6] md:scale-[0.85] lg:scale-95">
            {/* The Sun Core */}
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-orange-400 to-yellow-300 shadow-[0_0_40px_rgba(245,158,11,0.7)] z-10 flex items-center justify-center border border-amber-400/35">
              <span className="text-[9px] font-mono font-black text-amber-950 tracking-widest">SOL</span>
            </div>

            {/* Orbit paths and planets */}
            {planetsData.map((p) => {
              const speed = isPlaying ? orbitSpeeds[p.id] : "0s";
              const isSelected = selectedId === p.id;
              
              return (
                <div
                  key={p.id}
                  className={`absolute rounded-full border border-dashed transition-all duration-300 flex items-center justify-center ${
                    isSelected ? "border-cyan-400/60 bg-cyan-500/5 shadow-[0_0_15px_rgba(6,182,212,0.1)]" : "border-slate-800"
                  } ${orbitSizes[p.id]}`}
                  style={{
                    animation: isPlaying ? `spin-slow ${speed} linear infinite` : "none"
                  }}
                >
                  {/* Planet body (anchored on outer rim) */}
                  <button
                    onClick={() => setSelectedId(p.id)}
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex flex-col items-center group focus:outline-none cursor-pointer"
                    aria-label={`Select ${p.name}`}
                  >
                    <div
                      className={`rounded-full bg-gradient-to-tr ${p.color} shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.85)] transition-all duration-300 ${
                        isSelected
                          ? "w-6 h-6 ring-4 ring-cyan-400/40 border border-white/20"
                          : "w-4.5 h-4.5 group-hover:scale-125 group-hover:ring-2 group-hover:ring-cyan-400/60"
                      }`}
                    />
                    
                    {/* Ring layer for Saturn in orbits */}
                    {p.id === "saturn" && (
                      <div className="absolute top-[6px] w-9 h-[6px] border border-amber-500/50 rounded-full transform -rotate-[15deg] skew-x-[50deg] pointer-events-none" />
                    )}

                    {/* Hover tooltip label */}
                    <span className="absolute -bottom-7 bg-slate-950 border border-slate-800 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                      {p.name.toUpperCase()}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Side: Orbital Spec Sheet */}
        <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden bg-slate-950/45 border border-slate-800/80 shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex-grow flex flex-col justify-between">
            {/* Corner visual glow */}
            <div
              className="absolute -right-20 -top-20 w-44 h-44 rounded-full blur-[60px] opacity-15 pointer-events-none"
              style={{ backgroundColor: selectedPlanet.accentColor }}
            />

            <div>
              {/* Header */}
              <div className="flex items-center gap-4 border-b border-slate-800/80 pb-6 mb-6">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-tr ${selectedPlanet.color} shadow-[inset_-5px_-5px_12px_rgba(0,0,0,0.9),0_0_15px_rgba(255,255,255,0.1)] flex-shrink-0 relative`}
                />
                <div>
                  <h3 className="text-2xl font-black font-display text-white uppercase">
                    {selectedPlanet.name}
                  </h3>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    TELEMETRY FEED ACTIVE
                  </span>
                </div>
              </div>

              {/* Spec items */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center bg-slate-900/30 p-4 rounded-2xl border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Compass className="h-4.5 w-4.5 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      VECTOR RAD
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">
                    {orbitalRadius[selectedPlanet.id]}
                  </span>
                </div>

                <div className="flex justify-between items-center bg-slate-900/30 p-4 rounded-2xl border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Orbit className="h-4.5 w-4.5 text-purple-400" />
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      KEPLER PERIOD
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">
                    {orbitPeriod[selectedPlanet.id]}
                  </span>
                </div>

                <div className="flex justify-between items-center bg-slate-900/30 p-4 rounded-2xl border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4.5 w-4.5 text-indigo-400" />
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      ORBITAL SPEED
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">
                    {selectedPlanet.id === "mercury" ? "47.4 km/s" :
                     selectedPlanet.id === "venus" ? "35.0 km/s" :
                     selectedPlanet.id === "earth" ? "29.8 km/s" :
                     selectedPlanet.id === "mars" ? "24.1 km/s" :
                     selectedPlanet.id === "jupiter" ? "13.1 km/s" :
                     selectedPlanet.id === "saturn" ? "9.7 km/s" :
                     selectedPlanet.id === "uranus" ? "6.8 km/s" : "5.4 km/s"}
                  </span>
                </div>
              </div>
            </div>

            {/* Trajectory note */}
            <div className="mt-8 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 text-xs text-slate-450 leading-relaxed font-semibold">
              <div className="flex items-center gap-1.5 mb-2 text-cyan-400 font-mono text-[10px] font-black uppercase tracking-wider">
                <Terminal className="h-3.5 w-3.5" />
                <span>COPERNICUS LOG NOTE</span>
              </div>
              Orbits conform to general relativistic corrections. Velocity and path configurations are relative approximations mapped for digital HUD rendering.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
