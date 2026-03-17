"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Shield, RefreshCw, Globe, Terminal, Lock, Cpu, Sparkles, Orbit, CheckCircle2, ChevronRight, BarChart3, Cloud } from "lucide-react";

const features = [
  {
    icon: <Zap size={22} />,
    title: "One-Click Deploy",
    desc: "Bypass the terminal entirely. Select your branch, write your commit, and push directly from your system tray.",
    tag: "Core",
    color: "indigo"
  },
  {
    icon: <Sparkles size={22} />,
    title: "AI Commit Helper",
    desc: "Stop struggling with descriptions. Our local AI analyzes your diffs and writes perfect, human-like commit messages.",
    tag: "Intelligence",
    color: "purple"
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Instant Rollbacks",
    desc: "The 'Oh No' button. Revert any environment to its previous state in under 1 second with atomic switching.",
    tag: "Safety",
    color: "blue"
  },
  {
    icon: <Globe size={22} />,
    title: "Edge Distribution",
    desc: "Automatically push to Vercel, Netlify, or AWS Edge. We handle the heavy lifting while you stay in flow.",
    tag: "Network",
    color: "emerald"
  },
  {
    icon: <Lock size={22} />,
    title: "Biometric Security",
    desc: "Authorize critical production pushes using Windows Hello or TouchID. Security that doesn't slow you down.",
    tag: "Security",
    color: "rose"
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Real-time Metrics",
    desc: "See build health, deployment speed, and error rates without opening a browser or dashboard.",
    tag: "Observability",
    color: "amber"
  },
];

const colorMap: Record<string, string> = {
    indigo: "from-indigo-500/20 to-indigo-500/5 text-indigo-400 border-indigo-500/20",
    purple: "from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/20",
    blue: "from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/20",
    emerald: "from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/20",
    rose: "from-rose-500/20 to-rose-500/5 text-rose-400 border-rose-500/20",
    amber: "from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/20",
};

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".reveal");
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="reveal flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <Orbit size={14} className="text-indigo-400 animate-spin-slow" />
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">Next-Gen Capabilities</span>
          </div>
          
          <h2 
            className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] mb-6 tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Engineering for <br/><span className="gradient-text">Elite Performance.</span>
          </h2>
          
          <p className="text-lg text-white/40 max-w-[600px] leading-relaxed">
            Stop fighting your tools and start shipping. GitDeploy Studio transforms your Git workflow into a seamless, high-speed experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="reveal relative group p-8 rounded-[24px] bg-[#0a0a0e] border border-white/[0.05] hover:border-white/[0.12] transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[f.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Radial Glow follow (simulated with fixed position per card for performance) */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] group-hover:scale-110 transition-transform duration-500`}>
                    <div className={colorMap[f.color].split(' ')[2]}>{f.icon}</div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 bg-white/[0.04] px-2 py-1 rounded">
                    {f.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {f.title}
                </h3>
                
                <p className="text-[15px] text-white/40 group-hover:text-white/60 leading-relaxed mb-6 transition-colors duration-300">
                  {f.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-white/20 group-hover:text-white/60 transition-colors duration-300">
                  <span>LEARN MORE</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="reveal mt-20 p-8 rounded-[32px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                    <Cloud className="text-white" size={32} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>Universal Compatibility</h4>
                    <p className="text-white/40 text-sm">Deploy to any cloud provider or bare metal server through Git SSH.</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {['Next.js', 'React', 'Vue', 'Svelte', 'Astro', 'Express'].map(tech => (
                    <span key={tech} className="text-white/20 font-bold text-lg tracking-tight uppercase">{tech}</span>
                ))}
            </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: orbit 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
