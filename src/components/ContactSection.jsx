import React, { useState } from "react";
import { Mail, Send, CheckCircle, Radio } from "lucide-react";

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
      // Reset back to idle after a few seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Communication Info */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center justify-center p-2 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 mb-4">
            <Radio className="h-6 w-6 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Establish{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Telemetry Connection
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
            Have questions about solar coordinates, exoplanetary research, or joining our crew newsletters? Send an encrypted transmission to ground control.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200 justify-center lg:justify-start text-base font-bold">
              <Mail className="h-5 w-5 text-indigo-500" />
              <span>missioncontrol@cosmos.agency</span>
            </div>
            <div className="text-xs md:text-sm text-slate-450 font-mono leading-relaxed">
              Operational Latency: 0.02s <br />
              Frequency Band: Ku-Band Subcarrier
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-16 w-16 text-emerald-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold dark:text-white">Transmission Relayed!</h3>
                <p className="mt-2 text-base text-slate-500 dark:text-slate-400 max-w-sm">
                  Ground control has successfully received your packet. We will respond once your signal clears atmospheric scattering.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-550 dark:text-slate-400">
                      Explorer Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Neil Armstrong"
                      className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/30 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-base font-semibold"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-550 dark:text-slate-400">
                      Comms Channel (Email)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="explorer@agency.com"
                      className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/30 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-base font-semibold"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-550 dark:text-slate-400">
                    Transmission Packet (Message)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Enter query details, telemetry codes..."
                    className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/30 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-base font-semibold resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white text-base font-bold transition-all duration-300 shadow-[0_4px_12px_rgba(99,102,241,0.15)] disabled:opacity-50 cursor-pointer"
                >
                  <Send className={`h-5 w-5 ${status === "sending" ? "animate-ping" : ""}`} />
                  {status === "sending" ? "Encrypting Signal..." : "Transmit Packet"}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
