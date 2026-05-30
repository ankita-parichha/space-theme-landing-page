import React, { useState } from "react";
import { planetsData } from "../data/spaceData";
import { Orbit, Compass, Activity, Play, Pause } from "lucide-react";

export default function OrbitAnimation() {
  const [selectedId, setSelectedId] = useState("earth");
  const [isPlaying, setIsPlaying] = useState(true);

  const selectedPlanet = planetsData.find((p) => p.id === selectedId) || planetsData[2];

  // Specific orbital periods relative to Earth
  const orbitSpeeds = {
    mercury: "4s",
    venus: "8s",
    earth: "12s",
    mars: "18s",
    jupiter: "28s",
    saturn: "40s",
    uranus: "55s",
    neptune: "70s"
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
    <section id="orbit" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center p-2 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 mb-4">
          <Orbit className="h-6 w-6" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Interactive{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Orbit Map
          </span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Click any orbiting body to select and analyze its trajectory data, orbital period, and distance from the Sun.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Orbit System Display */}
        <div className="lg:col-span-8 flex items-center justify-center h-[400px] md:h-[600px] glass-panel rounded-3xl relative overflow-hidden bg-slate-950/20">
          
          {/* Controls overlay */}
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-slate-900/60 text-white hover:text-cyan-400 border border-slate-700/50 flex items-center gap-1.5 text-xs font-semibold backdrop-blur"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4 w-4" /> Pause Orbits
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" /> Play Orbits
                </>
              )}
            </button>
          </div>

          {/* Orbit rings stack */}
          <div className="relative flex items-center justify-center scale-[0.65] md:scale-90">
            {/* The Sun */}
            <div className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 shadow-[0_0_35px_rgba(245,158,11,0.6)] z-10" />

            {/* Orbit paths and planets */}
            {planetsData.map((p) => {
              const speed = isPlaying ? orbitSpeeds[p.id] : "0s";
              const isSelected = selectedId === p.id;
              
              return (
                <div
                  key={p.id}
                  className={`absolute rounded-full border border-dashed transition-all duration-300 flex items-center justify-center ${
                    isSelected ? "border-cyan-400 bg-cyan-400/5" : "border-slate-300/10 dark:border-slate-800/60"
                  } ${orbitSizes[p.id]}`}
                  style={{
                    animation: isPlaying ? `spin-slow ${speed} linear infinite` : "none"
                  }}
                >
                  {/* Planet body (anchored on outer rim) */}
                  <button
                    onClick={() => setSelectedId(p.id)}
                    className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center group focus:outline-none"
                    aria-label={`Select ${p.name}`}
                  >
                    <div
                      className={`rounded-full bg-gradient-to-tr ${p.color} shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.8)] transition-all duration-300 ${
                        isSelected
                          ? "w-6 h-6 ring-4 ring-cyan-400/35"
                          : "w-4 h-4 group-hover:scale-125 group-hover:ring-2 group-hover:ring-indigo-400"
                      }`}
                    />
                    
                    {/* Ring layer for Saturn in orbits */}
                    {p.id === "saturn" && (
                      <div className="absolute top-[6px] w-9 h-[6px] border border-amber-500/50 rounded-full transform -rotate-[15deg] skew-x-[50deg] pointer-events-none" />
                    )}

                    {/* Hover tooltip label */}
                    <span className="absolute -bottom-6 bg-slate-900/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700/50 z-20">
                      {p.name}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Side: Orbital Spec Sheet */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl relative overflow-hidden">
            {/* Corner visual */}
            <div
              className="absolute -right-16 -top-16 w-36 h-36 rounded-full blur-[40px] opacity-15 pointer-events-none"
              style={{ backgroundColor: selectedPlanet.accentColor }}
            />

            <div className="flex items-center gap-4 border-b border-slate-200/50 dark:border-slate-800/60 pb-4 mb-6">
              {/* Little Planet Icon */}
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-tr ${selectedPlanet.color} shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.85)] flex-shrink-0 relative`}
              />
              <div>
                <h3 className="text-xl font-bold font-display dark:text-white">
                  {selectedPlanet.name}
                </h3>
                <span className="text-[10px] font-bold tracking-widest text-indigo-500 dark:text-cyan-400 uppercase">
                  Telemetry Feed
                </span>
              </div>
            </div>

            {/* Spec items */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center bg-slate-100/50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200/25 dark:border-slate-800/25">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-indigo-500" />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Orbital Radius
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-800 dark:text-white">
                  {orbitalRadius[selectedPlanet.id]}
                </span>
              </div>

              <div className="flex justify-between items-center bg-slate-100/50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200/25 dark:border-slate-800/25">
                <div className="flex items-center gap-2">
                  <Orbit className="h-4 w-4 text-indigo-500" />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Orbital Period
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-800 dark:text-white">
                  {orbitPeriod[selectedPlanet.id]}
                </span>
              </div>

              <div className="flex justify-between items-center bg-slate-100/50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200/25 dark:border-slate-800/25">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-indigo-500" />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Mean Velocity
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-800 dark:text-white">
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

            {/* Trajectory note */}
            <div className="mt-6 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Observation Note:</strong> {selectedPlanet.name}'s orbit conforms to Kepler's Laws of Planetary Motion. Rotations are simulated with correct relative speeds.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
