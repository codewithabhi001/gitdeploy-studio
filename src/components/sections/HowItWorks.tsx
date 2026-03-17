"use client";

import { useEffect, useRef } from "react";
import { Download, FolderOpen, Zap, CheckCircle, ArrowDown, Play, MousePointer2, Smartphone, Terminal as TerminalIcon } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <Download size={24} className="text-indigo-400" />,
    title: "Instant Setup",
    desc: "Download the native application for your OS. No complex dependencies, node_modules, or environment variables required.",
    visual: (
        <div className="relative p-6 bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden group">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Download size={20} className="text-indigo-400" />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/90">GitDeploy_v3.0.exe</span>
                  <span className="text-[10px] text-white/30 tracking-wider">12.4 MB • SIGNED BINARY</span>
               </div>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 animate-shimmer" style={{ width: '100%' }} />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl pointer-events-none" />
        </div>
    )
  },
  {
    num: "02",
    icon: <FolderOpen size={24} className="text-emerald-400" />,
    title: "Universal Sync",
    desc: "GitDeploy Studio scans your machine and catalogs every Git project. Your entire engineering portfolio, organized in one view.",
    visual: (
        <div className="p-4 grid grid-cols-2 gap-2 bg-[#050507] rounded-2xl border border-white/5 opacity-80">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                    <div className="h-2 w-16 bg-white/10 rounded-full" />
                </div>
            ))}
            <div className="col-span-2 mt-2 flex justify-center">
                 <span className="text-[10px] font-bold text-emerald-400/60 uppercase tracking-widest">34 Repositories Indexed</span>
            </div>
        </div>
    )
  },
  {
    num: "03",
    icon: <Zap size={24} className="text-amber-400" />,
    title: "One-Click Execution",
    desc: "Bypass the terminal. Select your work, write a quick commit, and watch your code fly to your remote in under a second.",
    visual: (
        <div className="relative p-6 flex flex-col items-center">
            <div className="w-full h-[52px] rounded-xl bg-indigo-600 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <Zap size={18} className="text-white fill-white" />
                <span className="text-white font-bold text-sm tracking-tight uppercase">PUSH TO PRODUCTION</span>
            </div>
            <div className="mt-4 flex items-center gap-4 text-[10px] text-white/30 font-mono">
                <span>$ git push...</span>
                <span className="text-emerald-400 font-bold">SUCCESS [0.8s]</span>
            </div>
        </div>
    )
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver( entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((item, i) => {
              setTimeout(() => item.classList.add("visible"), i * 150);
            });
          }
        });
      }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="py-24 px-6 bg-[#0a0a0e]/50 border-y border-white/[0.03]">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="reveal text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-6">
             <Play size={12} className="text-indigo-400 fill-indigo-400" />
             <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400/80">Workflow</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold mb-6 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Engineered for <br/><span className="gradient-text">Absolute Simplicity.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-[500px] mx-auto leading-relaxed">
            From first launch to live deployment in under 60 seconds. We timed it.
          </p>
        </div>

        {/* Vertical Pipeline Look */}
        <div className="relative flex flex-col md:flex-row gap-8 lg:gap-12">
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden md:block" />
           
           {steps.map((step, i) => (
             <div key={i} className="reveal relative flex-1 group">
                <div className="flex flex-col items-center md:items-start text-center md:text-left h-full">
                    {/* Step Number Badge */}
                    <div className="mb-8 w-14 h-14 rounded-2xl bg-[#0a0a0e] border border-white/10 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:border-indigo-500/30">
                        {step.icon}
                        <div className="absolute -top-3 -right-3 text-[10px] font-black italic text-white/20">{step.num}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {step.title}
                    </h3>
                    
                    <p className="text-white/40 text-[15px] leading-relaxed mb-8 pr-4">
                        {step.desc}
                    </p>

                    <div className="mt-auto w-full max-w-[320px]">
                        {step.visual}
                    </div>
                </div>

                {/* Mobile Connector */}
                {i < steps.length - 1 && (
                    <div className="flex justify-center my-8 md:hidden">
                        <ArrowDown size={24} className="text-white/10" />
                    </div>
                )}
             </div>
           ))}
        </div>

        {/* Integration Callout */}
        <div className="reveal mt-24 p-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-transparent to-purple-500/20">
            <div className="bg-[#050507] rounded-2xl p-6 flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="flex items-center gap-2 font-bold text-sm text-white/50"><Smartphone size={18} /> OS Integration</span>
                <span className="flex items-center gap-2 font-bold text-sm text-white/50"><TerminalIcon size={18} /> Bash/Zsh Compatible</span>
                <span className="flex items-center gap-2 font-bold text-sm text-white/50"><MousePointer2 size={18} /> Visual Interface</span>
                <span className="flex items-center gap-2 font-bold text-sm text-white/50"><CheckCircle size={18} /> Auto-updates</span>
            </div>
        </div>

      </div>
    </section>
  );
}
