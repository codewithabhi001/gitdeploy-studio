"use client";

import { useEffect, useRef } from "react";
import { GitBranch, Zap, RefreshCw, Bell, Terminal, Command, Cpu, Globe } from "lucide-react";

function MockAppUI() {
  return (
    <div className="bg-[#050507] rounded-xl border border-white/10 overflow-hidden font-mono text-[11px] shadow-2xl">
      {/* Titlebar */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/[0.03] border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Active Workspace</div>
        <div className="w-8" />
      </div>
      
      {/* Content */}
      <div className="p-3">
        {[
          { name: "acme-web", branch: "main", status: "sync", active: true },
          { name: "api-v3", branch: "staging", status: "ready" },
          { name: "design-system", branch: "main", status: "error" },
        ].map((repo, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-2.5 rounded-lg mb-1 border transition-colors ${
              repo.active 
                ? "bg-indigo-500/10 border-indigo-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
                : "bg-white/[0.02] border-white/5"
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${
              repo.status === 'sync' ? 'bg-indigo-400 animate-pulse' : 
              repo.status === 'error' ? 'bg-red-400' : 'bg-green-400'
            }`} />
            <div className="flex-1">
              <div className="text-white/80 font-bold flex items-center gap-2">
                {repo.name}
                {repo.active && <span className="text-[9px] bg-indigo-500 text-white px-1 rounded">PUSHING</span>}
              </div>
              <div className="text-white/30 text-[10px] flex items-center gap-1">
                <GitBranch size={10} /> {repo.branch}
              </div>
            </div>
            {repo.active ? (
               <div className="w-10 h-1 rounded-full bg-white/5 overflow-hidden">
                 <div className="h-full bg-indigo-500 animate-shimmer" style={{ width: '60%' }} />
               </div>
            ) : (
               <Zap size={14} className="text-white/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const bentoItems = [
  {
    col: "col-span-1 md:col-span-2 row-span-2",
    title: "The Cockpit for Modern Devs",
    desc: "Every repository, branch, and deployment status at your fingertips. No more tabbing between terminals.",
    tag: "Interface",
    color: "indigo",
    content: <div className="mt-8 scale-105 origin-top"><MockAppUI /></div>,
  },
  {
    col: "col-span-1",
    title: "Extreme Velocity",
    desc: "Built with Rust for near-zero latency operations.",
    tag: "Engine",
    color: "emerald",
    content: (
      <div className="mt-6 flex flex-col items-center">
        <div className="text-[44px] font-black italic tracking-tighter text-emerald-400 leading-none">0.8<span className="text-2xl ml-1 not-italic">s</span></div>
        <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mt-2">Avg Deployment</div>
      </div>
    ),
  },
  {
    col: "col-span-1",
    title: "AI Analysis",
    desc: "Auto-generated summaries for your changelogs.",
    tag: "Smart",
    color: "purple",
    content: (
       <div className="mt-4 p-3 rounded-lg bg-purple-500/5 border border-purple-500/10 font-mono text-[10px] text-purple-300/60 leading-relaxed italic">
         &quot;Optimized the auth flow and reduced bundle size by 12%...&quot;
       </div>
    ),
  },
  {
    col: "col-span-1",
    title: "Native Speed",
    desc: "A true native app that lives in your OS.",
    tag: "Desktop",
    color: "amber",
    content: (
      <div className="mt-4 flex justify-around">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
           <Command size={20} className="text-amber-400" />
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
           <Cpu size={20} className="text-amber-400" />
        </div>
      </div>
    ),
  },
  {
    col: "col-span-1 md:col-span-2",
    title: "Global Edge Protection",
    desc: "Your code is automatically validated and distributed to 300+ edge locations globally before the final push.",
    tag: "Network",
    color: "blue",
    content: (
      <div className="mt-6 h-12 relative flex items-center justify-center overflow-hidden grayscale opacity-40">
         <Globe className="animate-spin-slow text-blue-400" size={80} />
      </div>
    ),
  },
];

const colorVariants: Record<string, any> = {
  indigo: { bg: "bg-indigo-500/20", border: "border-indigo-500/20", text: "text-indigo-400", glow: "rgba(99,102,241,0.1)" },
  emerald: { bg: "bg-emerald-500/20", border: "border-emerald-500/20", text: "text-emerald-400", glow: "rgba(16,185,129,0.1)" },
  purple: { bg: "bg-purple-500/20", border: "border-purple-500/20", text: "text-purple-400", glow: "rgba(168,85,247,0.1)" },
  amber: { bg: "bg-amber-500/20", border: "border-amber-500/20", text: "text-amber-400", glow: "rgba(245,158,11,0.1)" },
  blue: { bg: "bg-blue-500/20", border: "border-blue-500/20", text: "text-blue-400", glow: "rgba(30,144,255,0.1)" }
};

export default function BentoGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".reveal");
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="product" ref={ref} className="py-24 px-6 max-w-[1240px] mx-auto">
      <div className="reveal text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] mb-6">
           <Zap size={14} className="text-yellow-400" />
           <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Experience</span>
        </div>
        <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Everything You Need, <br/><span className="gradient-text">Beautifully Organized.</span>
        </h2>
        <p className="text-white/40 max-w-[500px] mx-auto text-lg leading-relaxed">
           A workspace that respects your focus and empowers your creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {bentoItems.map((item, i) => (
          <div
            key={i}
            className={`reveal group relative p-8 rounded-[32px] bg-[#0a0a0e] border border-white/[0.05] overflow-hidden transition-all duration-500 hover:border-white/[0.1] ${item.col} min-h-[220px] shadow-[0_4px_20px_rgba(0,0,0,0.5)]`}
          >
            {/* Glow */}
            <div 
              className="absolute -top-24 -left-24 w-60 h-60 blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: colorVariants[item.color].glow }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div>
                   <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ${colorVariants[item.color].bg} ${colorVariants[item.color].text} border ${colorVariants[item.color].border}`}>
                      {item.tag}
                   </span>
                   <h3 className="text-xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {item.title}
                   </h3>
                   <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
                      {item.desc}
                   </p>
                </div>
                
                <div className="mt-auto flex-1 flex flex-col justify-center">
                    {item.content}
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
