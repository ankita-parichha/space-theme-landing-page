import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PlanetsSection from "./components/PlanetsSection";
import PlanetModal from "./components/PlanetModal";
import ComparisonTool from "./components/ComparisonTool";
import OrbitAnimation from "./components/OrbitAnimation";
import SpaceTimeline from "./components/SpaceTimeline";
import AstronautGallery from "./components/AstronautGallery";
import NasaStats from "./components/NasaStats";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [activePlanet, setActivePlanet] = useState(null);
  const [comparedIds, setComparedIds] = useState(["earth", "mars"]);

  // Sync theme with DOM classList (defaults to dark for maximum visual impact)
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleToggleCompare = (id) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev;
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 2) {
        return [prev[1], id];
      }
      return [...prev, id];
    });
  };

  return (
    <>
      {/* Premium Loader Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen text-slate-200 dark:text-slate-100 transition-colors duration-500 overflow-hidden font-sans bg-[#04040a]">

          {/* Nebula Canvas Star Particle Background */}
          <ParticlesBackground theme={theme} />

          {/* Floating Navigation Header */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Main Dashboard Layout */}
          <main className="relative z-10 w-full">

            {/* Hero Astronaut & Rocket Launch section */}
            <Hero />

            {/* Premium space-tech features checklist */}
            <Features />

            {/* Planets section listing the 8 planetary bodies */}
            <PlanetsSection
              onExplore={setActivePlanet}
              onToggleCompare={handleToggleCompare}
              comparedIds={comparedIds}
            />

            {/* Orbit paths animation section */}
            <OrbitAnimation />

            {/* Planet details interactive comparison laboratory */}
            <ComparisonTool
              comparedIds={comparedIds}
              onToggleCompare={handleToggleCompare}
            />

            {/* Exploration Mission Milestones Timeline */}
            <SpaceTimeline />

            {/* Famous Astronaut Gallery */}
            <AstronautGallery />

            {/* Telemetry NASA statistics dashboard */}
            <NasaStats />

          </main>

          {/* Copyrights and Back-to-Top trigger */}
          <Footer />

          {/* Dynamic details overlay modal */}
          <PlanetModal
            planet={activePlanet}
            isOpen={activePlanet !== null}
            onClose={() => setActivePlanet(null)}
          />

        </div>
      )}
    </>
  );
}
