import React, { useState } from "react";
import { Mail, Send, CheckCircle, Radio, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-7xl mx-auto tech-grid relative">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* Left Side: Communication Info */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
            <Radio className="h-6 w-6 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white uppercase">
            Establish{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Comms Link
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-slate-300 font-semibold leading-relaxed">
            Send an encrypted packet to ground control. We are ready to process telemetry inputs and establish terminal synchronization.
          </p>

          {/* Social Links Panel */}
          <div className="mt-8 flex flex-col gap-5 w-full">
            {/* Email */}
            <div className="flex items-center gap-3.5 text-slate-200 justify-center lg:justify-start text-sm font-bold font-mono">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span>missioncontrol@cosmos.agency</span>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-4 justify-center lg:justify-start mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/35 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-md"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                <span>GITHUB</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-400/35 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-md"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                <span>LINKEDIN</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Specs */}
            <div className="text-[10px] text-slate-450 font-mono leading-relaxed mt-4 border-t border-slate-900 pt-5 text-center lg:text-left">
              Operational Band: Ku-Band Transponder <br />
              Encryption: TLS_1.3_AES_256_GCM
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden border border-slate-800/80 bg-slate-950/45 shadow-2xl hud-corner hud-corner-tl">

            {status === "success" ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle className="h-16 w-16 text-emerald-500 mb-6 animate-bounce" />
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">PACKET DISPATCHED</h3>
                <p className="mt-3 text-sm md:text-base text-slate-350 max-w-sm font-semibold leading-relaxed">
                  Terminal confirms successful packet transmission. Vector parameters verified. Signal response pending orbit cycle.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-450">
                      IDENT NAME (Explorer)
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Neil Armstrong"
                      className="px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-900/60 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/60 text-sm font-semibold transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-450">
                      COMMS PORT (Email)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="explorer@agency.com"
                      className="px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-900/60 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/60 text-sm font-semibold transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-450">
                    TRANSMISSION BLOCK (Message)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Enter query specifications or coordinate telemetry..."
                    className="px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-900/60 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/60 text-sm font-semibold transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] disabled:opacity-50 cursor-pointer"
                >
                  <Send className={`h-4.5 w-4.5 inline-block mr-2 ${status === "sending" ? "animate-pulse" : ""}`} />
                  {status === "sending" ? "ENCRYPTING SIGNAL PACKET..." : "TRANSMIT PACKET"}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
