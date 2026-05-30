import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Calibrating hyperdrive systems...");

  useEffect(() => {
    const messages = [
      "Calibrating hyperdrive systems...",
      "Aligning star trackers...",
      "Mapping planetary gravitational wells...",
      "Connecting to NASA Deep Space Network...",
      "Syncing telemetry nodes...",
      "Engaging shields...",
      "Launch sequence complete!"
    ];

    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = messages.indexOf(prev);
        if (currentIndex < messages.length - 1) {
          return messages[currentIndex + 1];
        }
        return prev;
      });
    }, 450);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => {
            onFinished();
          }, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onFinished]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030308] text-white overflow-hidden"
    >
      {/* Background Star Fields */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Center Logo & Animated Solar Rings */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Outer Orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 border border-dashed border-indigo-500/20 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 blur-[2px]" />
        </motion.div>

        {/* Middle Orbit */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 border border-dashed border-purple-500/25 rounded-full"
        >
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-500 blur-[1px]" />
        </motion.div>

        {/* Inner Orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 border border-dashed border-cyan-500/30 rounded-full"
        >
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-400" />
        </motion.div>

        {/* Sun (Core) */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 shadow-[0_0_40px_rgba(245,158,11,0.6)] flex items-center justify-center"
        >
          <span className="text-xs font-bold font-display text-amber-950 tracking-wider">SOL</span>
        </motion.div>
      </div>

      {/* Text Info */}
      <div className="mt-12 text-center z-10 px-4 max-w-sm">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold font-display tracking-widest bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          COSMOS EXPLORER
        </motion.h2>
        <p className="mt-2 text-sm text-indigo-300/70 font-mono tracking-wide h-6 overflow-hidden">
          {loadingText}
        </p>

        {/* Custom Progress Bar */}
        <div className="mt-6 w-64 h-1.5 bg-indigo-950/60 rounded-full border border-indigo-500/10 overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Progress Percent */}
        <motion.span
          className="mt-3 block text-xs font-mono text-cyan-400/80 font-semibold"
        >
          {progress}% COMPLETED
        </motion.span>
      </div>
    </motion.div>
  );
}
